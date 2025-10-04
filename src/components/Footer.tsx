'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 bg-[#222222] text-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Left Column - Logo & Description */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Logo */}
            <div className="w-[121px] h-[63px] mb-2">
              <Image
                src="/logo.png"
                alt="TBN Tiling & Stone"
                width={121}
                height={63}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Company Description */}
            <p className="text-sm md:text-base text-[#706c61] leading-relaxed max-w-[320px]">
              Expert tiling, stonework, and waterproofing services you can trust—built to last with precision and style.
            </p>
            
            {/* Copyright */}
            <div className="mt-4 pt-4 border-t border-[#706c61] space-y-2">
              <p className="text-xs text-white font-light">
                © 2025 All Rights Reserved
              </p>
              <p className="text-xs text-[#706c61]">
                Developed by{' '}
                <Link 
                  href="https://www.genfity.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#d4a017] hover:text-[#fcfcf7] transition-colors duration-300 font-medium"
                >
                  Genfity Digital Solution
                </Link>
              </p>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-3">
            <div className="w-full max-w-[209px] h-[210px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1332666142016!2d152.9605380763101!3d-26.83571328999266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9384b3394378fb%3A0x912d04a1146aed33!2sAustralia%20Zoo!5e0!3m2!1sid!2sid!4v1759069137586!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Email */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-[#fcfcf7] mb-2">
                Email Us
              </h4>
              <Link 
                href="mailto:tbntiling2009@gmail.com"
                className="text-sm md:text-base text-white hover:text-[#d4a017] transition-colors"
              >
                tbntiling2009@gmail.com
              </Link>
            </div>
            
            {/* Phone */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-[#fcfcf7] mb-2">
                Call us
              </h4>
              <Link 
                href="tel:0424296793"
                className="text-sm md:text-base text-white hover:text-[#d4a017] transition-colors"
              >
                0424 296 793
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base md:text-lg font-bold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm md:text-base text-white">
              <li>
                <Link href="/services" className="hover:text-[#d4a017] transition-colors">
                  Bathroom and Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4a017] transition-colors">
                  Fix Leaking Showers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4a017] transition-colors">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4a017] transition-colors">
                  Regrouting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4a017] transition-colors">
                  Kitchen Splashbacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-base md:text-lg font-bold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm md:text-base text-white">
              <li>
                <Link href="/about" className="hover:text-[#d4a017] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#d4a017] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4a017] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Menu */}
        <div className="mt-8 pt-6 border-t border-[#706c61]">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 text-xs text-white">
            <Link href="/privacy" className="hover:text-[#d4a017] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#d4a017] transition-colors">
              Terms of Use
            </Link>
            <Link href="/sales-refunds" className="hover:text-[#d4a017] transition-colors">
              Sales and Refunds
            </Link>
            <Link href="/legal" className="hover:text-[#d4a017] transition-colors">
              Legal
            </Link>
            <Link href="https://www.google.com/maps?q=Australia+Zoo" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a017] transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}