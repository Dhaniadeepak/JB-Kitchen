import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Signatures', 'Mains', 'Starters', 'Breads', 'Beverages'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2] scroll-mt-12 border-t border-[#18181B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#E76F51] mb-2">
            Visual Flavors
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18181B] tracking-tight">
            Culinary & Ambience Gallery
          </h2>
          <p className="mt-3 text-base text-[#52525B] leading-relaxed">
            A glimpse into the textures, vibrant gravies, clay oven fire, and convivial moments at JB's Kitchen.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#18181B] text-[#FAF7F2] shadow-sm'
                  : 'bg-white text-[#52525B] hover:text-[#18181B] border border-[#18181B]/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[#F2ECE3] border border-[#18181B]/8 shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Scrim Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/85 via-[#18181B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E76F51]">
                  {item.category}
                </div>
                <h3 className="font-display text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-1">
                  {item.caption}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/90 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/95 backdrop-blur-md p-4">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/30 border border-white/10">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-[#FAF7F2] max-w-xl">
              <h3 className="font-display text-2xl font-bold">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-sm text-white/75 mt-1">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <div className="text-[11px] text-white/40 mt-2">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
