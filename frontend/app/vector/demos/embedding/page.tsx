"use client";

"use client";

import { useState, useMemo } from 'react';
import WindowFrame from '@/src/core/ui/WindowFrame';
import { TABS } from '@/src/vector/constants';
import Demo1D from '@/src/vector/demos/embedding/Demo1D';
import Demo2D from '@/src/vector/demos/embedding/Demo2D';
import DemoD3 from '@/src/vector/demos/embedding/DemoD3';
import TelemetryCanvas from '@/src/vector/demos/embedding/TelemetryCanvas';

// ... rest of your file

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(1);
  
  const currentTabConfig = useMemo(
    () => TABS.find(t => t.id === activeTab) || TABS[0], 
    [activeTab]
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black text-slate-200 p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      
      <header className="mb-10 max-w-5xl mx-auto">
        <div className="flex items-center space-x-3 mb-2">
          <div className="h-1 w-8 bg-cyan-500 rounded-full"></div>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Vector Embeddings
          </h1>
        </div>
        <p className="text-gray-400 text-lg">Understanding how machines perceive data through spatial dimensions.</p>
      </header>

      <div className="max-w-5xl mx-auto">
        <div className="flex space-x-2 mb-8 bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md w-fit flex-wrap gap-y-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white' 
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              <span className={activeTab === tab.id ? tab.color : ''}>{tab.name}</span>
            </button>
          ))}
        </div>

        <WindowFrame filename={currentTabConfig.filename}>
            {activeTab === 1 && <Demo1D />}
            {activeTab === 2 && <Demo2D />}
            {activeTab === 4 && <DemoD3 />}
            {activeTab === 3 && (
              <div className="absolute inset-0">
                <TelemetryCanvas />
              </div>
            )}
        </WindowFrame>
      </div>
    </main>
  );
}