"use client"

import { Mail, Mic, User, BookOpen, Menu, Lightbulb, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/AIFF_Art.png" 
            alt="AI for Founders Logo" 
            className="h-8 w-8 object-contain"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/resources" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Resources
          </Link>
          <Link href="/newsletter" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Newsletter
          </Link>
          <Link href="/podcast-grid" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Podcast
          </Link>
          <Link href="/frameworks" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Frameworks
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden md:flex"
            asChild
          >
            <Link href="/partner">Partner With Us</Link>
          </Button>

          {/* Mobile Menu */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <DrawerClose asChild>
                  <Link href="/about" className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors">
                    <User className="h-5 w-5" />
                    <span>About</span>
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/resources" className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors">
                    <BookOpen className="h-5 w-5" />
                    <span>Resources</span>
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/newsletter" className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>Newsletter</span>
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/podcast-grid" className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors">
                    <Mic className="h-5 w-5" />
                    <span>Podcast</span>
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/frameworks" className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors">
                    <Lightbulb className="h-5 w-5" />
                    <span>Frameworks</span>
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/partner" className="flex items-center gap-3 p-3 bg-primary text-primary-foreground rounded-lg transition-colors">
                    <span>Partner With Us</span>
                  </Link>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
