"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Zap, Lock, BarChart3, ArrowRight, Search, 
  ShieldAlert, Cpu, Network, Globe, Sparkles, Bot,
  Radar, Brain, Activity, ScanLine, Gauge, CircuitBoard,
  Eye, Fingerprint, Waves, Orbit
} from 'lucide-react';

export default function JCheckLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const smoothScale = useSpring(scaleProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // AI Typing Effect
  const [aiText, setAiText] = useState('');
  const fullText = "> ANALYZING F2F CAMPAIGN DATA...\n> DETECTING PATTERNS...\n> AI FORENSICS ACTIVE...";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setAiText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
        setIsScanning(true);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  // Floating Particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A0A0F] text-white font-sans overflow-x-hidden">
      
      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,95,31,0.1),transparent_50%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,95,31,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,95,31,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          mask: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }} />
        
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
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Mouse-reactive glow */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[#FF5F1F]/20 blur-[100px]"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#FF5F1F]/20 px-8 py-5 flex justify-between items-center"
      >
        <div className="flex items-center gap-3 group">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="relative w-12 h-12"
          >
            <div className="absolute inset-0 bg-[#FF5F1F] rounded-lg blur-md group-hover:blur-xl transition-all" />
            <div className="relative w-full h-full bg-gradient-to-br from-[#FF5F1F] to-[#FF8F4F] rounded-lg flex items-center justify-center border border-white/20">
              <span className="text-white font-black text-2xl">J</span>
            </div>
          </motion.div>
          <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            J-CHECK<span className="text-[#FF5F1F] ml-1">AI</span>
          </span>
        </div>
        
        <div className="flex gap-8 items-center">
          {['Forensics', 'Analytics', 'Security'].map((item, i) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              className="relative text-sm font-medium tracking-wider text-white/80 hover:text-white transition-colors group"
            >
              {item}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF5F1F]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] rounded-lg blur-md group-hover:blur-xl transition-all" />
            <div className="relative bg-black text-white px-8 py-3 rounded-lg border border-[#FF5F1F]/50 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">ACCESS TERMINAL</span>
              <CircuitBoard size={16} className="relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-56 pb-32 px-8 max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-[#FF5F1F]/30 px-6 py-3 rounded-full"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Radar size={16} className="text-[#FF5F1F]" />
          </motion.div>
          <span className="text-sm font-mono tracking-wider text-[#FF5F1F]">F2F FUNDRAISING ANALYTICS v2.0</span>
          <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[80px] md:text-[150px] font-black leading-[0.8] tracking-tighter mb-10"
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">KNOW THE</span>
          <br />
          <motion.span 
            animate={{ 
              textShadow: ['0 0 20px rgba(255,95,31,0.5)', '0 0 40px rgba(255,95,31,0.8)', '0 0 20px rgba(255,95,31,0.5)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] bg-clip-text text-transparent"
          >
            TRUE STORY
          </motion.span>
          <br />
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">OF YOUR DATA</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-white/40 mb-16 leading-relaxed"
        >
          <span className="text-white/60">AI-powered forensic analysis</span> for fundraising performance.
          <br />Real-time attrition detection & predictive retention modeling.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] text-black px-12 py-6 rounded-2xl font-black text-xl flex items-center gap-4 overflow-hidden">
              <span>INITIATE FORENSIC SCAN</span>
              <ScanLine className="group-hover:rotate-12 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm font-black text-xl flex items-center gap-4 group"
          >
            <span>WATCH DEMO</span>
            <Eye size={24} className="group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Live Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-24 flex justify-center gap-12"
        >
          {[
            { label: 'DATA POINTS ANALYZED', value: '2.4M', icon: Database },
            { label: 'ACCURACY RATE', value: '99.8%', icon: Gauge },
            { label: 'ACTIVE SCANS', value: '1.2K', icon: Activity },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <stat.icon className="text-[#FF5F1F]" size={32} />
              <div className="text-left">
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-xs text-white/40 tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* AI Terminal Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F]/20 to-transparent rounded-3xl blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-[#1A1A1F] to-[#0A0A0F] border border-[#FF5F1F]/30 rounded-3xl p-1">
              <div className="bg-black/50 rounded-3xl p-8 backdrop-blur-sm">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm font-mono text-white/40">J-CHECK AI TERMINAL v2.0</span>
                </div>

                {/* Terminal Content */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <motion.div 
                      className="font-mono text-sm space-y-2"
                      animate={{ opacity: isScanning ? [1, 0.5, 1] : 1 }}
                      transition={{ duration: 2, repeat: isScanning ? Infinity : 0 }}
                    >
                      <pre className="text-[#FF5F1F] whitespace-pre-wrap">{aiText}</pre>
                      {isScanning && (
                        <>
                          <p className="text-[#22C55E]">{">"} [ANOMALY DETECTED] Unusual attrition pattern in dataset</p>
                          <p className="text-[#22C55E]">{">"} Running predictive analysis...</p>
                          <div className="flex gap-1">
                            {[...Array(50)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 h-4 bg-[#FF5F1F]"
                                animate={{ 
                                  height: [4, Math.random() * 20 + 4, 4],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.02
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  </div>

                  <div className="border-l border-[#FF5F1F]/30 pl-8">
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                      <Brain className="text-[#FF5F1F]" />
                      AI INSIGHTS
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        'Retention probability: 94%',
                        'High-risk segments: 3 identified',
                        'Recommended actions: 12',
                        'Confidence score: 98.7%'
                      ].map((insight, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F1F]" />
                          <span className="font-mono">{insight}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div 
                      className="mt-8 p-4 bg-white/5 rounded-xl border border-[#FF5F1F]/20"
                      animate={{ 
                        boxShadow: ['0 0 0 rgba(255,95,31,0)', '0 0 20px rgba(255,95,31,0.3)', '0 0 0 rgba(255,95,31,0)']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <p className="text-sm font-mono text-white/60">
                        <span className="text-[#FF5F1F]">AI RECOMMENDATION:</span> "Immediate intervention required in VIC region. Attrition risk 23% above threshold."
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-center mb-20"
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            ADVANCED
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] bg-clip-text text-transparent">
            AI CAPABILITIES
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldAlert,
              title: 'PREDICTIVE FORENSICS',
              desc: 'Machine learning algorithms detect anomalies before they impact your campaigns.',
              gradient: 'from-red-500 to-orange-500'
            },
            {
              icon: Network,
              title: 'NEURAL ANALYSIS',
              desc: 'Deep learning models map donor behavior patterns with 99.9% accuracy.',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Orbit,
              title: 'REAL-TIME SCANNING',
              desc: 'Continuous monitoring with instant alerts and automated responses.',
              gradient: 'from-green-500 to-emerald-500'
            },
            {
              icon: Cpu,
              title: 'QUANTUM READY',
              desc: 'Future-proof architecture ready for quantum computing integration.',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: Globe,
              title: 'GLOBAL INTELLIGENCE',
              desc: 'Cross-regional pattern recognition and benchmarking.',
              gradient: 'from-yellow-500 to-orange-500'
            },
            {
              icon: Bot,
              title: 'AI ASSISTANT',
              desc: 'Natural language interface for instant insights and recommendations.',
              gradient: 'from-indigo-500 to-purple-500'
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F]/0 to-[#FF5F1F]/0 rounded-2xl transition-all duration-500 group-hover:from-[#FF5F1F]/20 group-hover:to-[#FF8F4F]/20 blur-xl" />
              
              <div className="relative bg-gradient-to-br from-[#1A1A1F] to-[#0A0A0F] p-8 rounded-2xl border border-[#FF5F1F]/20 h-full backdrop-blur-sm">
                <motion.div
                  animate={hoveredCard === i ? { 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.gradient} p-4`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>
                
                <h3 className="text-xl font-black mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                
                <motion.div 
                  className="absolute bottom-8 right-8"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  <ArrowRight className="text-[#FF5F1F]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section with Animated Counter */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '99.9', label: 'ACCURACY', suffix: '%' },
              { value: '2.4', label: 'DATA POINTS', suffix: 'M' },
              { value: '24/7', label: 'MONITORING', suffix: '' },
              { value: '100', label: 'COMPLIANCE', suffix: '%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] bg-clip-text text-transparent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm tracking-wider text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F]"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'blur(100px)', opacity: 0.2 }}
        />
        
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              READY TO
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] bg-clip-text text-transparent">
              SEE THE TRUTH?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 mb-12"
          >
            Join leading fundraising organizations using AI forensics to protect their data.
          </motion.p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F1F] to-[#FF8F4F] rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-black text-white px-16 py-8 rounded-2xl font-black text-2xl flex items-center gap-4 border border-[#FF5F1F]/50 overflow-hidden">
              <span>INITIALIZE AI FORENSICS</span>
              <Fingerprint className="group-hover:rotate-12 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FF5F1F]/20 py-12 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Cpu size={20} className="text-[#FF5F1F]" />
            <span className="text-sm text-white/40">© 2024 J-CHECK AI - ADVANCED FUNDRAISING FORENSICS</span>
          </div>
          <div className="flex gap-8">
            {['PRIVACY', 'TERMS', 'SECURITY'].map((item) => (
              <button key={item} className="text-sm text-white/40 hover:text-white transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Missing icon import
const Database = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="8" x2="21" y2="8" />
  </svg>
);