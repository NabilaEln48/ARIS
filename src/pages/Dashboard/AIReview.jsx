import React from 'react';

export default function AIReview({ plan = 'basic' }) {
  const isPro = plan === 'pro' || plan === 'enterprise';

  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">
            Intelligence <span className="text-[#00d4ff]">Scanner</span>
          </h2>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-2">
            Authorization: {isPro ? 'Level_03_Operator' : 'Level_01_Guest'}
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full">
           <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Current Node: </span>
           <span className="text-[9px] font-black uppercase tracking-widest text-[#00d4ff]">Secure_Mainframe_X1</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* --- LEFT SIDEBAR (4 Columns) --- */}
        <div className="xl:col-span-4 space-y-6">
          {/* Upload Card */}
          <div className="bg-[#111116] border border-white/5 rounded-[3rem] p-10 flex flex-col items-center justify-center border-dashed border-2 hover:border-[#00d4ff]/20 transition-all group relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📄</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Inject_Resume.pdf</p>
            <button className="mt-6 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#00d4ff] hover:text-black transition-all">Upload Data</button>
          </div>

          {/* AI Suggested Skills Card (NEW) */}
          <div className="bg-[#111116] border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden">
            <h4 className="text-[10px] font-black uppercase text-[#00d4ff] tracking-widest mb-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#00d4ff] rounded-full animate-ping"></span> Skills_Radar
            </h4>
            <div className="space-y-4">
              <p className="text-[10px] text-gray-500 uppercase font-bold">Trending in your target market:</p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'AWS Lambda', 'GraphQL', 'Docker', 'System Design'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-gray-400">+{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="bg-[#111116] border border-white/5 p-8 rounded-[2.5rem]">
            <h4 className="text-[10px] font-black uppercase text-gray-600 tracking-widest mb-6">Engine_Modules</h4>
            <div className="space-y-4">
              <Capability label="Global ATS Check" active={true} />
              <Capability label="Skill Gap Analysis" active={true} />
              <Capability label="AI Rewrite Engine" active={isPro} />
              <Capability label="Market Velocity" active={isPro} />
            </div>
          </div>
        </div>

        {/* --- RIGHT CONTENT (8 Columns) --- */}
        <div className="xl:col-span-8 space-y-8">
          
          {/* Top Level Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScoreCard label="ATS Sync" score="94%" color="#39ff14" />
            <ScoreCard label="Keyword Density" score="62%" color="#ffcf00" />
            <ScoreCard label="Market Power" score="81%" color="#00d4ff" />
          </div>

          {/* MODULE 1: AI CV IMPROVEMENTS (LOCKED) */}
          <LockedModule isLocked={!isPro} title="Tactical_CV_Improvements">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[#00d4ff] font-bold">[!]</div>
                <p className="text-[11px] text-gray-400 leading-relaxed">The "Experience" section at <span className="text-white">Tesla</span> lacks numerical impact. Add 3-5 percentages (e.g., "Boosted efficiency by 20%").</p>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[#00d4ff] font-bold">[!]</div>
                <p className="text-[11px] text-gray-400 leading-relaxed">Profile summary is too long. The Engine suggests cutting 2 lines to improve mobile reading score.</p>
              </div>
            </div>
          </LockedModule>

          {/* MODULE 2: AI REWRITE RESUME (LOCKED) */}
          <LockedModule isLocked={!isPro} title="AI_Rewrite_Engine">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-[8px] font-black uppercase text-gray-600 tracking-widest">Your Current Input:</span>
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl text-[10px] text-gray-500 italic">"I worked on making the website faster for users."</div>
              </div>
              <div className="space-y-2">
                <span className="text-[8px] font-black uppercase text-[#00d4ff] tracking-widest">Engine Optimization:</span>
                <div className="p-4 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-xl text-[10px] text-white font-bold italic">"Architected high-throughput web architectures, reducing latency by 45% for 2M+ active users."</div>
              </div>
            </div>
          </LockedModule>

        </div>
      </div>
    </div>
  );
}

// Reusable Locked Component for Tiered Content
function LockedModule({ isLocked, title, children }) {
  return (
    <div className="relative group">
      <div className={`bg-[#111116] border border-white/5 p-8 rounded-[3rem] transition-all duration-500 ${isLocked ? 'blur-md grayscale opacity-50' : 'opacity-100'}`}>
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00d4ff] mb-6">{title}</h3>
        {children}
      </div>
      
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-10 text-center">
          <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl mb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">🔒</div>
          <h4 className="text-lg font-black uppercase italic tracking-tighter text-white">Advanced_Module_Restricted</h4>
          <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-2 mb-6">Upgrade to PRO plan to unlock AI Rewriting and Tactical improvements.</p>
          <button className="px-10 py-3 bg-[#00d4ff] text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,212,255,0.3)]">
            Upgrade Access
          </button>
        </div>
      )}
    </div>
  );
}

function ScoreCard({ label, score, color }) {
  return (
    <div className="bg-[#111116] border border-white/5 p-10 rounded-[2.5rem] text-center">
      <p className="text-[9px] font-black uppercase text-gray-600 tracking-widest mb-2">{label}</p>
      <div className="text-5xl font-black italic" style={{ color }}>{score}</div>
    </div>
  );
}

function Capability({ label, active }) {
  return (
    <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-widest ${active ? 'text-white' : 'text-gray-700'}`}>
      <span>{label}</span>
      <span className={active ? 'text-[#00d4ff]' : 'text-gray-800'}>{active ? '●' : '○'}</span>
    </div>
  );
}