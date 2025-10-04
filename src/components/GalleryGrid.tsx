'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const galleryItems: GalleryItem[] = [
    // Hero Images
    { id: 1, src: '/images/hero-floor.jpg', alt: 'Floor Tiling Project', category: 'Flooring' },
    { id: 2, src: '/images/hero-home.png', alt: 'Home Renovation', category: 'Renovation' },
    { id: 3, src: '/images/hero-samples.jpg', alt: 'Tile Samples', category: 'Materials' },
    { id: 4, src: '/images/hero-worker.jpg', alt: 'Professional Work', category: 'Team' },
    
    // About Images
    { id: 5, src: '/images/about.png', alt: 'About Our Work', category: 'About' },
    { id: 6, src: '/images/about2.png', alt: 'Our Expertise', category: 'About' },
    { id: 7, src: '/images/about-banner.png', alt: 'Company Overview', category: 'About' },
    
    // Services Images
    { id: 8, src: '/images/services1.png', alt: 'Service Excellence', category: 'Services' },
    { id: 9, src: '/images/services2.png', alt: 'Quality Service', category: 'Services' },
    { id: 10, src: '/images/services3.png', alt: 'Professional Services', category: 'Services' },
    { id: 11, src: '/images/services4.png', alt: 'Service Portfolio', category: 'Services' },
    
    // Bathroom & Kitchen
    { id: 12, src: '/images/bathroom-kitchen.png', alt: 'Bathroom Kitchen Renovation', category: 'Renovation' },
    { id: 13, src: '/images/bathroom-kitchen2.png', alt: 'Modern Kitchen Design', category: 'Renovation' },
    
    // Kitchen Splashbacks
    { id: 14, src: '/images/kitchensplashbacks1.png', alt: 'Kitchen Splashback Design 1', category: 'Splashbacks' },
    { id: 15, src: '/images/kitchensplashbacks2.png', alt: 'Kitchen Splashback Design 2', category: 'Splashbacks' },
    
    // Regrouting
    { id: 16, src: '/images/regrouting1.png', alt: 'Regrouting Project 1', category: 'Regrouting' },
    { id: 17, src: '/images/regrouting2.png', alt: 'Regrouting Project 2', category: 'Regrouting' },
    
    // Leaking Shower
    { id: 18, src: '/images/leakingshower1.png', alt: 'Shower Repair 1', category: 'Repairs' },
    { id: 19, src: '/images/leakingshower2.png', alt: 'Shower Repair 2', category: 'Repairs' },
    
    // Waterproofing
    { id: 20, src: '/images/waterproofing1.png', alt: 'Waterproofing Project 1', category: 'Waterproofing' },
    { id: 21, src: '/images/waterproofing2.png', alt: 'Waterproofing Project 2', category: 'Waterproofing' },
    
  ];

  const categories = ['All', 'Renovation', 'Flooring', 'Splashbacks', 'Regrouting', 'Repairs', 'Waterproofing', 'Services', 'About', 'Materials', 'Team'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#fcfcf7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Project Gallery
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of completed projects showcasing our expertise in tiling, renovation, and stone work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-200"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-sm md:text-base">{item.alt}</p>
                  <p className="text-xs md:text-sm opacity-90">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No images found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={32} />
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <p className="text-xl md:text-2xl font-semibold mb-2">{selectedImage.alt}</p>
            <p className="text-sm md:text-base opacity-90">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
