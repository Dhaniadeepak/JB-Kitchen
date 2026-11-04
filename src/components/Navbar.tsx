import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Calendar, Phone, Utensils, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  trayCount: number;
  onOpenTray: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, trayCount, onOpenTray }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#18181B]/95 text-[#FAF7F2] backdrop-blur-md shadow-md py-3'
            : 'bg-gradient-to-b from-[#18181B]/90 via-[#18181B]/60 to-transparent text-[#FAF7F2] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#FAF7F2] hover:text-[#E76F51] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
              aria-label="JB's Kitchen Home"
            >
              <span>JB's Kitchen</span>
              <span className="text-xs font-sans font-normal tracking-wider text-[#FAF7F2]/60 hidden sm:inline border-l border-white/20 pl-2">
                Phase 5, Mohali
              </span>
            </a>

            {/* Zone 2: 4-5 concise single-line nav links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#FAF7F2]/80 hover:text-[#FAF7F2] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action + Optional Tray CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {trayCount > 0 && (
                <button
                  onClick={onOpenTray}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#FAF7F2] bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
                  title="View Selected Dishes Tasting Tray"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#E76F51]" />
                  <span>Tasting Tray ({trayCount})</span>
                </button>
              )}

              <button
                onClick={onOpenReservation}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E76F51] hover:bg-[#D45B3E] active:scale-95 rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Menu & Tray Toggle Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              {trayCount > 0 && (
                <button
                  onClick={onOpenTray}
                  className="p-2 text-white bg-[#E76F51] rounded-lg relative"
                  aria-label="View Tasting Tray"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 bg-white text-[#18181B] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {trayCount}
                  </span>
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF7F2] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76F51]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#18181B]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#18181B] text-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-display font-bold text-[#FAF7F2]">JB's Kitchen</h2>
                  <p className="text-xs text-white/60">Phase 5, Mohali, Punjab</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white rounded-lg focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium text-white/80 hover:text-[#E76F51] py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Quick Contact Info */}
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-xs space-y-2">
                <div className="flex items-center gap-2 text-white/80">
                  <Phone className="w-3.5 h-3.5 text-[#E76F51]" />
                  <span>{RESTAURANT_INFO.contact.phonePlaceholder}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Utensils className="w-3.5 h-3.5 text-[#E76F51]" />
                  <span>Phase 5 Main Market, Mohali</span>
                </div>
                <div className="text-white/50 pt-1 text-[11px]">
                  Lunch: 12:30 PM - 4:00 PM · Dinner: 7:00 PM - 11:30 PM
                </div>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#E76F51] hover:bg-[#D45B3E] rounded-lg transition-colors shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <p className="text-[11px] text-center text-white/40">
                Demo concept for presentation to restaurant owner.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
