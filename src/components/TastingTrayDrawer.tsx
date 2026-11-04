import React from 'react';
import { X, Trash2, ShoppingBag, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface TastingTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  trayItems: MenuItem[];
  onRemoveItem: (id: string) => void;
  onClearTray: () => void;
  onOpenReservation: () => void;
}

export const TastingTrayDrawer: React.FC<TastingTrayDrawerProps> = ({
  isOpen,
  onClose,
  trayItems,
  onRemoveItem,
  onClearTray,
  onOpenReservation,
}) => {
  if (!isOpen) return null;

  const handleWhatsAppPreOrder = () => {
    const dishNames = trayItems.map((d) => `• ${d.name} (${d.price})`).join('%0A');
    const text = `Hi JB's Kitchen Mohali! I am curating a dining plan from your website demo:%0A%0A${dishNames}%0A%0ACould you please advise on table availability & dining recommendations?`;
    window.open(`https://wa.me/${RESTAURANT_INFO.contact.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#18181B]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-[#18181B] text-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E76F51]" />
              <div>
                <h3 className="font-display text-xl font-bold">Your Tasting Tray</h3>
                <p className="text-[11px] text-white/60">Sample Dish Selection & Planner</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-lg focus:outline-none"
              aria-label="Close Tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {trayItems.length === 0 ? (
              <div className="text-center py-16 text-[#71717A] space-y-3">
                <ShoppingBag className="w-10 h-10 mx-auto text-[#A1A1AA] stroke-1" />
                <h4 className="font-display text-lg font-bold text-[#18181B]">
                  Your tray is currently empty
                </h4>
                <p className="text-xs text-[#52525B] max-w-xs mx-auto">
                  Browse our Chef's Signatures or Interactive Menu and click "Add to Tray" to curate your favorite selections.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-[#71717A] pb-2 border-b border-[#18181B]/5">
                  <span>Selected Dishes ({trayItems.length})</span>
                  <button
                    onClick={onClearTray}
                    className="text-red-600 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {trayItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#18181B]/5 flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              item.type === 'veg' ? 'bg-emerald-600' : 'bg-red-600'
                            }`}
                          />
                          <h5 className="font-bold text-xs text-[#18181B]">{item.name}</h5>
                        </div>
                        <div className="text-[11px] font-semibold text-[#52525B] mt-1 tabular-nums">
                          {item.price}
                        </div>
                        <div className="text-[10px] text-[#71717A] mt-0.5">{item.category}</div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-[#71717A] hover:text-red-600 transition-colors"
                        title="Remove dish from tray"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
                  <strong className="block mb-0.5">Presentation Note:</strong>
                  This Tasting Tray is a demonstration feature allowing prospective diners to test table pre-ordering or send inquiries directly to the restaurant desk.
                </div>
              </>
            )}
          </div>

          {/* Footer Actions */}
          {trayItems.length > 0 && (
            <div className="p-6 bg-[#FAF7F2] border-t border-[#18181B]/10 space-y-3">
              <button
                onClick={handleWhatsAppPreOrder}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire Tray via WhatsApp [Sample]</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="w-full py-3 px-4 bg-[#18181B] hover:bg-[#E76F51] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <span>Reserve Table for this Selection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
