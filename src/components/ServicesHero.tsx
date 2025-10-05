'use client';

import Image from "next/image"
import { FaArrowRight } from "react-icons/fa";
import { FaA } from "react-icons/fa6";


export default function ServicesHero() {
  return (
    <section className="bg-[#fcfcf7]">
      <div className="container mx-auto px-10 relative flex flex-col items-center gap-7 py-20 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left ">
        {/* Left Content */}
        <div className="space-y-8 w-full lg:w-1/2">
          {/* Main Heading */}
          <h1 className="text-4xl font-black leading-tight text-[#23160c] sm:text-5xl lg:text-6xl font-league-spartan">
            Expert{' '}
            <span className="text-[#b96244]">Tiling & Stone</span>{' '}
            Services
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl leading-relaxed text-[#6f5b46] sm:text-2xl">
            From full renovations to small fixes, we deliver lasting quality you can trust.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={() => window.open('https://wa.me/61424296793?text=Hello%20TBN%20Tiling,%20I%20need%20your%20services', '_blank')}
            className="group inline-flex items-center gap-4 rounded-full border-3 border-[#f2bd3a] bg-white px-7 py-2 md:py-3 font-semibold text-[#2f271c] shadow-[0_16px_32px_rgba(242,189,58,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(242,189,58,0.35)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2bd3a] text-[#2f271c] transition group-hover:bg-[#e1a92c]">
              <FaArrowRight className="h-5 w-5" />
            </span>
            Contact Us
          </button>
        </div>

        {/* Right Visual Section */}
        <div className="hidden md:block w-1/2 lg:w-1/2">
          {/* Main image - large, positioned in center-right */}
          <div className="justify-center flex">
            <Image
              src="/images/services-banner.png"
              alt="Tile specialist leveling a new floor"
              width={620}
              height={476}
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}