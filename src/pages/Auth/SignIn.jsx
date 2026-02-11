import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full" />

      {/* Back Button */}
      <button onClick={() => navigate('/')} className="absolute top-10 left-10 text-gray-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.3em]">
        ← Back to Engine
      </button>

      <div className="relative z-10 w-full max-w-sm px-6">
        <div className="bg-[#111116]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">Welcome Back</h1>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-2 font-bold">Authorized Personnel Only</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Agent Email</label>
              <input 
                type="email" 
                placeholder="agent@aris.engine"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Password</label>
                <button className="text-[9px] text-purple-500 uppercase font-black hover:text-purple-400">Recover Key?</button>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white"
              />
            </div>

            <button className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-xl mt-6 active:scale-95">
              Enter Dashboard
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold text-gray-600 px-2 tracking-widest">AUTHENTICATION</div>
          </div>

          <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale" alt="google" />
            Google Login
          </button>

          <p className="text-center mt-8 text-gray-500 text-xs font-medium">
            New agent? <button onClick={() => navigate('/signup')} className="text-purple-500 font-bold hover:underline">Register</button>
          </p>
        </div>
      </div>
    </div>
  );
}