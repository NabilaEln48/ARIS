import React from 'react';

export default function TakeControl() {
  return (
    <section id="contact" className="relative py-48 bg-[#0b0b0f] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Stardust & Glow */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />

      <div className="relative z-10 text-center">
        {/* Massive Header */}
        <h2 className="text-7xl md:text-[12rem] font-black text-white uppercase italic leading-[0.8] tracking-tighter mb-20">
          Take <br /> 
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(168, 85, 247, 0.6)' }}>Control</span>
        </h2>

        {/* Single "Crazy" Button */}
        <div className="relative group inline-block">
          {/* Pulsing Aura around button */}
          <div className="absolute -inset-4 bg-purple-600/20 rounded-full blur-2xl group-hover:bg-purple-600/40 transition-all duration-500 animate-pulse" />
          
          <button className="relative px-12 py-6 bg-white text-black font-black text-sm md:text-base uppercase tracking-[0.3em] rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Get Started
          </button>
        </div>
      </div>

      {/* 3D Grid Floor for that "Crazy" depth */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-20 pointer-events-none"
           style={{ perspective: '500px' }}>
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: 'linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               transform: 'rotateX(70deg)',
               transformOrigin: 'top'
             }} />
      </div>
    </section>
  );
}