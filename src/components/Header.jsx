import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo Area */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-transform group-hover:scale-110" />
          <span className="text-white font-bold tracking-tight text-lg uppercase">Aris Engine</span>
        </div>

        {/* Center: Navigation (Outseta Style) */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors text-sm font-medium">
            Learn <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors text-sm font-medium">
            Product <ChevronDown size={14} />
          </div>
          <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Pricing</a>
          <div className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors text-sm font-medium">
            Support <ChevronDown size={14} />
          </div>
          <a href="#company" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Company</a>
          <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Blog</a>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
            Log in
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Sign up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;