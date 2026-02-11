import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/logo.png'; 

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-6 pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-7xl bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full pointer-events-auto shadow-2xl">
        
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <img src={LogoImg} alt="Aris Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-purple-500 font-bold tracking-tighter text-lg italic uppercase drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">
            Aris Engine
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-black text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">Platform</a>
          <a href="#why" className="hover:text-white transition-colors">Why Aris</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-5">
          <button onClick={() => navigate('/login')} className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
            Sign in
          </button>
          
          <button 
            onClick={() => navigate('/signup')} 
            className="bg-[#e02eaf]/10 text-white border border-[#e02eaf]/30 px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-tighter hover:bg-[#e02eaf] hover:text-white transition-all flex items-center gap-2 group shadow-lg shadow-purple-500/10"
          >
            Sign up <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}