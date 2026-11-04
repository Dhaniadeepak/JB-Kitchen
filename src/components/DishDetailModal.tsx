import React from 'react';
import { X, Flame, Plus, Check, Sparkles, ChefHat } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToTray: (dish: MenuItem) => void;
  isInTray: boolean;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToTray,
  isInTray,
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#18181B]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#18181B]/10 overflow-hidden transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-[#18181B] rounded-full shadow-md transition-colors"
          aria-label="Close Dish Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        {dish.image && (
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F2ECE3]">
            <img
              src={dish.image}
              alt={dish.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3.5 h-3.5 border flex items-center justify-center p-0.5 rounded-[3px] bg-white ${
                    dish.type === 'veg' ? 'border-emerald-700' : 'border-red-700'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      dish.type === 'veg' ? 'bg-emerald-700' : 'bg-red-700'
                    }`}
                  />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
                  {dish.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} · {dish.category}
                </span>
              </div>
              <span className="text-lg font-bold tabular-nums bg-[#18181B]/80 px-3 py-1 rounded-lg backdrop-blur-sm">
                {dish.price}
              </span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {dish.isSignature && (
                <span className="text-xs font-semibold text-[#E76F51] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Chef's Signature</span>
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B]">
              {dish.name}
            </h3>
            <div className="flex items-center gap-3 text-xs text-[#52525B] mt-2">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#E76F51]" />
                <span>Spice Level: <strong>{dish.spiciness}</strong></span>
              </span>
              <span>·</span>
              <span>Authentic North Indian Style</span>
            </div>
          </div>

          <p className="text-sm text-[#52525B] leading-relaxed">
            {dish.description}
          </p>

          {/* Ingredients list */}
          {dish.ingredients && (
            <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#18181B]/5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#18181B] uppercase tracking-wider mb-2">
                <ChefHat className="w-4 h-4 text-[#E76F51]" />
                <span>Culinary Key Ingredients</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-[#18181B] bg-white px-2.5 py-1 rounded-md border border-[#18181B]/10 font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pairing Recommendation */}
          {dish.pairingSuggestion && (
            <div className="text-xs text-[#18181B] bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-start gap-2">
              <span className="text-base">✨</span>
              <div>
                <strong className="block text-amber-900 font-semibold">Tasting Recommendation:</strong>
                <span className="text-amber-800">{dish.pairingSuggestion}</span>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              onClick={() => onAddToTray(dish)}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow ${
                isInTray
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                  : 'bg-[#18181B] text-white hover:bg-[#E76F51]'
              }`}
            >
              {isInTray ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Item in Tasting Tray</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Tasting Tray</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 text-xs font-medium text-[#52525B] hover:text-[#18181B] bg-[#FAF7F2] hover:bg-[#F2ECE3] rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
