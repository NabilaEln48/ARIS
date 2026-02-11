import React, { useState } from 'react';

export default function Billing() {
  const [coupon, setCoupon] = useState('');
  const [status, setStatus] = useState(''); // For feedback

  const plans = [
    {
      name: "Free Agent",
      price: "$0",
      features: ["5 AI Scrapes/day", "Basic Job Tracker", "Email Templates"],
      button: "Current Plan",
      current: true
    },
    {
      name: "Pro Operator",
      price: "$49",
      features: ["Unlimited Scrapes", "AI Rewrite Engine", "Deep CV Analysis", "Priority SMTP"],
      button: "Upgrade Now",
      current: false
    }
  ];

  const handleApplyCoupon = () => {
    // Logic for your whitelist/coupon
    if (coupon === 'WHITELIST2026') {
      setStatus('SUCCESS: Authorization Granted. Pro Unlocked.');
    } else {
      setStatus('ERROR: Invalid Credentials.');
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter">
          Service <span className="text-[#00d4ff]">Authorization</span>
        </h2>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-4">
          Select_Access_Level // Apply_Voucher_Codes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-[#111116] border ${plan.current ? 'border-white/5' : 'border-[#00d4ff]/30 shadow-[0_0_30px_rgba(0,212,255,0.1)]'} p-10 rounded-[3rem] relative flex flex-col`}>
            {!plan.current && <span className="absolute top-6 right-8 text-[9px] font-black text-[#00d4ff] uppercase tracking-widest">Recommended</span>}
            
            <h3 className="text-2xl font-black italic uppercase mb-2">{plan.name}</h3>
            <div className="text-4xl font-black text-white mb-8">{plan.price}<span className="text-xs text-gray-600 ml-2">/ month</span></div>
            
            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map(f => (
                <div key={f} className="text-[10px] font-bold uppercase text-gray-500 flex items-center gap-3">
                  <span className="text-[#00d4ff]">⚡</span> {f}
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all ${
              plan.current ? 'bg-white/5 text-gray-500 cursor-default' : 'bg-[#00d4ff] text-black hover:scale-105'
            }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* COUPON / WHITELIST SECTION */}
      <div className="max-w-md mx-auto bg-[#111116] border border-white/5 p-8 rounded-[2.5rem] text-center">
        <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-6">Voucher_Access_Portal</h4>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={coupon}
            onChange={(e) => setCoupon(e.target.value.toUpperCase())}
            placeholder="ENTER_CODE" 
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono focus:border-[#00d4ff] outline-none transition-all"
          />
          <button 
            onClick={handleApplyCoupon}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase hover:bg-white hover:text-black transition-all"
          >
            Apply
          </button>
        </div>
        {status && <p className={`mt-4 text-[9px] font-black uppercase tracking-widest ${status.includes('SUCCESS') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
      </div>
    </div>
  );
}