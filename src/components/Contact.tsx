'use client'

import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 px-10 bg-[#fcfcf7] relative overflow-hidden">
      
      <div className="container mx-auto py-10 px-10 relative rounded-4xl" style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.7)), url('/images/testimonial-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222222] font-league-spartan mb-6 md:mb-8">
        READY TO TRANSFORM YOUR SPACE?
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
        Let's bring your vision to life. Whether it's a <span className="font-bold text-black">bathroom renovation</span>, a <span className="font-bold text-black">kitchen upgrade</span>, or fixing those small but important details—our team is here to help.
          </p>
          
          {/* WhatsApp Contact Button */}
          <Link 
        href="https://wa.me/61424296793?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20tiling%20project" 
        target="_blank"
        className="group inline-block"
          >
        <div className="bg-transparent border-3 border-[#25D366] rounded-full flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-3 hover:bg-[#25D366] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
          <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors duration-300" />
          <span className="text-black text-base md:text-lg lg:text-xl font-medium group-hover:text-white transition-colors duration-300">
        Contact Us
          </span>
        </div>
          </Link>
          
          {/* Phone Number */}
          <p className="text-sm md:text-base text-[#566858] mt-4 md:mt-6">
        Call or message us at <span className="font-bold text-[#15ff00]">+61424296793</span>
          </p>
        </div>
      </div>
    </section>
  )
}