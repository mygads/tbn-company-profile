'use client';

import Image from 'next/image';
import { scrollToSection } from '@/utils/scroll';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fff8ee]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/honeycomb.svg')] bg-repeat opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 py-20 text-center md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24 lg:text-left">
        <div className="max-w-xl space-y-8">
          <h1 className="text-4xl font-black uppercase leading-tight text-[#23160c] sm:text-5xl lg:text-6xl">
            WITH TBN Tiling
            <br />
            <span className="text-[#b4552f]">RENOVATE,</span>{' '}
            <span className="text-[#23160c]">REGROUT,</span>{' '}
            <span className="text-[#f2bd3a]">REFRESH</span>
            <span className="ml-3 inline-block h-3 w-3 translate-y-1 rounded-full bg-[#f2bd3a]" />
          </h1>

          <p className="text-lg leading-relaxed text-[#6f5b46] sm:text-xl">
            Expert tiling, stonework, and waterproofing services you can trust&mdash;built to last with precision and style.
          </p>

          <button
            onClick={() => scrollToSection('services')}
            className="group inline-flex items-center gap-4 rounded-full border-2 border-[#f2bd3a] bg-white px-7 py-3 font-semibold text-[#2f271c] shadow-[0_16px_32px_rgba(242,189,58,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(242,189,58,0.35)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2bd3a] text-[#2f271c] transition group-hover:bg-[#e1a92c]">
              <svg
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
              </svg>
            </span>
            Our Services
          </button>
        </div>

        <div className="relative w-full max-w-xl">
          <div className="absolute -left-10 top-8 hidden h-32 w-32 rounded-full bg-[#f2bd3a]/30 blur-2xl lg:block" />
          <div className="absolute -right-12 bottom-28 hidden h-28 w-28 rounded-full bg-[#b4552f]/25 blur-2xl lg:block" />

          <div className="relative rounded-[36px] bg-white/90 p-4 shadow-[0_24px_64px_rgba(35,22,12,0.18)]">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/images/hero-worker.jpg"
                alt="Tile specialist leveling a new floor"
                width={720}
                height={540}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-16 left-6 hidden w-40 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_18px_36px_rgba(35,22,12,0.15)] md:block">
              <Image
                src="/images/hero-floor.jpg"
                alt="Professional installing ceramic tile"
                width={320}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-14 right-4 hidden gap-4 md:flex">
            <div className="relative w-32 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_36px_rgba(35,22,12,0.14)] -rotate-6">
              <Image
                src="/images/hero-samples.jpg"
                alt="Tile samples stacked"
                width={240}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative w-32 -translate-y-4 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_36px_rgba(35,22,12,0.14)] rotate-6">
              <Image
                src="/images/hero-floor.jpg"
                alt="Tilework detail"
                width={240}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
