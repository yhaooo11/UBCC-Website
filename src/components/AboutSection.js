export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#77A5B5] py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - About Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#E4B834] font-sans mb-6 underline decoration-4 underline-offset-4">
              About
            </h2>
            <p className="text-white font-mono text-lg leading-relaxed">
              UBC Climbing Club is dedicated to fostering community, growth, and adventure through rock climbing. 
              We bridge the gap between the gym and the crag by hosting regular social events at local Vancouver climbing gyms 
              and facilitating coached or peer-led outdoor trips. Our mission is to provide a safe, inclusive, and 
              social environment for climbers of all backgrounds. From total beginners to expert crushers, 
              there's a place for everyone in our community.
            </p>
          </div>

          {/* Right Side - Image Grid */}
          <div className="relative grid grid-cols-2 gap-4 pt-10">
            {/* SEND HARD Stamp - overlapping badge */}
            <div className="absolute top-[-5%] right-[-13%] z-10 transform rotate-12">
              <div className="bg-[#D894A6] rounded-full w-32 h-32 md:w-40 md:h-40 border-2 border-black shadow-lg flex items-center justify-center">
                <p className="text-[#E1DFC6] font-bold text-lg uppercase font-sans" style={{
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}>SEND HARD!</p>
              </div>
            </div>
            <img 
              src="/IMG_3120.jpg" 
              alt="Climbing club activity" 
              className="rounded-lg h-64 w-full object-cover"
            />
            <img 
              src="/IMG_4167.jpg" 
              alt="Climbing club activity" 
              className="rounded-lg h-64 w-full object-cover"
            />
            <img 
              src="/IMG_3748.jpg" 
              alt="Climbing club activity" 
              className="rounded-lg h-72 w-auto max-w-md object-cover col-span-2 justify-self-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

