"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


import { generateAIInsights } from './dashboard';

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Find user by Clerk ID
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  
  if (!user) throw new Error("User not found");

  try {
    // Run transaction to check/create industry and update user
    const result = await db.$transaction(async (tx) => {
      // Check if industryInsight exists
      let industryInsight = await tx.industryInsights.findUnique({
        where: {
          industry: data.industry,
        },
      });

      // Create default industryInsight if not found
      if (!industryInsight) {
        const insights = await generateAIInsights(data.industry);
        const safeInsights = {
          ...insights,
         // growthRate: insights.growthRate.toString(),

          demandLevel: insights.demandLevel.toUpperCase(),
          marketOutlook: insights.marketOutlook.toUpperCase(), 
        };
           industryInsight=await db.industryInsights.create({
            data:{
              industry: data.industry,
              ...safeInsights,

              nextUpdate:new Date(Date.now() + 7 * 24 * 60 * 60 *1000),

            },
           
        });
      }

      // Update user info
      const updatedUser = await tx.user.update({
        where: {
          id: user.id,
        },
        data: {
          industry: data.industry,
          experience: data.experience,

          bio: data.bio,
          skills: data.skills,
        },
      });

      return { updatedUser, industryInsight };
    },
    {
        timeout:10000,//defalut 5000
    }
);

return { success: true, ...result };

  }catch (error) {
    console.error("Error updating user and industry:", error); // full error stack
    throw new Error("Failed to update profile: " + error.message);
  }
  
}
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    if (!user) throw new Error("User not found");

    return {
      isOnboarded: !!user.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error.message);
    throw new Error("Failed to check onboarding");
  }
}
