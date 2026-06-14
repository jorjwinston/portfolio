import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../types';

interface SplashSectionProps {
  onLearnMore: () => void;
}

export const SplashSection: React.FC<SplashSectionProps> = ({ onLearnMore }) => {
  return (
    <section
      id={Section.SPLASH}
      className="relative w-full h-[100vh] flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* Generative Luminous Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 bg-transparent overflow-hidden">
        {/* Ambient mesh 1 */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-950/25 blur-[120px] mix-blend-screen animate-glow-mesh-1"
          style={{ opacity: 0.7 }}
        />
        
        {/* Ambient mesh 2 */}
        <div 
          className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#002f35]/20 blur-[150px] mix-blend-screen animate-glow-mesh-2"
          style={{ opacity: 0.6 }}
        />

        {/* Ambient mesh 3 (Center subtle glowing pool) */}
        <div 
          className="absolute top-[20%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-[#001e22]/30 blur-[130px] mix-blend-screen animate-glow-mesh-3"
          style={{ opacity: 0.5 }}
        />

        {/* Technical dot overlay for tactile detail */}
        <div className="absolute inset-0 dot-grid opacity-[0.25]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111317]/10 to-[#111317]" />
      </div>

      {/* Floating Outline Circle / Hover ring on the Left */}
      <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 360, 0],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-electric-cyan flex items-center justify-center cursor-pointer group"
          style={{
            boxShadow: '0 0 15px rgba(0,242,255,0.1)'
          }}
          onClick={onLearnMore}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Monospaced visual coordinates details */}
        <span className="hidden md:block font-mono text-[9px] text-[#849495]/40 rotate-90 origin-left translate-x-2 translate-y-16 tracking-widest">
          EST_VOID_LN [40.12, 64.19]
        </span>
      </div>

      {/* Hero Welcome Text Block (Centered, delicate minimalist styling to balance grid) */}
      <div className="relative z-10 text-center max-w-xl px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Accent square element */}
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-electric-cyan mb-8" />
          
          <h1 className="font-syne text-[36px] md:text-[54px] font-extrabold uppercase leading-none tracking-tight text-neutral-silver selection:bg-electric-cyan">
            HELLO I'M <span className="text-electric-cyan">OTASH</span>
          </h1>
          
          <p className="font-mono text-xs md:text-[13px] tracking-[0.2em] text-[#849495] uppercase mt-4">
            BEYOND THE PIXEL // CANVASES OF CODE
          </p>
          
          {/* Scroll Down Hint Button */}
          <button
            onClick={onLearnMore}
            className="mt-14 group flex flex-col items-center cursor-pointer outline-none focus:outline-none"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#849495]/60 group-hover:text-electric-cyan transition-colors duration-300 mb-2 uppercase">
              ENTER THE VOID
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-neutral-silver/30 group-hover:bg-electric-cyan transition-colors duration-300"
            />
          </button>
        </motion.div>
      </div>
      
      {/* Aesthetic border coordinates */}
      <div className="absolute bottom-6 left-6 md:left-20 font-mono text-[9px] text-white/10 tracking-widest hidden md:block">
        NODE_RUN_ACTIVE : TRUE // PORT_ENTRY : 3000
      </div>
      <div className="absolute bottom-6 right-6 md:right-20 font-mono text-[9px] text-white/10 tracking-widest hidden md:block">
        ©2026_VOID_D_CRAFTSMANSHIP
      </div>
    </section>
  );
};
