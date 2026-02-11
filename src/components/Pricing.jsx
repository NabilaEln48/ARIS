import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      desc: "Test the engine’s core functions.",
      features: [
        "10 AI Applications / mo",
        "AI Resume Reader",
        "Community Support",
        "Basic Job Tracker"
      ],
      button: "Start Free",
      active: false
    },
    {
      name: "Engine Pro",
      price: "35",
      desc: "The professional automation choice.",
      features: [
        "Unlimited Applications",
        "Job Tracker Pro",
        "HR Email Scraper",
        "AI Optimizer",
        "Priority Support"
      ],
      button: "Go Pro",
      active: true
    },
    {
      name: "Elite Agent",
      price: "60",
      desc: "Full autonomy. We do everything.",
      features: [
        "Everything in Pro",
        "Auto Email Sender",
        "Pro Resume Editing",
        "Custom Cover Letters",
        "Interview Prep AI"
      ],
      button: "Activate Elite",
      active: false
    }
  ];

  return (
    <section id="pricing" className="relative py-32 bg-[#0b0b0f] overflow-hidden">
      {/* Stardust Background */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-purple-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Investment</div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none mb-6">
            Scale your <br /><span className="text-gray-700">Opportunities.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[40px] border transition-all duration-500 ${
                plan.active 
                ? 'bg-[#16161a] border-purple-500 shadow-[0_0_40px_rgba(147,51,234,0.15)]' 
                : 'bg-[#111116] border-white/5 hover:border-white/10'
              }`}
            >
              {plan.active && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                  Recommended Engine
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-black text-white uppercase italic mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-xs font-medium">{plan.desc}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-gray-600 text-sm font-bold uppercase tracking-widest">/mo</span>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-10" />

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group">
                    <span className="mt-1 text-purple-500 font-bold">✓</span>
                    <span className="group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
                plan.active 
                ? 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
        
        {/* Comparison Footnote */}
        <p className="text-center mt-12 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
          Secure checkout • Cancel any time • No hidden nodes
        </p>
      </div>
    </section>
  );
}