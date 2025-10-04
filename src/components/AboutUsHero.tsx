'use client';

import Image from 'next/image';

export default function AboutUsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[651px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-banner.png"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-league-spartan text-[#fcfcf7] ">
          About Us
        </h1>
        <p className="text-lg md:text-lg lg:text-xl font-normal text-[#fcfcf7] max-w-3xl leading-relaxed">
          We bring quality, precision, and care to every bathroom and kitchen project.
        </p>
      </div>
    </section>
  );
}