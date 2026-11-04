import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, MapPin, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121214] text-[#FAF7F2] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-[#FAF7F2]">
              {RESTAURANT_INFO.name}
            </h3>
            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">
              "{RESTAURANT_INFO.tagline}"
            </p>
            <p className="text-xs text-[#FAF7F2]/60 leading-relaxed">
              Contemporary dining destination celebrating North Indian & Punjabi culinary roots in Phase 5, Mohali.
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-[#E76F51] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md inline-block">
                Phase 5, SAS Nagar, Punjab
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#home" className="hover:text-[#E76F51] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E76F51] transition-colors">Interactive Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E76F51] transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E76F51] transition-colors">Food & Ambience Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#E76F51] transition-colors">Guest Experiences</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E76F51] transition-colors">Find Us & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Location Recap */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Hours & Access
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/75">
              <div>
                <span className="text-white font-medium block">Lunch Service</span>
                <span className="text-white/60">{RESTAURANT_INFO.timings.lunch} [Sample]</span>
              </div>
              <div>
                <span className="text-white font-medium block">Dinner Service</span>
                <span className="text-white/60">{RESTAURANT_INFO.timings.dinner} [Sample]</span>
              </div>
              <div className="pt-1 text-[11px] text-[#E76F51]">
                {RESTAURANT_INFO.timings.statusNote}
              </div>
            </div>
          </div>

          {/* Col 4: Social & Demo Disclaimer */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Connect [Sample Handles]
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#social-placeholder-instagram"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 bg-white/5 hover:bg-[#E76F51] text-white/80 hover:text-white rounded-lg transition-colors border border-white/10"
                title="Instagram Placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social-placeholder-facebook"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 bg-white/5 hover:bg-[#E76F51] text-white/80 hover:text-white rounded-lg transition-colors border border-white/10"
                title="Facebook Placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social-placeholder-tripadvisor"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 bg-white/5 hover:bg-[#E76F51] text-white/80 hover:text-white rounded-lg transition-colors border border-white/10"
                title="TripAdvisor Placeholder"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-white/50 leading-relaxed">
              <strong className="text-white/80 block mb-1">Concept Demo Notice:</strong>
              This application is an interactive presentation concept created for JB's Kitchen (Phase 5, Mohali). Details are sample placeholders.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} JB's Kitchen · Mohali, Punjab. All sample rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
