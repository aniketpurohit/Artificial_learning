"use client";

export default function Demo1D() {
  const shops = [
    { name: "Street Cart", price: 10, color: "bg-blue-400", shadow: "shadow-blue-500/50" },
    { name: "Local Diner", price: 35, color: "bg-emerald-400", shadow: "shadow-emerald-500/50" },
    { name: "Chain Cafe", price: 65, color: "bg-yellow-400", shadow: "shadow-yellow-500/50" },
    { name: "Luxury Brew", price: 90, color: "bg-rose-400", shadow: "shadow-rose-500/50" },
  ];

  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">1-Dimensional Vector Space</h2>
        <p className="text-gray-400">Mapping coffee shops by a single feature: <strong className="text-rose-400">Price</strong>.</p>
      </div>

      <div className="relative w-full h-32 flex items-center">
        {/* The X Axis */}
        <div className="absolute w-full h-1 bg-gray-800 rounded-full"></div>
        
        {/* Axis Labels */}
        <div className="absolute -bottom-6 left-0 text-xs text-gray-500 font-mono">Cheap ($)</div>
        <div className="absolute -bottom-6 right-0 text-xs text-gray-500 font-mono">Expensive ($$$)</div>

        {/* The Data Points */}
        {shops.map((shop, i) => (
          <div 
            key={i} 
            className="absolute group"
            style={{ left: `${shop.price}%`, transform: 'translateX(-50%)' }}
          >
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 border border-white/10 px-3 py-1.5 rounded text-xs whitespace-nowrap z-10 pointer-events-none">
              <span className="font-bold text-white">{shop.name}</span>
              <span className="text-gray-400 block mt-0.5">Price: {shop.price}/100</span>
            </div>
            
            {/* The Node */}
            <div className={`w-6 h-6 rounded-full border-2 border-white/20 cursor-pointer hover:scale-125 transition-transform duration-200 ${shop.color} ${shop.shadow} shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_var(--tw-shadow-color)]`}>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}