import React from 'react';

export default function Reviews() {
  const reviews = [
    { name: "Alex Rivers", role: "Software Engineer", body: "Aris Engine found a lead on a local board I never would have seen. Interviewed 3 days later.", icon: "👤" },
    { name: "Sarah Chen", role: "Product Designer", body: "The HR email scraper is a cheat code. I bypassed the portal and went straight to the hiring manager.", icon: "🎨" },
    { name: "Jordan M.", role: "Data Analyst", body: "98% ATS score on my first scan. The AI optimizer literally rewrote my bullet points for success.", icon: "📊" },
    { name: "Elena V.", role: "Marketing Lead", body: "I automated 50 applications while sleeping. Woke up to 4 coffee chat requests. Insane.", icon: "🚀" },
    { name: "Marcus Thorne", role: "DevOps", body: "The Dockerized setup is clean. This is the first job tool built by engineers for engineers.", icon: "⚙️" },
    { name: "Li Wei", role: "Fullstack Dev", body: "The cover letter generator actually sounds human. Saved me 20 hours of typing this week.", icon: "✍️" },
  ];

  // Doubling the array for seamless infinite loop
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews.reverse(), ...reviews];

  return (
    <section id="reviews" className="relative py-32 bg-[#0b0b0f] overflow-hidden">
      {/* Background Stardust */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20 px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
            Transmission <span className="text-purple-500">Received.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm uppercase tracking-[0.2em] font-bold">
            Real feedback from the engine's early adopters
          </p>
        </div>

        {/* The "Crazy" Animation Container */}
        <div className="flex flex-col gap-8 select-none">
          
          {/* Row 1: Moving Right */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex animate-marquee gap-8 whitespace-nowrap py-4">
              {row1.map((rev, i) => (
                <ReviewCard key={i} {...rev} />
              ))}
            </div>
          </div>

          {/* Row 2: Moving Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap py-4">
              {row2.map((rev, i) => (
                <ReviewCard key={i} {...rev} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Adding Custom Keyframes for the Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}

function ReviewCard({ name, role, body, icon }) {
  return (
    <div className="w-[350px] bg-[#111116] border border-white/5 p-6 rounded-2xl transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)] group cursor-default">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h4 className="text-white font-bold text-sm tracking-tight">{name}</h4>
          <p className="text-purple-500 text-[10px] font-black uppercase tracking-widest">{role}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed whitespace-normal italic font-medium">
        "{body}"
      </p>
    </div>
  );
}