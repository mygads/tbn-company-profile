import Navbar from '@/components/Navbar'
import ServicesHero from '@/components/ServicesHero'
import BathroomKitchenRenovations from '@/components/BathroomKitchenRenovations'
import Regrouting from '@/components/Regrouting'
import FixLeakingShowers from '@/components/FixLeakingShowers'
import Waterproofing from '@/components/Waterproofing'
import KitchenSplashbacks from '@/components/KitchenSplashbacks'
import Footer from '@/components/Footer'
import { Contact, Process } from '@/components'

export default function ServicesPage() {
  return (
    <main className='bg-white'>
      <Navbar />
      <ServicesHero />
      <BathroomKitchenRenovations />
      <Regrouting />
      <FixLeakingShowers />
      <Waterproofing />
      <KitchenSplashbacks />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}