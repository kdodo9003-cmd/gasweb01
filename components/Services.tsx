
import React from 'react';

const services = [
  {
    title: 'Pharma Distribution',
    description: 'Specialized warehousing and cold-chain logistics for pharmaceuticals, medical equipment, and health products.',
    icon: '💊',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Regulatory Affairs',
    description: 'Expertise in product registration, MoH compliance, and pharmacovigilance across Iraq and Jordan markets.',
    icon: '📜',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop'
  },
  {
    title: 'Tender Management',
    description: 'Facilitating large-scale government and private sector medical tenders with a focus on integrity and transparency.',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1454165833767-1316b34460d9?q=80&w=2070&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Capabilities</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Distribution & Consultation</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="h-56 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-2xl">
                {service.icon}
              </div>
            </div>
            <div className="p-10">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors font-sans">
                {service.title}
              </h4>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                View Details
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
