'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import pillowLogo from '@/assets/pillow.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg md:text-xl font-bold text-[#02577a] flex items-center space-x-1">
            <Image src={pillowLogo} alt="PillowConnect" width={60} height={60} />
            <span className="sm:inline">Pillow-Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/platform">Platform</NavLink>
            <NavLink href="/use-cases">News</NavLink>
            <NavLink href="/resources">Culture</NavLink>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8"  onClick={() => window.location.href = '/apply'}>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Explore the PillowConnect network"
                  className="w-full pl-10 pr-4 py-2 rounded-full border-gray-200 focus:border-[#02577a] transition-colors cursor-pointer"
                />
              </div>
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-gradient-to-r from-[#0061f2] to-[#02577a] text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6">
                {/* Mobile Search */}
                <div className="relative cursor-pointer" onClick={() => window.location.href = '/apply'}>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Explore the PillowConnect network"
                    className="w-full pl-10 pr-4 py-2 rounded-full border-gray-200 cursor-pointer"
                    readOnly
                  />
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  <MobileNavLink href="/platform">Platform</MobileNavLink>
                  <MobileNavLink href="/use-cases">News</MobileNavLink>
                  <MobileNavLink href="/resources">Culture</MobileNavLink>
                </div>

                {/* Mobile Call to Action Button */}
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-[#0061f2] to-[#02577a] text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 font-medium">
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[#02577a]/80 hover:text-[#02577a] transition-colors duration-300 text-base md:text-lg font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-xl font-medium text-[#1979a5] hover:text-[#02577a] transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;


// #89d6fb