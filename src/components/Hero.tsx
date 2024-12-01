import SocialLinks from './SocialLinks';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-orange-900/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Maanas M S
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 text-center italic">
          A guy who loves to binge movies and talk about tech stuff!
        </p>

        <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 mb-12">
          View full Homepage
        </button>

        <SocialLinks />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </div>
    </div>
  );
};

export default Hero;