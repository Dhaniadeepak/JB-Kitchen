import React, { useState } from 'react';
import { X, Calendar, Users, Clock, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '8:00 PM',
    seatingArea: 'Indoor AC Main Hall',
    specialOccasion: 'Casual Dining',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#18181B]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#18181B]/10 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="bg-[#18181B] text-[#FAF7F2] p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#E76F51] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phase 5, Mohali</span>
            </div>
            <h3 className="text-2xl font-display font-bold">
              Reserve a Table at JB's Kitchen
            </h3>
            <p className="text-xs text-white/70 mt-1">
              Confirm your dining party for lunch or evening service.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg transition-colors focus:outline-none"
            aria-label="Close Reservation Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaspreet Kaur"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Contact Phone *
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="4 Guests">4 Guests (Family)</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8 Guests">8 Guests</option>
                    <option value="10+ Guests">10+ Guests (Large Party)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                  >
                    <optgroup label="Lunch Service">
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3:15 PM">3:15 PM</option>
                    </optgroup>
                    <optgroup label="Dinner Service">
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:45 PM">8:45 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10:15 PM">10:15 PM</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                  >
                    <option value="Indoor AC Main Hall">Indoor AC Main Dining Room</option>
                    <option value="Courtyard Terrace">Courtyard Terrace (Outdoor)</option>
                    <option value="Family Private Lounge">Family Private Lounge</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    Dining Occasion
                  </label>
                  <select
                    value={formData.specialOccasion}
                    onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B]"
                  >
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Wedding Anniversary">Wedding Anniversary</option>
                    <option value="Corporate / Client Dinner">Corporate / Client Dinner</option>
                    <option value="Family Reunion">Family Reunion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                  Special Notes / Dietary Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Jain food preferences, high-chair needed, quiet corner..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E76F51] hover:bg-[#D45B3E] active:scale-98 rounded-xl transition-all shadow-md"
                >
                  Confirm Table Request [Interactive Demo]
                </button>
              </div>

              <p className="text-[11px] text-center text-[#71717A]">
                Sample reservation handler · Table held for 15 minutes after reserved time.
              </p>
            </form>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-display font-bold text-[#18181B]">
                  Table Reservation Confirmed!
                </h4>
                <p className="text-xs text-[#52525B] mt-1">
                  We look forward to hosting you at JB's Kitchen Phase 5, Mohali.
                </p>
              </div>

              {/* Booking Summary Pass */}
              <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#18181B]/8 text-left text-xs space-y-2.5 max-w-sm mx-auto">
                <div className="flex justify-between border-b border-[#18181B]/5 pb-2">
                  <span className="text-[#71717A]">Guest Name:</span>
                  <span className="font-semibold text-[#18181B]">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#18181B]/5 pb-2">
                  <span className="text-[#71717A]">Party Size:</span>
                  <span className="font-semibold text-[#18181B]">{formData.guests}</span>
                </div>
                <div className="flex justify-between border-b border-[#18181B]/5 pb-2">
                  <span className="text-[#71717A]">Date & Time:</span>
                  <span className="font-semibold text-[#18181B]">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#18181B]/5 pb-2">
                  <span className="text-[#71717A]">Seating Zone:</span>
                  <span className="font-semibold text-[#18181B]">{formData.seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#71717A]">Location:</span>
                  <span className="font-semibold text-[#18181B]">Phase 5, Mohali</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 text-xs font-semibold text-white bg-[#18181B] hover:bg-[#E76F51] rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
