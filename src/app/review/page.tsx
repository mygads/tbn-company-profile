'use client';

import Navbar from '@/components/Navbar';
import ReviewHero from '@/components/ReviewHero';
import RatingSummary from '@/components/RatingSummary';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';
import { Contact } from '@/components';

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf7]">
      <Navbar />
      <ReviewHero />
      <RatingSummary />
      <CustomerReviews />
      <Contact />
      <Footer />
    </main>
  );
}