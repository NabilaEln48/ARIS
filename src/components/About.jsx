import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('scrape');

  const phases = [
    {
      id: 'scrape',
      label: '01. Intelligence Gathering',
      title: 'Multisource Scraping Engine',
      description: 'The engine crawls Indeed and local job boards in real-time. It doesn’t just find links; it captures the raw data of every listing.',
      icon: '🔍'
    },
    {
      id: 'enrich',
      label: '02. Lead Enrichment',
      title: 'Contact & Data Synthesis',
      description: 'We go deeper than the job post. The system extracts company emails and decision-maker leads to bypass HR portals.',
      icon: '💎'
    },
    {
      id: 'automate',
      label: '03. Autonomous Outreach',
      title: 'AI-Generated Engagement',
      description: 'Using your AI-parsed resume, the engine generates hyper-personalized outreach and sends applications at scale.',
      icon: '🚀'
    }
  ];

  const active = phases.find(p => p.id === activeTab);

  return (
    <section id="about" className="relative py-32 bg-[#0b0b0f] overflow-hidden">
      
      {/* THE IMAGE BACKGROUND FIX */}
      {/* 1. The Top Glow (Matches the purple bar in your image) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0b0b0f] to-transparent pointer-events-none" />
      
      {/* 2. Subtle Noise/Stars overlay */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div>
          <div className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
            {active.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
            How the <span className="text-purple-500 italic">Aris Engine</span> <br /> 
            outruns the market.
          </h2>
          
          <div className="space-y-3">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(phase.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  activeTab === phase.id 
                  ? 'bg-white/5 border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]' 
                  : 'bg-transparent border-white/5 text-gray-500 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold ${activeTab === phase.id ? 'text-purple-400' : 'text-gray-600'}`}>
                    {activeTab === phase.id ? '●' : '○'}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-tight">{phase.label}</span>
                </div>
                {activeTab === phase.id && (
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                    {phase.description}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: The Radar Visual */}
        <div className="relative flex justify-center items-center">
          {/* Main Pulse Rings */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 border border-purple-500/10 rounded-full animate-[ping_5s_linear_infinite]" />
            <div className="absolute inset-12 border border-white/5 rounded-full" />
            <div className="absolute inset-24 border border-white/5 rounded-full" />
            
            {/* Spinning Radar Line */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20" />
            <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-transparent origin-left animate-[spin_4s_linear_infinite]" />

            {/* Central Icon Block */}
            <div className="relative z-20 w-24 h-24 bg-[#16161a] border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/20 rotate-12">
              <span className="text-4xl">⚙️</span>
            </div>

            {/* Floating Tech Chips (DB, AI, etc) */}
            <div className="absolute top-10 left-10 p-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-[10px] font-bold text-gray-400 -rotate-12 shadow-xl">DB</div>
            <div className="absolute bottom-10 right-10 p-3 bg-black/40 backdrop-blur-sm border border-purple-500/40 rounded-xl text-[10px] font-bold text-purple-400 rotate-12 shadow-xl shadow-purple-500/10">AI</div>
            <div className="absolute bottom-20 left-0 p-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg text-[10px] font-bold text-gray-500">HTTPS</div>
          </div>
        </div>

      </div>
    </section>
  );
}