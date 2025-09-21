import { 
  Navbar, 
  Hero, 
  Services, 
  About, 
  WhyChooseUs, 
  Process, 
  Testimonials, 
  FAQ, 
  Contact, 
  Footer 
} from '@/components';

export default function Home() {
  return (
    <div className="bg-[#fcfcf7] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
