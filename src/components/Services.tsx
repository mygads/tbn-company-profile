"use client";

import { FaToolbox, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Bathroom and Kitchen Renovations",
      description: "Transform your space with modern, durable tiles and stone finishes.",
      size: "lg:col-span-2",
      image: "/images/services1.png"
    },
    {
      title: "Kitchen Splashbacks",
      description: "Add elegance and easy maintenance with stylish, functional splashbacks.",
      size: "lg:col-span-1",
      image: "/images/services2.png"
    },
    {
      title: "Fix Leaking Showers",
      description: "Stop leaks fast and protect your bathroom from costly damage.",
      image: "/images/services3.png"
    },
    {
      title: "Regrouting",
      description: "Refresh your tiles with clean, new grout for a brand-new look.",
      image: "/images/services4.png"
    },
    {
      title: "Waterproofing",
      description: "Keep your home safe from moisture with expert waterproofing solutions.",
      image: "/images/services4.png"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-[#7e7e7e] to-[#fcfcf7]">
      <div className="container mx-auto px-10">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <div className="bg-[#b96244]/45 inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 mb-4 rounded-full justify-center md:justify-start">
            <FaTools className="w-4 h-4 md:w-6 md:h-6 text-white" />
            <span className="text-white font-bold text-sm md:text-base">WHAT WE DO</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-league-spartan mb-4">OUR SERVICES</h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto md:px-0 px-10 md:mx-0">
            We provide <span className="font-bold text-[#2e2e2e]">expert tiling and stonework</span> to bring lasting 
            <span className="font-bold text-[#2e2e2e]"> style</span> and <span className="font-bold text-[#2e2e2e]">durability</span> to your home. 
            From <span className="font-bold text-[#2e2e2e]">kitchens to bathrooms</span>, we handle it all done with care, done the right way.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {/* Top row - 2 services (50-50 width) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-center md:justify-items-stretch">
            {services.slice(0, 2).map((service, index) => (
              <Link key={index} href="/services" className="relative group cursor-pointer block w-full max-w-md md:max-w-none">
                <div className="h-56 md:h-64 lg:h-72 bg-gradient-to-br from-[#b96244] to-[#706c61] rounded-xl md:rounded-2xl overflow-hidden relative transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/30">
                  {/* Service image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#2e2e2e] p-4 md:p-4 lg:p-5 justify-between flex items-center gap-3 md:gap-4 transition-all duration-300 group-hover:bg-[#1a1a1a]">
                    <div className="mr-3 md:mr-5 flex-1">
                      <h3 className="text-white font-bold text-lg md:text-xl lg:text-xl xl:text-2xl transition-colors duration-300 group-hover:text-[#d4a017] leading-tight">{service.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base transition-colors duration-300 group-hover:text-gray-300">{service.description}</p>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="absolute top-1/2 right-3 md:right-4 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 border-2 border-[#d4a017] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#d4a017] group-hover:scale-110 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 text-[#d4a017] transition-colors duration-300 group-hover:text-[#2e2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row - 3 services (33% width each) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-items-center md:justify-items-stretch">
            {services.slice(2, 5).map((service, index) => (
              <Link key={index + 2} href="/services" className="relative group cursor-pointer block w-full max-w-md md:max-w-none">
                <div className="h-56 md:h-64 lg:h-72 bg-gradient-to-br from-[#b96244] to-[#706c61] rounded-xl md:rounded-2xl overflow-hidden relative transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/30">
                  {/* Service image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#2e2e2e] p-4 md:p-5 justify-between flex items-center gap-3 md:gap-4 transition-all duration-300 group-hover:bg-[#1a1a1a]">
                    <div className="mr-3 md:mr-5 flex-1">
                      <h3 className="text-white font-bold text-lg md:text-xl lg:text-xl xl:text-2xl transition-colors duration-300 group-hover:text-[#d4a017] leading-tight">{service.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base transition-colors duration-300 group-hover:text-gray-300">{service.description}</p>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="absolute top-1/2 right-3 md:right-4 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 border-2 border-[#d4a017] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#d4a017] group-hover:scale-110 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 text-[#d4a017] transition-colors duration-300 group-hover:text-[#2e2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}