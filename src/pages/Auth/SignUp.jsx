import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp({ onLogin }) {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // 1. Perform your registration logic here...
    
    // 2. Set auth to true
    onLogin();

    // 3. Redirect to Billing/Coupon page instead of main dashboard
    navigate('/dashboard/billing');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0f] p-6">
      <div className="w-full max-w-md bg-[#111116] border border-white/5 p-10 rounded-[3rem] shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">
            Initialize <span className="text-[#00d4ff]">Agent</span>
          </h2>
          <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mt-2">Create_New_Node_Access</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input 
            type="text" placeholder="FULL_NAME" required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:border-[#00d4ff] outline-none transition-all"
          />
          <input 
            type="email" placeholder="EMAIL_ADDRESS" required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:border-[#00d4ff] outline-none transition-all"
          />
          <input 
            type="password" placeholder="SECURITY_KEY" required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:border-[#00d4ff] outline-none transition-all"
          />

          <button 
            type="submit"
            className="w-full py-5 bg-[#00d4ff] text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,212,255,0.2)]"
          >
            Deploy Agent
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[9px] text-gray-600 uppercase tracking-widest">
            Already registered? <Link to="/login" className="text-[#00d4ff] hover:underline">Access Frame</Link>
          </p>
        </div>
      </div>
    </div>
  );
}