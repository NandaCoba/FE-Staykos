import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Search } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "./nav-menu";

const Navbar05Page = () => {
  return (
    <div>
      <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-6">
            <Logo className="shrink-0" />
            <NavMenu/>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden "
            >
              <Search className="!h-5 !w-5" />
            </Button>
            <Link href={"/auth/login"}><Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full cursor-pointer"
            >
              Sign In
            </Button></Link>
            <Link href={"/auth/register"}><Button className="rounded-full cursor-pointer">Sign Up</Button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar05Page;
