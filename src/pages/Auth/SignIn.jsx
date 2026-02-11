import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (onLogin) onLogin(); 
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e02eaf]/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <button onClick={() => navigate('/')} className="absolute top-10 left-10 text-gray-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.4em] z-50">
        ← Return to Orbit
      </button>

      <div className="relative z-10 w-full max-w-sm px-6">
        <div className="bg-[#111116]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">Log in</h1>
          </div>
          <form className="space-y-5" onSubmit={handleLogin}>
            <input required type="email" placeholder="agent@aris.engine" className="w-full bg-[#1a1a20] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-[#e02eaf]/50 transition-all text-white outline-none" />
            <input required type="password" placeholder="••••••••" className="w-full bg-[#1a1a20] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-[#e02eaf]/50 transition-all text-white outline-none" />
            <button type="submit" className="w-full py-4 bg-[#e02eaf] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-[#c02695] transition-all shadow-[0_0_20px_rgba(224,46,175,0.3)] mt-6">
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}