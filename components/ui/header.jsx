

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, Stars } from "lucide-react"; // ✅ Stars icon fixed
import { Button } from "./button";
import { checkUser } from "@/lib/checkUser";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // ✅ Use shadcn version


const Header =async () => {
   await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 ">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Career Logo"
            width={240}
            height={50}
            className="h-[70px] w-auto object-contain drop-shadow-xl"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            {/* ✅ Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <Stars className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black shadow-md rounded p-2">
                <DropdownMenuItem>
                  <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                  <PenBox className="h-4 w-4"/>
                   Cover letter
                    </Link>
                  </DropdownMenuItem>
                <DropdownMenuItem>

                <Link href={"/interview "} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4"/>
                    Interview Prep
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4"/>
                    <span>Build Resume</span>
                    </Link>
                </DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
          <SignedOut>
          <SignInButton>
            <Button  variant="outline">
              Sign In
            </Button>
          </SignInButton>
          
        </SignedOut>

        <SignedIn>
          <UserButton 
          appearance={{
            elements:{
              avatarBox:"w-10 h-10",
              userButtonPopoverCard:"shadow-xl",
              userPreviewMainIdentifier:"font-semibold",
            },
          }}
          afterSignOutUrl="/"
          />


        </SignedIn>
        
        </div>
      
      </nav>

      <div className="flex items-center gap-4 px-4 mt-2">
      
      </div>
    </header>
  );
};

export default Header;
