import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[650px] flex flex-col items-center justify-center bg-[#0b0b0f] overflow-hidden rounded-b-[60px] md:rounded-b-[120px]">
      
      {/* Random Floating Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars-layer stars-1"></div>
        <div className="stars-layer stars-2"></div>
      </div>

      {/* Intense Purple Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[130%] h-[400px] bg-gradient-to-t from-purple-600/50 via-purple-900/10 to-transparent blur-[100px] rounded-[100%] z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[-20px]">

        {/* Scaled Down Heading */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 leading-[1.1] uppercase italic">
          JOB Search <span className="text-brand-purple">On Us.</span> <br />
          <span className="text-gray-500 text-xl md:text-3xl font-bold lowercase tracking-normal not-italic opacity-80">
            The engine that wins the game.
          </span>
        </h1>

        {/* Scaled Down Description */}
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Applying to 100+ jobs shouldn't be a full-time job. Our Engine <span className="text-white">tracks, sends, and automates</span> everything. Reclaim <span className="text-brand-purple">90% of your Time</span> while we handle the boring stuff.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="bg-white text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] group">
            Get Started <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
           <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}