import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="hidden md:block mx-auto max-w-4xl text-9xl">
        <div className="h-[10rem] mb-10 flex content-between justify-between font-judson text-[10rem]">
          UBC
          <div className="relative w-[60%]">
            <Image
              src="/IMG_1126.jpg"
              alt="Climbing club activity"
              width={1600}
              height={900}
              className="h-full w-full object-cover object-[50%_55%]"
            />

            <Image
              src="/stickers/hold_red.svg"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="absolute -top-10 -right-10 z-20 w-20"
            />
            <Image
              src="/stickers/tape.png"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="absolute -top-10 -left-10 z-20 w-24"
            />
            <Image
              src="/stickers/hold_purp.svg"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="absolute top-25 -left-9 z-20 w-24"
            />
          </div>
        </div>

        <div className="h-[10rem] mb-10 flex content-between justify-between font-pp-editorial-new italic">
          <div className="relative w-[30%]">
            <Image
              src="/IMG_1125.jpg"
              alt="Climbing club activity"
              width={1200}
              height={900}
              className="h-full w-full object-cover ml-4"
            />

            <Image
              src="/stickers/hold_green.svg"
              alt=""
              aria-hidden="true"
              width={144}
              height={144}
              className="absolute -top-18 -left-15 z-20 w-36"
            />
            <Image
              src="/stickers/tape.png"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="absolute -top-12 -right-15 z-20 w-24 rotate-90"
            />
            <Image
              src="/stickers/hold_blue.svg"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className="absolute top-28 -right-14 z-20 w-18"
            />
          </div>
          Climbing
        </div>

        <div className="h-[10rem] flex content-between justify-between text-[10rem] font-pp-neue-montreal">
          Club
          <div className="relative w-[60%]">
            <Image
              src="/IMG_9525.jpg"
              alt="Climbing club activity"
              width={1600}
              height={900}
              className="h-full w-full object-cover object-[50%_40%] ml-4"
            />

            <Image
              src="/stickers/hold_blue.svg"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="absolute top-30 left-40 z-20 w-20"
            />
            <Image
              src="/stickers/hold_yellow.svg"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="absolute -top-7 -right-15 z-20 w-24 rotate-12"
            />
            <Image
              src="/stickers/tape2.png"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className="absolute top-30 -right-10 z-20 w-18"
            />
          </div>
        </div>
      </section>

      <section className="mt-36 px-3 md:hidden">
        <div className="flex justify-end relative w-full pr-4">
          <Image
            src="/IMG_1126.jpg"
            alt="Climbing club activity"
            width={1600}
            height={900}
            className="h-42 w-[70%] object-cover object-[50%_35%]"
          />

          <Image
            src="/stickers/hold_red.svg"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="absolute -top-10 -right-5 z-20 w-20"
          />
          <Image
            src="/stickers/tape.png"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -top-10 left-15 z-20 w-24"
          />
          <Image
            src="/stickers/hold_purp.svg"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute top-25 left-15 z-20 w-24"
          />
        </div>

        <h1 className="font-judson text-[7rem]">UBC</h1>
        <h1 className="font-pp-editorial-new italic text-[6rem]">Climbing</h1>
        <h1 className="font-pp-neue-montreal text-[7rem]">Club</h1>

        <div className="relative w-[80%]">
          <Image
            src="/IMG_9525.jpg"
            alt="Climbing club activity"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-[50%_40%] ml-4"
          />

          <Image
            src="/stickers/hold_blue.svg"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="absolute -bottom-10 left-40 z-20 w-20"
          />
          <Image
            src="/stickers/hold_yellow.svg"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="absolute -top-7 -right-15 z-20 w-24 rotate-12"
          />
          <Image
            src="/stickers/tape2.png"
            alt=""
            aria-hidden="true"
            width={72}
            height={72}
            className="absolute -bottom-10 -right-10 z-20 w-18"
          />
        </div>
      </section>
    </>
  );
}
