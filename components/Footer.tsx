
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-black tracking-tighter brand-font mb-6 block">
              GASGOUS<span className="text-blue-500">GROUP</span>
            </span>
            <p className="text-slate-500 leading-relaxed mb-8">
              A multi-company group focused on integrity, quality, and transparency in the medical and trading industries across the Middle East.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors border border-slate-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-blue-400">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-blue-400">Medical Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Product Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pharmacovigilance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tender Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-blue-400">Head Office</h4>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Hay Alwahda, Dist 904, Lane 36<br />
              Home No. 18, Baghdad, Iraq<br />
              <span className="block mt-4 font-bold text-slate-300">info@gasgousgroup.com</span>
            </p>
            <a href="#contact" className="text-blue-500 font-bold text-sm border-b border-blue-500/30 pb-1">Report a Side Effect</a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-700 text-[10px] uppercase tracking-[0.2em] font-black">
          <p>© 1975-2024 Gasgous Group. Regional Industrial & Medical Conglomerate.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Quality Standards</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Corporate Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
