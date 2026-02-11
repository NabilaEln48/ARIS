import React from 'react';

export default function Interview() {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
      <div className="w-24 h-24 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-8">
        <span className="text-4xl animate-pulse">🛠️</span>
      </div>
      <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
        AI <span className="text-[#00d4ff]">Coach</span>
      </h2>
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] max-w-xs leading-loose">
        Module_Status: Under_Construction // Integration_Pending_v3.0
      </p>
      <div className="mt-10 px-6 py-2 border border-white/5 rounded-full bg-white/5 text-[9px] font-black uppercase text-gray-500 tracking-widest">
        Restricted Access Area
      </div>
    </div>
  );
}