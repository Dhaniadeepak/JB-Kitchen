import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("Hi JB's Kitchen Mohali, I would like to inquire about reserving a table / today's specials.");

  const handleSend = () => {
    const encoded = encodeURIComponent(chatMessage);
    const url = `https://wa.me/${RESTAURANT_INFO.contact.whatsappRaw}?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-[#18181B]/10 overflow-hidden transform transition-all animate-in fade-in slide-in-from-bottom-4">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-base font-display">
                JB
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">JB's Kitchen · Mohali</h4>
                <p className="text-[11px] text-white/80">Typically responds in minutes [Sample]</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-lg focus:outline-none"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] space-y-3 max-h-60 overflow-y-auto text-xs">
            {/* Incoming message bubble */}
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm max-w-[85%] text-[#18181B] space-y-1">
              <p className="font-semibold text-[11px] text-[#075E54]">JB's Kitchen Desk</p>
              <p>Sat Sri Akal! Welcome to JB's Kitchen, Phase 5, Mohali. How may we assist your dining plans today?</p>
              <span className="text-[9px] text-[#71717A] block text-right mt-1">12:30 PM</span>
            </div>

            {/* Note badge */}
            <div className="text-[10px] text-center text-[#71717A] bg-white/60 py-1 px-2 rounded-md">
              Placeholder Number: {RESTAURANT_INFO.contact.whatsappPlaceholder}
            </div>
          </div>

          {/* Quick Reply Composer */}
          <div className="p-3 bg-white border-t border-[#18181B]/5 space-y-2">
            <textarea
              rows={2}
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="w-full text-xs p-2 rounded-lg bg-[#FAF7F2] border border-[#18181B]/10 text-[#18181B] focus:outline-none focus:ring-1 focus:ring-[#25D366] resize-none"
            />
            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-lg shadow transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat [Sample]</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-float-btn w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp with JB's Kitchen Mohali"
        title="Chat on WhatsApp with JB's Kitchen"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};
