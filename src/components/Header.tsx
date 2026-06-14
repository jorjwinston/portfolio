import React from 'react';
import { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/30 backdrop-blur-md border-b border-white/[0.03] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex space-x-8 md:space-x-12">
          {([
            { id: Section.ABOUT, label: 'ABOUT' },
            { id: Section.WORKS, label: 'WORKS' },
            { id: Section.CONTACT, label: 'CONTACT' },
          ] as const).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative font-mono text-xs md:text-[13px] tracking-widest font-bold py-2 transition-all duration-300 select-none outline-none cursor-pointer ${
                  isActive ? 'text-electric-cyan' : 'text-neutral-silver/60 hover:text-neutral-silver'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-cyan shadow-[0_2px_8px_rgba(0,242,255,0.4)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Start Project Button */}
        <div>
          <button
            onClick={() => onNavigate(Section.CONTACT)}
            className="bg-electric-cyan text-surface font-mono font-bold text-xs md:text-[13px] tracking-widest px-5 md:px-7 py-3 transition-all duration-300 hover-invert select-none cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(0,242,255,0.15)]"
            style={{ borderRadius: '0px' }}
          >
            START PROJECT
          </button>
        </div>
      </div>
    </header>
  );
};
