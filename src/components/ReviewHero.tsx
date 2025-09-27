'use client';

const imgFrame69 = "http://localhost:3845/assets/420652d62c54b97204aed40a698edd1cfe43365b.png";

export default function ReviewHero() {
  return (
    <div 
      className="relative w-full h-[651px] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#b8b8b8] from-[1.931%] to-[rgba(185,98,68,0.38)] to-[99.99%]"
      style={{ 
        backgroundImage: `url('${imgFrame69}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b8b8b8] from-[1.931%] to-[rgba(185,98,68,0.38)] to-[99.99%]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-black text-[72px] leading-normal text-[#fcfcf7] mb-6" style={{ fontFamily: 'League Spartan, sans-serif' }}>
          What Our Client Say
        </h1>
        <p className="text-[#fcfcf7] text-lg leading-relaxed">
          Real feedback from homeowners who trusted TBN Tiling & Stone with their bathrooms and kitchens.
        </p>
      </div>
    </div>
  );
}