import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.538 4.327 4.327 0 0 1-1.168-2.514H9.673v14.133c-.057 1.552-1.34 2.809-2.903 2.809-1.593 0-2.885-1.282-2.885-2.864 0-1.583 1.292-2.865 2.885-2.865.37 0 .717.07 1.026.195V9.45c-.328-.046-.665-.074-1.026-.074-3.984 0-7.222 3.198-7.222 7.14 0 3.942 3.238 7.141 7.222 7.141 3.983 0 7.221-3.199 7.221-7.14V11.23a8.31 8.31 0 0 0 5.437 2.008V8.62a4.843 4.843 0 0 1-2.839-.934 4.819 4.819 0 0 1-1.802-2.486z"/>
  </svg>
);

export default function App() {
  return (
    <div className="relative w-full bg-background overflow-x-hidden">
      {/* Fixed Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 40%' }}
        src="/201195.mp4"
      />

      {/* Screen 1: Hero */}
      <div className="relative w-full min-h-screen flex flex-col items-center">
        {/* Navigation */}
        <nav className="relative z-30 w-full max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-between px-8 py-6">
          {/* Logo */}
          <div 
            className="text-3xl tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            JayD<sup className="text-xs">®</sup>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#about-section" onClick={(e) => { e.preventDefault(); document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-white/70 hover:text-white transition-colors">About me</a>
            <a href="#connect-section" onClick={(e) => { e.preventDefault(); document.getElementById('connect-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-white/70 hover:text-white transition-colors">Socials</a>
            <a href="#studio-section" onClick={(e) => { e.preventDefault(); document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-white/70 hover:text-white transition-colors">Studio</a>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 flex-1 w-full max-w-7xl mx-auto pointer-events-none">
          <h1 
            className="animate-fade-rise text-6xl sm:text-8xl md:text-[10rem] leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white relative z-20"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Jayden
          </h1>
          <p className="animate-fade-rise-delay text-gray-400 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed relative z-20">
            For the deep thinkers, bold creators, and quiet rebels.<br />
            I carve out space for clarity and meaningful, inspired work amid the chaos.
          </p>
          <button 
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer pointer-events-auto relative z-20"
          >
            About me
          </button>
        </main>
      </div>

      {/* Container for content below Hero */}
      <div className="relative w-full z-10 -mt-[25vh] pt-[25vh]">
        {/* Blurred Gradient Background */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none z-0 backdrop-blur-[50px] bg-black/50"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 300px, rgba(0,0,0,0.3) 700px, black 1200px)', 
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 300px, rgba(0,0,0,0.3) 700px, black 1200px)' 
          }}
        ></div>

        {/* Screen 2: About Me Section */}
        <section id="about-section" className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center p-8 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-6xl md:text-8xl text-white font-normal drop-shadow-xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
              About Me
            </h2>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-4xl drop-shadow-md font-light space-y-4 flex flex-col">
              <span>Hi, I'm Jayden</span>
              <span>I enjoy turning ideas into simple visuals with depth and a sense of life.</span>
              <span>For deep thinkers, bold creators, and quiet rebels, I create work that speaks softly yet carries meaning—always seeking a balance between form, function, and emotion.</span>
              <span>I believe design is not only meant to be seen, but to be felt—where small details make the difference, and simplicity is not about having less, but about keeping what truly matters.</span>
            </p>
          </div>
        </section>

        {/* Screen 3: Socials */}
        <section 
          id="connect-section" 
          className="relative w-full z-10 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden pt-24"
        >

        {/* Top: Socials (Logo + Social Links) */}
        <h2 
          className="text-7xl md:text-8xl mb-14 text-foreground font-normal tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Socials
        </h2>

        <div className="flex flex-row flex-wrap items-center justify-center gap-5 mb-8 max-w-4xl mx-auto z-20">
          <a href="https://www.tiktok.com/@jaydenng1120" target="_blank" rel="noopener noreferrer" className="liquid-glass flex items-center gap-3 px-6 py-3.5 rounded-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer text-foreground">
            <TikTokIcon className="w-5 h-5" />
            <span className="font-semibold text-sm">TikTok</span>
            <span className="text-sm">(@jaydenng1120)</span>
          </a>

          <a href="https://www.instagram.com/jaydenng1120" target="_blank" rel="noopener noreferrer" className="liquid-glass flex items-center gap-3 px-6 py-3.5 rounded-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer text-foreground">
            <Instagram className="w-5 h-5" />
            <span className="font-semibold text-sm">IG</span>
            <span className="text-sm">(@jaydenng1120)</span>
          </a>

          <a href="https://www.facebook.com/jaydenng1120" target="_blank" rel="noopener noreferrer" className="liquid-glass flex items-center gap-3 px-6 py-3.5 rounded-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer text-foreground">
            <Facebook className="w-5 h-5" />
            <span className="font-semibold text-sm">Facebook</span>
            <span className="text-sm">(@jaydenng1120)</span>
          </a>
        </div>

        {/* Email Button */}
        <a 
          href="mailto:jaydenng1120@gmail.com" 
          target="_blank" rel="noopener noreferrer"
          className="liquid-glass flex items-center gap-3 px-8 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer text-foreground font-medium text-sm mb-10 z-20"
        >
          <Mail className="w-5 h-5" />
          jaydenng1120@gmail.com
        </a>

        {/* Bottom: 2-Row Sliders + Vision. Visual. Me text for Socials */}
        <div className="relative w-full flex flex-col gap-6 pt-10 pb-20 mt-10">
          {/* Centered Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-difference z-20">
            <h2 
              className="text-6xl md:text-8xl text-white font-normal tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Vision. Visual. Me.
            </h2>
          </div>

          {/* Row 1 (LTR) */}
          <div className="flex w-full overflow-hidden marquee-container">
            <div className="animate-marquee-reverse gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4].map((img, i) => (
                <img 
                  key={`r1-${i}`} 
                  src={`https://picsum.photos/seed/a${img}/400/400?grayscale`} 
                  alt="Socials visual row 1"
                  className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] hover:w-[180px] md:hover:w-[240px] object-cover rounded-2xl shrink-0 grayscale hover:grayscale-0 transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </div>

          {/* Row 2 (RTL) */}
          <div className="flex w-full overflow-hidden marquee-container">
            <div className="animate-marquee gap-6 relative right-[10%]">
              {[8, 7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5].map((img, i) => (
                <img 
                  key={`r2-${i}`} 
                  src={`https://picsum.photos/seed/b${img}/400/400?grayscale`} 
                  alt="Socials visual row 2"
                  className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] hover:w-[180px] md:hover:w-[240px] object-cover rounded-2xl shrink-0 grayscale hover:grayscale-0 transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </div>
        </div>

        </section>

        {/* Screen 4: Studio */}
        <section 
          id="studio-section" 
          className="relative w-full z-10 flex flex-col items-center justify-center mt-20 pt-32 md:pt-40 pb-48 md:pb-64 min-h-[85vh]"
        >
          <h2 
            className="text-7xl md:text-8xl mb-14 text-foreground font-normal tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Studio
          </h2>

          <div className="w-full flex flex-col gap-6 relative max-w-[100vw] overflow-hidden marquee-container">
            {/* Row 1 (LTR) */}
            <div className="flex w-full">
              <div className="animate-marquee-reverse gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4].map((img, i) => (
                  <img 
                    key={`sr1-${i}`} 
                    src={`https://picsum.photos/seed/s1${img}/400/280`} 
                    alt="Studio visual row 1"
                    className="w-[240px] md:w-[360px] h-[160px] md:h-[240px] hover:w-[280px] md:hover:w-[420px] object-cover rounded-2xl shrink-0 transition-all duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                ))}
              </div>
            </div>

            {/* Row 2 (RTL) */}
            <div className="flex w-full">
              <div className="animate-marquee gap-6 relative right-[10%]">
                {[8, 7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5].map((img, i) => (
                  <img 
                    key={`sr2-${i}`} 
                    src={`https://picsum.photos/seed/s2${img}/400/280`} 
                    alt="Studio visual row 2"
                    className="w-[240px] md:w-[360px] h-[160px] md:h-[240px] hover:w-[280px] md:hover:w-[420px] object-cover rounded-2xl shrink-0 transition-all duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Screen 5: Footer / Ready to start */}
      <section className="relative z-20 w-full bg-black flex flex-col items-center justify-center py-32 px-6">
        <h2 
          className="text-5xl md:text-6xl text-foreground font-normal tracking-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          ready to start?
        </h2>
        <p className="text-muted-foreground text-lg mb-12" style={{ fontFamily: "'Instrument Serif', serif" }}>
          drop an email.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <a 
            href="mailto:jaydenng1120@gmail.com" 
            target="_blank" rel="noopener noreferrer"
            className="liquid-glass flex items-center gap-3 px-8 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer text-foreground font-medium text-sm"
          >
            <Mail className="w-5 h-5" />
            jaydenng1120@gmail.com
          </a>
        </div>

        <p 
          className="text-muted-foreground/60 text-lg mb-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          if you scroll all the way through here, i wish you have a good day!
        </p>
        <p className="text-muted-foreground/40 text-xs tracking-widest font-mono uppercase">
          JAYDEN™ {new Date().getFullYear()}
        </p>
      </section>
      </div>
    </div>
  );
}
