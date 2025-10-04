import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { About, Contact, FAQ, Process } from '@/components'
import AboutUsHero from '@/components/AboutUsHero'
import OurMissionValues from '@/components/OurMissionValues'

export default function ServicesPage() {
  return (
    <main className='bg-white'>
      <Navbar />
      <AboutUsHero />
      <About learn={false} />
      <OurMissionValues />
      <FAQ />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}