import { GiJusticeStar } from "react-icons/gi";
import Image from "next/image";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: "/images/whychooseus1.png", // Communication icon
      title: "Clear Communication",
      description: "We keep you updated at every step so there are no surprises along the way."
    },
    {
      icon: "/images/whychooseus2.png", // Pricing icon
      title: "Upfront Pricing", 
      description: "Fair, honest quotes with no hidden costs—what we say is what you pay."
    },
    {
      icon: "/images/whychooseus3.png", // Built to last icon
      title: "Built to Last",
      description: "We use the right methods and durable materials to ensure lasting quality."
    },
    {
      icon: "/images/whychooseus4.png", // Respect icon
      title: "Respect for Your Home",
      description: "We work clean, safe, and treat your space like it's our own."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#fcfcf7]">
      <div className="container mx-auto px-10">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          {/* Badge */}
          <div className="bg-[#706c61] inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 mb-4 rounded-full justify-center md:justify-start">
            <GiJusticeStar className="w-4 h-4 md:w-6 md:h-6 text-white" />
            <span className="text-[#fcfcf7] font-bold text-sm md:text-base">WHY CHOOSE US</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222222] font-league-spartan mb-4">
            OUR BENEFITS
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-bold text-[#2e2e2e] max-w-md mx-auto md:mx-0">
            We keep things <span className="text-[#b96244]">clear, reliable, and built to last</span> so you get results you can count on.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <p className="text-[#706c61] text-lg md:text-xl leading-relaxed max-w-5xl mx-auto md:mx-0">
            At TBN Tiling & Stone, we believe in doing the job right the first time. From communication to craftsmanship, we focus on what matters most: your home, your trust, and the quality of every finish.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-4 px-4 lg:px-6 py-6 w-full border-b sm:border-b-0 ${index === 0 ? 'sm:border-x' : 'sm:border-r'} border-[#2e2e2e]/30`}
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-[#222222] text-xl md:text-2xl font-bold leading-tight">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#706c61] text-sm md:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}