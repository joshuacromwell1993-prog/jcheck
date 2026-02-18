"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Lock, BarChart3, ArrowLeft, Search, 
  ShieldAlert, Cpu, Activity, ScanLine, CircuitBoard, 
  Fingerprint, Database, LayoutDashboard
} from 'lucide-react';
import Link from 'next/link';

export default function JCheckDashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // FIXED: Added ': MouseEvent' to satisfy the Vercel build
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prevent hydration error by showing a black screen until the browser takes over
  if (!mounted) return <div className="min-h-screen bg-[#0A0A0F]" />;

  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-white font-sans overflow-x-hidden">
      
      {/* Background Tech Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,95,31,0.05),transparent_70%)]" />
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[#FF5F1F]/5 blur-[100px]"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#FF5F1F]/20 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2 text-white/40 hover:text-[#FF5F1F] transition-colors font-black text-xs uppercase tracking-widest">
            <ArrowLeft size={16} /> Exit Terminal
          </Link>
          <div className="h-6 w-[1px] bg-white/10" />
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-[#FF5F1F]" size={20} />
            <span className="font-black text-lg tracking-tighter uppercase">Audit <span className="text-[#FF5F1F]">Lab</span></span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#FF5F1F]/30 rounded-full text-[10px] font-black uppercase tracking-widest text-[#FF5F1F]">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            AI Expert: Charged
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="relative z-10 pt-32 pb-20 px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase">New Forensic Scan</h2>
            <p className="text-white/40 font-medium">Upload F2F campaign data for immediate pattern recognition.</p>
          </div>
          <button 
            onClick={() => setIsAnalyzing(!isAnalyzing)}
            className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-sm border-2 border-white hover:bg-transparent hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            {isAnalyzing ? "Processing..." : "Run Analysis"}
          </button>
        </div>

        {/* The Upload "Dropzone" */}
        <div className="bg-[#111111] border-2 border-dashed border-[#FF5F1F]/30 rounded-[40px] p-20 text-center hover:bg-white/5 transition-all cursor-pointer mb-12 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF5F1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF5F1F] to-[#FF8F4F] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,95,31,0.3)]">
              <ScanLine className="text-white w-10 h-10" strokeWidth={3} />
            </div>
            <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">Initialize Data Import</h3>
            <p className="text-white/40 font-bold tracking-widest text-xs uppercase">Drag CSV or Excel files into the terminal</p>
          </div>
        </div>

        {/* Real-time Forensic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Retention Score', value: '--', icon: ShieldCheck, color: 'text-emerald-500', shadow: 'shadow-[0_0_30px_rgba(34,197,94,0.1)]' },
            { label: 'Anomalies Detected', value: '0', icon: ShieldAlert, color: 'text-[#FF5F1F]', shadow: 'shadow-[0_0_30px_rgba(255,95,31,0.1)]' },
            { label: 'Market Benchmark', value: '$0.00', icon: Activity, color: 'text-white/40', shadow: '' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-[#111111] p-8 rounded-3xl border border-white/5 ${stat.shadow}`}
            >
              <div className="flex justify-between items-start mb-8">
                <stat.icon className={stat.color} size={32} strokeWidth={3} />
                <div className="bg-white/5 p-2 rounded-lg">
                  <CircuitBoard size={16} className="text-white/20" />
                </div>
              </div>
              <div className="text-6xl font-black mb-2">{stat.value}</div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Compliance Guardrail */}
        <div className="mt-12 p-6 bg-[#FF5F1F]/5 border border-[#FF5F1F]/20 rounded-2xl flex items-center gap-6">
           <div className="bg-[#FF5F1F] p-3 rounded-xl">
             <Lock size={20} className="text-black" />
           </div>
           <div>
             <h4 className="font-black text-sm uppercase tracking-tight">Auto-Scrub Protocol Active</h4>
             <p className="text-white/40 text-xs font-medium">All personally identifiable information (PII) is being stripped in real-time. No donor names or addresses are stored.</p>
           </div>
        </div>

      </main>
    </div>
  );
}