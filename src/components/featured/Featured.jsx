import React from 'react';

const Featured = () => {
  return (
    <div className="bg-[#010336] py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 uppercase tracking-wide">Featured on</h2>
        
        <div className="bg-[#13124f] rounded-lg p-8 shadow-lg">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {/* TechCrunch */}
            <div className="flex-1 min-w-[150px] flex justify-center">
              <span className="font-bold text-2xl text-[#a1a0ba]">TechCrunch</span>
            </div>
            
            {/* Fast Company */}
            <div className="flex-1 min-w-[150px] flex justify-center">
              <span className="font-serif italic font-bold text-2xl text-[#a1a0ba]">FAST@MPANY</span>
            </div>
            
            {/* MIT */}
            <div className="flex-1 min-w-[150px] flex justify-center">
              <span className="font-bold text-3xl tracking-tight text-[#a1a0ba]">MIT</span>
            </div>
            
            {/* Forbes */}
            <div className="flex-1 min-w-[150px] flex justify-center">
              <span className="font-serif font-bold text-3xl text-[#a1a0ba]">Forbes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;