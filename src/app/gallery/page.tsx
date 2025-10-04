import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Contact, AnimatedSection } from '@/components';
import GalleryHero from '@/components/GalleryHero';
import GalleryGrid from '@/components/GalleryGrid';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/gallery`;
const pageTitle = 'Project Gallery - View Our Tiling & Renovation Portfolio';
const pageDescription = 'Browse our extensive gallery of completed tiling and renovation projects. See examples of bathroom renovations, kitchen splashbacks, waterproofing, regrouting, and professional tile installations. Quality workmanship on display.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'tiling gallery',
    'renovation portfolio',
    'bathroom renovation photos',
    'kitchen renovation images',
    'tile installation gallery',
    'splashback designs',
    'waterproofing projects',
    'regrouting examples',
    'before and after tiles',
    'tiling projects Australia',
    'completed renovations',
    'tile work showcase',
    'renovation inspiration',
    'tiling portfolio',
    'project gallery',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: '/images/hero-samples.jpg',
        width: 1200,
        height: 630,
        alt: 'TBN Tiling & Stone Project Gallery',
        type: 'image/jpeg',
      },
      {
        url: '/images/services-banner.png',
        width: 1200,
        height: 630,
        alt: 'Completed Tiling Projects',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/hero-samples.jpg'],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    'gallery:type': 'Project Portfolio',
    'gallery:categories': 'Renovation, Flooring, Splashbacks, Regrouting, Repairs, Waterproofing',
    'content:type': 'Image Gallery',
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-[#fcfcf7]">
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <GalleryHero />
      </AnimatedSection>
      
      <AnimatedSection animation="zoom-in" delay={150}>
        <GalleryGrid />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}

