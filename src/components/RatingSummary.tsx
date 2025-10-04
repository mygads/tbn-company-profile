'use client';

import { GiJusticeStar } from "react-icons/gi";
import Image from "next/image";

export default function RatingSummary() {
  const ratings = [
    {
      icon: "/images/whychooseus1.png",
      value: "4.9",
      unit: "/5 Rating",
      title: "Customer Rating",
      description: "We're proud to maintain an average 4.9★ customer rating—thanks to our commitment to clear communication, honest pricing, and quality workmanship."
    },
    {
      icon: "/images/whychooseus2.png",
      value: "100+",
      unit: " Project Done",
      title: "Projects Completed",
      description: "With 100+ completed projects, we've delivered bathroom and kitchen renovations, regrouting, waterproofing, and splashbacks that stand the test of time."
    },
    {
      icon: "/images/whychooseus3.png",
      value: "Trusted",
      unit: " By Home Owners",
      title: "Trusted Service",
      description: "Homeowners across the region trust TBN Tiling & Stone for reliable, durable, and stylish results—because we treat every home like our own."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#fcfcf7]">
      <div className="container mx-auto px-10">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          {/* Badge */}
          <div className="bg-[#febe05] inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 mb-4 rounded-full justify-center md:justify-start">
            <GiJusticeStar className="w-4 h-4 md:w-6 md:h-6 text-white" />
            <span className="text-white font-bold text-sm md:text-base">OUR ACHIEVEMENTS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#222222] font-league-spartan mb-4">
            Rating Summary
          </h2>
        </div>

        {/* Rating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-0">
          {ratings.map((rating, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-4 px-4 lg:px-6 py-6 border-b sm:border-b-0 ${
                index === 0 
                  ? 'lg:border-x' 
                  : index === 1 
                  ? '' 
                  : 'lg:border-x'
              } border-[#2e2e2e]/30 hover:bg-white/50 transition-colors duration-300`}
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0">
                <Image
                  src={rating.icon}
                  alt={rating.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Value */}
              <div className="mb-2">
                <p className="font-bold leading-tight">
                  <span className="text-[#febe05] text-3xl md:text-4xl lg:text-5xl">{rating.value}</span>
                  <span className="text-[#222222] text-xl md:text-2xl">{rating.unit}</span>
                </p>
              </div>
              
              {/* Description */}
              <p className="text-[#706c61] text-sm md:text-base leading-relaxed">
                {rating.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}