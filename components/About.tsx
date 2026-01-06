
import React, { useState } from 'react';

const About: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="relative z-10 group">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Medical Facility"
              className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-10 -right-10 bg-blue-600 p-10 rounded-[2rem] shadow-2xl text-white transform group-hover:scale-105 transition-transform">
              <p className="text-6xl font-black mb-1 leading-none">1975</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Since Foundation</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
            Heritage & Trust
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
            Committed to <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Integrity</span> Across the Region.
          </h2>
          <p className="text-slate-500 text-xl mb-10 leading-relaxed font-light">
            Based in Baghdad with a strong footprint in Amman, Gasgous Group stands as a beacon of quality in the pharmaceutical and trading sectors. We prioritize medical excellence and ethical distribution above all else.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-sans">Our Vision</h4>
              <p className="text-slate-500 text-sm leading-relaxed">To achieve sustained growth while remaining the region's most trusted name in healthcare supply and distribution.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-sans">Our Mission</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Achieving market-beating profitability for our global partners through transparency, quality, and operational excellence.</p>
            </div>
          </div>

          <button 
            onClick={() => setShowHistory(!showHistory)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-blue-600 hover:translate-y-[-2px] active:translate-y-0"
          >
            {showHistory ? 'Collapse History' : 'Explore Our 50-Year History'}
            <svg className={`w-5 h-5 transition-transform duration-300 ${showHistory ? 'rotate-180' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>

      {/* Expandable History Content */}
      {showHistory && (
        <div className="mb-32 p-12 bg-blue-600 rounded-[3rem] text-white shadow-2xl shadow-blue-500/30 animate-in fade-in zoom-in duration-500">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Timeline of Growth</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-4xl font-black text-blue-300 mb-4">1975</div>
              <h4 className="text-xl font-bold mb-4">Founding in Baghdad</h4>
              <p className="text-blue-100 text-sm leading-relaxed">Gasgous Group established its headquarters in Iraq, beginning as a visionary trading house dedicated to bridging global markets with local needs.</p>
            </div>
            <div className="relative">
              <div className="text-4xl font-black text-blue-300 mb-4">1990s</div>
              <h4 className="text-xl font-bold mb-4">The Medical Shift</h4>
              <p className="text-blue-100 text-sm leading-relaxed">Transitioned core focus to pharmaceutical distribution, securing exclusive representation for world-leading medical producers in Europe and beyond.</p>
            </div>
            <div className="relative">
              <div className="text-4xl font-black text-blue-300 mb-4">Modern Era</div>
              <h4 className="text-xl font-bold mb-4">Regional Expansion</h4>
              <p className="text-blue-100 text-sm leading-relaxed">Today, we operate a seamless logistics network across Baghdad, Amman, Kurdistan, and Basrah, managing the region's most critical medical tenders.</p>
            </div>
          </div>
        </div>
      )}

      {/* Strategic Branches */}
      <div className="pt-20 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Regional Footprint</h2>
          <div className="h-px bg-slate-100 flex-1 hidden md:block"></div>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Iraq • Jordan • Global</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: 'Baghdad', type: 'Global HQ', code: 'IRQ' },
            { city: 'Amman', type: 'Regional Hub', code: 'JOR' },
            { city: 'Basrah', type: 'Port Logistics', code: 'IRQ' },
            { city: 'Erbil', type: 'Northern Branch', code: 'IRQ' }
          ].map((branch, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{branch.city}</h4>
              <p className="text-slate-400 text-xs mb-4">{branch.type}</p>
              <div className="text-[10px] font-black tracking-widest text-blue-600 border-t border-slate-200 pt-4 uppercase">
                Operated by Gasgous Group
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
