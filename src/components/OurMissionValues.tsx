'use client'

// Placeholder images for Our Mission & Values
const valuesIcon = "/api/placeholder/29/29"
const communicationIcon = "/api/placeholder/68/68"
const pricingIcon = "/api/placeholder/68/68"
const qualityIcon = "/api/placeholder/68/68"
const respectIcon = "/api/placeholder/68/68"

export default function OurMissionValues() {
  return (
    <section className="bg-[#fcfcf7] px-[136px] py-[26px] flex flex-col gap-[44px] items-start">
      {/* Our Values Badge */}
      <div className="bg-[#706c61] rounded-[30px] h-[38px] w-[236px] flex items-center px-[15px] gap-[13px]">
        <div 
          className="bg-center bg-contain bg-no-repeat w-[29px] h-[29px]"
          style={{ backgroundImage: `url('${valuesIcon}')` }}
        />
        <p className="font-bold text-[#fcfcf7] text-[20px] font-['DM_Sans'] whitespace-pre">
          OUR VALUES
        </p>
      </div>

      {/* Main Title */}
      <div className="w-[482px]">
        <h2 className="font-extrabold text-[#222222] text-[72px] font-['League_Spartan'] leading-normal">
          Our Mission & Values
        </h2>
      </div>

      {/* Mission Description */}
      <p className="text-[#706c61] text-[24px] font-['DM_Sans'] leading-normal">
        At TBN Tiling & Stone, we believe in doing the job right the first time. From communication to craftsmanship, we focus on what matters most: your home, your trust, and the quality of every finish.
      </p>

      {/* Values Cards */}
      <div className="flex gap-[17px] items-center">
        {/* Clear Communication */}
        <div className="flex flex-col gap-[11px] h-[227px] w-[278px] px-[26px] relative">
          <div className="absolute border-l border-r border-black top-0 bottom-0 left-[-1px] right-[-1px] pointer-events-none" />
          <div 
            className="bg-center bg-contain bg-no-repeat w-[68px] h-[68px]"
            style={{ backgroundImage: `url('${communicationIcon}')` }}
          />
          <h3 className="font-bold text-[#222222] text-[24px] font-['DM_Sans'] leading-normal w-[231px]">
            Clear Communication
          </h3>
          <p className="text-[#706c61] text-[16px] font-['DM_Sans'] leading-normal w-[231px]">
            We keep you updated at every step so there are no surprises along the way.
          </p>
        </div>

        {/* Upfront Pricing */}
        <div className="flex flex-col gap-[25px] h-[227px] w-[278px] px-[22px] relative">
          <div className="absolute border-r border-black top-0 bottom-0 left-0 right-[-1px] pointer-events-none" />
          <div 
            className="bg-center bg-contain bg-no-repeat w-[68px] h-[68px]"
            style={{ backgroundImage: `url('${pricingIcon}')` }}
          />
          <h3 className="font-bold text-[#222222] text-[24px] font-['DM_Sans'] leading-normal w-[231px]">
            Upfront Pricing
          </h3>
          <p className="text-[#706c61] text-[16px] font-['DM_Sans'] leading-normal w-[231px]">
            Fair, honest quotes with no hidden costs—what we say is what you pay.
          </p>
        </div>

        {/* Built to Last */}
        <div className="flex flex-col gap-[24px] h-[227px] w-[278px] px-[22px] relative">
          <div className="absolute border-r border-black top-0 bottom-0 left-0 right-[-1px] pointer-events-none" />
          <div 
            className="bg-center bg-contain bg-no-repeat w-[68px] h-[68px]"
            style={{ backgroundImage: `url('${qualityIcon}')` }}
          />
          <h3 className="font-bold text-[#222222] text-[24px] font-['DM_Sans'] leading-normal w-[231px]">
            Built to Last
          </h3>
          <p className="text-[#706c61] text-[16px] font-['DM_Sans'] leading-normal w-[231px]">
            We use the right methods and durable materials to ensure lasting quality.
          </p>
        </div>

        {/* Respect for Your Home */}
        <div className="flex flex-col gap-[8px] h-[227px] w-[278px] px-[22px] relative">
          <div className="absolute border-r border-black top-0 bottom-0 left-0 right-[-1px] pointer-events-none" />
          <div 
            className="bg-center bg-contain bg-no-repeat w-[68px] h-[68px]"
            style={{ backgroundImage: `url('${respectIcon}')` }}
          />
          <h3 className="font-bold text-[#222222] text-[24px] font-['DM_Sans'] leading-normal w-[231px]">
            Respect for Your Home
          </h3>
          <p className="text-[#706c61] text-[16px] font-['DM_Sans'] leading-normal w-[231px]">
            We work clean, safe, and treat your space like it's our own.
          </p>
        </div>
      </div>
    </section>
  )
}