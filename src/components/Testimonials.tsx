'use client'

import React from 'react'

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
    name: "Jessica M.",
    rating: 4,
    text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!"
  },
  {
    id: 2,
    name: "Alexa",
    rating: 4,
    text: "We recently had TBN renovate our bathroom, and the results exceeded our expectations. The craftsmanship was outstanding, especially the waterproofing and tile work. The crew kept everything clean and respected our home throughout the project. I wouldn't hesitate to recommend TBN to anyone looking for reliable and high-quality tiling or renovation services."
  },
  {
    id: 3,
    name: "Michael B.",
    rating: 4,
    text: "Our kitchen splashback turned out perfect. Stylish, clean, and done right on time."
  },
  {
    id: 4,
    name: "Jessica M.",
    rating: 4,
    text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!"
  },
  {
    id: 5,
    name: "Jessica M.",
    rating: 4,
    text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <MaterialSymbolsStarRounded 
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-[#d4a017]' : 'text-gray-400'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#706c61] relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#d4a017] text-white px-6 py-2 rounded-full text-sm font-medium mb-6 tracking-wide">
            WHAT OUR CLIENTS SAY
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide">
            TESTIMONIALS
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            Real feedback from homeowners who trusted us with their bathroom and kitchen projects.
          </p>
        </div>

        {/* Testimonials Grid - Masonry Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-6">
            {/* First Column - 2 cards */}
            <div className="col-span-4 space-y-6">
              <TestimonialCard testimonial={testimonials[0]} />
              <TestimonialCard testimonial={testimonials[3]} />
            </div>
            
            {/* Second Column - 1 large card */}
            <div className="col-span-4">
              <TestimonialCard testimonial={testimonials[1]} isLarge />
            </div>
            
            {/* Third Column - 2 cards */}
            <div className="col-span-4 space-y-6">
              <TestimonialCard testimonial={testimonials[2]} />
              <TestimonialCard testimonial={testimonials[4]} />
            </div>
          </div>

          {/* Mobile/Tablet Grid Layout */}
          <div className="lg:hidden grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
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
  <div className={`bg-[#2e2e2e] p-6 rounded-lg shadow-xl border border-gray-700/30 ${
    isLarge ? 'h-full' : ''
  }`}>
    <StarRating rating={testimonial.rating} />
    <p className={`text-white mt-4 mb-6 leading-relaxed ${
      isLarge ? 'text-base' : 'text-sm'
    }`}>
      {testimonial.text}
    </p>
    <div className="text-[#d4a017] font-semibold text-sm">
      {testimonial.name}
    </div>
  </div>
)