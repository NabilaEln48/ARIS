import React, { useState } from 'react';

export default function Emails() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      recipient: "Sarah Chen (OpenAI)",
      subject: "Inquiry: Frontend Lead Role / Aris Engine",
      body: "Hi Sarah, I noticed OpenAI is expanding the Sora team. Given my background in high-throughput data visualization, I'd love to discuss how I can contribute...",
      status: "pending"
    },
    {
      id: 2,
      recipient: "Marcus Thorne (Anthropic)",
      subject: "UI/UX Engineering - Claude Ecosystem",
      body: "Hello Marcus, the design language of Claude is fascinating. I've developed similar glassmorphism systems that prioritize user speed...",
      status: "pending"
    }
  ]);

  const [editingId, setEditingId] = useState(null);

  // --- ACTIONS ---
  const handleRegenerate = (id) => {
    console.log(`AI: Re-calculating syntax for Node_${id}`);
    alert("AI is crafting a new version of this email...");
  };

  const handleSend = (id) => {
    alert("Email dispatched through Aris SMTP server.");
    setEmails(emails.filter(e => e.id !== id)); // Remove after sending
  };

  const handleReject = (id) => {
    setEmails(emails.filter(e => e.id !== id));
  };

  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">
            Email <span className="text-[#00d4ff]">Generator</span>
          </h2>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-2">
            SMTP_Status: Connected // Outbox_Queue: {emails.length}
          </p>
        </div>
        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Refresh Queue
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {emails.map((email) => (
          <div 
            key={email.id} 
            className="group bg-[#111116] border border-white/5 rounded-[2.5rem] p-8 hover:border-[#00d4ff]/30 transition-all flex flex-col xl:flex-row gap-8 items-start xl:items-center"
          >
            {/* LEFT SIDE: THE EMAIL CONTENT (Long Card Style) */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded-full">Recipient</span>
                <span className="text-sm font-bold text-white">{email.recipient}</span>
              </div>
              
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Subject:</span>
                <p className="text-xs font-bold text-gray-300">{email.subject}</p>
              </div>

              <div className="bg-black/20 border border-white/5 p-6 rounded-2xl">
                {editingId === email.id ? (
                  <textarea 
                    className="w-full bg-transparent text-xs text-gray-400 leading-relaxed outline-none h-24 resize-none focus:text-white"
                    defaultValue={email.body}
                  />
                ) : (
                  <p className="text-xs text-gray-400 leading-relaxed italic line-clamp-2">
                    "{email.body}"
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT SIDE: THE TACTICAL CONTROLS */}
            <div className="flex flex-wrap xl:flex-nowrap items-center gap-3 xl:border-l xl:border-white/5 xl:pl-8">
              {/* Regenerate AI */}
              <button 
                onClick={() => handleRegenerate(email.id)}
                className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all group/btn"
              >
                <span className="text-lg mb-1 group-hover/btn:rotate-180 transition-transform duration-500">🔄</span>
                <span className="text-[8px] font-black uppercase tracking-tighter">Regen</span>
              </button>

              {/* Edit Manual */}
              <button 
                onClick={() => setEditingId(editingId === email.id ? null : email.id)}
                className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl border transition-all ${
                  editingId === email.id ? 'border-[#00d4ff] bg-[#00d4ff] text-black' : 'border-white/5 bg-white/[0.02] hover:border-white'
                }`}
              >
                <span className="text-lg mb-1">✍️</span>
                <span className="text-[8px] font-black uppercase tracking-tighter">
                  {editingId === email.id ? 'Save' : 'Edit'}
                </span>
              </button>

              {/* Reject/Delete */}
              <button 
                onClick={() => handleReject(email.id)}
                className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-red-500 hover:text-red-500 transition-all"
              >
                <span className="text-lg mb-1">🗑️</span>
                <span className="text-[8px] font-black uppercase tracking-tighter">Reject</span>
              </button>

              {/* APPROVE & SEND */}
              <button 
                onClick={() => handleSend(email.id)}
                className="flex flex-col items-center justify-center px-8 h-20 rounded-2xl bg-[#00d4ff] text-black hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,212,255,0.2)]"
              >
                <span className="text-xl mb-1">🚀</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Deploy</span>
              </button>
            </div>
          </div>
        ))}

        {emails.length === 0 && (
          <div className="text-center py-20 bg-[#111116] border border-white/5 rounded-[3rem]">
            <p className="text-gray-600 font-black uppercase tracking-[0.5em]">Outbox_Empty // All_Missions_Dispatched</p>
          </div>
        )}
      </div>
    </div>
  );
}