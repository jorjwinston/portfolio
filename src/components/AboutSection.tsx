import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../types';
import { services } from '../data';
import { Hexagon, Globe, Film, TrendingUp, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  // Map icons
  const getIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-electric-cyan group-hover:text-radioactive-lime transition-colors duration-300 mr-3";
    switch (iconName) {
      case 'hexagon':
        return <Hexagon className={iconClass} strokeWidth={1.5} />;
      case 'globe':
        return <Globe className={iconClass} strokeWidth={1.5} />;
      case 'video':
        return <Film className={iconClass} strokeWidth={1.5} />;
      case 'trending-up':
        return <TrendingUp className={iconClass} strokeWidth={1.5} />;
      default:
        return <Hexagon className={iconClass} strokeWidth={1.5} />;
    }
  };

  return (
    <section
      id={Section.ABOUT}
      className="relative w-full bg-surface-container-lowest/75 backdrop-blur-md pt-32 pb-44 px-6 md:px-20 selection:bg-electric-cyan overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- PART 1: CORE ABOUT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-48">
          
          {/* Left Column: Photographer B&W Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[380px] overflow-hidden bg-neutral-900 group border border-white/[0.03]"
              style={{ borderRadius: '0px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                alt="Studio Void Photographer"
                referrerPolicy="no-referrer"
                className="w-full h-auto grayscale object-cover transition-all duration-750 scale-[1.01] group-hover:scale-[1.05] group-hover:grayscale-0 duration-500"
              />
              {/* Outer corner markings for a tactical viewfinder feel */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/20" />
              {/* Dynamic technical metadata overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 py-0.5 border border-white/10 rounded-none text-[8px] font-mono tracking-widest text-[#849495]/60">
                REC [B_O_S_S] 5.6F
              </div>
            </motion.div>
          </div>

          {/* Right Column: Descriptions & Services Grid */}
          <div className="lg:col-span-7 flex flex-col items-start pt-4">
            
            {/* White Tall Rectangular Accent Ribbon */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-5 h-16 bg-[#F4F4F9] mb-10 origin-top"
            />

            {/* Main Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-[20px] md:text-[23px] font-normal leading-relaxed text-neutral-silver/90 max-w-[580px] mb-8"
            >
              specialize in translating complex digital logic into visceral visual experiences. My practice sits at the intersection of brutalist architecture and vaporwave futurism, where every pixel is a deliberate choice in the construction of digital space.
            </motion.p>

            {/* Statement Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans italic text-sm md:text-md text-[#849495]/70 max-w-[500px] mb-16 pl-4 border-l border-[#849495]/20"
            >
              "Design is not a solution, it's a statement of existence within the void."
            </motion.p>

            {/* Core Services Section */}
            <div className="w-full max-w-[580px]">
              <span className="block font-mono text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-radioactive-lime mb-6">
                CORE SERVICES
              </span>

              {/* 2x2 Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group border border-white/[0.04] bg-[#1a1c1f]/40 h-14 px-4 flex items-center justify-between select-none hover:border-electric-cyan/40 hover:bg-[#1a1c1f]/80 transition-all duration-300"
                    style={{ borderRadius: '0px' }}
                  >
                    <div className="flex items-center">
                      {getIcon(service.iconName)}
                      <span className="font-mono text-[11px] md:text-[12px] font-bold tracking-widest text-[#F4F4F9]/95 text-ellipsis overflow-hidden whitespace-nowrap max-w-[160px] sm:max-w-none">
                        {service.name}
                      </span>
                    </div>
                    {/* Tiny neon layout dot */}
                    <div className="w-1 h-1 bg-[#849495]/20 group-hover:bg-electric-cyan transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Let's Talk button */}
            <button
              onClick={onContactClick}
              className="group flex items-center space-x-3 font-syne text-[18px] md:text-[22px] font-bold tracking-wide mt-12 hover:text-electric-cyan transition-colors duration-300 cursor-pointer outline-none select-none text-neutral-silver"
            >
              <span>LET'S TALK</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                ➔
              </motion.span>
            </button>
          </div>
        </div>

        {/* --- PART 2: BEYOND THE PIXEL --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Cyber Glitch SYSTEM_FAILURE_IS_A_FEATURE Image Block */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[380px] aspect-square overflow-hidden border border-white/[0.05] group select-none shadow-[0_5px_25px_rgba(0,0,0,0.5)] cursor-pointer"
              style={{ borderRadius: '0px' }}
            >
              {/* Abstract cyber backdrop texture */}
              <div className="absolute inset-0 z-0 bg-[#0f1115]">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Neon Grid Cyber Background"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mix-blend-color-dodge opacity-50 grayscale hover:grayscale-0 duration-500 transition-all scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-1" />
                {/* Tech scanlines */}
                <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
              </div>

              {/* Dynamic HTML/CSS High-Contrast Glitch text overlay matching Image 5 completely */}
              <div className="absolute inset-x-0 inset-y-0 z-10 flex flex-col justify-center px-6">
                <span className="font-mono text-[9px] md:text-[10px] text-[#849495]/40 tracking-wider mb-2">
                  [SYSTEM_INTERCEPT_INIT]
                </span>
                
                <h3 className="font-mono text-[24px] sm:text-[28px] font-bold leading-[1.1] text-white tracking-tighter">
                  <span className="relative inline-block text-white">
                    SYSTEM_FAILURE_
                  </span>
                  <br />
                  <span className="relative inline-block text-electric-cyan shadow-glow">
                    IS_A_FEATURE_
                  </span>
                </h3>
                
                <span className="mt-4 font-mono text-[8px] text-[#849495]/30 tracking-widest leading-none">
                  CODE_STACK_STORES / COMP_SYS.D : 0
                </span>
                
                {/* Visualizer bars bottom */}
                <div className="absolute bottom-4 left-6 flex space-x-1 items-end h-4">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-electric-cyan"
                      animate={{ height: ['20%', '80%', '20%'] }}
                      transition={{ duration: 1 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: "BEYOND THE PIXEL" Large Heading */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-syne text-[40px] sm:text-[50px] md:text-[66px] font-extrabold uppercase leading-[1.0] text-neutral-silver tracking-tight max-w-[600px] mb-8"
            >
              BEYOND <br />
              <span className="text-white">THE PIXEL</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-[15px] md:text-[16px] leading-[1.6] text-[#849495]/90 max-w-[540px] border-t border-white/[0.05] pt-8"
            >
              My process is iterative and experimental. I don't just build websites; I craft digital environments that demand engagement. Using a mix of high-contrast interactions and rhythmic non-linear reading paths, I ensure your brand doesn't just speak—it echoes.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
};
