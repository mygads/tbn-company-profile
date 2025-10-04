import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface AboutProps {
  learn?: boolean;
}

export default function About({ learn = true }: AboutProps) {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#fcfcf7]">
      <div className="container mx-auto px-10">
        <div className="flex flex-col gap-4 lg:gap-4 w-full">
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            {/* Left Column - 1/3 width */}
            <div className="flex flex-col gap-4 lg:gap-4 w-full lg:w-1/3 items-center lg:items-start">
              {/* Badge */}
              <div className="bg-[#af9f74] flex gap-2 lg:gap-3 items-center px-3 lg:px-4 py-2 rounded-full w-fit">
                <FaArrowAltCircleRight className="w-5 h-5 lg:w-6 lg:h-6 text-white flex-shrink-0" />
                <div className="text-[#fcfcf7] text-sm lg:text-base font-bold whitespace-nowrap text-center">
                  TBN TILING & STONE
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-[#b96244] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-league-spartan">
                ABOUT US
              </h2>

              {/* Description */}
              <p className="text-[#706c61] text-lg md:text-xl leading-relaxed max-w-2xl">
                At TBN Tiling & Stone, we take pride in delivering quality tiling and stonework that lasts.
              </p>

              {/* Learn More Button */}
              {learn && (
                <Link href="/about" className="relative w-fit">
                  <div className="bg-transparent border-2 border-[#d4a017] rounded-full flex items-center justify-center px-4 py-2 hover:bg-[#d4a017] transition-colors group">
                    <span className="text-[#2e2e2e] text-base md:text-lg font-normal group-hover:text-white">
                      Learn More
                    </span>
                  </div>
                </Link>
              )}

              {/* About Image */}
              <div className="w-full h-32 lg:h-36 rounded-lg overflow-hidden mt-4">
                <Image
                  src="/images/about.png"
                  alt="Stone & Tile Work"
                  className="w-full h-full object-cover"
                  width={404}
                  height={144}
                />
              </div>
            </div>

            {/* Right Column - 2/3 width */}
            <div className="flex flex-col gap-6 w-full lg:w-2/3 justify-center min-h-[400px] lg:min-h-[500px] text-center lg:text-left">
              {/* Main Text */}
              <div className="text-[#2e2e2e] text-xl md:text-2xl font-bold leading-relaxed">
                We're a team that <span className="text-[#d4a017]">shows up</span>, <span className="text-[#d4a017]">works hard</span>, and <span className="text-[#d4a017]">stands</span> behind everything we build.
              </div>

              {/* Description Paragraph */}
              <div className="text-[#706c61] text-lg md:text-xl leading-normal w-full">
                <p className="mb-4">From bathrooms to kitchens, our focus is on precision, durability, and design that elevates your home.</p>
                <p>With years of experience, we've built a reputation for trusted service, expert craftsmanship, and results that speak for themselves. Whether it's a small repair or a full renovation, we stand behind everything we do.</p>
              </div>

              {/* Stats Cards */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-between w-full">
                {/* Project Done */}
                <div className="flex flex-col items-center px-6 lg:px-8 py-4 w-full sm:flex-1 h-28 lg:h-32 bg-white/50 backdrop-blur-sm rounded-xl border border-[#d4a017]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-[#d4a017] text-4xl lg:text-5xl font-black leading-tight mb-2">
                    50+
                  </div>
                  <div className="text-[#706c61] text-sm lg:text-base font-medium text-center">
                    Project Done
                  </div>
                </div>

                {/* Review Rating */}
                <div className="flex flex-col items-center px-6 lg:px-8 py-4 w-full sm:flex-1 h-28 lg:h-32 bg-white/50 backdrop-blur-sm rounded-xl border border-[#d4a017]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-[#d4a017] text-4xl lg:text-5xl font-black leading-tight mb-2">
                    4.9
                  </div>
                  <div className="text-[#706c61] text-sm lg:text-base font-medium text-center">
                    Review Rating
                  </div>
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col items-center px-6 lg:px-8 py-4 w-full sm:flex-1 h-28 lg:h-32 bg-white/50 backdrop-blur-sm rounded-xl border border-[#d4a017]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-[#d4a017] text-4xl lg:text-5xl font-black leading-tight mb-2">
                    21+
                  </div>
                  <div className="text-[#706c61] text-sm lg:text-base font-medium text-center">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}