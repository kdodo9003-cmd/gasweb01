
import React from 'react';

const partners = [
  { name: 'Ferrer', country: 'Spain', category: 'General Pharmaceuticals', img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Aldo-union', country: 'Spain', category: 'Inhalers & Respiratory', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Lisapharma', country: 'Italy', category: 'Sterile Injectables', img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Novag', country: 'Spain', category: 'Hospital Solutions', img: 'https://images.unsplash.com/photo-1550573105-4584e8d75df4?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Ariston', country: 'Brazil', category: 'Consumer Healthcare', img: 'https://images.unsplash.com/photo-1631549916768-4119b255f946?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Global Diagnostics', country: 'EU', category: 'Medical Equipment', img: 'https://images.unsplash.com/photo-1579154236594-e178f046d5f1?q=80&w=2000&auto=format&fit=crop' },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-3xl">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Our Alliance</div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">Global Producers, <br />Local Trust.</h2>
          <p className="text-slate-500 text-lg leading-relaxed">We provide exclusive regional representation for premium medical and pharmaceutical producers, ensuring their life-saving innovations reach patients across Iraq and Jordan.</p>
        </div>
        <div className="mt-8 md:mt-0">
          <a href="#contact" className="inline-flex items-center px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-2xl">
            Partner With Us
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {partners.map((p, i) => (
          <div key={i} className="group relative h-[28rem] overflow-hidden rounded-[3rem] shadow-xl border border-slate-100">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 flex flex-col justify-end p-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-blue-400 text-xs font-black uppercase tracking-widest">{p.category}</span>
                <span className="w-8 h-px bg-white/20"></span>
              </div>
              <h4 className="text-white text-4xl font-bold mb-4 font-sans tracking-tight">{p.name}</h4>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">{p.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
