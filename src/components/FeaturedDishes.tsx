import React from 'react';
import { Sparkles, Plus, Check, Eye } from 'lucide-react';
import { SIGNATURE_DISHES, MenuItem } from '../data/restaurantData';

interface FeaturedDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToTray: (dish: MenuItem) => void;
  trayItemIds: string[];
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({
  onSelectDish,
  onAddToTray,
  trayItemIds,
}) => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#18181B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#E76F51] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chef's Marquee Signatures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#18181B] tracking-tight">
            Crafted with Slow Fires & Soul
          </h2>
          <p className="mt-3 text-base text-[#52525B] leading-relaxed">
            Every dish at JB's Kitchen represents our culinary philosophy—slow simmering, fresh whole spices, and time-honored North Indian technique.
          </p>
        </div>

        {/* 4 Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SIGNATURE_DISHES.map((dish) => {
            const isInTray = trayItemIds.includes(dish.id);

            return (
              <div
                key={dish.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#18181B]/8 hover:border-[#18181B]/20 dish-card-lift"
              >
                {/* Dish Media Slot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE3]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Dietary badge standard Indian icon */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded shadow-sm flex items-center gap-1.5 text-[11px] font-medium">
                    <span
                      className={`w-2.5 h-2.5 border flex items-center justify-center p-0.5 rounded-[2px] ${
                        dish.type === 'veg' ? 'border-emerald-700' : 'border-red-700'
                      }`}
                      title={dish.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          dish.type === 'veg' ? 'bg-emerald-700' : 'bg-red-700'
                        }`}
                      />
                    </span>
                    <span className={dish.type === 'veg' ? 'text-emerald-800' : 'text-red-800'}>
                      {dish.type === 'veg' ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Spiciness Level Tag */}
                  <div className="absolute top-3 right-3 bg-[#18181B]/80 text-[#FAF7F2] text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
                    {dish.spiciness} Spice
                  </div>
                </div>

                {/* Dish Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-display text-xl font-bold text-[#18181B] group-hover:text-[#E76F51] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                    </div>

                    {/* Sample Price Indicator */}
                    <div className="text-sm font-semibold text-[#18181B] tabular-nums mb-3">
                      {dish.price}
                    </div>

                    <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Pairing hint */}
                    {dish.pairingSuggestion && (
                      <p className="text-[11px] text-[#E76F51] font-medium bg-[#FAF7F2] p-2 rounded-lg border border-[#18181B]/5 mb-4">
                        💡 {dish.pairingSuggestion}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-[#18181B]/5 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-[#18181B] bg-[#F2ECE3] hover:bg-[#E7DFD3] rounded-lg transition-colors"
                      title="View dish ingredients and culinary details"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#52525B]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onAddToTray(dish)}
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
                        isInTray
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                          : 'bg-[#18181B] text-white hover:bg-[#E76F51]'
                      }`}
                      title={isInTray ? 'Added to tasting tray' : 'Add to demo tasting tray'}
                    >
                      {isInTray ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
