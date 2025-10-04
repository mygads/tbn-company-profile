import React from 'react';
import Image from 'next/image';

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-samples.jpg"
          alt="Gallery Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Our Gallery
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
          Explore our portfolio of completed projects and see the quality craftsmanship that sets us apart
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;
