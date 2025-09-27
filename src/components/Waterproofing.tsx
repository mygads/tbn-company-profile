'use client'

// Placeholder images for waterproofing service
const waterproofingImage1 = "/api/placeholder/556/276"
const waterproofingImage2 = "/api/placeholder/556/276"

export default function Waterproofing() {
  return (
    <section className="bg-white px-[134px] py-[85px] min-h-[593px] flex flex-col gap-[23px] items-start justify-center">
      <div className="flex items-center gap-[88px] w-full max-w-[1177px] mx-auto">
        {/* Left Content - Description */}
        <div className="w-[526px] flex flex-col justify-center">
          <p className="text-[24px] font-normal font-['DM_Sans'] leading-normal text-[#706c61]">
            <span className="font-bold text-[#b96244]">Protect</span>
            <span> your bathroom and kitchen with professional </span>
            <span className="font-bold text-[#b96244]">waterproofing</span>
            <span>. Our methods ensure long-term </span>
            <span className="font-bold text-[#b96244]">durability</span>
            <span> and </span>
            <span className="font-bold text-[#b96244]">prevent</span>
            <span> future </span>
            <span className="font-bold text-[#b96244]">leaks</span>
            <span>.</span>
          </p>
        </div>

        {/* Right Content - Heading */}
        <div className="w-[502px] flex flex-col justify-center text-right">
          <h2 className="text-[64px] font-black font-['League_Spartan'] leading-normal text-[#222222]">
            Waterproofing
          </h2>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex gap-[65px] items-center w-full max-w-[1177px] mx-auto">
        {/* Waterproofing Process Image */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[-9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${waterproofingImage1}')`,
            backgroundPosition: '70.38% 34.73%',
            backgroundSize: '125.72% 252.9%'
          }}
        />

        {/* Waterproofing Tool Image */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[-9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${waterproofingImage2}')`,
            backgroundPosition: '9.87% 92.79%',
            backgroundSize: '134.17% 171.97%'
          }}
        />
      </div>
    </section>
  )
}