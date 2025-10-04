import React from 'react';

interface LegalHeroProps {
  title: string;
  description: string;
}

const LegalHero = ({ title, description }: LegalHeroProps) => {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #B96244 0%, #d4a017 60%, #fcfcf7 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-200">
            {description}
          </p>
          <div className="mt-6 text-sm text-gray-300">
            Last Updated: January 1, 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
