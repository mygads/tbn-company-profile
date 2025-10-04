import React from 'react';

interface Section {
  title: string;
  content: string | string[];
}

interface LegalContentProps {
  sections: Section[];
}

const LegalContent = ({ sections }: LegalContentProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#fcfcf7]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
          {sections.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalContent;
