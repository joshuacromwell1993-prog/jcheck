"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ShieldCheck, Zap, Lock, ArrowRight, 
  Radar, ScanLine, CircuitBoard, Fingerprint
} from 'lucide-react';

export default function JCheckLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScanning, setIsScanning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number, duration: number}[]>([]);
  
  // FIX: We now track the global window scroll instead of a specific "Ref"
  // This bypasses the hydration error entirely
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const smoothScale = useSpring(scaleProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
    
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // AI Typing Effect
  const [aiText, setAiText] = useState('');
  const fullText = "> ANALYZING F2F CAMPAIGN DATA...\n> DETECTING PATTERNS...\n> AI FORENSICS ACTIVE...";
  
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setAiText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setIsScanning(true);
      }
    }, 40);
    return () => clearInterval(typing);
  }, [mounted]);

  if (!mounted) return <div className="min-h-screen bg-[#0A0A0F]" />;

  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-white font-sans overflow-x-hidden">
      
      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,95,31,0.08),transparent_70%)]" />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#FF5F1F]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-[#FF5F1F]/5 blur-[120px]"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#FF5F1F]/20 px-8 py-5 flex justify-between items-center"
      >
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF5F1F] to-[#FF8F4F] rounded-lg flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,95,31,0.3)]">
            <span className="text-white font-black text-2xl">J</span>
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase tracking-widest">J-Check<span className="text-[#FF5F1F]">AI</span></span>
        </div>
        <button className="bg-black border border-[#FF5F1F]/50 text-white px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-[#FF5F1F] hover:text-black transition-all">
          ACCESS TERMINAL <CircuitBoard size={14} />
        </button>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        style={{ scale: smoothScale }}
        className="relative pt-64 pb-32 px-8 max-w-7xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 inline-flex items-center gap-3 bg-white/5 border border-[#FF5F1F]/20 px-6 py-2 rounded-full"
        >
          <Radar size={16} className="text-[#FF5F1F] animate-spin" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF5F1F]">System Online: Forensics v2.0</span>
        </motion.div>
        
        <h1 className="text-[75px] md:text-[130px] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
          Know the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F1F] to-[#FFBF00] drop-shadow-[0_0_30px_rgba(255,95,31,0.3)]">True Story</span> <br />
          of your data.
        </h1>

        <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto text-white/40 mb-16 leading-tight">
          AI-powered forensic analysis for fundraising performance. <br />Real-time attrition detection & predictive modeling.
        </p>

        <div className="flex justify-center">
          <button className="group relative bg-white text-black px-12 py-8 text-xl font-black uppercase tracking-widest border-2 border-white hover:bg-transparent hover:text-white transition-all">
            <span className="relative z-10">INITIATE SCAN <ArrowRight className="inline ml-2" /></span>
          </button>
        </div>
      </motion.section>

      {/* AI Intelligence Block */}
      <section className="py-24 max-w-5xl mx-auto px-8 relative z-10">
        <div className="bg-[#111111] border border-[#FF5F1F]/30 rounded-[40px] p-12 backdrop-blur-md shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 font-mono text-sm">
            <div className="text-[#FF5F1F] space-y-2">
              <pre className="whitespace-pre-wrap leading-relaxed">{aiText}</pre>
              {isScanning && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-emerald-400 font-bold">
                  {">"} [SUCCESS] Attrition risk identified in VIC campaign.
                </motion.p>
              )}
            </div>
            <div className="border-l border-white/5 pl-10 space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Security Suite</h4>
              <div className="flex items-center gap-4">
                 <Fingerprint className="text-[#FF5F1F]" size={20} />
                 <p className="font-bold tracking-tight">Anonymization: <span className="text-emerald-500">ACTIVE</span></p>
              </div>
              <div className="flex items-center gap-4">
                 <ShieldCheck className="text-[#FF5F1F]" size={20} />
                 <p className="font-bold tracking-tight">Compliance: <span className="text-emerald-500 uppercase font-black">Verified</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}