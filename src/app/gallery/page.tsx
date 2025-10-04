import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Contact } from '@/components';
import GalleryHero from '@/components/GalleryHero';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  return (
    <main className="bg-[#fcfcf7]">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Contact />
      <Footer />
    </main>
  );
}
