export default function About() {
  return (
    <section id="about" className="bg-[#fcfcf7] px-4 sm:px-8 lg:px-[129px] py-8 lg:py-[19px] container mx-auto">
      <div className="flex flex-col gap-4 lg:gap-[18px] w-full">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[84px] items-start lg:items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:gap-[25px] w-full lg:w-[337px]">
            {/* Badge */}
            <div className="bg-[#af9f74] flex gap-2 lg:gap-[13px] items-center px-3 lg:px-[15px] py-1 rounded-[30px] h-8 lg:h-[38px] w-fit max-w-[272px]">
              <div className="w-6 h-6 lg:w-[29px] lg:h-[29px] bg-white rounded-full flex-shrink-0"></div>
              <div className="text-[#fcfcf7] text-sm lg:text-[20px] font-bold whitespace-nowrap">
                TBN TILING & STONE
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[#b96244] text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-tight lg:leading-[66px]">
              ABOUT US
            </h2>

            {/* Description */}
            <p className="text-[#706c61] text-lg lg:text-[20px] leading-relaxed lg:leading-[26px]">
              At TBN Tiling & Stone, we take pride in delivering quality tiling and stonework that lasts.
            </p>

            {/* Learn More Button */}
            <div className="relative w-fit">
              <div className="bg-transparent border-2 lg:border-[3px] border-[#d4a017] rounded-[32px] flex items-center justify-center px-4 lg:px-[10px] py-2 lg:py-[10px] hover:bg-[#d4a017] transition-colors group">
                <span className="text-[#2e2e2e] text-lg lg:text-[20px] font-normal group-hover:text-white">
                  Learn More
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-[46px] w-full lg:w-[798px]">
            {/* Main Text */}
            <div className="text-[#2e2e2e] text-xl sm:text-2xl lg:text-[28px] font-bold leading-relaxed lg:leading-[36px]">
              We're a team that <span className="text-[#d4a017]">shows up</span>, <span className="text-[#d4a017]">works hard</span>, and <span className="text-[#d4a017]">stands</span> behind everything we build.
            </div>

            {/* Description Paragraph */}
            <div className="text-[#706c61] text-lg lg:text-[20px] leading-normal w-full lg:w-[763px]">
              <p className="mb-4">From bathrooms to kitchens, our focus is on precision, durability, and design that elevates your home.</p>
              <p>With years of experience, we've built a reputation for trusted service, expert craftsmanship, and results that speak for themselves. Whether it's a small repair or a full renovation, we stand behind everything we do.</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[16px] items-center">
          {/* Image Placeholder */}
          <div className="w-full lg:w-[404px] h-32 lg:h-[144px] bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-medium">Stone & Tile Work</span>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-[13px] items-center w-full lg:w-auto">
            {/* Project Done */}
            <div className="flex flex-col items-center px-4 lg:px-[48px] py-3 lg:py-[13px] w-full sm:w-48 lg:w-[240px] h-24 lg:h-[144px] border-b sm:border-b-0 sm:border-r border-[#2e2e2e]">
              <div className="text-[#d4a017] text-3xl lg:text-[60px] font-black leading-tight lg:leading-[78px]">
                50+
              </div>
              <div className="text-[#706c61] text-sm lg:text-[24px] font-normal leading-tight lg:leading-[31px] text-center">
                Project Done
              </div>
            </div>

            {/* Review Rating */}
            <div className="flex flex-col items-center px-4 lg:px-[44px] py-3 lg:py-[13px] w-full sm:w-48 lg:w-[240px] h-24 lg:h-[144px] border-b sm:border-b-0 sm:border-r border-[#2e2e2e]">
              <div className="text-[#d4a017] text-3xl lg:text-[60px] font-black leading-tight lg:leading-[78px]">
                4.9
              </div>
              <div className="text-[#706c61] text-sm lg:text-[24px] font-normal leading-tight lg:leading-[31px] text-center">
                Review Rating
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col items-center px-4 lg:px-[10px] py-3 lg:py-[17px] w-full sm:w-48 lg:w-[240px] h-24 lg:h-[144px]">
              <div className="text-[#d4a017] text-3xl lg:text-[60px] font-black leading-tight lg:leading-[78px]">
                21+
              </div>
              <div className="text-[#706c61] text-sm lg:text-[24px] font-normal leading-tight lg:leading-[31px] text-center">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}