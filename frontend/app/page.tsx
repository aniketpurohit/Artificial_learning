// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black text-slate-200 p-6 md:p-12 font-sans selection:bg-cyan-500/30 flex flex-col items-center justify-center">
      
      <div className="max-w-5xl w-full space-y-8 text-center">
        {/* Header */}
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="h-1.5 w-12 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">System Control</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Artificial Learning
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Interactive explorations of machine learning concepts, system architecture, and mathematical spaces.
        </p>

        {/* Navigation Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 text-left">
          
          {/* Card 1: Vector Main Page Hub */}
          <Link href="/vector" className="group relative block bg-gray-900/40 border border-white/10 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Phase 1: Vector Space
              </h2>
              <span className="bg-cyan-500/20 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/30">
                ACTIVE
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Explore the foundational concepts of vector mathematics, embeddings, and spatial data representation.
            </p>
            
            <div className="mt-6 text-sm font-semibold text-cyan-500 group-hover:translate-x-2 transition-transform duration-300">
              Access Vector Hub &rarr;
            </div>
          </Link>

          {/* Card 2: Future Module Placeholder */}
          <div className="relative block bg-gray-900/20 border border-white/5 rounded-2xl p-8 opacity-60 cursor-not-allowed">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-400">
                Phase 2: Local-First Systems
              </h2>
              <span className="bg-gray-800 text-gray-500 text-xs font-mono px-3 py-1 rounded-full border border-gray-700">
                LOCKED
              </span>
            </div>
            
            <p className="text-gray-500 leading-relaxed">
              Upcoming modules exploring high-performance worker pools, container architectures, and local processing.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}