/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Section } from './types';
import { Header } from './components/Header';
import { SplashSection } from './components/SplashSection';
import { AboutSection } from './components/AboutSection';
import { WorksSection } from './components/WorksSection';
import { ContactSection } from './components/ContactSection';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Relaxing3DBackground } from './components/Relaxing3DBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.SPLASH);

  // Smooth scroll click navigations
  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      // Calculate top padding scroll-offset for header
      const yOffset = -20; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // IntersectionObserver to dynamically highlight dots/nav lines on active view scroll
  useEffect(() => {
    const sections = [Section.SPLASH, Section.ABOUT, Section.WORKS, Section.CONTACT];
    
    // Set viewport focal margins trigger (when sections occupy the central window focus)
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', 
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as Section;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090c] selection:bg-electric-cyan text-on-surface overflow-x-hidden pt-0 selection:text-surface">
      {/* Dynamic Relaxing 3D Interactive Background */}
      <Relaxing3DBackground />

      {/* Ambient background noise layer for retro brutalist grain */}
      <div className="fixed inset-0 dot-grid opacity-[0.10] pointer-events-none z-40" />

      {/* Structured Floating Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Stacked Vertical Sections (rendered relatively to sit on top of background) */}
      <main className="w-full relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <SplashSection onLearnMore={() => handleNavigate(Section.ABOUT)} />
        </div>
        <div className="pointer-events-auto">
          <AboutSection onContactClick={() => handleNavigate(Section.CONTACT)} />
        </div>
        <div className="pointer-events-auto">
          <WorksSection />
        </div>
        <div className="pointer-events-auto">
          <ContactSection />
        </div>
      </main>

      {/* Floating dot indicators */}
      <ScrollIndicator activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  );
}
