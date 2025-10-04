import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { About, Contact, FAQ, Process } from '@/components'
import AboutUsHero from '@/components/AboutUsHero'
import OurMissionValues from '@/components/OurMissionValues'

export default function ServicesPage() {
  return (
    <main className='bg-[#fcfcf7]'>
      <Navbar />
      <AboutUsHero />
      <About learn={false} />
      <OurMissionValues />
      <FAQ bg={true} />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}