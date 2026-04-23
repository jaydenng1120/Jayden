import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Mail, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.538 4.327 4.327 0 0 1-1.168-2.514H9.673v14.133c-.057 1.552-1.34 2.809-2.903 2.809-1.593 0-2.885-1.282-2.885-2.864 0-1.583 1.292-2.865 2.885-2.865.37 0 .717.07 1.026.195V9.45c-.328-.046-.665-.074-1.026-.074-3.984 0-7.222 3.198-7.222 7.14 0 3.942 3.238 7.141 7.222 7.141 3.983 0 7.221-3.199 7.221-7.14V11.23a8.31 8.31 0 0 0 5.437 2.008V8.62a4.843 4.843 0 0 1-2.839-.934 4.819 4.819 0 0 1-1.802-2.486z"/>
  </svg>
);

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowLoading(false);
            // Wait 1000ms for the loading overlay CSS transition-opacity duration-1000 to complete
            setTimeout(() => setContentReady(true), 1000);
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [emblaRef1] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.2, direction: 'forward' })
  ]);
  
  const [emblaRef2] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.2, direction: 'backward' })
  ]);

  const [socialEmblaRef1] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.0, direction: 'forward' })
  ]);
  
  const [socialEmblaRef2] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.0, direction: 'backward' })
  ]);

  const studioImages = [
    '1.jpg', '12.jpg', '12light_candle_mockup.jpg', '16_bag_coffee.jpg', '2logo.jpg', 
    '3.jpg', '7481769.jpg', '8615244.jpg', '8693352.jpg', '8705430.jpg', 'a.jpg', 'b.jpg', 
    'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'final.jpg', 'g.jpg', 'i.jpg', 'lo yen.jpg', 
    'luxury_gold_foil_logo_mockup_004.jpg', 'm016t0078_apr0822_view_8.jpg', 
    'm021t006_paper_food_box_mockup_02.jpg', 'mockup.jpg', 'mockup_9 2.jpg', 
    'mockup_9 3.jpg', 'mockup_9.jpg', 'shopping_bag_mockup_2.jpg', 't.jpg', 
    'tea_dispenser_box_mockup_left_view.jpg', 'tea_dispenser_box_mockup_perspective_view.jpg', 
    'vi1926 2.jpg', 'vi1926.jpg'
  ];
  const halfLength = Math.ceil(studioImages.length / 2);
  const topImages = studioImages.slice(0, halfLength);
  const bottomImages = studioImages.slice(halfLength);

  const generatedStudio1 = Array.from({ length: 22 }).map((_, i) => topImages[i % topImages.length]);
  const generatedStudio2 = Array.from({ length: 22 }).map((_, i) => bottomImages[i % bottomImages.length]);

  return (
    <div className="relative w-full bg-background overflow-x-hidden">
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${
          showLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-white/70 text-[10px] md:text-xs tracking-widest font-mono uppercase">
          Loading...
        </div>
        
        <div className="flex flex-col items-center justify-center translate-y-[-10%]">
          <div 
            className="text-7xl md:text-[8rem] tracking-tight text-white mb-6 flex items-start"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            JayD<sup className="text-2xl md:text-4xl mt-3 md:mt-4 ml-1">®</sup>
          </div>
          <div className="text-white/60 text-xs tracking-[0.3em] font-sans font-light uppercase">
            JAYDEN NG
          </div>
        </div>

        <div 
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-light"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {String(Math.min(100, loadingProgress)).padStart(3, '0')}%
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
      {/* Fixed Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80"
        style={{ objectPosition: 'center 40%' }}
        src="/copy_578A1ADE-D906-46DB-A6A5-7426924AA9EA.mp4"
      />

      {/* Screen 1: Hero */}
      <div className="relative w-full min-h-screen flex flex-col items-center">
        {/* Navigation */}
        <nav className={`relative z-30 w-full max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-between px-8 py-6 transition-opacity duration-1000 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
          {/* Logo */}
          <div 
            className="text-3xl tracking-tight text-white flex items-start"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            JayD<sup className="text-[10px] mt-2.5 ml-0.5">®</sup>
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
        <main className={`flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 flex-1 w-full max-w-7xl mx-auto pointer-events-none transition-opacity duration-500 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
          <h1 
            className={`${contentReady ? 'animate-fade-rise' : ''} text-6xl sm:text-8xl md:text-[10rem] leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white relative z-20`}
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Jayden
          </h1>
          <p className={`${contentReady ? 'animate-fade-rise-delay' : ''} text-white text-base sm:text-lg max-w-2xl mt-8 leading-relaxed relative z-20`}>
            For the deep thinkers, bold creators, and quiet rebels.<br />
            I carve out space for clarity and meaningful, inspired work amid the chaos.
          </p>
          <button 
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${contentReady ? 'animate-fade-rise-delay-2' : ''} liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer pointer-events-auto relative z-20`}
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
        <div className="relative w-full flex flex-col gap-6 py-10 mt-10">
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
          <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={socialEmblaRef1}>
            <div className="flex gap-6 pl-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((img, i) => (
                <img 
                  key={`r1-${i}`} 
                  src={`/${img}.jpg`} 
                  alt="Socials visual row 1"
                  className="flex-[0_0_auto] w-[120px] md:w-[160px] h-[120px] md:h-[160px] hover:w-[180px] md:hover:w-[240px] cursor-pointer object-cover rounded-2xl shrink-0 grayscale hover:grayscale-0 transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </div>

          {/* Row 2 (RTL) */}
          <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={socialEmblaRef2}>
            <div className="flex gap-6 pl-6">
              {[13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((img, i) => (
                <img 
                  key={`r2-${i}`} 
                  src={`/${img}.jpg`} 
                  alt="Socials visual row 2"
                  className="flex-[0_0_auto] w-[120px] md:w-[160px] h-[120px] md:h-[160px] hover:w-[180px] md:hover:w-[240px] cursor-pointer object-cover rounded-2xl shrink-0 grayscale hover:grayscale-0 transition-all duration-500" 
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

          <div className="w-full flex flex-col gap-6 relative max-w-[100vw] overflow-hidden">
            {/* Row 1 (LTR) */}
            <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef1}>
              <div className="flex gap-6 pl-6">
                {generatedStudio1.map((img, i) => (
                  <img 
                    key={`sr1-${i}`} 
                    src={`/studio2/${img}`} 
                    alt="Studio visual row 1"
                    onClick={() => setSelectedImage(`/studio2/${img}`)}
                    className="flex-[0_0_auto] w-[240px] md:w-[360px] h-[160px] md:h-[240px] hover:scale-[1.02] cursor-pointer object-cover rounded-2xl shrink-0 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                ))}
              </div>
            </div>

            {/* Row 2 (RTL) */}
            <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef2}>
              <div className="flex gap-6 pl-6">
                {generatedStudio2.map((img, i) => (
                  <img 
                    key={`sr2-${i}`} 
                    src={`/studio2/${img}`} 
                    alt="Studio visual row 2"
                    onClick={() => setSelectedImage(`/studio2/${img}`)}
                    className="flex-[0_0_auto] w-[240px] md:w-[360px] h-[160px] md:h-[240px] hover:scale-[1.02] cursor-pointer object-cover rounded-2xl shrink-0 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Screen 5: Footer / Ready to start */}
      <section className="relative z-20 w-full flex flex-col items-center justify-center py-32 px-6">
        <h2 
          className="text-5xl md:text-6xl text-foreground font-normal tracking-tight mb-2"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          ready to start?
        </h2>
        <p className="text-muted-foreground text-lg mt-8 mb-5" style={{ fontFamily: "'Instrument Serif', serif" }}>
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
