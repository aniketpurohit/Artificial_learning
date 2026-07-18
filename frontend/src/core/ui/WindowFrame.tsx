// components/ui/WindowFrame.tsx
"use client";

interface WindowFrameProps {
  filename: string;
  children: React.ReactNode;
}

export default function WindowFrame({ filename, children }: WindowFrameProps) {
  return (
    <div className="bg-gray-900/40 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden h-[65vh] min-h-[500px] flex flex-col relative">
      <div className="px-6 py-3 bg-black/40 border-b border-white/5 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs font-mono text-gray-500">
          {filename}
        </div>
      </div>
      <div className="flex-grow relative w-full h-full p-8 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}