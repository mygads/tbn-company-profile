'use client'

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#B96244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Placeholder images for the services
const heroImage = "/api/placeholder/651/651"
const showerIcon = "/api/placeholder/85/85"
const downtownIcon = "/api/placeholder/69/69"
const maintenanceIcon = "/api/placeholder/96/96"

export default function ServicesHero() {
  return (
    <section className="bg-[#fcfcf7] py-[97px] px-[134px] flex items-center min-h-[651px]">
      <div className="flex items-center w-full max-w-[1172px] mx-auto gap-[134px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[27px] w-[526px]">
          {/* Main Heading */}
          <h1 className="text-[72px] font-black font-['League_Spartan'] leading-normal text-[#222222] w-[502px]">
            Expert{' '}
            <span className="text-[#b96244]">Tiling & Stone</span>{' '}
            Services
          </h1>
          
          {/* Subtitle */}
          <p className="text-[24px] font-normal font-['DM_Sans'] leading-normal text-[#706c61] w-full">
            From full renovations to small fixes, we deliver lasting quality you can trust.
          </p>
          
          {/* CTA Button */}
          <button className="inline-flex items-center gap-[10px] px-[10px] py-[10px] border-[3px] border-[#d4a017] rounded-[32px] text-[#2e2e2e] font-['DM_Sans'] text-[20px] font-normal w-fit hover:bg-[#d4a017] hover:text-white transition-colors">
            Contact Us
            <ArrowIcon />
          </button>
        </div>

        {/* Right Visual Section */}
        <div className="relative w-[656px] h-[651px] overflow-hidden">
          {/* Background Geometric Shapes */}
          <div 
            className="absolute w-[464px] h-[464px] bg-[#e7e7e7] shadow-[5px_4px_6.8px_0px_rgba(0,0,0,0.25)] transform rotate-[80deg]"
            style={{ 
              top: '56.59px', 
              left: '54.59px',
              transformOrigin: 'center'
            }}
          />
          
          <div 
            className="absolute w-[464px] h-[464px] bg-[#fff7e2] transform rotate-[45deg]"
            style={{ 
              top: '57px', 
              left: '0px',
              transformOrigin: 'center'
            }}
          />

          {/* Accent Rectangle */}
          <div 
            className="absolute w-[65.795px] h-[65.795px] bg-[#b96244]"
            style={{ 
              top: '250px', 
              left: '518px'
            }}
          />

          {/* Main Hero Image */}
          <div 
            className="absolute w-[651px] h-[651px] bg-center bg-cover bg-no-repeat"
            style={{ 
              top: '0px', 
              left: '5px',
              backgroundImage: `url('${heroImage}')`
            }}
          />

          {/* Service Icons */}
          {/* Shower Icon - Top Left */}
          <div 
            className="absolute w-[85px] h-[85px] bg-[#212123] rounded-[12px] flex items-center justify-center p-[8px]"
            style={{ 
              top: 'calc(50% - 151px)', 
              left: 'calc(50% - 166.5px)',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="w-[85px] h-[85px] bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${showerIcon}')` }}
            />
          </div>

          {/* Downtown Icon - Bottom Left */}
          <div 
            className="absolute w-[85px] h-[85px] bg-[#212123] rounded-[12px] flex items-center justify-center p-[8px]"
            style={{ 
              top: '439px', 
              left: '119px'
            }}
          >
            <div 
              className="w-[69px] h-[69px] bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${downtownIcon}')` }}
            />
          </div>

          {/* Maintenance Icon - Right */}
          <div 
            className="absolute w-[85px] h-[85px] bg-[#212123] rounded-[12px] flex items-center justify-center p-[8px]"
            style={{ 
              top: 'calc(50% - 83px)', 
              left: 'calc(50% + 147.5px)',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="w-[96px] h-[96px] bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${maintenanceIcon}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}