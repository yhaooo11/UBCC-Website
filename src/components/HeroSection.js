export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-10 flex flex-col items-end text-white">
        <a href="#events" className="flex items-center gap-2 group">
          <span className="text-xl text-[#E4B834] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
          <span className="font-sans font-bold">Events</span>
        </a>
        <a href="#about" className="flex items-center gap-2 group">
          <span className="text-xl text-[#E4B834] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
          <span className="font-sans font-bold">About</span>
        </a>
        <a href="#team" className="flex items-center gap-2 group">
          <span className="text-xl text-[#E4B834] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
          <span className="font-sans font-bold">Team</span>
        </a>
        <a href="#faq" className="flex items-center gap-2 group">
          <span className="text-xl text-[#E4B834] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
          <span className="font-sans font-bold">FAQ</span>
        </a>
        <a href="https://www.instagram.com/ubcclimbingclub/" className="flex items-center gap-2 group">
          <span className="text-xl text-[#E4B834] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
          <span className="font-sans font-bold">Instagram</span>
        </a>
      </nav>

      {/* Title Overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-mono tracking-wider">
          UBC CLIMBING CLUB
        </h1>
      </div>
    </section>
  );
}

