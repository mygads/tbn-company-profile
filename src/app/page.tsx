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
  Footer,
  AnimatedSection
} from '@/components';
import Image from 'next/image';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const siteName = 'TBN Tiling & Stone';
const siteDescription = 'Professional tiling, stonework, and waterproofing services in Australia. Specializing in bathroom & kitchen renovations, shower repairs, regrouting, and kitchen splashbacks. Quality craftsmanship guaranteed with over 15 years of experience.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TBN Tiling & Stone - Expert Tiling, Waterproofing & Renovation Services',
    template: '%s | TBN Tiling & Stone',
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [
    { name: 'TBN Tiling & Stone', url: siteUrl },
  ],
  creator: 'TBN Tiling & Stone',
  publisher: 'TBN Tiling & Stone',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    'tiling services Australia',
    'bathroom renovation',
    'kitchen renovation',
    'waterproofing services',
    'shower repairs',
    'leaking shower fix',
    'regrouting services',
    'kitchen splashbacks',
    'tile installation',
    'stone work',
    'TBN Tiling',
    'professional tilers',
    'bathroom tiling',
    'kitchen tiling',
    'tile repair',
    'grout replacement',
    'waterproofing contractor',
    'renovation specialist',
  ],
  referrer: 'origin-when-cross-origin',
  category: 'Home Improvement',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: siteName,
    title: 'TBN Tiling & Stone - Expert Tiling & Renovation Services',
    description: siteDescription,
    images: [
      {
        url: '/images/hero-home.png',
        width: 1200,
        height: 630,
        alt: 'TBN Tiling & Stone - Professional Tiling Services',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'TBN Tiling & Stone Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TBN Tiling & Stone - Expert Tiling Services',
    description: siteDescription,
    creator: '@tbntiling',
    images: [
      {
        url: '/images/hero-home.png',
        alt: 'TBN Tiling & Stone Services',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-AU': siteUrl,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'contact:email': 'tbntiling2009@gmail.com',
    'contact:phone': '0424 296 793',
    'business:contact_data:street_address': 'Australia',
    'business:contact_data:locality': 'Australia',
    'business:contact_data:country_name': 'Australia',
  },
};

export default function Home() {
  return (
    <div className="bg-[#fcfcf7] min-h-screen">
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <Hero />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Services />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="zoom-in" delay={200}>
        <section className='container mx-auto px-10 py-12'>
          <Image
            src="/images/about2.png"
            alt="TBN Tiling & Stone - Professional Craftsmanship"
            className="w-full h-auto shadow-lg rounded-lg"
            width={1000}
            height={500}
            priority={false}
            loading="lazy"
          />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <WhyChooseUs />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <Process />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}
