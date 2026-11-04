import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const PresentationBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#18181B] text-[#FAF7F2] text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <Info className="w-4 h-4 text-[#E76F51] shrink-0" />
          <p className="truncate text-[11px] sm:text-xs">
            <strong className="text-white">Restaurant Concept Demo:</strong> JB's Kitchen (Phase 5, Mohali, Punjab). All pricing, hours, reviews & phone numbers are sample editable placeholders.
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-white/60 hover:text-white shrink-0 p-1 rounded hover:bg-white/10 transition-colors"
          aria-label="Dismiss banner"
          title="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
