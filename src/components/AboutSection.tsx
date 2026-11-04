import React from 'react';
import { Sparkles, Heart, Flame, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO, heroDiningImg } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#18181B] text-[#FAF7F2] relative overflow-hidden scroll-mt-12">
      {/* Decorative ambient subtle warmth glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E76F51]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C28B47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Image & Stat Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={heroDiningImg}
                alt="Dining interior at JB's Kitchen Mohali"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero_restaurant_dining.jpg';
                }}
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#18181B]/80 backdrop-blur-md rounded-xl border border-white/10">
                <div className="text-xs uppercase tracking-widest text-[#E76F51] font-semibold">
                  Phase 5 · Mohali
                </div>
                <div className="font-display text-lg text-white font-bold">
                  JB's Kitchen Culinary Heritage
                </div>
              </div>
            </div>

            {/* Quiet Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <Flame className="w-5 h-5 text-[#E76F51] mb-2" />
                <div className="text-sm font-bold text-white">Charcoal Clay Tandoor</div>
                <div className="text-xs text-white/60 mt-1">High-heat clay ovens for authentic smoke & flaky layers</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <Heart className="w-5 h-5 text-[#E76F51] mb-2" />
                <div className="text-sm font-bold text-white">Warm Mohali Service</div>
                <div className="text-xs text-white/60 mt-1">Hospitality rooted in Punjabi warmth and family care</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#E76F51] mb-3">
                Our Story & Philosophy
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Rooted in Punjab's Soil, Crafted for Today's Tables.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Born in Phase 5, Mohali, <strong className="text-white font-medium">JB's Kitchen</strong> was conceptualized with one unswerving belief: authentic Indian food doesn't require shortcuts. In an age of rushed commercial kitchens, we celebrate the slow craft of culinary patience.
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              From our signature Dal Makhani that simmers through the night over dying embers, to our Amritsari Kulchas hand-stretched and slapped onto blazing clay walls, every preparation honors the rich culinary lineage of Punjab while welcoming friends, families, and colleagues to celebrate life's greatest moments together.
            </p>

            {/* 3 Editorial Numbered Pillars */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4">
                <span className="font-display text-xl font-bold text-[#E76F51] shrink-0">01.</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Pure Desi Sourcing</h3>
                  <p className="text-xs text-white/60 mt-0.5">
                    We use exclusively pure clarified butter (desi ghee), farm-fresh dairy from Punjab's dairies, and freshly milled flours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-display text-xl font-bold text-[#E76F51] shrink-0">02.</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Artisanal Whole Spices</h3>
                  <p className="text-xs text-white/60 mt-0.5">
                    Coriander seeds, black cardamom, and dry mango powders are roasted and hand-crushed in-house to preserve their essential aromatic oils.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-display text-xl font-bold text-[#E76F51] shrink-0">03.</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Celebration & Intimate Spaces</h3>
                  <p className="text-xs text-white/60 mt-0.5">
                    Whether you are dining casually with family on Sunday or hosting corporate team dinners in Mohali, our space is thoughtfully designed to feel like home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
