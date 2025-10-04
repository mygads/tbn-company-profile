'use client';

import Image from 'next/image';

export default function Waterproofing() {
  return (
    <section className=" py-12 md:py-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-8 md:mb-12">
          {/* Left Content - Description */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-[#706c61] text-center lg:text-left">
              <span className="font-bold text-[#b96244]">Protect</span>
              <span> your bathroom and kitchen with professional </span>
              <span className="font-bold text-[#b96244]">waterproofing</span>
              <span>. Our methods ensure long-term </span>
              <span className="font-bold text-[#b96244]">durability</span>
              <span> and </span>
              <span className="font-bold text-[#b96244]">prevent</span>
              <span> future </span>
              <span className="font-bold text-[#b96244]">leaks</span>
              <span>.</span>
            </p>
          </div>

          {/* Right Content - Heading */}
          <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-league-spartan leading-tight text-[#222222]">
              Waterproofing
            </h2>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 justify-items-center md:justify-items-stretch">
          {/* Waterproofing Process Image */}
          <div className="w-full max-w-md md:max-w-none">
            <Image
              src="/images/waterproofing1.png"
              alt="Waterproofing Process"
              width={556}
              height={276}
              className="w-full h-auto object-cover rounded-lg md:rounded-xl"
            />
          </div>

          {/* Waterproofing Tool Image */}
          <div className="w-full max-w-md md:max-w-none">
            <Image
              src="/images/waterproofing2.png"
              alt="Waterproofing Application"
              width={556}
              height={276}
              className="w-full h-auto object-cover rounded-lg md:rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}