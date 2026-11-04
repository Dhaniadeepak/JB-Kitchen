import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#FAF7F2] scroll-mt-12 border-t border-[#18181B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Explicit Sample Notice Badge as requested */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E76F51] bg-[#E76F51]/10 px-3 py-1 rounded-full mb-3">
            <span>[Sample Reviews · Demo Placeholder Content]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18181B] tracking-tight">
            Guest Experiences & Moments
          </h2>
          <p className="mt-3 text-base text-[#52525B] leading-relaxed">
            Illustrative sample guest feedback designed to demonstrate social proof layout for JB's Kitchen. Management can replace these with verified patron reviews.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#18181B]/8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating + sample quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E76F51] text-[#E76F51]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#18181B]/15" />
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#18181B] italic leading-relaxed mb-6 font-serif">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#18181B]/5 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#18181B]">{item.author}</div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">{item.role}</div>
                </div>

                {/* Highlight dish */}
                <div className="text-right">
                  <span className="text-[10px] text-[#A1A1AA] block uppercase tracking-wider">Favorite:</span>
                  <span className="text-[11px] font-medium text-[#E76F51]">{item.highlightDish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
