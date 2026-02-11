import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#0b0b0f] border-t border-white/5 overflow-hidden">
      {/* Background Stardust */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Made By */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-black text-white uppercase italic tracking-tighter">
              Aris<span className="text-purple-500">Engine</span>
            </div>
            {/* YOUR CREDIT LINE */}
            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mt-1">
              Made by <span className="text-white">ELN</span>
            </div>
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              © 2026 Aris Engine. All rights reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}