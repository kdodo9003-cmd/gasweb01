
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home" className="scroll-mt-0">
          <Hero />
        </section>
        
        <section id="about" className="py-24 bg-white scroll-mt-20 overflow-hidden">
          <About />
        </section>
        
        <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
          <Services />
        </section>
        
        <section id="partners" className="py-24 bg-white scroll-mt-20">
          <Portfolio />
        </section>
        
        <section id="contact" className="py-24 bg-slate-900 text-white scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Consultant */}
      <AIConsultant />
    </div>
  );
};

export default App;
