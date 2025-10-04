import type { Metadata } from 'next';

const siteUrl = 'https://www.tbntiling.com.au';
const pageUrl = `${siteUrl}/review`;
const pageTitle = 'Customer Reviews - 5-Star Tiling & Renovation Service';
const pageDescription = 'Read authentic customer reviews and testimonials for TBN Tiling & Stone. See why our clients rate us 5 stars for quality workmanship, professional service, and customer satisfaction in tiling and renovation projects.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'customer reviews',
    'client testimonials',
    '5 star tiling service',
    'tiling reviews',
    'renovation reviews',
    'customer satisfaction',
    'service ratings',
    'client feedback',
    'verified reviews',
    'tiling testimonials',
    'customer experience',
    'service quality',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: '/images/review-bg.png',
        width: 1200,
        height: 630,
        alt: 'Customer Reviews - TBN Tiling & Stone',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/review-bg.png'],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    'rating:average': '5.0',
    'rating:count': '24',
    'rating:scale': '5',
  },
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
