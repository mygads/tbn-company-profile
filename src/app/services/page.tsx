import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/ServicesHero';
import BathroomKitchenRenovations from '@/components/BathroomKitchenRenovations';
import Regrouting from '@/components/Regrouting';
import FixLeakingShowers from '@/components/FixLeakingShowers';
import Waterproofing from '@/components/Waterproofing';
import KitchenSplashbacks from '@/components/KitchenSplashbacks';
import Footer from '@/components/Footer';
import { Contact, Process, AnimatedSection } from '@/components';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/services`;
const pageTitle = 'Our Services - Professional Tiling & Renovation Solutions';
const pageDescription = 'Comprehensive tiling and renovation services including bathroom & kitchen renovations, waterproofing, shower repairs, regrouting, and kitchen splashbacks. Expert craftsmanship with quality materials and professional installation.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'bathroom renovation services',
    'kitchen renovation',
    'tile installation',
    'waterproofing services',
    'shower repair',
    'leaking shower fix',
    'regrouting services',
    'grout replacement',
    'kitchen splashbacks',
    'tile splashback installation',
    'bathroom tiling',
    'kitchen tiling',
    'renovation contractor',
    'tiling specialist',
    'stone work services',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: '/images/services-banner.png',
        width: 1200,
        height: 630,
        alt: 'TBN Tiling & Stone Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/services-banner.png'],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    'service:type': 'Home Improvement',
    'service:category': 'Tiling and Renovation',
  },
};

export default function ServicesPage() {
  return (
    <main className='bg-[#fcfcf7]'>
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <ServicesHero />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <BathroomKitchenRenovations />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-right" delay={150}>
        <Regrouting />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-left" delay={100}>
        <FixLeakingShowers />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-right" delay={150}>
        <Waterproofing />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-left" delay={100}>
        <KitchenSplashbacks />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <Process />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}