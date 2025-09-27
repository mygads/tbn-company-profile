'use client'

// Placeholder images for fix leaking showers
const leakingImage1 = "/api/placeholder/556/276"
const leakingImage2 = "/api/placeholder/556/276"

export default function FixLeakingShowers() {
  return (
    <section className="bg-[#fcfcf7] px-[134px] py-[85px] min-h-[587px] flex flex-col gap-[23px] items-start justify-center">
      <div className="flex items-center gap-[88px] w-full max-w-[1177px] mx-auto">
        {/* Left Content - Heading */}
        <div className="w-[502px] flex flex-col justify-center">
          <h2 className="text-[64px] font-black font-['League_Spartan'] leading-normal text-[#222222]">
            Fix Leaking Showers
          </h2>
        </div>

        {/* Right Content - Description */}
        <div className="w-[526px] flex flex-col justify-center">
          <p className="text-[24px] font-normal font-['DM_Sans'] leading-normal text-[#706c61]">
            <span>Prevent water damage and costly </span>
            <span className="font-bold text-[#d4a017]">repairs</span>
            <span> with our fast and reliable </span>
            <span className="font-bold text-[#d4a017]">leaking</span>{' '}
            <span className="font-bold text-[#d4a017]">shower</span>
            <span> solutions. We diagnose the problem and </span>
            <span className="font-bold text-[#d4a017]">fix</span>
            <span> it </span>
            <span className="font-bold text-[#d4a017]">properly</span>
            <span>.</span>
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex gap-[65px] items-center w-full max-w-[1177px] mx-auto">
        {/* Image 1 */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${leakingImage1}')`,
            backgroundPosition: '55.02% 56.14%',
            backgroundSize: '126.05% 163.19%'
          }}
        />

        {/* Image 2 */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${leakingImage2}')`,
            backgroundPosition: '0% -0.65%',
            backgroundSize: '100% 302.14%'
          }}
        />
      </div>
    </section>
  )
}