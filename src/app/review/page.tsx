'use client';

import Navbar from '@/components/Navbar';
import ReviewHero from '@/components/ReviewHero';
import RatingSummary from '@/components/RatingSummary';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';
import { Contact, AnimatedSection } from '@/components';

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf7]">
      <Navbar />
      
      <AnimatedSection animation="fade-up">
        <ReviewHero />
      </AnimatedSection>
      
      <AnimatedSection animation="zoom-in" delay={150}>
        <RatingSummary />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <CustomerReviews />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={150}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}