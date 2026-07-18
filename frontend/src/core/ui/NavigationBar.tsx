import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-2 w-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform"></div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Artificial Learning
          </span>
        </Link>

        {/* Links */}
        <div className="flex space-x-8">
          <Link 
            href="/vector" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Hub
          </Link>
          <Link 
            href="/vector" 
            className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Vector Space
          </Link>
        </div>
        
      </div>
    </nav>
  );
}