'use client'

import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

// Star Component matching exact Figma design
const MaterialSymbolsStarRounded = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    text: "Outstanding work on our bathroom renovation! TBN's attention to detail and professional approach exceeded our expectations. The waterproofing was done perfectly and the tiles look amazing."
  },
  {
    id: 2,
    name: "David Thompson",
    rating: 5,
    text: "We hired TBN for our kitchen splashback and couldn't be happier. They were punctual, clean, and the quality of work is exceptional. The team was respectful of our home and completed everything on schedule. Highly recommend their services for any tiling project."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    text: "Fantastic experience from start to finish. TBN fixed our leaking shower and did additional regrouting work. Professional service with honest pricing and excellent results."
  },
  {
    id: 4,
    name: "James Wilson",
    rating: 5,
    text: "TBN transformed our old bathroom into a modern masterpiece. Their expertise in stone work and tiling is evident in every detail. Great communication throughout the project."
  },
  {
    id: 5,
    name: "Rachel Chen",
    rating: 5,
    text: "Professional, reliable, and skilled craftsmen. TBN delivered exactly what they promised for our kitchen renovation. The team was courteous and left our home spotless each day."
  }
]



export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-[#6f6b60] relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 op"
        style={{
          backgroundImage: "url('/images/testimonial-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto px-10 relative">
        <div className="mb-8 md:mb-12 text-center">
          {/* Badge */}
          <div className="bg-[#d4a017] inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 mb-4 rounded-full justify-center md:justify-start">
            <FaQuoteLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="text-white font-bold text-sm md:text-base">WHAT OUR CLIENTS SAY</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-league-spartan mb-4">
            TESTIMONIALS
          </h2>

          {/* Subtitle */}
            <p className="text-lg md:text-xl text-center text-white max-w-2xl mx-auto">
            Real feedback from <span className="font-bold text-[#d4a017]">homeowners who trusted us</span> with their bathroom and kitchen projects.
            </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-[23px] max-w-none">
          {/* Column 1 - Top and Bottom */}
          <div className="space-y-[23px]">
            <TestimonialCard testimonial={testimonials[0]} />
            <TestimonialCard testimonial={testimonials[3]} />
          </div>
          
          {/* Column 2 - Middle (Tall card) */}
          <div>
            <TestimonialCard testimonial={testimonials[1]} isLarge />
          </div>
          
          {/* Column 3 - Top and Bottom */}
          <div className="space-y-[23px]">
            <TestimonialCard testimonial={testimonials[2]} />
            <TestimonialCard testimonial={testimonials[4]} />
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ 
  testimonial,
  isLarge = false
}: { 
  testimonial: any
  isLarge?: boolean
}) => (
  <div className={`bg-[#2e2e2e] p-4 rounded-[8px] ${isLarge ? 'min-h-[316px]' : 'min-h-[204px]'}`}>
    <div className="flex gap-0 mb-[13px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="w-8 h-8 flex items-center justify-center">
          <MaterialSymbolsStarRounded 
            className={`w-6 h-6 ${star <= testimonial.rating ? 'text-[#d4a017]' : 'text-gray-600'}`}
          />
        </div>
      ))}
    </div>
    <div className="space-y-[13px]">
      <p className="text-[#fcfcf7] text-[16px] font-normal font-['DM_Sans'] leading-normal">
        {testimonial.text}
      </p>
      <div className="text-[#fcfcf7] text-[16px] font-bold font-['DM_Sans']">
        {testimonial.name}
      </div>
    </div>
  </div>
)