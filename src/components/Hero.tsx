'use client';

import Image from 'next/image';
import { scrollToSection } from '@/utils/scroll';
import { FaTools } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fcfcf7]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/honeycomb.svg')] bg-repeat" />
      </div>

      <div className="container mx-auto px-10 relative flex flex-col items-center gap-7 py-20 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left ">
        <div className="space-y-8 w-full lg:w-1/2">
          <h1 className="text-4xl font-black leading-tight text-[#23160c] sm:text-5xl lg:text-6xl font-league-spartan ">
            WITH TBN Tiling
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/images/renovate.svg"
                alt="RENOVATE"
                width={400}
                height={100}
                className="h-10 w-auto sm:h-12 lg:h-14 mt-[-14px] md:mt-[-22px] ml-2"
              />
              <Image
                src="/images/regrout.svg"
                alt="REGROUT"
                width={400}
                height={100}
                className="h-14 w-auto sm:h-18 lg:h-20 mt-[-12px] md:mt-[-16px] ml-[-4px]"
              />
              <Image
                src="/images/refresh.svg"
                alt="REFRESH"
                width={400}
                height={100}
                className="h-12 w-auto sm:h-16 lg:h-18 mt-[-20px] md:mt-[-28px] ml-[-4px]"
              />
            </div>
          </h1>

          <p className="text-xl leading-relaxed text-[#6f5b46] sm:text-2xl">
            Expert tiling, stonework, and waterproofing services you can trust &mdash; built to last with precision and style.
          </p>

          <button
            onClick={() => scrollToSection('services')}
            className="group inline-flex items-center gap-4 rounded-full border-3 border-[#f2bd3a] bg-white px-7 py-3 font-semibold text-[#2f271c] shadow-[0_16px_32px_rgba(242,189,58,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(242,189,58,0.35)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2bd3a] text-[#2f271c] transition group-hover:bg-[#e1a92c]">
              {/* <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M3 3h7v7H3z" />
                <path d="M14 3h7v7h-7z" />
                <path d="M3 14h7v7H3z" />
                <path d="M14 14h7v7h-7z" />
                <path d="M12 12l9-9" />
              </svg> */}
              <FaTools size={20} />
            </span>
            Our Services
          </button>
        </div>

        <div className="hidden md:block w-1/2 lg:w-1/2">
          {/* Main image - large, positioned in center-right */}
          <div className="justify-center flex">
            <Image
              src="/images/hero-home.png"
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
