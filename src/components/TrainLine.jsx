import React from 'react';

export default function TrainLine() {
  // The phrase that will repeat in the "train"
  const phrase = "Powering the next generation of Career Growth — Free up to 90% of your time wasted — JOB Search On Us —";

  return (
    <div className="py-12 bg-[#0b0b0f] relative overflow-hidden border-none">
      {/* Side gradients to fade text at the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b0f] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b0f] to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-scroll-text">
        {/* We repeat the phrase 4 times to ensure no gaps in the loop */}
        {[1, 2, 3, 4].map((_, i) => (
          <span 
            key={i} 
            className="mx-4 text-2xl md:text-3xl font-bold tracking-widest text-white/20 uppercase italic"
          >
            {phrase}
          </span>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollText {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scrollText 40s linear infinite;
        }
      `}} />
    </div>
  );
}