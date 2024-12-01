import SocialLinks from './SocialLinks';

interface ContentSectionProps {
  onViewHomepage: () => void;
}

const ContentSection = ({ onViewHomepage }: ContentSectionProps) => {
  return (
    <div className="relative w-full md:w-1/2 min-h-screen bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/50 to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Maanas M S
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 italic max-w-lg">
          A front-end alchemist transforming ideas into seamless user interfaces
        </p>

        <button 
          onClick={onViewHomepage}
          className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 mb-12"
        >
          View full Homepage
        </button>

        <SocialLinks />
      </div>
    </div>
  );
};

export default ContentSection;