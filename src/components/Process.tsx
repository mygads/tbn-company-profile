export default function Process() {
  const steps = [
    {
      title: "Contact Our Team",
      step: "Step 1",
      width: "w-[162px]"
    },
    {
      title: "Site Inspection & Quote", 
      step: "Step 2",
      width: "w-[143px]"
    },
    {
      title: "Planning & Preparation",
      step: "Step 3", 
      width: "w-[143px]"
    },
    {
      title: "Quality Work Execution",
      step: "Step 4",
      width: "w-[143px]"
    },
    {
      title: "Final Delivery & Satisfaction",
      step: "Step 5",
      width: "w-[143px]"
    }
  ];

  return (
    <section id="process" className="px-6">
      <div className="px-4 sm:px-8 container mx-auto py-8 lg:py-16">
        <div 
          className="relative rounded-[17px] shadow-[9px_11px_10.8px_0px_rgba(0,0,0,0.25)] px-6 sm:px-8 lg:px-[49px] py-6 lg:py-[43px]"
          style={{ 
            background: "linear-gradient(98.32deg, #b96244 0.55%, #fcfcf7 100%)"
          }}
        >
          {/* Steps Container */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 lg:gap-[82px] items-center justify-center w-full max-w-[1064px] mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col gap-2 lg:gap-[13px] items-center text-center text-black ${step.width} flex-shrink-0 relative`}>
                
                {/* Step Title */}
                <div className="font-bold text-sm lg:text-[16px] leading-tight lg:leading-[21px] w-full">
                  {step.title}
                </div>
                
                {/* Step Number */}
                <div className="font-normal text-xs lg:text-[12px] leading-tight lg:leading-[16px] w-full">
                  {step.step}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Line with Dots - Desktop Only */}
          <div className="hidden lg:block relative mt-8 w-full max-w-[1064px] mx-auto">
            {/* Main Progress Line */}
            <div className="relative h-[1px] bg-[#fcfcf7] w-full">
              {/* Step Dots */}
              <div className="absolute -top-[7px] left-[75px] w-[14px] h-[14px] bg-[#d4a017] border border-[#fcfcf7] rounded-[7px]"></div>
              <div className="absolute -top-[7px] left-[300px] w-[14px] h-[14px] bg-[#d4a017] border border-[#fcfcf7] rounded-[7px]"></div>
              <div className="absolute -top-[7px] left-[525px] w-[14px] h-[14px] bg-[#d4a017] border border-[#fcfcf7] rounded-[7px]"></div>
              <div className="absolute -top-[7px] left-[750px] w-[14px] h-[14px] bg-[#d4a017] border border-[#fcfcf7] rounded-[7px]"></div>
              <div className="absolute -top-[7px] right-[75px] w-[14px] h-[14px] bg-[#d4a017] border border-[#fcfcf7] rounded-[7px]"></div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}