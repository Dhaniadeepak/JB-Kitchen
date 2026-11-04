import React from 'react';
import { ArrowDown, Calendar, Sparkles, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#18181B] text-[#FAF7F2] overflow-hidden">
      {/* Background Image with optimized loading & measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_restaurant_dining_1793807443183.jpg"
          alt="Contemporary feast at JB's Kitchen Phase 5 Mohali"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/75 to-[#18181B]/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 text-center flex flex-col items-center">
        {/* Unboxed editorial location kicker - clean typography without pill boxes */}
        <div className="flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase text-[#FAF7F2]/80 mb-4 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>Phase 5, Mohali</span>
          <span aria-hidden="true">·</span>
          <span>Authentic Punjabi & Contemporary Tandoor</span>
        </div>

        {/* Headline required by prompt */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-[#FAF7F2] max-w-4xl text-balance leading-[1.1] mb-6">
          Good Food. Great Moments.
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#FAF7F2]/85 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          A soulful culinary haven in the heart of Mohali. Where slow-simmered Punjabi heritage recipes meet contemporary dining elegance, warm laughter, and honest hospitality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#E76F51] hover:bg-[#D45B3E] active:scale-95 rounded-lg transition-all shadow-lg shadow-[#E76F51]/20"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#FAF7F2] bg-white/10 hover:bg-white/20 border border-white/25 active:scale-95 rounded-lg transition-all backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 text-[#E76F51]" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Editorial Trust Markers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 pt-10 border-t border-white/15 w-full max-w-3xl text-left sm:text-center text-xs sm:text-sm text-[#FAF7F2]/80 font-normal">
          <div className="flex flex-col gap-1 items-start sm:items-center">
            <span className="text-[#FAF7F2] font-semibold text-sm">18-Hour Simmered Dal</span>
            <span className="text-[#FAF7F2]/65 text-xs">Authentic charcoal slow-cooking</span>
          </div>
          <div className="flex flex-col gap-1 items-start sm:items-center">
            <span className="text-[#FAF7F2] font-semibold text-sm">Clay Oven Kulchas & Naans</span>
            <span className="text-[#FAF7F2]/65 text-xs">Hand-stretched & freshly baked</span>
          </div>
          <div className="flex flex-col gap-1 items-start sm:items-center">
            <span className="text-[#FAF7F2] font-semibold text-sm">100% Desi Ghee & Farm Dairy</span>
            <span className="text-[#FAF7F2]/65 text-xs">Pure traditional flavors</span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade into Content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
};
