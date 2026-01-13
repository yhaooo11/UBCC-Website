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

      {/* Title Overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-mono tracking-wider">
          UBC CLIMBING CLUB
        </h1>
      </div>
    </section>
  );
}
