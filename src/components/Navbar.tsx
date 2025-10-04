'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { scrollToSection } from '@/utils/scroll';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  
  // Change navbar style based on scroll position
  const isScrolled = scrollPosition > 50;

  // Helper function to check if current path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Handle navigation - if on home page, scroll to section; otherwise navigate to home
  const handleNavigation = (section: string) => {
    if (pathname === '/') {
      scrollToSection(section);
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out bg-[#706c61] shadow-md`}>
      {/* Container for proper spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="group">
              <div className="transform transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="TBN Logo" 
                  width={128} 
                  height={64}
                  className="transition-all duration-300 group-hover:brightness-110"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/') 
                    ? 'text-[#d4a017]' 
                    : 'text-white hover:text-[#d4a017]'
                } group`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] transform transition-all duration-300 ${
                  isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
              <Link 
                href="/services"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/services') 
                    ? 'text-[#d4a017]' 
                    : 'text-white hover:text-[#d4a017]'
                } group`}
              >
                Services
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] transform transition-all duration-300 ${
                  isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                href="/about"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/about') 
                    ? 'text-[#d4a017]' 
                    : 'text-white hover:text-[#d4a017]'
                } group`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] transform transition-all duration-300 ${
                  isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                href="/gallery"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/gallery') 
                    ? 'text-[#d4a017]' 
                    : 'text-white hover:text-[#d4a017]'
                } group`}
              >
                Gallery
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] transform transition-all duration-300 ${
                  isActive('/gallery') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                href="/review"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/review') 
                    ? 'text-[#d4a017]' 
                    : 'text-white hover:text-[#d4a017]'
                } group`}
              >
                Review
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] transform transition-all duration-300 ${
                  isActive('/review') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </div>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="https://wa.me/61424296793"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#fcfcf7] text-[#706c61] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95 flex items-center space-x-2"
            >
              <FaWhatsapp className="w-5 h-5 text-green-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="font-semibold transition-colors duration-300 group-hover:text-[#706c61]">+61 424 296 793</span>
            </Link>
          </div>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <div className="lg:hidden flex items-center ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-2 text-white hover:text-[#d4a017] focus:outline-none transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-[#706c61]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => {
                  handleNavigation('home');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#d4a017]/10 hover:translate-x-2 ${
                  isActive('/') ? 'text-[#d4a017] bg-[#d4a017]/10' : 'text-white hover:text-[#d4a017]'
                }`}
              >
                Home
              </button>
              <Link 
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#d4a017]/10 hover:translate-x-2 ${
                  isActive('/services') ? 'text-[#d4a017] bg-[#d4a017]/10' : 'text-white hover:text-[#d4a017]'
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#d4a017]/10 hover:translate-x-2 ${
                  isActive('/about') ? 'text-[#d4a017] bg-[#d4a017]/10' : 'text-white hover:text-[#d4a017]'
                }`}
              >
                About
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#d4a017]/10 hover:translate-x-2 ${
                  isActive('/gallery') ? 'text-[#d4a017] bg-[#d4a017]/10' : 'text-white hover:text-[#d4a017]'
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/review"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#d4a017]/10 hover:translate-x-2 ${
                  isActive('/review') ? 'text-[#d4a017] bg-[#d4a017]/10' : 'text-white hover:text-[#d4a017]'
                }`}
              >
                Review
              </Link>
              
              {/* Mobile/Tablet CTA Button */}
              <div className="pt-4">
                <Link
                  href="https://wa.me/61424296793"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="group w-full bg-[#fcfcf7] text-[#706c61] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="font-semibold">+61 424 296 793</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}