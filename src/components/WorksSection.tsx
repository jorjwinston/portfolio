import React from 'react';
import { motion } from 'motion/react';
import { Section, Project } from '../types';
import { projects } from '../data';
import { Eye, ExternalLink } from 'lucide-react';

export const WorksSection: React.FC = () => {
  // Renders the specific Mock IELTS vector poster inside HTML to avoid blurry low-res imagery
  const renderIeltsPoster = () => {
    return (
      <div className="w-full h-full bg-[#E64A19] relative flex flex-col justify-between p-6 overflow-hidden select-none">
        {/* Abstract vector wave layers in the background matching the visual of Image 3 */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
            <path d="M0 100 C 150 150, 250 50, 400 120 L400 300 L0 300 Z" fill="white" />
            <path d="M0 180 C 120 200, 280 120, 400 190 L400 300 L0 300 Z" fill="yellow" />
          </svg>
        </div>

        {/* Top Header Row of Poster */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex items-center space-x-2">
            {/* Book icon */}
            <div className="w-5 h-5 bg-white text-[#E64A19] flex items-center justify-center font-bold text-[10px] rounded-sm">
              R
            </div>
            <span className="font-sans font-bold text-[10px] tracking-widest text-[#FFF]">
              REGISTON O`QUV MARKAZI
            </span>
          </div>
          <span className="font-mono text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-none font-bold">
            MOCK EXAM
          </span>
        </div>

        {/* Poster Main Body Copy */}
        <div className="relative z-10 my-auto text-left flex flex-col pt-2">
          <h4 className="font-syne text-[30px] sm:text-[40px] font-extrabold text-white leading-none tracking-tight">
            MOCK
          </h4>
          <h4 className="font-syne text-[36px] sm:text-[46px] font-extrabold text-yellow-300 leading-none tracking-tight mt-1">
            IELTS // CEFR
          </h4>
          
          <div className="flex items-center mt-4 space-x-2">
            <span className="font-mono text-[11px] font-bold text-white bg-black/40 px-2.5 py-1">
              21-sentabr 9:00
            </span>
          </div>
        </div>

        {/* Poster Footer Row */}
        <div className="relative z-10 flex items-end justify-between pt-4 border-t border-white/20">
          <div>
            <span className="block font-sans text-[8px] text-white/70 tracking-wider">
              REGISTRATION ACTIVE
            </span>
            <span className="font-mono text-[13px] font-extrabold text-white">
              Samarkand Node
            </span>
          </div>
          
          {/* Radioactive lime / yellow circle badge */}
          <div className="bg-[#ccff00] text-black w-14 h-14 rounded-full flex flex-col items-center justify-center font-syne font-bold leading-none transform rotate-[-12deg] shadow-lg">
            <span className="text-[10px] tracking-tighter">100%</span>
            <span className="text-[9px] uppercase tracking-widest">TEKIN</span>
          </div>
        </div>
      </div>
    );
  };

  // Renders the custom Mr. Robot 8K high-resolution poster
  const renderMrRobotPoster = () => {
    return (
      <div className="w-full h-full bg-[#0a0505] relative flex overflow-hidden select-none font-mono">
        {/* Left Vertical Letter Column */}
        <div className="w-[18%] md:w-[22%] bg-black h-full border-r border-[#ff0000]/25 flex flex-col justify-center items-center py-6 text-center select-none z-20">
          <div className="flex flex-col space-y-[4%] sm:space-y-[8%] md:space-y-[12%] text-white font-extrabold text-[24px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-none tracking-tighter">
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>M</span>
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>R</span>
            <div className="h-2"></div>
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>R</span>
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>O</span>
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>B</span>
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>O</span>
            <span className="text-[#ff0505] font-syne select-none" style={{ textShadow: '0 0 10px rgba(255, 5, 5, 0.4)' }}>T</span>
          </div>
        </div>

        {/* Poster Visualizer Right Pane */}
        <div className="flex-1 h-full relative bg-black flex flex-col overflow-hidden z-10">
          {/* Inner Red Window Panel for background portraits */}
          <div className="absolute top-0 right-0 left-0 h-[50%] bg-[#cc0000] z-0 overflow-hidden flex justify-around items-center border-b border-[#ff0000]/30">
            {/* Red Portrait Right */}
            <div className="w-[45%] h-full relative scale-x-[-1]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Rami_Malek_in_2015.jpg"
                alt="Elliot Backdrop Right"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-125 contrast-200 mix-blend-multiply opacity-95 scale-[1.2] translate-y-2"
              />
              <div className="absolute inset-0 bg-[#cc0000]/10 mix-blend-color animate-pulse" />
            </div>

            {/* Red Neon Glow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
          </div>

          {/* Foreground Elliot in dark black hoodie, positioning beautifully on top */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] z-20 flex justify-center items-end overflow-hidden">
            <div className="relative w-full h-full flex justify-center items-end">
              {/* Dynamic Overlay Shadows for depth blending */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10" />
              
              {/* Main Elliot Hoodie portrait */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Rami_Malek_in_2015.jpg"
                alt="Elliot Foreground"
                referrerPolicy="no-referrer"
                className="w-[85%] h-[95%] object-cover grayscale contrast-[1.4] brightness-[0.70] scale-[1.4] translate-y-4 md:translate-y-8 z-0"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                }}
              />
              
              {/* Dark subtle vignette/shading around the head mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent z-20" />
            </div>
          </div>

          {/* Professional Upscaled Spec HUD Overlay */}
          <div className="absolute bottom-4 right-4 z-30 flex flex-col items-end text-right font-mono text-[8px] md:text-[10px] text-white/50 tracking-wider space-y-0.5 bg-black/70 backdrop-blur-md p-2 border border-white/5">
            <span className="text-[#ff2a2a] font-bold">[FSOCIETY TRANSMISSION]</span>
            <span>RES_STABLE: 7680x4320 (8K_UHD)</span>
            <span>RENDERER: NEON_RASTER_V3</span>
            <span>©USA_NETWORK_REM_2026</span>
          </div>

          {/* Interactive Scanlines overlay */}
          <div className="absolute inset-0 scanlines opacity-15 mix-blend-overlay pointer-events-none z-20" />
          
          {/* Subtle noise mesh on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0000]/5 to-[#ff0000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-25" />
        </div>
      </div>
    );
  };

  // Renders the custom Tashkent TV Tower Starry Void poster
  const renderTvTowerPoster = () => {
    return (
      <div className="w-full h-full bg-[#040612] relative flex flex-col justify-between p-6 overflow-hidden select-none font-mono">
        {/* Sky Background Stars and nebula */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d163a] via-[#040612] to-[#040612] z-0" />
        
        {/* Sparkle starry indicators */}
        <div className="absolute inset-0 z-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Multi starry coordinate dots */}
            <circle cx="15" cy="20" r="0.3" fill="white" className="animate-[pulse_1.5s_infinite]" />
            <circle cx="85" cy="15" r="0.5" fill="white" className="animate-[pulse_2.5s_infinite]" />
            <circle cx="45" cy="35" r="0.4" fill="white" className="animate-[pulse_1.8s_infinite]" />
            <circle cx="70" cy="45" r="0.2" fill="white" />
            <circle cx="28" cy="60" r="0.6" fill="#7ad0ff" className="animate-[pulse_3s_infinite]" />
            <circle cx="92" cy="75" r="0.3" fill="white" />
            <circle cx="10" cy="80" r="0.4" fill="white" className="animate-[pulse_2s_infinite]" />
            <circle cx="60" cy="12" r="0.5" fill="#ffd57a" className="animate-[pulse_2.2s_infinite]" />
            {/* Bigger bright stars with SVG glare path */}
            <path d="M50 8 L50 12 M48 10 L52 10" stroke="white" strokeWidth="0.25" opacity="0.6" />
            <path d="M85 30 L85 34 M83 32 L87 32" stroke="white" strokeWidth="0.25" opacity="0.8" className="animate-pulse" />
          </svg>
        </div>

        {/* Ambient celestial grid */}
        <div className="absolute inset-0 border border-white/[0.02] z-0 pointer-events-none" />

        {/* Poster Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2">
            <span className="font-sans font-bold text-[10px] tracking-widest text-white">
              TASHKENT METROPOLIS NODE
            </span>
          </div>
          <span className="font-mono text-[8px] bg-electric-cyan/10 text-electric-cyan px-2 py-0.5 border border-electric-cyan/20 rounded-none font-bold">
            LAT: 41.3439° N
          </span>
        </div>

        {/* TV Tower SVG vector in center */}
        <div className="absolute inset-x-0 bottom-0 h-[75%] z-10 flex justify-center items-end pointer-events-none">
          <svg className="w-[180px] h-[95%] drop-shadow-[0_0_25px_rgba(234,179,8,0.3)]" viewBox="0 0 100 200" fill="none">
            {/* Sky beams shooting from observation deck */}
            <path d="M50 82 L20 0 L80 0 Z" fill="url(#beam-gradient)" className="opacity-15" />
            <path d="M50 82 L35 0 L65 0 Z" fill="url(#beam-gradient-glowing)" className="opacity-25" style={{ mixBlendMode: 'screen' }} />

            {/* Glowing halos around observation deck */}
            <circle cx="50" cy="82" r="14" fill="none" stroke="#2563eb" strokeWidth="0.5" className="opacity-40 animate-pulse" />
            <circle cx="50" cy="86" r="10" fill="none" stroke="#eab308" strokeWidth="0.5" className="opacity-30" />

            {/* Tower Spire */}
            <line x1="50" y1="5" x2="50" y2="80" stroke="#f4f4f5" strokeWidth="1" />
            <circle cx="50" cy="5" r="1.5" fill="#ef4444" className="animate-[pulse_1s_infinite]" />

            {/* Upper Lattice Mast sleeves */}
            <path d="M48 40 L52 40 L51 80 L49 80 Z" fill="#71717a" />
            <line x1="48" y1="50" x2="52" y2="60" stroke="#a1a1aa" strokeWidth="0.5" />
            <line x1="52" y1="50" x2="48" y2="60" stroke="#a1a1aa" strokeWidth="0.5" />
            <line x1="48" y1="60" x2="52" y2="70" stroke="#a1a1aa" strokeWidth="0.5" />
            <line x1="52" y1="60" x2="48" y2="70" stroke="#a1a1aa" strokeWidth="0.5" />

            {/* Top Observation Sphere/Pod 2 */}
            <ellipse cx="50" cy="82" rx="6" ry="3.5" fill="#eab308" />
            {/* Observation Sphere/Pod 1 - Main Deck with glowing windows */}
            <path d="M42 84 L58 84 L59 89 L41 89 Z" fill="#1e293b" stroke="#eab308" strokeWidth="0.5" />
            {/* Illuminated windows */}
            <line x1="43" y1="86.5" x2="57" y2="86.5" stroke="#ffffff" strokeWidth="1" strokeDasharray="1.5 1" className="opacity-90 shadow-sm" />
            <ellipse cx="50" cy="90" rx="10" ry="2.5" fill="#3b82f6" />
            <line x1="41" y1="90" x2="59" y2="90" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="1 1" />

            {/* Center column shaft */}
            <line x1="49" y1="90" x2="49" y2="175" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="51" y1="90" x2="51" y2="175" stroke="#d4d4d8" strokeWidth="1.5" />
            {/* Center elevator tracks/stairs */}
            <line x1="50" y1="90" x2="50" y2="175" stroke="#eab308" strokeWidth="0.5" strokeDasharray="3 2" />

            {/* Mid-tower platforms */}
            <rect x="47" y="115" width="6" height="1.5" fill="#f59e0b" />
            <rect x="47" y="145" width="6" height="1.5" fill="#3b82f6" />

            {/* Iconic bottom support legs */}
            {/* Left curved leg */}
            <path d="M49 140 C43 155, 33 175, 25 195 L31 195 C37 178, 45 160, 49 150 Z" fill="#facc15" opacity="0.9" />
            {/* Right curved leg */}
            <path d="M51 140 C57 155, 67 175, 75 195 L69 195 C63 178, 55 160, 51 150 Z" fill="#facc15" opacity="0.9" />
            {/* Center leg */}
            <line x1="50" y1="145" x2="50" y2="195" stroke="#facc15" strokeWidth="2.5" />

            {/* Leg braces / cross struts */}
            <line x1="38" y1="172" x2="62" y2="172" stroke="#d4d4d8" strokeWidth="0.75" />
            <line x1="35" y1="182" x2="65" y2="182" stroke="#d4d4d8" strokeWidth="0.75" />
            <line x1="50" y1="140" x2="35" y2="182" stroke="#a1a1aa" strokeWidth="0.5" />
            <line x1="50" y1="140" x2="65" y2="182" stroke="#a1a1aa" strokeWidth="0.5" />

            {/* Ground interface glow */}
            <ellipse cx="50" cy="195" rx="30" ry="2" fill="#3b82f6" className="opacity-30 blur-[1px]" />

            <defs>
              <linearGradient id="beam-gradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beam-gradient-glowing" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Poster Body Info overlay */}
        <div className="relative z-20 my-auto text-left flex flex-col pt-1 pl-1">
          <h4 className="font-syne text-[22px] sm:text-[28px] font-extrabold text-white leading-none tracking-tight">
            VOID // CHRONO
          </h4>
          <h4 className="font-syne text-[24px] sm:text-[30px] font-extrabold text-[#ffd57a] leading-none tracking-tight mt-1">
            SKYLINE
          </h4>
          
          <div className="flex items-center mt-3">
            <span className="font-mono text-[9px] text-white/50 border border-white/10 px-1.5 py-0.5">
              HEIGHT: 375 METERS
            </span>
          </div>
        </div>

        {/* Poster Bottom Row Metadata */}
        <div className="relative z-10 flex items-end justify-between pt-4 border-t border-white/10">
          <div>
            <span className="block font-sans text-[7px] text-[#849495] tracking-[0.15em] uppercase">
              NODE: UZB_CENTRAL_01
            </span>
            <span className="font-mono text-[11px] font-extrabold text-white">
              Tashkent Tower
            </span>
          </div>

          <div className="flex flex-col items-end text-right font-mono text-[7px] text-white/40 space-y-0.5">
            <span>EXP_VOID_S_V2.0</span>
            <span>SHUTTER: 15.0s</span>
            <span>ISO 3200 // 24mm</span>
          </div>
        </div>
      </div>
    );
  };

  // Renders the esports action campaign "ZONANI OXIRIDA"
  const renderZonaniOxiridaPoster = () => {
    return (
      <div className="w-full h-full bg-[#08080c] relative flex flex-col justify-between p-6 overflow-hidden select-none font-mono">
        {/* Dynamic backdrop grid split */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(252,29,29,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,29,29,0.06)_1px,transparent_1px)] bg-[size:16px_16px] z-0 opacity-40 pointer-events-none" />
        
        {/* Fire Battleground explosion light glow on the left */}
        <div className="absolute left-0 bottom-0 top-0 w-[60%] bg-gradient-to-tr from-[#310707] via-[#a21c1c]/20 to-transparent z-0 opacity-90 blur-sm pointer-events-none animate-pulse" />
        
        {/* Poster Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#ef4444]/20 pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-rose-600 text-white flex items-center justify-center font-bold text-[8px]">
              ▶
            </div>
            <span className="font-sans font-bold text-[9px] tracking-widest text-[#FFF]">
              ESPORTS UZ CHAMPIONSHIP
            </span>
          </div>
          <span className="font-mono text-[8px] bg-[#ef4444]/20 border border-[#ef4444]/30 text-rose-400 px-1.5 py-0.5 rounded-none font-bold">
            LIVE MATCH
          </span>
        </div>

        {/* Character profile and radar HUD split */}
        <div className="relative z-10 my-auto flex flex-col justify-center h-full py-4 text-left select-none">
          <h4 className="font-sans font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-rose-500 to-amber-300 text-[26px] sm:text-[34px] md:text-[38px] leading-none drop-shadow-[0_2px_15px_rgba(239,68,68,0.4)]">
            ZONANI
          </h4>
          <h4 className="font-sans font-black italic tracking-tighter uppercase text-white text-[32px] sm:text-[40px] md:text-[46px] leading-none mt-1 drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
            OXIRIDA
          </h4>

          {/* Tactical map / radar viewport */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 h-28 border border-[#ef4444]/20 bg-black/50 p-1 rounded-none flex items-center justify-center z-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#22c55e" strokeWidth="0.25" opacity="0.3" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="#22c55e" strokeWidth="0.25" opacity="0.4" />
              <circle cx="50" cy="50" r="16" fill="none" stroke="#22c55e" strokeWidth="0.25" opacity="0.6" />
              <line x1="50" y1="2" x2="50" y2="98" stroke="#22c55e" strokeWidth="0.25" opacity="0.3" />
              <line x1="2" y1="50" x2="98" y2="50" stroke="#22c55e" strokeWidth="0.25" opacity="0.3" />

              {/* Blue zone ring */}
              <circle cx="45" cy="55" r="30" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="animate-pulse" />
              {/* Safe zone ring */}
              <circle cx="48" cy="51" r="18" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 1.5" />

              {/* Blinking Player Dot */}
              <circle cx="48" cy="51" r="1.5" fill="#f43f5e" className="animate-ping" />
              <circle cx="48" cy="51" r="1" fill="#f43f5e" />

              {/* Map topology */}
              <path d="M10 25 C30 20, 45 40, 50 60 C55 80, 80 85, 90 70" stroke="#22c55e" strokeWidth="0.5" fill="none" opacity="0.25" />
              <path d="M15 80 L35 70 L60 90" stroke="#22c55e" strokeWidth="0.5" fill="none" opacity="0.2" />

              {/* Target bracket */}
              <path d="M43 46 L43 43 L46 43" stroke="#22c55e" strokeWidth="0.5" fill="none" />
              <path d="M53 46 L53 43 L50 43" stroke="#22c55e" strokeWidth="0.5" fill="none" />
              <path d="M43 56 L43 59 L46 59" stroke="#22c55e" strokeWidth="0.5" fill="none" />
              <path d="M53 56 L53 59 L50 59" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          {/* Bald Tactical Man icon with glasses vector silhouette */}
          <div className="absolute left-[2%] bottom-[-15px] w-24 h-24 z-10 opacity-30 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <path d="M10 100 C10 80, 20 70, 35 68 C40 76, 60 76, 65 68 C80 70, 90 80, 90 100" fill="#ffffff" />
              <path d="M45 68 L48 78 L52 78 L55 68" fill="#bc775e" />
              <ellipse cx="50" cy="52" rx="14" ry="17" fill="#de987e" />
              <circle cx="35" cy="52" r="3" fill="#bc775e" />
              <circle cx="65" cy="52" r="3" fill="#bc775e" />
              <path d="M38 48 Q50 52 62 48" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M40 48 Q44 54 48 50 C48 44 40 44 40 48" fill="#000000" />
              <path d="M60 48 Q56 54 52 50 C52 44 60 44 60 48" fill="#000000" />
              <line x1="50" y1="72" x2="50" y2="95" stroke="#000000" strokeWidth="1" strokeDasharray="2 1" />
            </svg>
          </div>

          <div className="flex items-center mt-3 ml-1">
            <span className="font-mono text-[9px] bg-neutral-900 border border-white/10 px-2 py-0.5 text-neutral-400">
              SOLO VS SQUAD // LIVE
            </span>
          </div>
        </div>

        {/* Poster Bottom Row */}
        <div className="relative z-10 flex items-end justify-between pt-4 border-t border-t-rose-500/20">
          <div>
            <span className="block font-sans text-[7px] text-rose-500/70 tracking-[0.14em] uppercase">
              ZONE CLOCK: 00:45
            </span>
            <span className="font-mono text-[11px] font-extrabold text-white">
              SAB_ZONE_BATTLE
            </span>
          </div>

          <div className="flex flex-col items-end text-right font-mono text-[7px] text-white/40 space-y-0.5">
            <span className="text-rose-500 font-bold">ALIVE: [1/100]</span>
            <span>MAP: ERANGEL // CHR_05</span>
            <span>SURVIVAL: 99.8%</span>
          </div>
        </div>
      </div>
    );
  };

  // Renders the high-end wireframe graphics for experiments
  const renderPlaceholder = (project: Project) => {
    return (
      <div className="w-full h-full bg-[#181a1f] border border-white/[0.03] hover:border-electric-cyan/40 hover:bg-[#1f2127]/90 transition-all duration-300 flex flex-col justify-between p-6 relative group overflow-hidden">
        {/* Subtle diagonal grid lines for blueprint aesthetic */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="flex justify-between items-start z-10">
          <span className="font-mono text-[8px] text-[#849495]/40 tracking-widest uppercase">
            {project.type}
          </span>
          <span className="font-mono text-[9px] text-[#849495]/60">
            {project.year}_V.W
          </span>
        </div>

        {/* Centered 'img' text block as requested by screenshot details */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-10 h-10 border border-white/5 rounded-none flex items-center justify-center group-hover:border-electric-cyan/30 group-hover:scale-105 duration-300 transition-all">
            <span className="font-mono text-[10px] tracking-widest text-[#849495]/40 select-none uppercase group-hover:text-electric-cyan transition-colors">
              img
            </span>
          </div>
        </div>

        <div className="flex justify-between items-end z-10">
          <span className="font-mono text-[11px] font-bold text-neutral-silver/70 tracking-widest group-hover:text-[#F4F4F9] transition-colors">
            {project.title}
          </span>
          {/* Subtle outline tag */}
          <div className="text-[8px] font-mono border border-white/10 px-1 py-0.2 group-hover:border-electric-cyan/30 text-[#849495]/40 group-hover:text-electric-cyan">
            [RESERVED]
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id={Section.WORKS}
      className="relative w-full bg-[#111317]/80 backdrop-blur-md py-32 px-6 md:px-20 selection:bg-electric-cyan overflow-hidden"
    >
      {/* Decorative technical coordinate rules */}
      <div className="absolute left-0 top-0 w-24 h-full border-r border-white/[0.02] hidden xl:block" />
      <div className="absolute right-0 top-0 w-24 h-full border-l border-white/[0.02] hidden xl:block" />

      <div className="max-w-[1440px] mx-auto z-10 relative">
        
        {/* Headline Section */}
        <div className="flex flex-col items-start mb-24 max-w-2xl px-2">
          {/* Active ring indicator dot for screen 3 */}
          <div className="w-2.5 h-2.5 rounded-full border border-electric-cyan bg-electric-cyan/20 animate-pulse mb-6" />
          
          <h2 className="font-syne text-[55px] sm:text-[75px] md:text-[98px] font-extrabold uppercase leading-[0.95] tracking-tight text-white mb-6">
            WORKS
          </h2>
          
          <p className="font-sans text-[15px] md:text-[16px] text-[#849495]/90 leading-[1.6]">
            A collection of visual experiments and client collaborations, pushing the boundaries of digital craftsmanship through Neo-Brutalist aesthetics.
          </p>
        </div>

        {/* Asymmetrical Portfolio Grid */}
        <div className="flex flex-wrap gap-4 md:gap-[4%] md:gap-y-16 items-start justify-between">
          {projects.map((project, index) => {
            const hasCustomImage = project.imageUrl && 
              project.imageUrl !== 'MOCK_IELTS_CUSTOM_RENDER' && 
              project.imageUrl !== 'MR_ROBOT_POSTER_REMIX' &&
              project.imageUrl !== 'TV_TOWER_COSMIC_VOID' &&
              project.imageUrl !== 'ZONANI_OXIRIDA_BANNER';
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${project.widthClass} ${project.aspectClass} relative overflow-hidden group cursor-pointer border border-white/[0.03] h-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]`}
                style={{ borderRadius: '0px' }}
              >
                {/* 1. Placeholder Render */}
                {project.isPlaceholder && renderPlaceholder(project)}

                {/* 2. Registon IELTS Poster Render */}
                {project.imageUrl === 'MOCK_IELTS_CUSTOM_RENDER' && renderIeltsPoster()}

                {/* 3. Mr Robot Poster Render */}
                {project.imageUrl === 'MR_ROBOT_POSTER_REMIX' && renderMrRobotPoster()}

                {/* 4. Tashkent TV Tower Render */}
                {project.imageUrl === 'TV_TOWER_COSMIC_VOID' && renderTvTowerPoster()}

                {/* 5. Zonani Oxirida Render */}
                {project.imageUrl === 'ZONANI_OXIRIDA_BANNER' && renderZonaniOxiridaPoster()}

                {/* 6. Image Based Portfolio Card */}
                {hasCustomImage && (
                  <div className="w-full h-full relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale transition-all duration-750 scale-[1.01] group-hover:scale-[1.04] group-hover:grayscale-0 duration-500"
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-1" />

                    {/* View overlay */}
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface/30 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="w-12 h-12 bg-electric-cyan text-surface flex items-center justify-center font-bold">
                        <Eye className="w-5 h-5 stroke-[2.5px]" />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end text-left h-32 select-none">
                      <span className="font-mono text-[9px] text-electric-cyan tracking-widest font-bold uppercase mb-1">
                        {project.type}
                      </span>
                      <div className="flex justify-between items-end">
                        <h5 className="font-mono font-bold text-sm md:text-md text-white">
                          {project.title}
                        </h5>
                        <span className="font-mono text-[9px] text-[#849495] tracking-widest pb-0.5">
                          {project.year}_SL
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
