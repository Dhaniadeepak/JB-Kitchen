import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle2, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactSectionProps {
  onOpenReservation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenReservation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Table Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] scroll-mt-12 border-t border-[#18181B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#E76F51] mb-2">
            Visit & Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18181B] tracking-tight">
            Find Us in Phase 5, Mohali
          </h2>
          <p className="mt-3 text-base text-[#52525B] leading-relaxed">
            Conveniently situated in the bustling heart of Phase 5, SAS Nagar. All contact details and opening hours below are editable sample placeholders for this restaurant demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Location, Hours, Contact Cards & Interactive Map Simulation */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address & Landmark Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#18181B]/8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E76F51]/10 text-[#E76F51] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#18181B]">Restaurant Location</h3>
                  <p className="text-sm text-[#18181B] font-medium mt-1">
                    {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.line2}
                  </p>
                  <p className="text-xs text-[#52525B] mt-0.5">
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} — {RESTAURANT_INFO.address.pincode}
                  </p>
                  <div className="mt-3 text-[11px] text-[#71717A] bg-[#FAF7F2] p-2.5 rounded-lg border border-[#18181B]/5">
                    <strong>Landmark:</strong> Directly accessible from Phase 5 Main Market, 5 mins from Silvi Park & Sector 70 Mohali.
                  </div>
                </div>
              </div>

              {/* Hours Card inside */}
              <div className="mt-6 pt-6 border-t border-[#18181B]/5 flex items-start gap-4">
                <div className="p-3 bg-[#18181B]/5 text-[#18181B] rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-[#18181B]">Opening Hours</h3>
                    <span className="text-[10px] uppercase font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      Open 7 Days
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
                    <div className="p-2.5 bg-[#FAF7F2] rounded-lg">
                      <div className="font-semibold text-[#18181B]">Lunch Hours</div>
                      <div className="text-[#52525B] mt-0.5">{RESTAURANT_INFO.timings.lunch}</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-1">[Sample Schedule]</div>
                    </div>
                    <div className="p-2.5 bg-[#FAF7F2] rounded-lg">
                      <div className="font-semibold text-[#18181B]">Dinner Hours</div>
                      <div className="text-[#52525B] mt-0.5">{RESTAURANT_INFO.timings.dinner}</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-1">[Sample Schedule]</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="mt-6 pt-6 border-t border-[#18181B]/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2.5 text-[#52525B]">
                  <Phone className="w-4 h-4 text-[#E76F51]" />
                  <span>{RESTAURANT_INFO.contact.phonePlaceholder}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#52525B]">
                  <Mail className="w-4 h-4 text-[#E76F51]" />
                  <span>{RESTAURANT_INFO.contact.emailPlaceholder}</span>
                </div>
              </div>
            </div>

            {/* Interactive Mock Map View Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden border border-[#18181B]/8 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-[#18181B]">Map & Orientation: Mohali Phase 5</div>
                <a
                  href="https://maps.google.com/?q=Phase+5+Mohali+Punjab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#E76F51] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Clean Map UI illustration representing Phase 5 Mohali street grid */}
              <div className="relative h-44 rounded-xl bg-[#F2ECE3] border border-[#18181B]/10 overflow-hidden flex items-center justify-center">
                {/* Street grid patterns */}
                <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B8A896" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Main diagonal road */}
                  <line x1="0" y1="140" x2="600" y2="20" stroke="#FAF7F2" strokeWidth="12" />
                  <line x1="0" y1="140" x2="600" y2="20" stroke="#D4C9BC" strokeWidth="4" strokeDasharray="6,6" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="#FAF7F2" strokeWidth="10" />
                </svg>

                {/* Pin marker for JB's Kitchen */}
                <div className="absolute z-10 flex flex-col items-center animate-bounce">
                  <div className="px-3 py-1 bg-[#18181B] text-white text-[11px] font-bold rounded-md shadow-lg border border-white/20 whitespace-nowrap">
                    JB's Kitchen · Phase 5
                  </div>
                  <div className="w-3 h-3 bg-[#E76F51] rotate-45 -mt-1.5 shadow" />
                </div>

                <div className="absolute bottom-2 left-3 text-[10px] text-[#71717A] bg-white/90 px-2 py-0.5 rounded shadow-sm">
                  SAS Nagar (Mohali) · Sector 59 / Phase 5 Grid
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry / Event Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#18181B]/8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-[#18181B]">
                    Send a Direct Inquiry
                  </h3>
                  <button
                    onClick={onOpenReservation}
                    className="text-xs font-semibold text-[#E76F51] hover:underline flex items-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Or Book Table</span>
                  </button>
                </div>

                <p className="text-xs text-[#52525B] mb-6">
                  Planning a family gathering, catering query, or business lunch in Mohali? Fill out this sample form to test user submission flow.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h4 className="font-display text-xl font-bold text-emerald-900">
                      Sample Inquiry Received!
                    </h4>
                    <p className="text-xs text-emerald-800 mt-2 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. In the real production website, this triggers an instant notification to JB's Kitchen team and sends an SMS/WhatsApp acknowledgment to {formData.phone}.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          inquiryType: 'Table Inquiry',
                          message: '',
                        });
                      }}
                      className="mt-6 px-4 py-2 text-xs font-medium text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                    >
                      Send Another Test Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#18181B] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gurpreet Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#18181B] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98XXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#18181B] mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#18181B] mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                      >
                        <option value="Table Inquiry">Table / Dining Reservation Inquiry</option>
                        <option value="Private Celebration">Private Celebration (Birthday / Anniversary)</option>
                        <option value="Corporate Gathering">Corporate / Team Gathering</option>
                        <option value="Catering & Bulk">Bulk Tandoor / Catering Query</option>
                        <option value="General Feedback">Owner Feedback & Suggestions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#18181B] mb-1">
                        Message / Dietary Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your expected guests, timing, or special requests..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#18181B] hover:bg-[#E76F51] active:scale-98 rounded-xl transition-all shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry [Demo Handler]</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#18181B]/5 text-[11px] text-[#A1A1AA] text-center">
                Protected by sample demo policy · No real data is stored externally.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
