import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHero from '@/components/LegalHero';
import LegalContent from '@/components/LegalContent';

export default function PrivacyPage() {
  const sections = [
    {
      title: "Introduction",
      content: "At TBN Tiling & Stone, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."
    },
    {
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal identification information (name, email address, phone number, address)",
        "• Project details and service requirements",
        "• Payment and billing information",
        "• Communication preferences and correspondence",
        "• Any other information you choose to provide"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Provide, maintain, and improve our services",
        "• Process your requests and transactions",
        "• Send you technical notices, updates, and support messages",
        "• Respond to your comments, questions, and customer service requests",
        "• Communicate with you about services, offers, and events",
        "• Monitor and analyze trends, usage, and activities"
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, to protect our rights and safety, or with service providers who assist us in operating our business."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure."
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to:",
        "• Access, update, or delete your personal information",
        "• Opt-out of marketing communications",
        "• Request a copy of your data",
        "• Withdraw consent for data processing",
        "• Lodge a complaint with a supervisory authority"
      ]
    },
    {
      title: "Cookies and Tracking",
      content: "Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at tbntiling2009@gmail.com or call us at 0424 296 793."
    }
  ];

  return (
    <main className="bg-[#fcfcf7]">
      <Navbar />
      <LegalHero 
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
      />
      <LegalContent sections={sections} />
      <Footer />
    </main>
  );
}
