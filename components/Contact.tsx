
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Global Presence</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">Get in Touch with our Teams</h2>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Amman, Jordan</p>
                <p className="text-lg font-bold text-slate-100 mb-1">Regional Branch</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Alswifieh, Zahran Street, Bldg No. 267<br />
                  Jawharat Al Sweifieh Complex, Suite 301<br />
                  <span className="text-slate-200 mt-2 block">+962 79 6500 555</span>
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Baghdad, Iraq</p>
                <p className="text-lg font-bold text-slate-100 mb-1">Headquarters</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Hay Alwahda, Dist 904, Lane 36<br />
                  Home No. 18, Baghdad<br />
                  <span className="text-slate-200 mt-2 block">+964 7713883798</span>
                </p>
              </div>
            </div>

            <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h4 className="font-bold text-white">Pharmacovigilance</h4>
              </div>
              <p className="text-slate-400 text-sm mb-4">Dedicated safety reporting & complaints portal managed by Dr. Samer Mohammed.</p>
              <p className="text-blue-400 font-bold text-sm">Pharmacovigilance@gasgousgroup.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <h4 className="text-slate-900 text-2xl font-bold mb-8">Send an Inquiry</h4>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Your Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:border-blue-500 focus:bg-white outline-none text-slate-900 transition-all" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:border-blue-500 focus:bg-white outline-none text-slate-900 transition-all" placeholder="Enter email" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Subject</label>
              <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:border-blue-500 focus:bg-white outline-none text-slate-900 transition-all appearance-none">
                <option>Partnership Inquiry</option>
                <option>Pharmaceutical Distribution</option>
                <option>Complaint / Safety Report</option>
                <option>Regulatory Consultation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Detailed Message</label>
              <textarea rows={5} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:border-blue-500 focus:bg-white outline-none text-slate-900 transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 transition-all transform active:scale-95 uppercase tracking-widest text-sm">
              Transmit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
