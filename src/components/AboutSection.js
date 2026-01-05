export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#77A5B5] py-16 px-8 md:px-16">
      {/* SEND HARD Stamp - overlapping badge */}
      <div className="absolute -top-8 right-8 md:right-16 z-10 transform rotate-12">
        <div className="bg-[#CE84AD] rounded-full px-6 py-4 shadow-lg">
          <p className="text-white font-bold text-lg uppercase font-sans">SEND HARD!</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - About Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#E4B834] font-sans mb-6 underline decoration-4 underline-offset-4">
              About
            </h2>
            <p className="text-white font-mono text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#5a8a9a] rounded-lg aspect-[4/3]"></div>
            <div className="bg-[#5a8a9a] rounded-lg aspect-square"></div>
            <div className="bg-[#5a8a9a] rounded-lg aspect-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

