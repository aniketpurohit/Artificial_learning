// app/vector/page.tsx
import Link from 'next/link';

export default function VectorHub() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black text-slate-200 p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="h-1 w-8 bg-cyan-500 rounded-full"></div>
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Vector Space Hub
            </h1>
          </div>
          <p className="text-gray-400 text-lg">Select a visualization module to initialize.</p>
        </header>

        {/* Vector Sub-Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Embeddings Dashboard Card */}
          <Link href="/vector/demos/embedding" className="group relative block bg-gray-900/40 border border-white/10 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-rose-500/10">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all duration-500"></div>
            
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                Embeddings
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Dive into 1D, 2D, and 3D vector embeddings. Visualize data clustering, semantic relationships, and real-time hardware telemetry mapping.
            </p>
            
            <div className="mt-6 text-sm font-semibold text-rose-400 group-hover:translate-x-2 transition-transform duration-300">
              Initialize &rarr;
            </div>
          </Link>

          {/* Placeholder for future Vector demos */}
          <div className="relative block bg-gray-900/20 border border-white/5 rounded-2xl p-6 border-dashed opacity-50">
            <h2 className="text-xl font-bold text-gray-500 mb-2">
              Tensor Operations
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              (Awaiting configuration...)
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}