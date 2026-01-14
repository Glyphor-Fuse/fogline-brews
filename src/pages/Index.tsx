import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowDown } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureEffect } from '../components/effects/SignatureEffect';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

export default function Index() {
  return (
    <div className="antialiased bg-[#0f0f11] text-[#e2e2e2] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&family=Syne:wght@400;700;800&display=swap');
        
        :root {
          --accent: #cd5d36;
        }
        
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Syne', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <SignatureEffect effect="noise" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl font-bold tracking-tighter">EPOCH & RYE.</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest opacity-80">
          <a href="#process" className="hover:text-gray-400 transition-colors">Process</a>
          <a href="#menu" className="hover:text-gray-400 transition-colors">Menu</a>
          <a href="#visit" className="hover:text-gray-400 transition-colors">Visit</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <SignatureInteraction type="parallax" className="w-full h-full" intensity={0.3}>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop" 
              alt="Espresso extraction macro" 
              className="w-full h-full object-cover opacity-60 scale-105"
              style={{ filter: 'contrast(1.1) brightness(0.6)' }}
            />
          </SignatureInteraction>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <Reveal>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-[#cd5d36]">Specialty Coffee • San Francisco</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-6 mix-blend-lighten">
              LIQUID<br/>
              <span className="italic font-light text-white/70">ARCHITECTURE</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
                 <a 
                   href="#visit" 
                   className="relative inline-block overflow-hidden border border-white/20 px-8 py-4 text-sm uppercase tracking-widest hover:border-transparent transition-colors group"
                 >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Taste the Void</span>
                    <span className="absolute inset-0 bg-[#cd5d36] transform scale-x-0 origin-right transition-transform duration-400 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-x-100 group-hover:origin-left -z-0"></span>
                 </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <LuArrowDown className="w-6 h-6" />
        </div>
      </header>

      {/* 2. VALUE PROPOSITION */}
      <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Block */}
          <div className="lg:col-span-5 z-20">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                NOT JUST CAFFEINE.<br/>
                <span className="text-[#cd5d36]">RITUAL.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                In a city that moves at the speed of light, we press pause. 
                Epoch & Rye is an experiment in patience. We source micro-lot beans 
                that tell a story of soil, altitude, and obsessive cultivation.
              </p>
              <div className="h-px w-24 bg-white/20"></div>
            </Reveal>
          </div>

          {/* Image overlapping text */}
          <div className="lg:col-span-8 lg:-ml-24 lg:mt-24 z-10 relative">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] to-transparent z-10 opacity-60"></div>
                <motion.img 
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop" 
                  alt="Dark moody cafe interior" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (The Process) */}
      <section id="process" className="py-32 bg-[#121214]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <Reveal>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">The Methodology</h3>
              <p className="text-3xl md:text-4xl font-light font-[Syne]">PRECISION IN THREE ACTS</p>
            </Reveal>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <Reveal>
              <div className="group flex flex-col md:flex-row gap-8 items-start">
                <div className="text-6xl font-bold text-[#222] group-hover:text-[#cd5d36] transition-colors duration-500">01</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4">Source</h4>
                  <p className="text-gray-400 leading-relaxed">Ethical direct trade with farmers in Ethiopia, Colombia, and Costa Rica. We look for high-altitude beans with complex acidity and fruit-forward profiles.</p>
                </div>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal>
              <div className="group flex flex-col md:flex-row gap-8 items-start">
                <div className="text-6xl font-bold text-[#222] group-hover:text-[#cd5d36] transition-colors duration-500">02</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4">Roast</h4>
                  <p className="text-gray-400 leading-relaxed">Small batch roasting in our Mission district facility. We aim for the "sweet spot"—developing sugar browning without sacrificing the bean's inherent character.</p>
                </div>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal>
              <div className="group flex flex-col md:flex-row gap-8 items-start">
                <div className="text-6xl font-bold text-[#222] group-hover:text-[#cd5d36] transition-colors duration-500">03</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4">Extract</h4>
                  <p className="text-gray-400 leading-relaxed">Whether it's our signature espresso or a V60 pour-over, every variable—temperature, grind size, pressure—is measured to the gram.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES (Menu/Vibe) */}
      <section id="menu" className="py-32 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
          
          {/* Item 1: Text Block */}
          <Reveal className="h-full">
            <div className="h-full p-8 border border-white/10 flex flex-col justify-between hover:border-[#cd5d36]/50 transition-colors duration-300">
              <div>
                <h3 className="text-3xl font-bold mb-2">THE<br/>ROTATION</h3>
                <p className="text-sm text-gray-500 mt-4">WEEKLY CURATED SELECTION</p>
              </div>
              <ul className="space-y-4 text-lg font-light">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Gesha Village</span>
                  <span className="text-[#cd5d36]">$12</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Nitro Cold Brew</span>
                  <span className="text-[#cd5d36]">$7</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Oat Flat White</span>
                  <span className="text-[#cd5d36]">$6</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Item 2: Image */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507133750069-41d57118c39e?q=80&w=2670&auto=format&fit=crop" 
                alt="Latte Art" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs uppercase tracking-widest">Craft</div>
            </div>
          </Reveal>

          {/* Item 3: Image */}
          <Reveal delay={0.2} className="h-full">
            <div className="relative h-full overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e7385a861?q=80&w=2670&auto=format&fit=crop" 
                alt="Pour over coffee" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs uppercase tracking-widest">Precision</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. PROOF */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              "The most serious coffee program in the Bay Area right now. Unapologetically precise."
            </h2>
            <div className="flex justify-center items-center gap-4">
              <span className="h-px w-12 bg-black"></span>
              <p className="font-mono uppercase tracking-widest text-sm">Eater SF</p>
              <span className="h-px w-12 bg-black"></span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. PRIMARY CTA (Visit) */}
      <section id="visit" className="relative bg-[#0a0a0a] border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[600px] md:h-[500px]">
          {/* Info Side */}
          <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-white">VISIT THE LAB</h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</p>
                <p className="text-xl">892 Valencia St.<br/>San Francisco, CA 94110</p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Hours</p>
                <div className="grid grid-cols-2 gap-4 max-w-xs">
                  <span className="text-gray-300">Mon - Fri</span>
                  <span className="text-right">7am - 4pm</span>
                  <span className="text-gray-300">Sat - Sun</span>
                  <span className="text-right">8am - 5pm</span>
                </div>
              </div>
            </div>

            <a href="#" className="inline-block mt-12 text-[#cd5d36] uppercase tracking-widest border-b border-[#cd5d36]/50 pb-1 hover:text-white hover:border-white transition-colors w-max">
              Get Directions →
            </a>
          </div>

          {/* Image/Map Placeholder Side */}
          <div className="relative h-full overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1481833761820-05569952d1c2?q=80&w=2670&auto=format&fit=crop" 
               alt="San Francisco Foggy Street" 
               className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          </div>
        </div>
        
        <footer className="py-8 text-center text-xs text-gray-700 uppercase tracking-widest">
          &copy; 2024 Epoch & Rye. All rights reserved.
        </footer>
      </section>
    </div>
  );
}
