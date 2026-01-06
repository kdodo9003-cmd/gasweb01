
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
          alt="Medical Distribution Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-blue-400 font-semibold tracking-widest uppercase mb-4 animate-pulse">
            Established 1975 • Baghdad | Amman
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6">
            Leading the <span className="text-blue-400 text-shadow-lg">Medical</span> Supply Frontier
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
            Empowering the healthcare sector with global pharmaceutical partnerships, high-standard logistics, and unwavering integrity for over four decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-center transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              Our Solutions
            </a>
            <a
              href="#portfolio"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-center transition-all"
            >
              International Partners
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  );
};

export default Hero;
