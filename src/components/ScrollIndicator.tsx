import React from 'react';
import { Section } from '../types';

interface ScrollIndicatorProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ activeSection, onNavigate }) => {
  const pagerItems = [
    { id: Section.SPLASH, label: 'HOME' },
    { id: Section.ABOUT, label: 'ABOUT' },
    { id: Section.WORKS, label: 'WORKS' },
    { id: Section.CONTACT, label: 'CONTACT' },
  ] as const;

  return (
    <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4 select-none">
      {pagerItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group relative flex items-center justify-end font-mono outline-none focus:outline-none cursor-pointer"
          >
            {/* Tooltip text visible on hover */}
            <span className="absolute right-7 pr-1 text-[8.5px] font-bold tracking-widest text-[#849495] bg-surface-container-low/95 px-2 py-1 border border-white/5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap rounded-none">
              {item.label}
            </span>

            {/* Pagination Circle Dot */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Outer halo ring indicator for when selected */}
              <div
                className={`absolute w-3 h-3 rounded-full border border-electric-cyan opacity-0 transition-all duration-300 scale-50 ${
                  isActive ? 'opacity-100 scale-100' : 'group-hover:opacity-40 group-hover:scale-75'
                }`}
              />
              
              {/* Inner Solid core */}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-electric-cyan shadow-[0_0_8px_rgba(0,242,255,0.7)]' : 'bg-neutral-silver/30 group-hover:bg-neutral-silver'
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};
