'use client'
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const Navbar05Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="md:flex hidden ">
      <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          {/* Left Section */}
          <div className="flex items-center gap-2 md:gap-6">
            <Logo className="shrink-0" />
            <div className="hidden md:block">
              <NavMenu />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Search (mobile trigger) */}
            <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden"
                >
                  <Search className="!h-5 !w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="p-6 h-auto bg-background border-b dark:border-slate-700/70"
              >
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Cari kosan..."
                    className="flex-1 rounded-full"
                  />
                  <Button className="rounded-full">Cari</Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Auth Buttons (desktop only) */}
            <Link href={"/auth/login"}>
              <Button
                variant="outline"
                className="hidden sm:inline-flex rounded-full cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
            <Link href={"/auth/register"}>
              <Button className="hidden sm:inline-flex rounded-full cursor-pointer">
                Sign Up
              </Button>
            </Link>

            {/* Hamburger Menu */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar05Page;
