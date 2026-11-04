import React, { useState, useMemo } from 'react';
import { Search, Flame, Eye, Plus, Check, Filter } from 'lucide-react';
import { FULL_MENU, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToTray: (dish: MenuItem) => void;
  trayItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onAddToTray,
  trayItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Starters' | 'Main Course' | 'Breads' | 'Beverages'>('Starters');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Starters', 'Main Course', 'Breads', 'Beverages'] as const;

  const filteredDishes = useMemo(() => {
    return FULL_MENU.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;

      // Dietary match
      const dietMatch =
        dietFilter === 'all' ||
        (dietFilter === 'veg' && item.type === 'veg') ||
        (dietFilter === 'non-veg' && item.type === 'non-veg');

      // Search query match
      const queryMatch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase())));

      return categoryMatch && dietMatch && queryMatch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#FAF7F2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#E76F51] mb-2">
            The Culinary Repertoire
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#18181B] tracking-tight">
            Interactive Menu
          </h2>
          <p className="mt-3 text-base text-[#52525B] leading-relaxed">
            Select a category to explore our authentic recipes. All prices and preparation notes shown below are editable sample representations for JB's Kitchen.
          </p>
        </div>

        {/* Filter Toolbar: Category Tabs + Search Bar + Dietary Filter */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs: Clean segmented buttons with click handlers */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#18181B] text-[#FAF7F2] shadow-md'
                    : 'bg-white text-[#52525B] hover:text-[#18181B] hover:bg-[#F2ECE3] border border-[#18181B]/8'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Dietary Filter Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, spices, gravies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white rounded-xl border border-[#18181B]/10 focus:outline-none focus:ring-2 focus:ring-[#E76F51] text-[#18181B] placeholder-[#71717A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A] hover:text-[#18181B]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-[#18181B]/10 w-full sm:w-auto justify-center">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  dietFilter === 'all'
                    ? 'bg-[#18181B] text-white shadow-sm'
                    : 'text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                All Dishes
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                <span>Veg Only</span>
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  dietFilter === 'non-veg'
                    ? 'bg-red-800 text-white shadow-sm'
                    : 'text-red-800 hover:bg-red-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-[#71717A] mb-6 max-w-7xl mx-auto px-1">
          <span>
            Showing <strong className="text-[#18181B]">{filteredDishes.length}</strong> items in{' '}
            <span className="font-semibold">{activeCategory}</span>
          </span>
          <span className="text-[11px] text-[#A1A1AA]">
            Note: All prices are demo placeholders
          </span>
        </div>

        {/* Dish Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#18181B]/15 max-w-lg mx-auto">
            <Filter className="w-8 h-8 text-[#A1A1AA] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#18181B]">No dishes matched your criteria</h3>
            <p className="text-xs text-[#71717A] mt-1 mb-4">
              Try adjusting your search terms or dietary filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="px-4 py-2 text-xs font-medium bg-[#18181B] text-white rounded-lg hover:bg-[#E76F51] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => {
              const isInTray = trayItemIds.includes(dish.id);

              return (
                <div
                  key={dish.id}
                  className="bg-white rounded-2xl p-6 border border-[#18181B]/8 hover:border-[#18181B]/20 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Header with Title & Dietary Symbol */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        {/* Indian Veg / Non-veg food symbol */}
                        <span
                          className={`w-3.5 h-3.5 border flex items-center justify-center p-0.5 rounded-[3px] shrink-0 ${
                            dish.type === 'veg' ? 'border-emerald-700' : 'border-red-700'
                          }`}
                          title={dish.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              dish.type === 'veg' ? 'bg-emerald-700' : 'bg-red-700'
                            }`}
                          />
                        </span>
                        <h3 className="font-display text-xl font-bold text-[#18181B] group-hover:text-[#E76F51] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                      </div>
                    </div>

                    {/* Price & Spice Indicator */}
                    <div className="flex items-center gap-3 text-xs mb-3">
                      <span className="font-semibold text-base text-[#18181B] tabular-nums">
                        {dish.price}
                      </span>
                      <span className="text-[#A1A1AA]">·</span>
                      <span className="flex items-center gap-1 text-[#52525B]">
                        <Flame className="w-3 h-3 text-[#E76F51]" />
                        <span>{dish.spiciness}</span>
                      </span>
                      {dish.isSignature && (
                        <>
                          <span className="text-[#A1A1AA]">·</span>
                          <span className="text-[#E76F51] font-semibold text-[11px]">Signature</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#52525B] leading-relaxed line-clamp-3 mb-4">
                      {dish.description}
                    </p>

                    {/* Ingredients summary */}
                    {dish.ingredients && (
                      <div className="text-[11px] text-[#71717A] mb-4">
                        <span className="font-medium text-[#18181B]">Ingredients: </span>
                        <span>{dish.ingredients.join(', ')}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="pt-3 border-t border-[#18181B]/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-[#52525B] hover:text-[#18181B] hover:bg-[#FAF7F2] rounded-lg transition-colors"
                      title="View full recipe & pairing notes"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onAddToTray(dish)}
                      className={`inline-flex items-center gap-1.5 py-1.5 px-3.5 text-xs font-semibold rounded-lg transition-colors ${
                        isInTray
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                          : 'bg-[#18181B] text-white hover:bg-[#E76F51]'
                      }`}
                    >
                      {isInTray ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Tray</span>
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
