'use client';

import { useState } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { scrollToSection } from '@/utils/scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  // Change navbar style based on scroll position
  const isScrolled = scrollPosition > 50;

  return (
    <nav className={`h-[90px] flex items-center justify-between px-8 lg:px-16 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#706c61]/95 backdrop-blur-md shadow-lg' 
        : 'bg-[#706c61]'
    }`}>
      <div className="flex items-center">
        {/* Logo */}
        <div className="bg-white h-16 w-32 rounded-lg flex items-center justify-center">
          <span className="font-bold text-[#706c61] text-lg">TBN</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-12 text-white font-medium">
        <button 
          onClick={() => scrollToSection('home')}
          className="hover:text-[#d4a017] transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="hover:text-[#d4a017] transition-colors"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="hover:text-[#d4a017] transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('gallery')}
          className="hover:text-[#d4a017] transition-colors"
        >
          Gallery
        </button>
        <button 
          onClick={() => scrollToSection('review')}
          className="hover:text-[#d4a017] transition-colors"
        >
          Review
        </button>
      </div>

      {/* CTA Button */}
      <button 
        onClick={() => scrollToSection('contact')}
        className="bg-[#fcfcf7] text-black px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
      >
        Call 0424 296 793
      </button>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-[#d4a017] focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 right-0 bg-[#706c61] lg:hidden">
          <div className="px-8 pt-2 pb-3 space-y-1 border-t border-[#d4a017]/30">
            <button 
              onClick={() => {
                scrollToSection('home');
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#d4a017] block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection('services');
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#d4a017] block px-3 py-2 text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#d4a017] block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection('gallery');
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#d4a017] block px-3 py-2 text-base font-medium w-full text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => {
                scrollToSection('review');
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#d4a017] block px-3 py-2 text-base font-medium w-full text-left"
            >
              Review
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-[#fcfcf7] text-black px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
            >
              Call 0424 296 793
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}