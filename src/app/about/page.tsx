import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { About, Contact, FAQ, Process, AnimatedSection } from '@/components';
import AboutUsHero from '@/components/AboutUsHero';
import OurMissionValues from '@/components/OurMissionValues';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/about`;
const pageTitle = 'About Us - Expert Tiling Professionals with 15+ Years Experience';
const pageDescription = 'Learn about TBN Tiling & Stone - your trusted partner for professional tiling, waterproofing, and renovation services. With over 15 years of experience, we deliver quality craftsmanship, reliability, and customer satisfaction in every project.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'about TBN Tiling',
    'tiling company Australia',
    'professional tilers',
    'experienced tiling contractors',
    'renovation specialists',
    'waterproofing experts',
    'quality craftsmanship',
    'licensed tilers',
    'insured contractors',
    'customer satisfaction',
    'tiling expertise',
    'renovation experience',
    'trusted tiling company',
    'reliable contractors',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: '/images/about-banner.png',
        width: 1200,
        height: 630,
        alt: 'About TBN Tiling & Stone',
        type: 'image/png',
      },
      {
        url: '/images/about.png',
        width: 1200,
        height: 630,
        alt: 'TBN Tiling Team',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/about-banner.png'],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    'company:founded': '2009',
    'company:type': 'Tiling and Renovation Services',
    'company:experience': '15+ years',
  },
};

export default function AboutPage() {
  return (
    <main className='bg-[#fcfcf7]'>
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <AboutUsHero />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <About learn={false} />
      </AnimatedSection>
      
      <AnimatedSection animation="zoom-in" delay={150}>
        <OurMissionValues />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <FAQ bg={true} />
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