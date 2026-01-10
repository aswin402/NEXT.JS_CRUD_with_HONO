"use client";
import { Logo } from './logo';
import { ModeToggle } from './ModeToggle';
import { Button } from "@/components/ui/button";
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';


const Navbar = () => {
  return (
   <nav className="fixed top-0 inset-x-4 z-50 h-16 bg-background border max-w-(--breakpoint-xl) mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

       

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
          >
            Sign In
          </Button>
          <Button className="rounded-full">Get Started</Button>
           <div className="flex items-center gap-3">
          <ModeToggle />
           </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
