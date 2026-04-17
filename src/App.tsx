import React from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/copy_578A1ADE-D906-46DB-A6A5-7426924AA9EA.mp4"
      />

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-between px-8 py-6">
        {/* Logo */}
        <div 
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          JayD<sup className="text-xs">®</sup>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-sm text-foreground transition-colors">Home</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About me</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Socials</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 flex-1 w-full max-w-7xl mx-auto">
        <h1 
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Jayden
        </h1>
        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
          About me
        </button>
      </main>
    </div>
  );
}
