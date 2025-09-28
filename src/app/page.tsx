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
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#fcfcf7] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <section 
        className='container mx-auto px-10'
      >
        <Image
          src="/images/about2.png"
          alt="Image"
          className="w-full h-auto shadow-lg rounded-lg "
          width={1000}
          height={500}
        />
      </section>
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
