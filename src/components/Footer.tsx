'use client'

const logoTbn = "/api/placeholder/121/63"
const mapImage = "/api/placeholder/209/210"

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white relative h-[299px]">
      <div className="relative h-full">
        {/* Logo */}
        <div 
          className="absolute top-[13px] w-[121px] h-[63px] bg-center bg-cover bg-no-repeat"
          style={{ 
            left: "calc(8.333% + 6px)",
            backgroundImage: `url('${logoTbn}')` 
          }}
        />
        
        {/* Company Description */}
        <div 
          className="absolute top-[82px] w-[320px] text-[14px] font-normal text-[#706c61] font-['DM_Sans'] leading-normal"
          style={{ left: "calc(8.333% + 10px)" }}
        >
          Expert tiling, stonework, and waterproofing services you can trust—built to last with precision and style.
        </div>

        {/* Map */}
        <div 
          className="absolute top-[27px] w-[209px] h-[210px] bg-center bg-cover bg-no-repeat rounded-lg"
          style={{ 
            left: "calc(25% + 90px)",
            backgroundImage: `url('${mapImage}')` 
          }}
        />

        {/* Contact Info */}
        <div 
          className="absolute top-[40px]"
          style={{ left: "calc(41.667% + 82px)" }}
        >
          {/* Email Us */}
          <div className="text-[16px] font-bold text-[#fcfcf7] font-['DM_Sans'] mb-[9px]">
            Email Us
          </div>
          <div className="text-[16px] font-normal text-white font-['DM_Sans'] mb-[40px]">
            tbntiling2009@gmail.com
          </div>
          
          {/* Call us */}
          <div className="text-[16px] font-bold text-[#fcfcf7] font-['DM_Sans'] mb-[11px]">
            Call us
          </div>
          <div className="text-[16px] font-normal text-white font-['DM_Sans']">
            0424 296 793
          </div>
        </div>

        {/* Services */}
        <div 
          className="absolute top-[40px] w-[203px]"
          style={{ left: "calc(58.333% + 65px)" }}
        >
          <div className="text-[18px] font-bold text-white font-['DM_Sans'] mb-[20px]">
            Services
          </div>
          <div className="space-y-[12px] text-[14px] font-normal text-white font-['DM_Sans']">
            <div>Bathroom and Kitchen Renovations</div>
            <div>Fix Leaking Showers</div>
            <div>Waterproofing</div>
            <div>Regrouting</div>
            <div>Kitchen Splashbacks</div>
          </div>
        </div>

        {/* Company */}
        <div 
          className="absolute top-[38px] w-[140px]"
          style={{ left: "calc(75% + 82px)" }}
        >
          <div className="text-[18px] font-bold text-white font-['DM_Sans'] mb-[20px]">
            Company
          </div>
          <div className="space-y-[12px] text-[14px] font-normal text-white font-['DM_Sans']">
            <div>About Us</div>
            <div>FAQs</div>
            <div>Contact Us</div>
          </div>
        </div>

        {/* Divider Line */}
        <div 
          className="absolute top-[144px] w-[298px] h-[1px] bg-[#706c61]"
          style={{ left: "calc(8.333% + 10px)" }}
        />

        {/* Copyright */}
        <div 
          className="absolute top-[174px] text-[12px] font-light text-white font-['DM_Sans']"
          style={{ left: "calc(8.333% + 10px)" }}
        >
          © 2025 All Rights Reserved
        </div>

        {/* Footer Menu */}
        <div 
          className="absolute top-[254px] flex gap-[40px] text-[12px] font-normal text-white font-['DM_Sans']"
          style={{ left: "calc(8.333% + 10px)" }}
        >
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Sales and Refunds</div>
          <div>Legal</div>
          <div>Site Map</div>
        </div>
      </div>
    </footer>
  )
}