import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sliders, Play, Pause, Activity, Eye, Compass, RefreshCw } from 'lucide-react';

enum VisualMode {
  WAVEFRONT = 'COSMIC WAVEFRONT',
  TORUS_KNOT = 'SACRED TORUS KNOT',
  STARDUST = 'STARDUST HELIX',
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  color?: string;
  size?: number;
}

export const Relaxing3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation parameters
  const [mode, setMode] = useState<VisualMode>(VisualMode.WAVEFRONT);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1);
  const [isInteractive, setIsInteractive] = useState<boolean>(true);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [lineDensity, setLineDensity] = useState<number>(0.3); // 0 to 1

  // Mouse interactivity coordinates (low-pass filter)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const timeRef = useRef<number>(0);

  // Generate initial points based on current mode
  const generatePoints = (currentMode: VisualMode): Point3D[] => {
    const points: Point3D[] = [];
    if (currentMode === VisualMode.WAVEFRONT) {
      // 20x20 Grid (400 points)
      const gridSize = 22;
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = (i - gridSize / 2) * 45;
          const z = (j - gridSize / 2) * 45;
          points.push({ x, y: 0, z });
        }
      }
    } else if (currentMode === VisualMode.TORUS_KNOT) {
      // 360 points along a 3D Torus Knot curve
      const count = 360;
      const p = 3; // winding parameters
      const q = 8;
      for (let i = 0; i < count; i++) {
        const phi = (i / count) * Math.PI * 2;
        const r = Math.cos(q * phi) * 0.45 + 1.2;
        const x = r * Math.cos(p * phi) * 110;
        const y = r * Math.sin(p * phi) * 110;
        const z = Math.sin(q * phi) * 110;
        points.push({ x, y, z });
      }
    } else {
      // Galaxy / Stardust Double Helix
      const count = 320;
      for (let i = 0; i < count; i++) {
        const arm = i % 2 === 0 ? 0 : Math.PI;
        const ratio = i / count;
        const theta = ratio * Math.PI * 6 + arm;
        const radius = ratio * 280 + 20;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        const y = (Math.random() - 0.5) * 40 + Math.sin(radius * 0.03) * 20;
        points.push({
          x,
          y,
          z,
          size: Math.random() * 1.5 + 0.8,
        });
      }
    }
    return points;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let points = generatePoints(mode);

    // Track original coordinates for animation calculation
    const originalPoints = [...points];

    // Handle Resize using standard ResizeObserver to prevent layout flickering
    const handleResize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = containerRef.current?.clientHeight || window.innerHeight;
      
      // Prevent blurry renders on high-DPI displays
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    handleResize();

    // Mouse movement tracker
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInteractive) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      mouseRef.current.targetX = (e.clientX - width / 2) / (width / 2);
      mouseRef.current.targetY = (e.clientY - height / 2) / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Camera values
    let angleX = 0.45;
    let angleY = 0.45;
    const focalLength = 480;

    // Render loop
    const render = () => {
      const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 1.5));
      const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 1.5));

      // Clear with very subtle decay/fade trail for smooth motion blur
      ctx.fillStyle = 'rgba(7, 9, 12, 0.16)';
      ctx.fillRect(0, 0, width, height);

      // Low pass filter for mouse movement to ensure calming fluid reactivity
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      if (isPlaying) {
        timeRef.current += 0.006 * speed;
      }

      // Camera base auto-rotation
      let rotX = angleX + (isInteractive ? mouseRef.current.y * 0.15 : 0);
      let rotY = angleY + timeRef.current * 0.4 + (isInteractive ? mouseRef.current.x * 0.18 : 0);

      // Slowly adjust background angle slightly for organic relaxation feel
      if (!isInteractive) {
        rotX += Math.sin(timeRef.current * 0.1) * 0.08;
      }

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project & transform nodes
      const projected: { x: number; y: number; depth: number; origIndex: number }[] = [];

      originalPoints.forEach((point, index) => {
        let x = point.x;
        let y = point.y;
        let z = point.z;

        // Dynamic formula adjustments based on active 3D mode
        if (mode === VisualMode.WAVEFRONT) {
          // Calculate undulating 3D sine ripples from the central node
          const distFromCenter = Math.sqrt(x * x + z * z);
          y = Math.sin(distFromCenter * 0.012 - timeRef.current * 2.8) * 45;
        } else if (mode === VisualMode.STARDUST) {
          // Slow pulsing breathing oscillation in Helix coordinates
          const offset = Math.sin(timeRef.current * 1.5 + index * 0.02) * 8;
          y += offset * 0.4;
        }

        // Apply 3D Rotation (Y-axis horizontal rotation)
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // Apply 3D Rotation (X-axis vertical rotation)
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Projection calculation with depth coordinates
        const distance = 800;
        const scale = focalLength / (focalLength + z2 + distance);
        const projX = x1 * scale + width / 2;
        const projY = y2 * scale + height / 2;

        projected.push({
          x: projX,
          y: projY,
          depth: z2,
          origIndex: index,
        });
      });

      // Draw Connection lines (3D constellation links)
      if (lineDensity > 0.05) {
        ctx.lineWidth = 0.55;
        const maxDist = mode === VisualMode.WAVEFRONT ? 55 : mode === VisualMode.TORUS_KNOT ? 48 : 42;
        
        // Render links selectively to keep frame rates highly optimized (constant 60fps)
        const step = mode === VisualMode.WAVEFRONT ? 1 : 2; 

        for (let i = 0; i < projected.length; i += step) {
          const p1 = projected[i];
          const distLimit = Math.floor(6 * lineDensity);
          let connectedCount = 0;
          
          for (let j = i + 1; j < projected.length; j++) {
            if (connectedCount >= distLimit) break;

            const p2 = projected[j];

            // 3D Distance check (to prevent linking particles that are physically far in depth)
            const dx = originalPoints[p1.origIndex].x - originalPoints[p2.origIndex].x;
            const dy = originalPoints[p1.origIndex].y - originalPoints[p2.origIndex].y;
            const dz = originalPoints[p1.origIndex].z - originalPoints[p2.origIndex].z;
            const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist3D < maxDist) {
              const dxProj = p1.x - p2.x;
              const dyProj = p1.y - p2.y;
              const screenDist = Math.sqrt(dxProj * dxProj + dyProj * dyProj);

              // Skip lines offscreen
              if (screenDist > 160) continue;

              // Opacity matches physical proximity and 3D depth fade
              const alphaRatio = (1 - dist3D / maxDist) * 0.16 * lineDensity;
              
              const depthFade = Math.max(0.1, 1 - (p1.depth + 150) / 400);
              const alpha = alphaRatio * depthFade;

              if (alpha > 0.01) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                
                // Color theme gradient transition mapping
                if (mode === VisualMode.WAVEFRONT) {
                  ctx.strokeStyle = `rgba(0, 242, 255, ${alpha})`; // cyan
                } else if (mode === VisualMode.TORUS_KNOT) {
                  ctx.strokeStyle = `rgba(204, 255, 0, ${alpha * 0.85})`; // lime
                } else {
                  ctx.strokeStyle = `rgba(255, 0, 229, ${alpha})`; // magenta
                }
                ctx.stroke();
                connectedCount++;
              }
            }
          }
        }
      }

      // Draw Projective nodes (STARDUST Particle beads)
      projected.forEach((p) => {
        // Deep atmosphere fog fade: particles in the back are smaller and darker
        const depthRatio = (p.depth + 250) / 500; // -250 to 250 mapped to 0 to 1
        const opacity = Math.max(0.12, 1 - depthRatio) * 0.75;
        const baseSize = mode === VisualMode.STARDUST ? (originalPoints[p.origIndex].size || 1) : 1.25;
        const size = Math.max(0.4, baseSize * (1.2 - depthRatio));

        // Skip rendering if node projected completely off-screen to preserve memory
        if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10) return;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        // Core visual palette alignment
        if (mode === VisualMode.WAVEFRONT) {
          ctx.fillStyle = `rgba(0, 242, 255, ${opacity})`;
        } else if (mode === VisualMode.TORUS_KNOT) {
          ctx.fillStyle = `rgba(204, 255, 0, ${opacity})`;
        } else {
          // Stardust mix of pure white cosmic sparks and cyberpunk magenta
          if (p.origIndex % 4 === 0) {
            ctx.fillStyle = `rgba(255, 0, 229, ${opacity * 0.9})`;
          } else {
            ctx.fillStyle = `rgba(244, 244, 249, ${opacity})`;
          }
        }
        ctx.fill();

        // Optional rendering glow flare on central key coordinate nodes
        if (p.origIndex % 60 === 0 && opacity > 0.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 2.8, 0, Math.PI * 2);
          if (mode === VisualMode.WAVEFRONT) {
            ctx.fillStyle = 'rgba(0, 242, 255, 0.08)';
          } else if (mode === VisualMode.TORUS_KNOT) {
            ctx.fillStyle = 'rgba(204, 255, 0, 0.08)';
          } else {
            ctx.fillStyle = 'rgba(255, 0, 229, 0.08)';
          }
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mode, isPlaying, speed, isInteractive, lineDensity]);

  const toggleMode = () => {
    if (mode === VisualMode.WAVEFRONT) setMode(VisualMode.TORUS_KNOT);
    else if (mode === VisualMode.TORUS_KNOT) setMode(VisualMode.STARDUST);
    else setMode(VisualMode.WAVEFRONT);
  };

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden select-none z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Exquisite micro-controller panel in the corner allowing the user to customize their calming experience */}
      <div className="absolute bottom-6 right-6 md:right-24 z-50 flex items-center pointer-events-auto">
        <div className="flex items-center space-x-2 bg-black/75 backdrop-blur-xl border border-white/10 px-2 py-1 rounded-none shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
          <button
            onClick={() => setShowControls(!showControls)}
            className="p-1.5 text-[#849495]/70 hover:text-white transition-colors cursor-pointer"
            title="Calm Controls"
          >
            <Sliders className={`w-3.5 h-3.5 ${showControls ? 'text-electric-cyan' : ''}`} />
          </button>
          
          <button
            onClick={toggleMode}
            className="px-2 py-1 font-mono text-[9px] font-bold text-white tracking-wider flex items-center gap-1 hover:text-electric-cyan transition-colors cursor-pointer border-l border-white/10 pl-2 text-left uppercase min-w-[130px] justify-between"
          >
            <span>{mode}</span>
            <RefreshCw className="w-2.5 h-2.5 opacity-45" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 text-[#849495]/70 hover:text-white transition-colors border-l border-white/10 pl-2 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3 h-3 text-emerald-400" /> : <Play className="w-3 h-3 text-electric-cyan" />}
          </button>
        </div>
      </div>

      {/* Expanded Control Hud */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-6 md:right-24 z-50 bg-black/90 backdrop-blur-2xl border border-white/10 p-5 rounded-none w-64 shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto"
          >
            <div className="border-b border-white/10 pb-2 mb-3 flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold text-white tracking-[0.2em] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-electric-cyan" /> AMBIENT CALM SYSTEM
              </span>
              <span className="font-mono text-[8px] text-[#849495]/40">[REV_2026]</span>
            </div>

            <div className="space-y-4">
              {/* Speed Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[8.5px] uppercase tracking-wider text-[#849495]">Lapse Velocity</label>
                  <span className="font-mono text-[8px] text-electric-cyan">{speed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.5"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full accent-electric-cyan h-1 bg-white/10 rounded-none cursor-pointer"
                />
              </div>

              {/* Line Density Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[8.5px] uppercase tracking-wider text-[#849495]">Coherence Links</label>
                  <span className="font-mono text-[8px] text-[#ccff00]">{(lineDensity * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={lineDensity}
                  onChange={(e) => setLineDensity(parseFloat(e.target.value))}
                  className="w-full accent-[#ccff00] h-1 bg-white/10 rounded-none cursor-pointer"
                />
              </div>

              {/* Interactivity Toggle */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#849495]">Mouse Parallax</span>
                <button
                  onClick={() => setIsInteractive(!isInteractive)}
                  className={`w-8 h-4 rounded-full p-0.5 transition-colors cursor-pointer ${isInteractive ? 'bg-electric-cyan' : 'bg-white/10'}`}
                >
                  <div className={`w-3 h-3 rounded-full bg-black transition-transform ${isInteractive ? 'translate-x-[16px]' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Active Presets */}
              <div className="pt-2 border-t border-white/5 flex flex-col gap-1.5">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#849495]/60 mb-0.5">Geometry Mode</span>
                <div className="grid grid-cols-1 gap-1">
                  {Object.values(VisualMode).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`text-left font-mono text-[9px] px-2 py-1 uppercase transition-all flex items-center justify-between cursor-pointer ${
                        mode === m 
                          ? 'bg-white/5 text-white border-l-2 border-electric-cyan' 
                          : 'text-[#849495] hover:text-white hover:bg-white/2'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {m === VisualMode.WAVEFRONT && <Activity className="w-2.5 h-2.5 text-electric-cyan" />}
                        {m === VisualMode.TORUS_KNOT && <Eye className="w-2.5 h-2.5 text-radioactive-lime" />}
                        {m === VisualMode.STARDUST && <Compass className="w-2.5 h-2.5 text-magenta-flash" />}
                        {m}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
