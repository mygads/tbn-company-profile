export default function Footer() {
  return (
    <footer className="bg-[#706c61] text-white py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-4xl font-extrabold text-[#d4a017] mb-2">TBN</h3>
              <p className="text-2xl font-bold">TILING & STONE</p>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Your trusted partner for premium tiling and stone services. With over 21 years of experience, 
              we deliver quality craftsmanship that transforms spaces and exceeds expectations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#b96244] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="text-gray-300">+61 XXX XXX XXX</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#b96244] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-300">info@tbntiling.com.au</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#b96244] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-300">Melbourne, Victoria</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#b96244] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#b96244] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#b96244] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#b96244] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#d4a017]">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-[#d4a017] transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#d4a017] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#d4a017] transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-[#d4a017] transition-colors">Our Process</a></li>
              <li><a href="#review" className="text-gray-300 hover:text-[#d4a017] transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#d4a017] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#d4a017]">SERVICES</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-[#d4a017] transition-colors">Bathroom Tiling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#d4a017] transition-colors">Kitchen Backsplash</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#d4a017] transition-colors">Floor Tiling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#d4a017] transition-colors">Wall Cladding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#d4a017] transition-colors">Natural Stone</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#d4a017] transition-colors">Waterproofing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#5a5651] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 TBN Tiling & Stone. All rights reserved. | ABN: XXXXXXXXX
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#d4a017] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-[#d4a017] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-[#d4a017] text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Licensed & Insured | Quality Assured | 7-Year Warranty on All Work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}