import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, ContactForm } from '../types';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    connection: '',
    vision: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusLogs, setStatusLogs] = useState<string[]>([]);

  // Core Form Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const executeSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.connection || !form.vision) return;

    setIsSubmitting(true);
    setStatusLogs([]);

    // Fun terminal logs to simulate high-fidelity avant-garde telemetry
    const logs = [
      'INIT_TRANSMISSION : CONNECTING TO STUDIO_VOID_NODE',
      'ENCRYPTING P2P SIGNAL PACKETS (AES-256)...',
      'COMPOSING OUTGOING DIRECTIVE FOR SHAHRIYOROVOTAJON@GMAIL.COM...',
      'SIGNAL TRANSMITTED // COMPLETED',
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setStatusLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
          }, 800);
        }
      }, (index + 1) * 500);
    });
  };

  const handleReset = () => {
    setForm({ name: '', connection: '', vision: '' });
    setIsSuccess(false);
    setStatusLogs([]);
  };

  return (
    <section
      id={Section.CONTACT}
      className="relative w-full bg-[#111317]/85 backdrop-blur-md pt-32 pb-12 px-6 md:px-20 selection:bg-electric-cyan overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col justify-between min-h-[80vh]">
        
        {/* Main Title & Form Container */}
        <div className="w-full">
          
          {/* Main Display Title */}
          <div className="flex items-center space-x-3 mb-16">
            <div className="w-1.5 h-6 bg-radioactive-lime" />
            <h2 className="font-syne text-[30px] sm:text-[45px] md:text-[60px] font-extrabold uppercase leading-none tracking-tight text-[#F4F4F9]">
              COMMENCE A PROJECT
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <form onSubmit={executeSend} className="w-full max-w-[1020px] mb-28">
                
                {/* Row 1: STATUS & CONNECTION (Two columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
                  
                  {/* Status Block */}
                  <div className="flex flex-col items-start border-b border-white/10 focus-within:border-electric-cyan pb-3 transition-colors duration-300">
                    <span className="font-mono text-[9px] text-[#849495]/50 tracking-[0.2em] font-bold mb-3">
                      01 / STATUS
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="WHO ARE YOU?"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-none outline-none font-sans font-normal text-md md:text-lg tracking-wider text-white placeholder-white/20 uppercase"
                    />
                  </div>

                  {/* Connection Block */}
                  <div className="flex flex-col items-start border-b border-white/10 focus-within:border-electric-cyan pb-3 transition-colors duration-300">
                    <span className="font-mono text-[9px] text-[#849495]/50 tracking-[0.2em] font-bold mb-3">
                      02 / CONNECTION
                    </span>
                    <input
                      type="text"
                      name="connection"
                      value={form.connection}
                      onChange={handleInputChange}
                      placeholder="WHERE DO WE RE..."
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-none outline-none font-sans font-normal text-md md:text-lg tracking-wider text-white placeholder-white/20 uppercase"
                    />
                  </div>

                </div>

                {/* Row 2: VISION (Full width) */}
                <div className="flex flex-col items-start border-b border-white/10 focus-within:border-electric-cyan pb-3 mb-16 transition-colors duration-300">
                  <span className="font-mono text-[9px] text-[#849495]/50 tracking-[0.2em] font-bold mb-3">
                    03 / VISION
                  </span>
                  <input
                    type="text"
                    name="vision"
                    value={form.vision}
                    onChange={handleInputChange}
                    placeholder="DESCRIBE THE VOID YOU WISH TO FILL..."
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-none outline-none font-sans font-normal text-md md:text-lg tracking-wider text-white placeholder-white/20 uppercase"
                  />
                </div>

                {/* Submission and Active Transmit logs */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || !form.name || !form.connection || !form.vision}
                    className="bg-radioactive-lime text-surface font-mono font-bold text-xs md:text-[14px] tracking-[0.25em] px-14 py-4 uppercase transition-all duration-300 hover-invert-lime select-none cursor-pointer disabled:opacity-30 disabled:hover:shadow-none disabled:hover:bg-radioactive-lime disabled:hover:text-surface shadow-[0_0_15px_rgba(204,255,0,0.15)] w-full sm:w-auto"
                    style={{ borderRadius: '0px' }}
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'LAUNCH'}
                  </button>

                  {/* Simulated Terminal Telemetry Block */}
                  {statusLogs.length > 0 && (
                    <div className="flex-1 max-w-[400px] bg-black/60 border border-white/5 p-3 font-mono text-[9px] text-[#849495]/80 text-left space-y-1 select-none">
                      {statusLogs.map((log, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-electric-cyan mr-1.5">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </form>
            ) : (
              // Success block
              (() => {
                const subject = encodeURIComponent("STUDIO VOID: COMMENCE LAUNCH");
                const body = encodeURIComponent(`LAUNCH DETAILS\n------------------\nName: ${form.name}\nConnection: ${form.connection}\nVision: ${form.vision}\n\nSent from Central Node`);
                const mailtoUrl = `mailto:shahriyorovotajon@gmail.com?subject=${subject}&body=${body}`;

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="w-full max-w-[1020px] mb-28 border border-white/[0.05] bg-[#1a1c1f]/30 p-10 md:p-16 text-left relative flex flex-col items-start min-h-[350px]"
                  >
                    {/* Cyber success graphics */}
                    <div className="absolute top-4 right-4 font-mono text-[9px] text-electric-cyan/40">
                      RECEIPT_LN [OK_200]
                    </div>
                    
                    <div className="w-10 h-10 border border-electric-cyan rounded-full flex items-center justify-center font-mono text-electric-cyan font-bold text-lg mb-8 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                      ✓
                    </div>

                    <h3 className="font-syne text-[32px] md:text-[40px] font-extrabold uppercase leading-none text-white tracking-widest mb-6">
                      LAUNCH COMMENCED
                    </h3>

                    <p className="font-sans text-[15px] text-[#849495]/90 max-w-[600px] mb-4 leading-relaxed">
                      The launch configuration is compile ready! To finish transmittal, launch via your mail client to target address: <strong className="text-electric-cyan font-mono text-sm block sm:inline mt-1 sm:mt-0">shahriyorovotajon@gmail.com</strong>
                    </p>

                    {/* Main Action Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 my-6 w-full max-w-[600px]">
                      <a
                        href={mailtoUrl}
                        className="bg-[#CCFF00] text-black font-mono font-bold text-xs tracking-[0.25em] px-10 py-4 uppercase text-center transition-all duration-300 hover:bg-white hover:text-black shadow-[0_0_15px_rgba(204,255,0,0.25)] select-none"
                      >
                        OPEN SYSTEM MAIL CLIENT
                      </a>
                      
                      <button
                        onClick={() => {
                          const copyText = `Name: ${form.name}\nConnection: ${form.connection}\nVision: ${form.vision}`;
                          navigator.clipboard.writeText(copyText);
                        }}
                        className="border border-white/20 hover:border-white text-white font-mono font-bold text-[10px] tracking-[0.25em] px-8 py-4 uppercase transition-all duration-300 select-none bg-black/40 cursor-pointer"
                      >
                        COPY SPECIFICATIONS
                      </button>
                    </div>

                    <div className="bg-black/40 border border-white/5 p-4 rounded-none font-mono text-xs text-[#849495]/80 w-full max-w-[650px] mb-8 space-y-1 select-text">
                      <div className="text-[10px] text-white/30 tracking-widest uppercase mb-2 border-b border-white/5 pb-1 flex justify-between">
                        <span>COMPOSED SPECIFICATIONS</span>
                        <span className="text-emerald-500">READY</span>
                      </div>
                      <div><span className="text-white/40">TO:</span> shahriyorovotajon@gmail.com</div>
                      <div><span className="text-white/40">SUBJ:</span> STUDIO VOID: COMMENCE LAUNCH</div>
                      <div className="border-t border-white/5 my-2 pt-2 text-[11px] whitespace-pre-wrap leading-relaxed text-[#F4F4F9]/80">
{`Name: ${form.name}
Connection: ${form.connection}
Vision: ${form.vision}`}
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="font-mono text-xs text-electric-cyan hover:text-[#fff] transition-colors border-b border-electric-cyan/40 pb-0.5 cursor-pointer mt-2"
                    >
                      TRANSMIT ANOTHER ARCHITECTURE //
                    </button>
                  </motion.div>
                );
              })()
            )}
          </AnimatePresence>

          {/* --- PART 2: CONTACT DETAILS COLUMNS --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 border-t border-white/[0.05] pt-14 pb-20 select-none">
            
            {/* Studio Samarkand Node */}
            <div className="flex flex-col items-start text-left">
              <span className="font-mono text-[9px] text-[#849495]/40 tracking-[0.25em] font-bold mb-4 uppercase">
                STUDIO NODE
              </span>
              <span className="font-sans text-sm text-[#F4F4F9]/90 font-medium">Samarkand</span>
              <span className="font-sans text-sm text-[#849495]/70">Uzbekistan</span>
            </div>

            {/* Reach Out details */}
            <div className="flex flex-col items-start text-left">
              <span className="font-mono text-[9px] text-[#849495]/40 tracking-[0.25em] font-bold mb-4 uppercase">
                REACH OUT
              </span>
              <a 
                href="mailto:shahriyorovotajon@gmail.com" 
                className="font-mono text-sm text-electric-cyan hover:text-white transition-colors duration-300 border-b border-electric-cyan/20 pb-0.5"
              >
                shahriyorovotajon@gmail.com
              </a>
              <span className="font-mono text-[10px] text-[#849495]/40 mt-1">AVAILABLE // GMT+5</span>
            </div>

            {/* Social handles */}
            <div className="flex flex-col items-start text-left">
              <span className="font-mono text-[9px] text-[#849495]/40 tracking-[0.25em] font-bold mb-4 uppercase">
                SOCIAL FEED
              </span>
              <div className="flex space-x-6">
                <a
                  href="https://t.me/registon_de"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm text-[#849495]/80 hover:text-white transition-colors duration-300"
                >
                  Telegram
                </a>
                <a
                  href="https://instagram.com/r18_de"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm text-[#849495]/80 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Removed footer */}

      </div>
    </section>
  );
};
