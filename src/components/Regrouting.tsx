'use client'

// Placeholder images for regrouting service
const regroutingImage1 = "/api/placeholder/556/276"
const regroutingImage2 = "/api/placeholder/556/276"

export default function Regrouting() {
  return (
    <section className="bg-white px-[134px] py-[85px] min-h-[562px] flex flex-col gap-[23px] items-start justify-center">
      <div className="flex items-center gap-[88px] w-full max-w-[1177px] mx-auto">
        {/* Left Content - Description */}
        <div className="w-[526px] flex flex-col justify-center">
          <p className="text-[24px] font-normal font-['DM_Sans'] leading-normal text-[#706c61]">
            <span>Breathe new life into old tiles. Our regrouting service </span>
            <span className="font-bold text-[#b96244]">removes</span>
            <span> </span>
            <span className="font-bold text-[#b96244]">stains</span>
            <span>, </span>
            <span className="font-bold text-[#b96244]">mold</span>
            <span>, and </span>
            <span className="font-bold text-[#b96244]">cracks</span>
            <span>, leaving your tiles looking </span>
            <span className="font-bold text-[#b96244]">fresh</span>
            <span> and brand </span>
            <span className="font-bold text-[#b96244]">new</span>
            <span>.</span>
          </p>
        </div>

        {/* Right Content - Heading */}
        <div className="w-[502px] flex flex-col justify-center text-right">
          <h2 className="text-[64px] font-black font-['League_Spartan'] leading-normal text-[#222222]">
            Regrouting
          </h2>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex gap-[65px] items-center w-full max-w-[1177px] mx-auto">
        {/* Regrouting Process Image */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[-9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${regroutingImage1}')`,
            backgroundPosition: '16% 37.56%',
            backgroundSize: '102.23% 308.87%'
          }}
        />

        {/* Regrouting Tool Image */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[-9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${regroutingImage2}')`,
            backgroundPosition: '9.87% 76.67%',
            backgroundSize: '134.17% 171.97%'
          }}
        />
      </div>
    </section>
  )
}