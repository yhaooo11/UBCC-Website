export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-4xl w-full mt-10 md:mt-25 px-4 md:px-0">
      <h2 className="mb-6 text-5xl md:text-7xl font-serif">our roots.</h2>

      {/* Adjusted width to be full on mobile, half on desktop */}
      <div className="w-full md:w-1/2 mb-12 space-y-4">
        <p>
          UBC Climbing Club is dedicated to fostering community, growth, and
          adventure through rock climbing. We bridge the gap between the gym and
          the crag by hosting regular social events at local Vancouver climbing
          gyms and facilitating coached or peer-led outdoor trips.
        </p>

        <p>
          Our mission is to provide a safe, inclusive, and social environment for climbers of all backgrounds.
          From total beginners to expert climbers, there's a place for everyone in our community.
        </p>

        <p>
          Check us out on{' '}
          <a href="https://www.instagram.com/ubcclimbingclub/"
            target="_blank" rel="noopener noreferrer" className="text-[#E2F66F] font-bold">
            Instagram
          </a>
          {' '}to learn more or just chat!
        </p>
      </div>

      {/* --- MOBILE VIEW: Visible only on small screens --- */}
      <div className="relative block md:hidden space-y-4">



        <div className="relative px-4">
          <img
            src="/IMG_3748.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />

          <img src="/stickers/tape.svg"
            className="absolute -bottom-10 -left-6 z-20 w-24 rotate-70" alt="" />

          <img src="/stickers/hold_yellow.svg"
            className="absolute -top-7 -right-5 z-20 w-24 rotate-12" />
        </div>





      </div>

      {/* --- DESKTOP VIEW: Visible only on md screens and up --- */}
      <div className="hidden md:block relative min-h-[350px]">
        {/* Top Left Image */}
        <div className="absolute w-1/3 -top-5 z-25">
          <img
            src="/IMG_3120.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/tape.svg"
            className="absolute -top-8 -left-12 z-20 w-24 rotate-140" alt="" />
        </div>

        {/* Top Right (Floating) Image */}
        <div className="absolute w-1/4 -top-60 right-20">
          <img
            src="/IMG_4167.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/hold_red.svg"
            className="absolute -top-12 -left-12 z-20 w-24 rotate-265" alt="" />
          <img src="/stickers/flashed_sticker.svg"
            className="absolute -top-48 -right-45 z-20 w-40" alt="" />
          <img src="/stickers/arrow2.svg"
            className="absolute -top-20 -right-28 z-20 w-50" alt="" />
        </div>

        {/* Center/Bottom Image */}
        <div className="absolute w-1/2 left-50 z-20">
          <img
            src="/IMG_3748.jpg"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/tape2.svg"
            className="absolute -bottom-9 -right-8 z-20 w-20 rotate-20" alt="" />
          <img src="/stickers/send_sticker.svg"
            className="absolute -bottom-14 -left-48 z-20 w-40" alt="" />
          <img src="/stickers/arrow.svg"
            className="absolute -bottom-10 -left-20 z-20 w-50" alt="" />
        </div>

        {/* Far Right Image */}
        <div className="absolute w-1/4 -top-10 right-10">
          <img
            src="/IMG_3321.png"
            alt="Climbing club activity"
            className="w-full h-full object-cover"
          />
          <img src="/stickers/hold_purp.svg"
            className="absolute -bottom-10 -right-12 z-20 w-24 rotate-265" alt="" />
          <img src="/stickers/hold_green.svg"
            className="absolute -top-14 -right-15 z-20 w-30 rotate-265" alt="" />
        </div>
      </div>
    </section>
  );
}