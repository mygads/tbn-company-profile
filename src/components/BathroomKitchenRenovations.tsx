'use client'

// Placeholder images for bathroom and kitchen renovations
const bathroomImage = "/api/placeholder/556/276"
const kitchenImage = "/api/placeholder/556/276"

export default function BathroomKitchenRenovations() {
  return (
    <section className="bg-[#fcfcf7] px-[134px] py-[85px] min-h-[646px] flex flex-col gap-[23px] items-start justify-center">
      <div className="flex items-center gap-[88px] w-full max-w-[1177px] mx-auto">
        {/* Left Content - Heading */}
        <div className="w-[502px] flex flex-col justify-center">
          <h2 className="text-[64px] font-black font-['League_Spartan'] leading-normal text-[#222222]">
            Bathroom & Kitchen Renovations
          </h2>
        </div>

        {/* Right Content - Description */}
        <div className="w-[526px] flex flex-col justify-center">
          <p className="text-[24px] font-normal font-['DM_Sans'] leading-normal text-[#706c61]">
            <span className="font-bold text-[#d4a017]">Upgrade</span>
            <span> your bathroom with </span>
            <span className="font-bold text-[#d4a017]">stylish</span>
            <span> tiles and stone finishes. From floors to walls, we create a </span>
            <span className="font-bold text-[#d4a017]">clean</span>
            <span>, modern look that </span>
            <span className="font-bold text-[#d4a017]">lasts</span>
            <span>.</span>
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex gap-[65px] items-center w-full max-w-[1177px] mx-auto">
        {/* Bathroom Image */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${bathroomImage}')`,
            backgroundPosition: '41.73% 84.02%',
            backgroundSize: '178.11% 230.6%'
          }}
        />

        {/* Kitchen Image */}
        <div 
          className="w-[556px] h-[276px] bg-cover bg-no-repeat rounded-lg shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)]"
          style={{ 
            backgroundImage: `url('${kitchenImage}')`,
            backgroundPosition: '9.87% 63.06%',
            backgroundSize: '134.17% 171.97%'
          }}
        />
      </div>
    </section>
  )
}