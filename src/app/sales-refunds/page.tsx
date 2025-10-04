import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHero from '@/components/LegalHero';
import LegalContent from '@/components/LegalContent';
import { AnimatedSection } from '@/components';
import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/sales-refunds`;
const pageTitle = 'Sales & Refunds Policy - Payment Terms & Cancellation Guidelines';
const pageDescription = 'Understand our sales and refunds policy including payment terms, cancellation guidelines, deposit requirements, and refund procedures for tiling and renovation services.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'sales policy',
    'refund policy',
    'payment terms',
    'cancellation policy',
    'deposit requirements',
    'refund procedures',
    'payment methods',
    'service quotes',
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

export default function SalesRefundsPage() {
  const sections = [
    {
      title: "Our Commitment",
      content: "At TBN Tiling & Stone, we are committed to providing high-quality services and ensuring customer satisfaction. This policy outlines our approach to sales, refunds, and cancellations."
    },
    {
      title: "Service Quotes",
      content: [
        "All quotes are provided free of charge and are valid for 30 days from the date of issue unless otherwise specified. Quotes are based on:",
        "• Site inspection and assessment",
        "• Materials and labor requirements",
        "• Current market prices",
        "• Project complexity and timeline",
        "Quotes do not constitute a binding contract until accepted by both parties and a deposit is paid."
      ]
    },
    {
      title: "Deposits and Payment Schedule",
      content: [
        "To secure your booking and commence work, we require:",
        "• Initial deposit: Typically 30-50% of the total project cost",
        "• Progress payments: As outlined in your service agreement",
        "• Final payment: Due upon satisfactory completion of work",
        "All payment schedules will be clearly outlined in your service agreement before work begins."
      ]
    },
    {
      title: "Accepted Payment Methods",
      content: "We accept payment via bank transfer, credit card, debit card, and cash. Payment details and instructions will be provided in your invoice. A receipt will be issued for all payments received."
    },
    {
      title: "Cancellation Policy",
      content: [
        "If you need to cancel your project:",
        "• Cancellations made more than 7 days before scheduled start: Full refund of deposit minus 10% administration fee",
        "• Cancellations made 3-7 days before scheduled start: 50% of deposit refunded",
        "• Cancellations made less than 3 days before scheduled start: No refund of deposit",
        "• Cancellations after work has commenced: No refund, payment due for work completed and materials purchased"
      ]
    },
    {
      title: "Refund Policy",
      content: [
        "Refunds may be issued in the following circumstances:",
        "• Project cancellation as per our cancellation policy",
        "• Service not rendered due to circumstances within our control",
        "• Mutual agreement to terminate the project",
        "Refunds will be processed within 14 business days using the original payment method. Materials already purchased for your specific project are non-refundable."
      ]
    },
    {
      title: "Changes to Project Scope",
      content: "If you request changes to the project scope after work has commenced, additional charges may apply. We will provide a revised quote for any additional work before proceeding. Changes may also affect the project timeline."
    },
    {
      title: "Disputes and Resolution",
      content: "If you are not satisfied with our work, please contact us immediately. We will work with you to resolve any issues. If a resolution cannot be reached, we may agree to engage an independent mediator or follow applicable dispute resolution procedures."
    },
    {
      title: "Warranty Claims",
      content: "Warranty claims are separate from refunds and are governed by the warranty terms in your service agreement. Warranty work does not entitle you to a refund of the original service cost."
    },
    {
      title: "Force Majeure",
      content: "We are not liable for delays or cancellations due to circumstances beyond our control, including but not limited to natural disasters, severe weather, material shortages, or government restrictions. In such cases, we will work with you to reschedule or modify the project."
    },
    {
      title: "GST and Taxes",
      content: "All prices quoted include GST (Goods and Services Tax) unless otherwise stated. Tax invoices will be provided for all transactions as required by Australian tax law."
    },
    {
      title: "Contact Us",
      content: "For questions about our sales and refunds policy, or to discuss a specific situation, please contact us at tbntiling2009@gmail.com or call 0424 296 793."
    }
  ];

  return (
    <main className="bg-[#fcfcf7]">
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <LegalHero 
          title="Sales and Refunds Policy"
          description="Understanding our policies on quotes, payments, cancellations, and refunds."
        />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <LegalContent sections={sections} />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}
