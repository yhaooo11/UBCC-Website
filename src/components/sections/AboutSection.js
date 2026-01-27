export default function AboutSection() {
  return (
    // <section id="about" className="relative w-full bg-[#77A5B5] py-16 px-8 md:px-16">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="grid md:grid-cols-2 gap-16 items-center">
    //       {/* Left Side - About Text */}
    //       <div>
    //         <h2 className="text-5xl md:text-6xl font-bold text-[#E4B834] font-sans mb-6 underline decoration-4 underline-offset-4">
    //           About
    //         </h2>
    //         <p className="text-white font-mono text-lg leading-relaxed">
    //           UBC Climbing Club is dedicated to fostering community, growth, and adventure through rock climbing. 
    //           We bridge the gap between the gym and the crag by hosting regular social events at local Vancouver climbing gyms 
    //           and facilitating coached or peer-led outdoor trips. Our mission is to provide a safe, inclusive, and 
    //           social environment for climbers of all backgrounds. From total beginners to expert crushers, 
    //           there's a place for everyone in our community.
    //         </p>
    //       </div>

    //       {/* Right Side - Image Grid */}
    //       <div className="relative grid grid-cols-2 gap-4 pt-10">
    //         {/* SEND HARD Stamp - overlapping badge */}
    //         <div className="absolute top-[-3%] md:top-[-5%] right-[-8%] md:right-[-13%] z-10 transform rotate-12">
    //           <div className="bg-[#D894A6] rounded-full w-24 h-24 md:w-40 md:h-40 border-2 border-black shadow-lg flex items-center justify-center">
    //             <p className="text-[#E1DFC6] font-bold text-sm md:text-lg uppercase font-sans" style={{
    //               textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
    //             }}>SEND HARD!</p>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="mx-auto max-w-4xl w-full mt-25">
      <h2 className="mb-6 text-6xl font-serif">our roots.</h2>

      <div className="w-1/2 mb-12 space-y-2">
        <p>
          UBC Climbing Club is dedicated to fostering community, growth, and
          adventure through rock climbing. We bridge the gap between the gym and
          the crag by hosting regular social events at local Vancouver climbing
          gyms and facilitating coached or peer-led outdoor trips.
        </p>

        <p>
          Our mission is  to provide a safe, inclusive, and social environment for climbers of all backgrounds.
          From total beginners to expert climbers, there's a place for everyone in our community.
        </p>

        <p>
          Check us out on{' '}
          <a href="https://www.instagram.com/ubcclimbingclub/"
            target="_blank" rel="noopener noreferrer" className="text-[#E2F66F]">
            Instagram
          </a>
          {' '}to learn more or just chat!
        </p>
      </div>

      <div className="relative min-h-[350px]">
        <div className="absolute w-1/3 -top-5 z-25">
          <img
            src="/IMG_3120.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/tape.svg"
            className="absolute -top-8 -left-12 z-20 w-24 rotate-140" />
        </div>

        <div className="absolute w-1/4 -top-60 right-20">
          <img
            src="/IMG_4167.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/hold_red.svg"
            className="absolute -top-12 -left-12 z-20 w-24 rotate-265" />
          <img src="/stickers/flashed_sticker.svg"
            className="absolute -top-48 -right-45 z-20 w-40" />
          <img src="/stickers/arrow2.svg"
            className="absolute -top-20 -right-28 z-20 w-50" />
        </div>

        <div className="absolute w-1/2 left-50 z-20">
          <img
            src="/IMG_3748.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/tape2.svg"
            className="absolute -bottom-9 -right-8 z-20 w-20 rotate-20" />
          <img src="/stickers/send_sticker.svg"
            className="absolute -bottom-14 -left-48 z-20 w-40" />
          <img src="/stickers/arrow.svg"
            className="absolute -bottom-10 -left-20 z-20 w-50" />
        </div>

        <div className="absolute w-1/4 -top-10 right-10">
          <img
            src="/IMG_3321.png"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />

          <img src="/stickers/hold_purp.svg"
            className="absolute -bottom-10 -right-12 z-20 w-24 rotate-265" />
          <img src="/stickers/hold_green.svg"
            className="absolute -top-14 -right-15 z-20 w-30 rotate-265" />

        </div>
      </div>
    </section>
  );
}
