// --- CRAZY AUTH DESIGN (Sign In) ---
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />
      <button onClick={() => navigate('/')} className="absolute top-10 left-10 text-gray-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.3em] z-50">
        ← Return to Orbit
      </button>
      <div className="relative z-10 w-full max-w-sm px-6">
        <div className="bg-[#111116]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-center mb-10">Log in</h1>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-400 ml-1">Email</label>
              <input type="email" placeholder="agent@aris.engine" className="bg-[#1a1a20] border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-[#e02eaf]/50 transition-all text-white" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-400 ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="bg-[#1a1a20] border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-[#e02eaf]/50 transition-all text-white" />
            </div>
            <button className="w-full py-4 bg-[#e02eaf] text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-[#c02695] transition-all shadow-xl shadow-[#e02eaf]/20 mt-4">
              Enter Dashboard
            </button>
          </form>
          <p className="text-center mt-8 text-gray-500 text-xs">New agent? <button onClick={() => navigate('/signup')} className="text-white font-bold hover:underline">Register</button></p>
        </div>
      </div>
    </div>
  );
};

// --- CRAZY AUTH DESIGN (Sign Up) ---
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-[#111116]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl text-center">
          <div className="text-[#e02eaf] text-3xl mb-4">⚡</div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-8">Sign up</h1>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 ml-1">Email</label>
              <input type="email" className="bg-[#1a1a20] border border-white/5 rounded-lg px-4 py-2.5 outline-none focus:border-[#e02eaf]/50 transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 ml-1">First name</label>
                <input className="bg-[#1a1a20] border border-white/5 rounded-lg px-4 py-2.5 outline-none focus:border-[#e02eaf]/50 transition-all" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 ml-1">Last name</label>
                <input className="bg-[#1a1a20] border border-white/5 rounded-lg px-4 py-2.5 outline-none focus:border-[#e02eaf]/50 transition-all" />
              </div>
            </div>
            {/* REPLACED ORGANIZATION WITH PASSWORD */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-gray-400 ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="bg-[#1a1a20] border border-white/5 rounded-lg px-4 py-2.5 outline-none focus:border-[#e02eaf]/50 transition-all" />
            </div>
            <button className="w-full py-3 bg-[#e02eaf] text-white font-bold text-sm rounded-lg hover:bg-[#c02695] transition-all shadow-[0_0_20px_rgba(224,46,175,0.3)] mt-4">
              Sign up
            </button>
          </form>
          <div className="mt-8">
             <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-4">— OR —</div>
             <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale" alt="G" />
                Sign up with Google
             </button>
             <p className="mt-6 text-gray-500 text-xs">Already have an account? <button onClick={() => navigate('/login')} className="text-white font-bold hover:underline">Log in</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};