export default function Services() {
  const services = [
    {
      title: "Bathroom and Kitchen Renovations",
      description: "Transform your space with modern, durable tiles and stone finishes.",
      size: "lg:col-span-2",
      image: "http://localhost:3845/assets/bathroom-renovation.jpg"
    },
    {
      title: "Kitchen Splashbacks",
      description: "Add elegance and easy maintenance with stylish, functional splashbacks.",
      size: "lg:col-span-1",
      image: "http://localhost:3845/assets/kitchen-splashback.jpg"
    },
    {
      title: "Fix Leaking Showers",
      description: "Stop leaks fast and protect your bathroom from costly damage.",
      image: "http://localhost:3845/assets/leaking-shower.jpg"
    },
    {
      title: "Regrouting",
      description: "Refresh your tiles with clean, new grout for a brand-new look.",
      image: "http://localhost:3845/assets/regrouting.jpg"
    },
    {
      title: "Waterproofing",
      description: "Keep your home safe from moisture with expert waterproofing solutions.",
      image: "http://localhost:3845/assets/waterproofing.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-[#7e7e7e] to-[#fcfcf7] px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="bg-[#b96244]/45 inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6">
            <div className="w-6 h-6 bg-[#d4a017] rounded-full"></div>
            <span className="text-white font-bold">WHAT WE DO</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8">OUR SERVICES</h2>
          <p className="text-xl text-white max-w-2xl">
            We provide <span className="font-bold text-[#2e2e2e]">expert tiling and stonework</span> to bring lasting 
            <span className="font-bold text-[#2e2e2e]"> style</span> and <span className="font-bold text-[#2e2e2e]">durability</span> to your home. 
            From <span className="font-bold text-[#2e2e2e]">kitchens to bathrooms</span>, we handle it all—done with care, done the right way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.size || ''} relative group`}>
              <div className="h-64 bg-gradient-to-br from-[#b96244] to-[#706c61] rounded-2xl overflow-hidden relative">
                {/* Placeholder for service image */}
                <div className="absolute inset-0 bg-black/20">
                  <div className="h-full w-full bg-gradient-to-br from-[#b96244]/90 to-[#706c61]/90 flex items-center justify-center">
                    <div className="text-white/50 text-6xl">
                      {index === 0 && '🚿'}
                      {index === 1 && '🏠'}
                      {index === 2 && '🔧'}
                      {index === 3 && '✨'}
                      {index === 4 && '💧'}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-[#2e2e2e] p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  
                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#d4a017] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}