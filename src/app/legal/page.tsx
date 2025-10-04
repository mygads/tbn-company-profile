import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHero from '@/components/LegalHero';
import LegalContent from '@/components/LegalContent';
import { AnimatedSection } from '@/components';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/legal`;
const pageTitle = 'Legal Information - Business Compliance & Consumer Rights';
const pageDescription = 'Important legal information about TBN Tiling & Stone including business compliance, licensing, insurance, consumer rights under Australian law, and dispute resolution procedures.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'legal information',
    'business compliance',
    'licensing',
    'insurance',
    'consumer rights',
    'Australian Consumer Law',
    'dispute resolution',
    'building codes',
    'professional standards',
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

export default function LegalPage() {
  const sections = [
    {
      title: "Business Information",
      content: [
        "TBN Tiling & Stone is a professional tiling and stonework company operating in Australia. We are committed to operating our business in compliance with all applicable laws and regulations.",
        "Business Name: TBN Tiling & Stone",
        "Email: tbntiling2009@gmail.com",
        "Phone: 0424 296 793"
      ]
    },
    {
      title: "Licensing and Insurance",
      content: "TBN Tiling & Stone maintains all necessary licenses and insurance required to operate in our service areas. We carry public liability insurance and workers' compensation insurance to protect our clients and team members."
    },
    {
      title: "Consumer Rights",
      content: [
        "Under Australian Consumer Law, you have rights when purchasing our services:",
        "• Services must be provided with due care and skill",
        "• Services must be fit for the purpose specified",
        "• Services must be completed within a reasonable time",
        "• Our guarantees cannot be excluded",
        "These rights apply in addition to any warranties we provide."
      ]
    },
    {
      title: "Professional Standards",
      content: "We adhere to industry best practices and Australian Standards for all tiling, waterproofing, and renovation work. Our team members are qualified professionals with the necessary skills and experience to deliver quality results."
    },
    {
      title: "Compliance with Building Codes",
      content: "All work performed by TBN Tiling & Stone complies with the National Construction Code and local building regulations. Where required, we obtain necessary permits and arrange for inspections."
    },
    {
      title: "Health and Safety",
      content: "We are committed to maintaining a safe work environment and comply with all workplace health and safety regulations. We implement appropriate safety measures to protect our workers, clients, and the public."
    },
    {
      title: "Environmental Responsibility",
      content: "We strive to minimize our environmental impact by properly disposing of waste materials, using environmentally friendly products where possible, and following sustainable business practices."
    },
    {
      title: "Privacy Compliance",
      content: "We comply with the Privacy Act 1988 and Australian Privacy Principles in our collection, use, and storage of personal information. For details, please refer to our Privacy Policy."
    },
    {
      title: "Dispute Resolution",
      content: [
        "If you have a complaint or dispute:",
        "1. Contact us directly to discuss the issue",
        "2. We will investigate and respond within 14 business days",
        "3. If unresolved, we may suggest mediation",
        "4. You may also contact relevant consumer protection agencies or industry associations",
        "We are committed to resolving disputes fairly and efficiently."
      ]
    },
    {
      title: "Limitation of Liability",
      content: "Nothing in our agreements limits or excludes any guarantees, warranties, representations, or conditions implied or imposed by law, including the Australian Consumer Law, that cannot be lawfully limited or excluded."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify and hold TBN Tiling & Stone harmless from any claims, damages, or expenses arising from your breach of these terms or your use of our services in violation of any law."
    },
    {
      title: "Severability",
      content: "If any provision of our terms and conditions is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect."
    },
    {
      title: "Entire Agreement",
      content: "Your service agreement, together with our Terms of Use, Privacy Policy, and other referenced policies, constitutes the entire agreement between you and TBN Tiling & Stone regarding our services."
    },
    {
      title: "Legal Advice",
      content: "This page provides general information about our legal compliance and policies. It is not legal advice. If you have specific legal questions, please consult a qualified attorney."
    },
    {
      title: "Updates to Legal Information",
      content: "We may update this legal information from time to time to reflect changes in our business practices or legal requirements. Material changes will be communicated to active clients."
    },
    {
      title: "Contact for Legal Matters",
      content: "For legal inquiries or to report concerns about compliance, please contact us at tbntiling2009@gmail.com or call 0424 296 793."
    }
  ];

  return (
    <main className="bg-[#fcfcf7]">
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <LegalHero 
          title="Legal Information"
          description="Important legal information about our business operations and compliance."
        />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <LegalContent sections={sections} />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}
