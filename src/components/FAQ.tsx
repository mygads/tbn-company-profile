'use client'

import { useState } from 'react'
import Image from 'next/image'

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#B96244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "We specialize in bathroom and kitchen renovations, regrouting, fixing leaking showers, waterproofing, and kitchen splashbacks."
    },
    {
      question: "Do you offer free estimates?",
      answer: ""
    },
    {
      question: "How long will my project take?",
      answer: ""
    },
    {
      question: "Can you help with design ideas?",
      answer: ""
    },
    {
      question: "How do I get started?",
      answer: ""
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-[94px] bg-white" id="faqs">
      <div className="container mx-auto px-[135px]">
        <div className="flex items-start justify-between">
          {/* Left Column - Title and Description */}
          <div className="w-[337px] flex flex-col gap-[25px]">
            <h2 className="text-[72px] font-extrabold leading-none text-[#2e2e2e] font-['League_Spartan']">
              FAQS
            </h2>
            <p className="text-[20px] font-normal leading-normal text-[#706c61] font-['DM_Sans']">
              Got questions? Here are some of the most common things homeowners ask before starting a project with us.
            </p>
            <button className="inline-flex items-center gap-[10px] px-[10px] py-[10px] border-[3px] border-[#b96244] rounded-[32px] text-[#2e2e2e] font-['DM_Sans'] text-[20px] font-normal w-fit hover:bg-[#b96244] hover:text-white transition-colors">
              Contact Us
              <ArrowIcon />
            </button>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="w-[658px] flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black/8">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-[20px] flex items-center justify-between text-left group"
                >
                  <h4 className={`text-[20.2px] font-medium font-['DM_Sans'] leading-[28px] ${
                    index === 0 ? 'text-[#d4a017]' : 'text-[#212123]'
                  }`}>
                    {faq.question}
                  </h4>
                  <div className="flex items-center justify-center w-[24px] h-[24px]">
                    {/* Plus/Minus Icon */}
                    <div className="relative">
                      {/* Horizontal line */}
                      <div className="w-[14px] h-[2px] bg-black rounded-[1px]" />
                      {/* Vertical line - only show when closed */}
                      {openIndex !== index && (
                        <div className="w-[2px] h-[14px] bg-black rounded-[1px] absolute top-[-6px] left-[6px]" />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Answer - Only show for first item initially */}
                {openIndex === index && faq.answer && (
                  <div className="pb-[20px]">
                    <div className="text-[17.1px] font-light leading-[24px] text-[#212123] font-['DM_Sans']">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}