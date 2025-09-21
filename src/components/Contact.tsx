'use client'

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#B96244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-[56px] bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="bg-center bg-cover bg-no-repeat rounded-[13px] opacity-[0.62] py-[56px] px-4 flex flex-col items-center gap-[35px] max-w-[1168px] mx-auto h-[387px] justify-center relative"
          style={{ 
            backgroundImage: "url('/api/placeholder/1168/387')",
            backgroundColor: '#f5f5f5' 
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 rounded-[13px]"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-[52px] font-extrabold leading-normal text-[#2e2e2e] font-['League_Spartan'] max-w-[570px] mx-auto mb-[35px]">
              READY TO TRANSFORM YOUR SPACE?
            </h2>
            
            <p className="text-[16px] font-normal leading-normal text-black font-['DM_Sans'] max-w-[515px] mx-auto mb-[35px]">
              Let's bring your vision to life. Whether it's a bathroom renovation, a kitchen upgrade, or fixing those small but important details—our team is here to help.
            </p>
            
            <button className="inline-flex items-center gap-[10px] px-[10px] py-[10px] border-[3px] border-[#d4a017] rounded-[32px] text-[#2e2e2e] font-['DM_Sans'] text-[20px] font-normal hover:bg-[#d4a017] hover:text-white transition-colors">
              Contact Us
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}