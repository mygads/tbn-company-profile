import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHero from '@/components/LegalHero';
import LegalContent from '@/components/LegalContent';
import { AnimatedSection } from '@/components';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/terms`;
const pageTitle = 'Terms of Use - Service Agreement & User Guidelines';
const pageDescription = 'Read our terms of use to understand the conditions for using TBN Tiling & Stone services. Learn about our service agreements, warranties, and user responsibilities.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'terms of use',
    'service agreement',
    'user guidelines',
    'terms and conditions',
    'service terms',
    'warranties',
    'legal terms',
    'user responsibilities',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing and using the TBN Tiling & Stone website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "Services Description",
      content: [
        "TBN Tiling & Stone provides professional tiling, stonework, and waterproofing services including:",
        "• Bathroom and kitchen renovations",
        "• Tile installation and repairs",
        "• Waterproofing solutions",
        "• Regrouting services",
        "• Kitchen splashbacks",
        "• Shower leak repairs",
        "All services are subject to availability and our professional assessment."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "When using our services, you agree to:",
        "• Provide accurate and complete information",
        "• Maintain the confidentiality of your account",
        "• Notify us immediately of any unauthorized access",
        "• Use our services only for lawful purposes",
        "• Not interfere with or disrupt our services",
        "• Comply with all applicable laws and regulations"
      ]
    },
    {
      title: "Quotes and Pricing",
      content: "All quotes are estimates based on the information provided and site inspection. Final pricing may vary depending on actual conditions discovered during the project. We reserve the right to adjust pricing if additional work or materials are required."
    },
    {
      title: "Project Timeline",
      content: "Project timelines are estimates and may be subject to change due to weather conditions, material availability, or unforeseen circumstances. We will communicate any delays promptly and work to minimize disruptions."
    },
    {
      title: "Payment Terms",
      content: "Payment terms will be outlined in your service agreement. Generally, a deposit is required to commence work, with the balance due upon completion. We accept various payment methods as specified in your agreement."
    },
    {
      title: "Warranties and Guarantees",
      content: "We stand behind the quality of our workmanship. Specific warranty terms will be provided in your service agreement. Warranties do not cover damage caused by improper use, neglect, or normal wear and tear."
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, TBN Tiling & Stone shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services."
    },
    {
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and images, is the property of TBN Tiling & Stone and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission."
    },
    {
      title: "Modifications to Terms",
      content: "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms."
    },
    {
      title: "Governing Law",
      content: "These Terms of Use are governed by the laws of Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Australia."
    },
    {
      title: "Contact Information",
      content: "For questions about these Terms of Use, please contact us at tbntiling2009@gmail.com or call 0424 296 793."
    }
  ];

  return (
    <main className="bg-[#fcfcf7]">
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <LegalHero 
          title="Terms of Use"
          description="Please read these terms carefully before using our services."
        />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <LegalContent sections={sections} />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}
