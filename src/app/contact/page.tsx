import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Contact, FAQ, AnimatedSection } from '@/components';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/contact`;
const pageTitle = 'Contact TBN Tiling & Stone - Get Your Free Quote Today';
const pageDescription = 'Ready to transform your space? Contact TBN Tiling & Stone for expert tiling, waterproofing, and renovation services. Get your free quote today and discuss your project with our experienced team.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'contact TBN Tiling',
    'tiling quote',
    'free consultation',
    'tiling services contact',
    'bathroom renovation quote',
    'kitchen renovation contact',
    'waterproofing services',
    'tiling contractors',
    'renovation specialists',
    'get quote',
    'tiling experts',
    'professional tilers',
    'contact form',
    'WhatsApp contact',
    'phone contact',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: '/images/hero-home.png',
        width: 1200,
        height: 630,
        alt: 'Contact TBN Tiling & Stone',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/hero-home.png'],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    'contact:email': 'tbntiling2009@gmail.com',
    'contact:phone': '+61424296793',
    'business:contact_data:country_name': 'Australia',
  },
};

export default function ContactPage() {
  return (
    <main className='bg-[#fcfcf7]'>
      <Navbar />

      <AnimatedSection animation="fade-up">
        <Contact />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={150}>
        <FAQ bg={true} />
      </AnimatedSection>

      <Footer />
    </main>
  );
}