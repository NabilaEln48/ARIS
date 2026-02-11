import React from 'react';

export default function Why() {
  return (
    <section id="why" className="relative py-32 bg-[#0b0b0f] overflow-hidden">
      {/* Background Stardust Consistency */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Left Aligned for a more "Dashboard" feel */}
        <div className="mb-16 border-l-2 border-purple-500 pl-6">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
            Faster. <span className="opacity-30">Smarter.</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-sm md:text-base font-medium">
            The Aris Engine doesn't just apply; it out-competes. We've built a containerized 
            offensive layer that targets the hidden job market.
          </p>
        </div>

        {/* The "Sharpened" Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* CARD 1: LARGE - THE SCRAPER */}
          <div className="md:col-span-8 bg-[#111116] border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-purple-500 font-mono text-[10px] mb-4 tracking-[.3em] uppercase">Module 01 // Scraping</div>
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Concurrent Lead Extraction</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                Bypass standard job boards. Our crawler hits Indeed and local API nodes 
                simultaneously to extract high-intent leads before they go viral.
              </p>
            </div>
            
            {/* Visual: Code/Data Stream */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent p-6 flex flex-col justify-end">
              <div className="space-y-2 opacity-40 font-mono text-[8px] text-purple-400">
                <div className="animate-pulse">GET https://api.indeed.com/v2/jobs...</div>
                <div>Status: 200 OK [Enriching...]</div>
                <div className="animate-pulse">Email found: hr@target_corp.com</div>
                <div>Alembic Migration: Success</div>
              </div>
            </div>
          </div>

          {/* CARD 2: SMALL - THE ARCHITECTURE */}
          <div className="md:col-span-4 bg-[#111116] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl">
              🐳
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase">Docker Ready</h3>
              <p className="text-gray-500 text-[10px] mt-2 leading-relaxed">
                Fully containerized for unlimited scaling. Deploy your own instance in minutes.
              </p>
            </div>
          </div>

          {/* CARD 3: SMALL - PERFORMANCE */}
          <div className="md:col-span-4 bg-[#111116] border border-white/10 rounded-2xl p-8 group hover:bg-white/[0.02] transition-all">
             <div className="mb-10 text-4xl font-black text-white/5 italic">90%</div>
             <h3 className="text-lg font-bold text-white uppercase">Time Reclaimed</h3>
             <p className="text-gray-500 text-[10px] mt-2">
               Automation handles the grunt work. You focus on the interviews.
             </p>
          </div>

          {/* CARD 4: MEDIUM - AI SYNC */}
          <div className="md:col-span-8 bg-[#111116] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
             <div className="flex justify-between items-start">
               <div>
                  <h3 className="text-2xl font-black text-white uppercase italic">AI Matching Engine</h3>
                  <p className="text-gray-500 text-sm mt-2">Parsing resumes against live job JSON objects.</p>
               </div>
               <div className="h-2 w-2 bg-purple-500 rounded-full animate-ping"></div>
             </div>
             
             {/* Visual: Glowing Line Graph */}
             <div className="mt-12 h-20 w-full flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 30, 95, 50, 85].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-purple-500/20 border-t border-purple-500/50 transition-all duration-1000 group-hover:h-[var(--h)]"
                    style={{ height: `${h}%` }} 
                  />
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}