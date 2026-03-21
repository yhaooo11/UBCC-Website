import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-4xl w-full mt-10 md:mt-25 px-4 md:px-0">
      <h2 className="mb-6 text-5xl md:text-7xl font-serif">our roots.</h2>

      <div className="w-full md:w-1/2 mb-12 space-y-4">
        <p>
          UBC Climbing Club is dedicated to fostering community, growth, and
          adventure through rock climbing. We bridge the gap between the gym and
          the crag by hosting regular social events at local Vancouver climbing
          gyms and facilitating coached or peer-led outdoor trips.
        </p>

        <p>
          Our mission is to provide a safe, inclusive, and social environment for climbers of all backgrounds.
          From total beginners to expert climbers, there&apos;s a place for everyone in our community.
        </p>

        <p>
          Check us out on{" "}
          <a href="https://www.instagram.com/ubcclimbingclub/"
            target="_blank" rel="noopener noreferrer" className="text-[#E2F66F] font-bold">
            Instagram
          </a>
          {" "}to learn more or just chat!
        </p>
      </div>

      <div className="relative block md:hidden space-y-4">
        <div className="relative px-4">
          <Image
            src="/IMG_3748.jpg"
            alt="Climbing club activity"
            width={1600}
            height={1200}
            className="w-full h-full object-cover"
          />

          <Image
            src="/stickers/tape.png"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -bottom-10 -left-6 z-20 w-24 rotate-70"
          />

          <Image
            src="/stickers/hold_yellow.svg"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -top-7 -right-5 z-20 w-24 rotate-12"
          />
        </div>
      </div>

      <div className="hidden md:block relative min-h-[350px]">
        <div className="absolute w-1/3 -top-5 z-25">
          <Image
            src="/IMG_3120.jpg"
            alt="Climbing club activity"
            width={1200}
            height={900}
            className="w-full h-full object-cover"
          />
          <Image
            src="/stickers/tape.png"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -top-8 -left-12 z-20 w-24 rotate-140"
          />
        </div>

        <div className="absolute w-1/4 -top-60 right-20">
          <Image
            src="/IMG_4167.jpg"
            alt="Climbing club activity"
            width={1200}
            height={900}
            className="w-full h-full object-cover"
          />
          <Image
            src="/stickers/hold_red.svg"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -top-12 -left-12 z-20 w-24 rotate-265"
          />
          <Image
            src="/stickers/flashed_sticker.png"
            alt=""
            aria-hidden="true"
            width={160}
            height={160}
            className="absolute -top-48 -right-45 z-20 w-40"
          />
          <Image
            src="/stickers/arrow2.svg"
            alt=""
            aria-hidden="true"
            width={200}
            height={120}
            className="absolute -top-20 -right-28 z-20 w-50"
          />
        </div>

        <div className="absolute w-1/2 left-50 z-20">
          <Image
            src="/IMG_3748.jpg"
            alt="Climbing club activity"
            width={1600}
            height={1200}
            className="w-full h-full object-cover"
          />
          <Image
            src="/stickers/tape2.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="absolute -bottom-9 -right-8 z-20 w-20 rotate-20"
          />
          <Image
            src="/stickers/send_sticker.png"
            alt=""
            aria-hidden="true"
            width={160}
            height={160}
            className="absolute -bottom-14 -left-48 z-20 w-40"
          />
          <Image
            src="/stickers/arrow.svg"
            alt=""
            aria-hidden="true"
            width={200}
            height={120}
            className="absolute -bottom-10 -left-20 z-20 w-50"
          />
        </div>

        <div className="absolute w-1/4 -top-10 right-10">
          <Image
            src="/IMG_3321.png"
            alt="Climbing club activity"
            width={1200}
            height={900}
            className="w-full h-full object-cover"
          />
          <Image
            src="/stickers/hold_purp.svg"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -bottom-10 -right-12 z-20 w-24 rotate-265"
          />
          <Image
            src="/stickers/hold_green.svg"
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className="absolute -top-14 -right-15 z-20 w-30 rotate-265"
          />
        </div>
      </div>
    </section>
  );
}
