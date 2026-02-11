import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function MainDashboard() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Command Center' },
    { path: '/dashboard/tracker', label: 'Job Tracker' },
    { path: '/dashboard/ai-review', label: 'AI Review' },
    { path: '/dashboard/emails', label: 'Emails' },
    { path: '/dashboard/interview', label: 'Interview' },
    { path: '/dashboard/billing', label: 'Billing' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white font-sans">
      {/* --- TOP NAVIGATION --- */}
      <nav className="border-b border-white/5 bg-[#111116]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/dashboard" className="text-xl font-black italic uppercase tracking-tighter">
            Aris<span className="text-[#00d4ff]">Engine</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  location.pathname === item.path 
                    ? 'bg-[#00d4ff]/10 text-[#00d4ff]' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/dashboard/profile" className="text-[9px] font-black uppercase tracking-widest text-gray-500">Profile</Link>
            <Link to="/dashboard/profile">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00d4ff] to-blue-800 border border-white/10" />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main className="max-w-7xl mx-auto p-8">
        {/* THIS IS THE ONLY THING THAT SHOULD RENDER CONTENT. 
            It will show CommandCenter, JobTracker, etc. 
        */}
        <Outlet />
      </main>
    </div>
  );
}