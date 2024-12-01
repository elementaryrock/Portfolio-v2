import React from 'react';

const PortraitSection = () => {
  return (
    <div className="relative w-full md:w-1/2 h-screen">
      {/* Background with artistic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-red-900/40" />
      
      {/* Portrait container */}
      <div className="relative h-full flex items-center justify-center p-8">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {/* Artistic background splashes */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 to-red-700/80 rounded-full blur-2xl transform -rotate-12 scale-90" />
          <div className="absolute inset-0 bg-gradient-to-tl from-red-600/60 to-yellow-600/60 rounded-full blur-xl transform rotate-12 scale-95" />
          
          {/* Portrait image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
            <img
              src="/images/portrait.jpg"
              alt="Portrait"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitSection;