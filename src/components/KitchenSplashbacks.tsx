'use client'

// Placeholder images for kitchen splashbacks
const splashbackImage1 = "/api/placeholder/556/276"
const splashbackImage2 = "/api/placeholder/556/276"

export default function KitchenSplashbacks() {
  return (
    <section className="bg-[#fcfcf7] px-[134px] py-[85px] min-h-[587px] flex flex-col gap-[23px] items-start justify-center">
      <div className="flex items-center gap-[88px] w-full max-w-[1177px] mx-auto">
        {/* Left Content - Heading */}
        <div className="w-[502px] flex flex-col justify-center">
          <h2 className="text-[64px] font-black font-['League_Spartan'] leading-normal text-[#222222]">
            Kitchen Splashbacks
          </h2>
        </div>

        {/* Right Content - Description */}
        <div className="w-[526px] flex flex-col justify-center">
          <p className="text-[24px] font-normal font-['DM_Sans'] leading-normal text-[#706c61]">
            <span>Add </span>
            <span className="font-bold text-[#d4a017]">elegance</span>
            <span> and practicality to your kitchen. Our </span>
            <span className="font-bold text-[#d4a017]">splashbacks</span>
            <span> are </span>
            <span className="font-bold text-[#d4a017]">stylish</span>
            <span>, </span>
            <span className="font-bold text-[#d4a017]">easy</span>
            <span> to </span>
            <span className="font-bold text-[#d4a017]">clean</span>
            <span>, and designed to </span>
            <span className="font-bold text-[#d4a017]">last</span>
            <span>.</span>
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex gap-[65px] items-center w-full max-w-[1177px] mx-auto">
        {/* Splashback Image 1 */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${splashbackImage1}')`,
            backgroundPosition: '51.38% 92.63%',
            backgroundSize: '119.25% 154.4%'
          }}
        />

        {/* Splashback Image 2 */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${splashbackImage2}')`,
            backgroundPosition: '54.61% 65.84%',
            backgroundSize: '170.81% 243.63%'
          }}
        />
      </div>
    </section>
  )
}