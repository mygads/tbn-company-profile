'use client'

import { useState } from 'react'
import { FaQuestionCircle, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

interface FAQProps {
  bg?: boolean;
}

export default function FAQ({ bg = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "We specialize in bathroom and kitchen renovations, regrouting, fixing leaking showers, waterproofing, and kitchen splashbacks. From small repairs to complete renovations, we handle projects of all sizes with the same attention to detail."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free, no-obligation quotes for all our services. We'll visit your home, assess the project, and provide you with a detailed estimate that covers all aspects of the work."
    },
    {
      question: "How long will my project take?",
      answer: "Project timelines vary depending on the scope of work. A simple regrouting job might take 1-2 days, while a full bathroom renovation could take 1-2 weeks. We'll give you a clear timeline during your consultation."
    },
    {
      question: "Can you help with design ideas?",
      answer: "Absolutely! Our experienced team can provide design suggestions and help you choose the right tiles, colors, and layouts that match your style and budget. We're here to guide you through every decision."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us via phone or WhatsApp, and we'll schedule a free consultation at your convenience. We'll discuss your project, provide expert advice, and give you a detailed quote."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-12 md:py-20 overflow-hidden" id="faqs">
      {/* Background Image - Optional - Full Width */}
      {bg && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/faq-bg.png"
            alt="FAQ Background"
            fill
            className="object-cover"
            priority={false}
            sizes="100vw"
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-yellow-100/40"></div>
        </div>
      )}

      {/* Content with background color when bg is false */}
      <div className={`relative z-10`}>
        <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
          {/* Left Column - Header + Contact - 1/3 width */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center lg:items-start">
            {/* Badge */}
            <div className="bg-[#b96244] inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full justify-center lg:justify-start">
              <FaQuestionCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="text-white font-bold text-sm md:text-base">FREQUENTLY ASKED</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222222] font-league-spartan text-center lg:text-left">
              FAQS
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#706c61] text-center lg:text-left">
              Got questions? Here are some of the most common things <span className="font-bold text-[#b96244]">homeowners ask</span> before starting a project with us.
            </p>

            {/* Contact Button */}
            <Link 
              href="https://wa.me/61424296793?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20tiling%20project" 
              target="_blank"
              className="group w-full"
            >
              <div className="bg-transparent border-2 border-[#25D366] rounded-full flex items-center justify-center gap-3 px-6 py-3 hover:bg-[#25D366] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg w-full">
                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-[#25D366] group-hover:text-white transition-colors duration-300" />
                <span className="text-[#2e2e2e] text-base md:text-lg font-medium group-hover:text-white transition-colors duration-300">
                  Contact Us
                </span>
              </div>
            </Link>
            
            {/* Phone Number */}
            <p className="text-sm md:text-base text-[#706c61] text-center lg:text-left">
              Call or message us at <span className="font-bold text-[#25D366]">+61424296793</span>
            </p>
          </div>

          {/* Right Column - FAQ Items - 2/3 width */}
          <div className="flex flex-col w-full lg:w-2/3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#2e2e2e]/20">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 md:py-6 flex items-center justify-between text-left group hover:bg-[#f5f5f0] transition-colors duration-300 px-2 rounded-lg"
                >
                  <h4 className={`text-base md:text-lg lg:text-xl font-medium leading-relaxed ${
                    openIndex === index ? 'text-black' : 'text-[#2e2e2e] group-hover:text-[#b96244]'
                  } transition-colors duration-300`}>
                    {faq.question}
                  </h4>
                  <div className="flex items-center justify-center w-6 h-6 ml-4 flex-shrink-0">
                    {/* Plus/Minus Icon */}
                    <div className="relative transform transition-transform duration-300 group-hover:scale-110">
                      {/* Horizontal line */}
                      <div className={`w-4 h-0.5 rounded-full transition-colors duration-300 ${
                        openIndex === index ? 'bg-[#d4a017]' : 'bg-[#2e2e2e] group-hover:bg-[#b96244]'
                      }`} />
                      {/* Vertical line - only show when closed */}
                      {openIndex !== index && (
                        <div className={`w-0.5 h-4 rounded-full absolute top-[-7.5px] left-[7.5px] transition-colors duration-300 ${
                          'bg-[#2e2e2e] group-hover:bg-[#b96244]'
                        }`} />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Answer */}
                {openIndex === index && faq.answer && (
                  <div className="pb-4 md:pb-6 px-2 animate-fadeIn">
                    <div className="text-sm md:text-base leading-relaxed text-black">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}