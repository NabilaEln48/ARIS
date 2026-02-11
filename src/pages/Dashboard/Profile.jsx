import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens here if necessary
    navigate('/');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto pb-20">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter">
          Agent <span className="text-[#00d4ff]">Profile</span>
        </h2>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-2">
          Identity_Registry // Data_Injection_Source
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Identity Card */}
        <div className="md:col-span-1">
          <div className="bg-[#111116] border border-white/5 p-8 rounded-[2.5rem] text-center sticky top-28">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00d4ff] to-blue-800 mx-auto mb-6 shadow-[0_0_30px_rgba(0,212,255,0.2)]" />
            <h3 className="text-xl font-black uppercase italic">Agent_ELN</h3>
            <p className="text-[#00d4ff] text-[10px] font-black uppercase tracking-widest mt-1">Pro Access</p>
          </div>
        </div>

        {/* Registry Form */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-[#111116] border border-white/5 p-10 rounded-[3rem] space-y-10 shadow-2xl">
            {/* Form Sections (Personal Info) */}
            <div>
              <h4 className="text-[11px] font-black uppercase text-[#00d4ff] tracking-[0.3em] mb-8 pb-2 border-b border-white/5">Auto-Fill_Core</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" placeholder="John Doe" />
                <InputField label="Email" placeholder="agent@eln.com" />
                <InputField label="Phone" placeholder="+1 555-0000" />
                <InputField label="LinkedIn" placeholder="linkedin.com/in/agent" />
              </div>
            </div>

            {/* Tactical Answers */}
            <div>
              <h4 className="text-[11px] font-black uppercase text-[#00d4ff] tracking-[0.3em] mb-8 pb-2 border-b border-white/5">Job_App_Intelligence</h4>
              <div className="space-y-6">
                <TextAreaField label="Work Authorization" placeholder="Authorized to work in US..." />
                <TextAreaField label="Expected Compensation" placeholder="$150,000" />
                <TextAreaField label="Notice Period" placeholder="2 Weeks" />
              </div>
            </div>

            <button className="w-full py-5 bg-[#00d4ff] text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              Update Registry
            </button>

            {/* THE DISCONNECT SECTION */}
            <div className="pt-10 border-t border-white/5 flex flex-col items-center">
               <p className="text-[9px] text-gray-600 uppercase tracking-widest mb-4">Terminate_Current_Session</p>
               <button 
                onClick={handleLogout}
                className="px-10 py-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.1)]"
               >
                 Disconnect Engine
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">{label}</label>
      <input type="text" placeholder={placeholder} className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs focus:border-[#00d4ff]/50 outline-none transition-all" />
    </div>
  );
}

function TextAreaField({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">{label}</label>
      <textarea placeholder={placeholder} rows="2" className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs focus:border-[#00d4ff]/50 outline-none transition-all resize-none" />
    </div>
  );
}