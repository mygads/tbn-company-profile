'use client';

const imgStar = "http://localhost:3845/assets/45e130885b521ba42bfbe6a04093c9367313d8df.png";
const imgAccuracy = "http://localhost:3845/assets/b77819c9b4771d95c4ae04d083134e892f6dbb45.png";
const imgTrust = "http://localhost:3845/assets/4ad85424f2e87d42f4b3f162c5d2aefb3e9b2618.png";

export default function RatingSummary() {
  return (
    <div className="w-full max-w-[868px] mx-auto px-4 py-[45px]">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 
          className="text-[72px] font-extrabold text-[#222222] leading-normal"
          style={{ fontFamily: 'League Spartan, sans-serif' }}
        >
          Rating Summary
        </h2>
      </div>

      {/* Three Stats Cards */}
      <div className="flex flex-col lg:flex-row gap-[17px] items-stretch">
        {/* 4.9/5 Rating Card */}
        <div className="flex-1 min-h-[293px] border-r border-black px-[26px] py-0">
          <div className="flex flex-col gap-[11px] h-full">
            {/* Star Icon */}
            <div 
              className="w-24 h-24 bg-center bg-contain bg-no-repeat shrink-0"
              style={{ backgroundImage: `url('${imgStar}')` }}
            />
            
            {/* Rating Text */}
            <div className="mb-2">
              <p 
                className="font-bold leading-normal"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span className="text-[#febe05] text-[36px]">4,9</span>
                <span className="text-[#222222] text-[24px]">/5 Rating</span>
              </p>
            </div>
            
            {/* Description */}
            <div className="w-[231px]">
              <p 
                className="text-[#706c61] text-[16px] leading-normal font-normal"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                We're proud to maintain an average 4.8★ customer rating—thanks to our commitment to clear communication, honest pricing, and quality workmanship.
              </p>
            </div>
          </div>
        </div>

        {/* 100+ Project Done Card */}
        <div className="flex-1 min-h-[293px] border-r border-black px-[22px] py-0">
          <div className="flex flex-col gap-[10px] h-full">
            {/* Accuracy Icon */}
            <div 
              className="w-24 h-24 bg-center bg-contain bg-no-repeat shrink-0"
              style={{ backgroundImage: `url('${imgAccuracy}')` }}
            />
            
            {/* Project Text */}
            <div className="mb-1">
              <p 
                className="font-bold leading-normal whitespace-nowrap"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span className="text-[#febe05] text-[36px]">100+</span>
                <span className="text-[#222222] text-[24px]"> Project Done</span>
              </p>
            </div>
            
            {/* Description */}
            <div className="w-[231px]">
              <p 
                className="text-[#706c61] text-[16px] leading-normal font-normal"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                With 100+ completed projects, we've delivered bathroom and kitchen renovations, regrouting, waterproofing, and splashbacks that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        {/* Trusted By Home Owners Card */}
        <div className="flex-1 min-h-[293px] px-[22px] py-0">
          <div className="flex flex-col gap-[6px] h-full">
            {/* Trust Icon */}
            <div 
              className="w-24 h-24 bg-center bg-contain bg-no-repeat shrink-0"
              style={{ backgroundImage: `url('${imgTrust}')` }}
            />
            
            {/* Trusted Text */}
            <div className="mb-4">
              <p 
                className="font-bold leading-normal"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span className="text-[#febe05] text-[36px]">Trusted</span>
                <span className="text-[#222222] text-[24px]"> By Home Owners</span>
              </p>
            </div>
            
            {/* Description */}
            <div className="w-[231px]">
              <p 
                className="text-[#706c61] text-[16px] leading-normal font-normal"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Homeowners across the region trust TBN Tiling & Stone for reliable, durable, and stylish results—because we treat every home like our own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}