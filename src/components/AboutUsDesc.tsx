'use client'

// Placeholder images for About Us Description
const logoIcon = "/api/placeholder/29/29"
const statisticsImage = "/api/placeholder/404/144"

export default function AboutUsDesc() {
  return (
    <section className="container bg-[#fcfcf7] px-[129px] py-[41px] flex flex-col gap-[18px] items-start">
      <div className="flex gap-[84px] items-center">
        {/* Left Side - Logo & Description */}
        <div className="flex flex-col gap-[25px] items-start w-[337px]">
          {/* Logo Badge */}
          <div className="bg-[#af9f74] rounded-[30px] h-[38px] w-[272px] flex items-center px-[15px] gap-[13px]">
            <div 
              className="bg-center bg-contain bg-no-repeat w-[29px] h-[29px]"
              style={{ backgroundImage: `url('${logoIcon}')` }}
            />
            <p className="font-bold text-[#fcfcf7] text-[20px] whitespace-pre font-['DM_Sans']">
              TBN TILING & STONE
            </p>
          </div>
          
          {/* Short Description */}
          <div className="text-[#706c61] font-['DM_Sans'] leading-normal">
            <p>
              <span className="text-[20px]">At </span>
              <span className="font-bold text-[24px]">TBN Tiling & Stone</span>
              <span className="text-[20px]">, we take pride in delivering quality tiling and stonework that lasts.</span>
            </p>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="flex flex-col gap-[46px] items-start w-[798px]">
          {/* Main Headline */}
          <div className="font-bold text-[#2e2e2e] text-[28px] font-['DM_Sans'] leading-normal">
            <p>
              <span>We're a team that </span>
              <span className="text-[#d4a017]">shows up</span>
              <span>, </span>
              <span className="text-[#d4a017]">works hard</span>
              <span>, and </span>
              <span className="text-[#d4a017]">stands</span>
              <span> behind everything we build.</span>
            </p>
          </div>

          {/* Description Paragraphs */}
          <div className="text-[#706c61] text-[20px] font-['DM_Sans'] leading-normal w-[763px]">
            <p className="mb-4">
              From bathrooms to kitchens, our focus is on precision, durability, and design that elevates your home.
            </p>
            <p className="mb-0">
              With years of experience, we've built a reputation for trusted service, expert craftsmanship, and results that speak for themselves. Whether it's a small repair or a full renovation, we stand behind everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex gap-[16px] items-center">
        {/* Statistics Image */}
        <div 
          className="bg-center bg-cover bg-no-repeat w-[404px] h-[144px]"
          style={{ backgroundImage: `url('${statisticsImage}')` }}
        />

        {/* Statistics Cards */}
        <div className="flex gap-[13px] items-center">
          {/* Projects Done */}
          <div className="flex flex-col items-center h-[144px] w-[240px] px-[48px] py-[13px] relative">
            <div className="absolute border-[#2e2e2e] border-l border-r border-solid top-0 bottom-0 left-[-1px] right-[-1px] pointer-events-none" />
            <p className="font-black text-[#d4a017] text-[60px] leading-normal font-['DM_Sans'] whitespace-pre">
              50+
            </p>
            <p className="text-[#706c61] text-[24px] leading-normal font-['DM_Sans'] whitespace-pre">
              Project Done
            </p>
          </div>

          {/* Review Rating */}
          <div className="flex flex-col items-center h-[144px] w-[240px] px-[44px] py-[13px] relative">
            <div className="absolute border-[#2e2e2e] border-r border-solid top-0 bottom-0 left-0 right-[-1px] pointer-events-none" />
            <p className="font-black text-[#d4a017] text-[60px] leading-normal font-['DM_Sans'] whitespace-pre">
              4.9
            </p>
            <p className="text-[#706c61] text-[24px] leading-normal font-['DM_Sans'] whitespace-pre">
              Review Rating
            </p>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center h-[144px] w-[240px] px-[10px] py-[17px] relative">
            <div className="absolute border-[#2e2e2e] border-r border-solid top-0 bottom-0 left-0 right-[-1px] pointer-events-none" />
            <p className="font-black text-[#d4a017] text-[60px] leading-normal font-['DM_Sans'] whitespace-pre">
              21+
            </p>
            <p className="text-[#706c61] text-[24px] leading-normal font-['DM_Sans'] whitespace-pre">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}