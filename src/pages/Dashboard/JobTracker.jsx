import React, { useState } from 'react';

export default function JobTracker() {
  const [applications, setApplications] = useState([
    { id: 1, position: "Senior Frontend Engineer", company: "OpenAI", description: "Next-gen AI interfaces.", hrName: "Sarah Chen", hrEmail: "schen@openai.com", status: "In Progress" },
    { id: 2, position: "UI/UX Developer", company: "Anthropic", description: "Claude system design.", hrName: "Marcus Thorne", hrEmail: "m.thorne@anthropic.ai", status: "Interview" },
    { id: 3, position: "Lead Web Specialist", company: "SpaceX", description: "Mission control dashboards.", hrName: "Elena Rodriguez", hrEmail: "elena.r@spacex.com", status: "Approved" },
    { id: 4, position: "Product Designer", company: "Meta", description: "VR/AR workspace tools.", hrName: "Jason Lee", hrEmail: "jasonl@meta.com", status: "Rejection" },
    { id: 5, position: "Full Stack Engineer", company: "Vercel", description: "Framework optimization.", hrName: "Amara Okoro", hrEmail: "amara@vercel.com", status: "In Progress" },
    { id: 6, position: "Graphics Engineer", company: "Nvidia", description: "Real-time rendering tools.", hrName: "David Schmidt", hrEmail: "dschmidt@nvidia.com", status: "Interview" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const statusOptions = ["In Progress", "Interview", "Approved", "Rejection"];

  const updateStatus = (id, newStatus) => {
    setApplications(applications.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    ));
    setEditingId(null);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-[1600px] mx-auto">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">
            Tactical <span className="text-[#00d4ff]">Records</span>
          </h2>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-2">
            Database_Connection: Secure // Active_Nodes: {applications.length}
          </p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search Company..." 
            className="bg-[#111116] border border-white/5 rounded-2xl px-6 py-3 text-xs focus:border-[#00d4ff]/50 outline-none w-full md:w-64 transition-all"
          />
          <button className="px-8 py-4 bg-[#00d4ff] text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all active:scale-95 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            + New Mission
          </button>
        </div>
      </div>

      {/* Expanded Table Container */}
      <div className="bg-[#111116] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/5 text-[11px] font-black uppercase text-gray-400 tracking-[0.2em]">
                <th className="px-10 py-7">Job Position</th>
                <th className="px-10 py-7">Company</th>
                <th className="px-10 py-7">Description</th>
                <th className="px-10 py-7">Point of Contact</th>
                <th className="px-10 py-7">Status & Control</th>
              </tr>
            </thead>
            <tbody className="text-[12px] font-bold uppercase tracking-tight">
              {applications.map((job) => (
                <tr 
                  key={job.id} 
                  className="border-b border-white/5 hover:bg-[#00d4ff]/[0.02] transition-all group"
                >
                  <td className="px-10 py-6 text-white group-hover:text-[#00d4ff] transition-colors">
                    {job.position}
                  </td>
                  <td className="px-10 py-6 text-gray-400">
                    <span className="bg-white/5 px-3 py-1 rounded-lg border border-white/5">{job.company}</span>
                  </td>
                  <td className="px-10 py-6 text-gray-500 normal-case font-medium max-w-[250px] truncate italic">
                    "{job.description}"
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-300">{job.hrName}</span>
                      <span className="text-[10px] font-mono text-gray-600 lowercase tracking-tighter">{job.hrEmail}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 relative">
                    <div className="flex items-center gap-4">
                      {/* Status Badge */}
                      <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all ${
                        job.status === 'Interview' ? 'border-blue-500/40 text-blue-400 bg-blue-500/10' :
                        job.status === 'Approved' ? 'border-green-500/40 text-green-400 bg-green-500/10' :
                        job.status === 'Rejection' ? 'border-red-500/40 text-red-400 bg-red-500/10' :
                        'border-white/10 text-gray-500 bg-white/5'
                      }`}>
                        <div className={`h-1.5 w-1.5 rounded-full ${
                           job.status === 'Interview' ? 'bg-blue-400 animate-pulse' :
                           job.status === 'Approved' ? 'bg-green-400' :
                           job.status === 'Rejection' ? 'bg-red-400' : 'bg-gray-500'
                        }`} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{job.status}</span>
                      </div>

                      {/* Dropdown Toggle */}
                      <button 
                        onClick={() => setEditingId(editingId === job.id ? null : job.id)}
                        className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>

                      {/* Manual Status Selector */}
                      {editingId === job.id && (
                        <div className="absolute right-10 top-16 bg-[#111116] border border-white/10 rounded-2xl p-2 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2">
                          {statusOptions.map(opt => (
                            <button
                              key={opt}
                              onClick={() => updateStatus(job.id, opt)}
                              className="block w-full text-left px-5 py-3 rounded-xl hover:bg-[#00d4ff] hover:text-black transition-colors text-[9px] font-black uppercase tracking-widest"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}