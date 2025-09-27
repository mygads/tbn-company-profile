'use client'

// Placeholder image for About Us Hero
const aboutUsHeroImage = "/api/placeholder/1440/651"

export default function AboutUsHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[651px] w-full bg-gradient-to-b from-[rgba(252,252,247,0.83)] to-[rgba(185,98,68,0.38)]"
      style={{
        backgroundImage: `url('${aboutUsHeroImage}')`,
        backgroundPosition: '0% 0%, 81.81% -2.01%',
        backgroundSize: 'auto, 101.19% 115.63%'
      }}
    >
      <div className="flex items-center justify-center p-[10px]">
        <h1 className="text-[72px] font-black font-['League_Spartan'] text-[#fcfcf7] whitespace-pre">
          About Us
        </h1>
      </div>
    </section>
  )
}