import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 p-4">
        <SheetTitle className="text-lg font-bold">Navigation</SheetTitle>
        <NavMenu orientation="vertical" className="space-y-2" />
      </SheetContent>
    </Sheet>
  );
};
