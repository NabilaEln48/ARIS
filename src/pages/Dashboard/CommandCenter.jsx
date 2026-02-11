import React from 'react';
import { Link } from 'react-router-dom';

export default function CommandCenter() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-10">
      
      {/* 1. THE PULSING CORE (START ENGINE) */}
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#00d4ff]/10 via-transparent to-transparent rounded-[4rem] border border-white/5 relative overflow-hidden">
        {/* Animated Background Grid Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#00d4ff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
        
        <button className="group relative">
          <div className="absolute -inset-4 bg-[#00d4ff] rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
          <div className="relative px-20 py-8 bg-[#00d4ff] rounded-full flex items-center gap-6 active:scale-95 transition-all shadow-[0_0_50px_rgba(0,212,255,0.4)]">
            <span className="text-3xl animate-bounce">⚡</span>
            <span className="text-2xl font-black uppercase tracking-[0.4em] italic text-black">Start Engine</span>
          </div>
        </button>
        
        <div className="mt-10 flex flex-col items-center gap-2">
          <p className="text-[10px] font-mono text-[#00d4ff] uppercase tracking-[0.5em] animate-pulse">
            System_Status: Optimal // Ready_to_Scrape
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-1 w-8 bg-[#00d4ff]/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#00d4ff] animate-shimmer" style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. TACTICAL GRID (PLANS & METRICS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Subscription Dossier */}
        <div className="lg:col-span-5 bg-[#111116] border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6">
            <div className="flex items-center gap-2 bg-[#39ff14]/10 border border-[#39ff14]/20 px-3 py-1 rounded-full">
              <div className="h-1.5 w-1.5 bg-[#39ff14] rounded-full animate-ping" />
              <span className="text-[8px] font-black text-[#39ff14] uppercase tracking-tighter">Verified_Agent</span>
            </div>
          </div>
          
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-8">Access_Level</h3>
          <div className="text-5xl font-black italic uppercase text-white mb-2">Pro <span className="text-[#00d4ff]">Ops</span></div>
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-10">Next Billing: March 01, 2026</p>
          
          <div className="space-y-4">
            <FeatureItem label="Unlimited Scraping" active={true} />
            <FeatureItem label="AI Cover Letters" active={true} />
            <FeatureItem label="White-Label Emails" active={true} />
          </div>
        </div>

        {/* Live Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard label="Deployments" value="1,842" sub="Global" color="white" />
          <StatCard label="Success Rate" value="24.8%" sub="+2.1% this week" color="#00d4ff" />
          <StatCard label="Active Leads" value="12" sub="High Priority" color="#ffcf00" />
          <StatCard label="Engine Uptime" value="99.9%" sub="Stable" color="#39ff14" />
        </div>
      </div>

      {/* 3. MISSION LOG TABLE */}
      <div className="bg-[#111116] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Mission_Log</h3>
            <p className="text-[9px] font-mono text-gray-600 uppercase mt-1">Real-time_Transmission_Data</p>
          </div>
          <Link to="/dashboard/tracker" className="px-6 py-2 border border-white/10 rounded-xl text-[9px] font-black text-[#00d4ff] uppercase tracking-widest hover:bg-[#00d4ff] hover:text-black transition-all">
            Full Records
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[9px] font-black uppercase text-gray-500 tracking-[0.2em] bg-white/[0.01]">
              <tr>
                <th className="px-10 py-6">Target_Entity</th>
                <th className="px-10 py-6">Designation</th>
                <th className="px-10 py-6">Signal_Status</th>
                <th className="px-10 py-6 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="text-[11px] font-bold uppercase tracking-tight">
              <MissionRow company="Tesla" role="Systems Architect" status="Interview" time="02:11:2026" />
              <MissionRow company="SpaceX" role="Senior Frontend" status="Applied" time="02:10:2026" />
              <MissionRow company="Apple" role="Interface Designer" status="Pending" time="02:09:2026" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Sub-components for that "Crazy" look
function FeatureItem({ label, active }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
      <span className="text-[#00d4ff]">{active ? '●' : '○'}</span>
      {label}
    </div>
  );
}

function StatCard({ label, value, sub, color }) {
  return (
    <div className="bg-[#111116] border border-white/5 p-8 rounded-[2.5rem] hover:border-white/10 transition-colors">
      <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-3">{label}</p>
      <div className="text-4xl font-black italic mb-2" style={{ color }}>{value}</div>
      <p className="text-[8px] font-mono text-gray-700 uppercase tracking-tighter">{sub}</p>
    </div>
  );
}

function MissionRow({ company, role, status, time }) {
  return (
    <tr className="border-b border-white/5 hover:bg-[#00d4ff]/[0.02] transition-colors group">
      <td className="px-10 py-5 text-white group-hover:text-[#00d4ff] transition-colors">{company}</td>
      <td className="px-10 py-5 text-gray-500 italic">"{role}"</td>
      <td className="px-10 py-5">
        <span className={`px-3 py-1 rounded-lg text-[9px] font-black border ${
          status === 'Interview' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
          status === 'Applied' ? 'border-green-500/30 text-green-400 bg-green-500/5' :
          'border-white/10 text-gray-600'
        }`}>
          {status}
        </span>
      </td>
      <td className="px-10 py-5 text-right text-gray-700 font-mono text-[9px]">{time}</td>
    </tr>
  );
}