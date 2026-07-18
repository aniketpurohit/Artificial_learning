"use client";

export default function Demo2D() {
  // We need to define our data points here so the render block can map over them
  const shops = [
    { name: "Street Cart", price: 10, dist: 15, color: "bg-blue-400", shadow: "shadow-blue-500/50" },
    { name: "Local Diner", price: 35, dist: 80, color: "bg-emerald-400", shadow: "shadow-emerald-500/50" },
    { name: "Chain Cafe", price: 65, dist: 40, color: "bg-yellow-400", shadow: "shadow-yellow-500/50" },
    { name: "Luxury Brew", price: 90, dist: 10, color: "bg-rose-400", shadow: "shadow-rose-500/50" },
    { name: "Campus Kiosk", price: 20, dist: 90, color: "bg-purple-400", shadow: "shadow-purple-500/50" },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      
      {/* Static Header - Stays in place */}
      <div className="mb-4 flex-shrink-0 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">2-Dimensional Vector Space</h2>
        <p className="text-gray-400 text-sm">
          Mapping by two features: <strong className="text-rose-400">Price (X)</strong> and <strong className="text-purple-400">Distance (Y)</strong>.
        </p>
      </div>

      {/* Scrollable Graph Container */}
      <div className="flex-grow w-full overflow-auto rounded-xl border border-white/5 bg-black/20 custom-scrollbar">
        
        {/* Inner wrapper with fixed minimum dimensions to force scrolling */}
        <div className="relative min-w-[600px] min-h-[450px] w-full h-full p-12 pl-16 pb-16">
          
          {/* Actual Grid Coordinate System */}
          <div className="relative w-full h-full border-l-2 border-b-2 border-gray-600">
            
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:10%_10%]"></div>

            {/* Axis Labels with adjusted spacing */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-sm text-gray-500 font-mono tracking-wider">
              Price (Cost) &rarr;
            </div>
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-gray-500 font-mono tracking-wider">
              &larr; Distance
            </div>

            {/* Min/Max Indicators perfectly aligned with the axes */}
            <div className="absolute -bottom-7 -left-3 text-xs text-gray-500 font-mono">0</div>
            <div className="absolute -bottom-7 -right-4 text-xs text-gray-500 font-mono">100</div>
            <div className="absolute -top-3 -left-10 text-xs text-gray-500 font-mono">100</div>

            {/* Data Points */}
            {shops.map((shop, i) => (
              <div 
                key={i} 
                className="absolute group"
                style={{ left: `${shop.price}%`, bottom: `${shop.dist}%`, transform: 'translate(-50%, 50%)' }}
              >
                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/95 border border-white/10 px-3 py-2 rounded-lg text-xs whitespace-nowrap z-20 pointer-events-none shadow-2xl">
                  <span className="font-bold text-white block mb-1">{shop.name}</span>
                  <span className="text-rose-300">Price: {shop.price}</span> <span className="text-gray-600 mx-1">|</span> <span className="text-purple-300">Dist: {shop.dist}</span>
                </div>
                
                {/* The Node */}
                <div className={`w-6 h-6 rounded-full border-2 border-white/20 cursor-pointer hover:scale-150 transition-all duration-200 ${shop.color} ${shop.shadow} shadow-lg hover:shadow-[0_0_20px_var(--tw-shadow-color)] z-10 group-hover:z-30 relative`}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}