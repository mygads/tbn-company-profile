export default function WhyChooseUs() {
  const benefits = [
    {
      icon: "📋", // Communication icon placeholder
      title: "Clear Communication",
      description: "We keep you updated at every step so there are no surprises along the way."
    },
    {
      icon: "💰", // Pricing icon placeholder
      title: "Upfront Pricing", 
      description: "Fair, honest quotes with no hidden costs—what we say is what you pay."
    },
    {
      icon: "🏠", // Built to last icon placeholder
      title: "Built to Last",
      description: "We use the right methods and durable materials to ensure lasting quality."
    },
    {
      icon: "⭐", // Respect icon placeholder
      title: "Respect for Your Home",
      description: "We work clean, safe, and treat your space like it's our own."
    }
  ];

  return (
    <section className="bg-[#fcfcf7] px-4 sm:px-8 lg:px-[136px] py-6 lg:py-[26px] container mx-auto">
      <div className="flex flex-col gap-8 lg:gap-[44px] w-full">
        {/* Header Section */}
        <div className="flex flex-col gap-6 lg:gap-[27px] w-full lg:w-[482px]">
          {/* Badge */}
          <div className="bg-[#706c61] flex gap-2 lg:gap-[13px] items-center px-3 lg:px-[15px] py-1 rounded-[30px] h-8 lg:h-[38px] w-fit max-w-[236px]">
            <div className="w-6 h-6 lg:w-[29px] lg:h-[29px] bg-white rounded-full flex-shrink-0"></div>
            <div className="text-[#fcfcf7] text-sm lg:text-[20px] font-bold whitespace-nowrap">
              WHY CHOOSE US
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-[#222222] text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-tight lg:leading-[66px] font-league-spartan">
            OUR BENEFITS
          </h2>

          {/* Subtitle */}
          <p className="text-[#2e2e2e] text-lg lg:text-[24px] font-bold leading-relaxed lg:leading-[31px] w-full lg:w-[468px]">
            We keep things <span className="text-[#b96244]">clear, reliable, and built to last</span>—so you get results you can count on.
          </p>
        </div>

        {/* Description */}
        <p className="text-[#706c61] text-lg lg:text-[24px] leading-relaxed lg:leading-[31px] w-full max-w-[1168px]">
          At TBN Tiling & Stone, we believe in doing the job right the first time. From communication to craftsmanship, we focus on what matters most: your home, your trust, and the quality of every finish.
        </p>

        {/* Benefits Cards */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-[17px] w-full">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-2 lg:gap-[11px] h-auto lg:h-[227px] px-4 lg:px-[26px] py-4 lg:py-0 w-full lg:w-[278px] border-b sm:border-b-0 ${index < benefits.length - 1 ? 'sm:border-r' : ''} border-black`}
            >
              {/* Icon */}
              <div className="w-12 h-12 lg:w-[68px] lg:h-[68px] bg-[#d4a017] rounded-lg flex items-center justify-center text-2xl lg:text-3xl mb-2 lg:mb-0">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-[#222222] text-lg lg:text-[24px] font-bold leading-tight lg:leading-[31px] w-full lg:w-[231px]">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#706c61] text-sm lg:text-[16px] leading-relaxed lg:leading-[21px] w-full lg:w-[231px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}