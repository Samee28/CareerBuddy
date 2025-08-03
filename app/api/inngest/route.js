import { inngest } from "@/lib/inngest/client";
import { serve } from "inngest/next";
import { generateIndustryInsights } from "@/lib/inngest/functions";

// Correct usage in App Router
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    generateIndustryInsights  
  ],
});
