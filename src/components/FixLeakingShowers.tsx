'use client';

import Image from 'next/image';

export default function FixLeakingShowers() {
  return (
    <section className="bg-[#fcfcf7] py-12 md:py-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-8 md:mb-12">
          {/* Left Content - Heading */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-league-spartan leading-tight text-[#222222]">
              Fix Leaking Showers
            </h2>
          </div>

          {/* Right Content - Description */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-[#706c61] text-center lg:text-left">
              <span>Prevent water damage and costly </span>
              <span className="font-bold text-[#d4a017]">repairs</span>
              <span> with our fast and reliable </span>
              <span className="font-bold text-[#d4a017]">leaking</span>{' '}
              <span className="font-bold text-[#d4a017]">shower</span>
              <span> solutions. We diagnose the problem and </span>
              <span className="font-bold text-[#d4a017]">fix</span>
              <span> it </span>
              <span className="font-bold text-[#d4a017]">properly</span>
              <span>.</span>
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 justify-items-center md:justify-items-stretch">
          {/* Image 1 */}
          <div className="w-full max-w-md md:max-w-none">
            <Image
              src="/images/leakingshower1.png"
              alt="Leaking Shower Diagnosis"
              width={556}
              height={276}
              className="w-full h-auto object-cover rounded-lg md:rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full max-w-md md:max-w-none">
            <Image
              src="/images/leakingshower2.png"
              alt="Shower Repair Solution"
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