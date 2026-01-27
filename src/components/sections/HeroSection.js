export default function HeroSection() {
  return (
    <>
    <section className="hidden md:block mx-auto max-w-4xl text-9xl">
      <div className="h-[10rem] mb-10 flex content-between justify-between font-judson text-[10rem]">
        UBC
        <div className="relative w-[60%]">
          <img
            src="/hero.png"
            alt="Climbing club activity"
            className="h-full w-full object-cover object-[50%_35%]"
          />

          <img src="/stickers/hold_red.svg"
            className="absolute -top-10 -right-10 z-20 w-20" />
          <img src="/stickers/tape.svg"
            className="absolute -top-10 -left-10 z-20 w-24" />
          <img src="/stickers/hold_purp.svg"
            className="absolute top-25 -left-9 z-20 w-24" />
        </div>

      </div>

      <div className="h-[10rem] mb-10 flex content-between justify-between font-pp-editorial-new italic">
        <div className="relative w-[30%]">
          <img
            src="/IMG_9481.jpg"
            alt="Climbing club activity"
            className="h-full w-full object-cover ml-4"
          />

          <img src="/stickers/hold_green.svg"
            className="absolute -top-20 -left-15 z-20 w-36" />
          <img src="/stickers/tape.svg"
            className="absolute -top-12 -right-15 z-20 w-24 rotate-90" />
          <img src="/stickers/hold_blue.svg"
            className="absolute top-28 -right-14 z-20 w-18" />
        </div>
        Climbing
      </div>

      <div className="h-[10rem] flex content-between justify-between text-[10rem] font-pp-neue-montreal">
        Club
        <div className="relative w-[60%]">
          <img
            src="/IMG_9525.jpg"
            alt="Climbing club activity"
            className="h-full w-full object-cover object-[50%_40%] ml-4"
          />

          <img src="/stickers/hold_blue.svg"
            className="absolute top-30 left-40 z-20 w-20" />
          <img src="/stickers/hold_yellow.svg"
            className="absolute -top-7 -right-15 z-20 w-24 rotate-12" />
          <img src="/stickers/tape2.svg"
            className="absolute top-30 -right-10 z-20 w-18" />
        </div>
      </div>
    </section>




    <section className="mt-36 px-3 md:hidden">
      <div className="flex justify-end relative w-full pr-4">
          <img
            src="/hero.png"
            alt="Climbing club activity"
            className="h-full w-[70%] object-cover object-[50%_35%]"
          />

          <img src="/stickers/hold_red.svg"
            className="absolute -top-10 -right-5 z-20 w-20" />
          <img src="/stickers/tape.svg"
            className="absolute -top-10 left-15 z-20 w-24" />
          <img src="/stickers/hold_purp.svg"
            className="absolute top-25 left-15 z-20 w-24" />
        </div>
        
        <h1 className="font-judson text-[7rem]">UBC</h1>
        <h1 className="font-pp-editorial-new italic text-[6rem]">Climbing</h1>
        <h1 className="font-pp-neue-montreal text-[7rem]">Club</h1>

        <div className="relative w-[80%]">
          <img
            src="/IMG_9525.jpg"
            alt="Climbing club activity"
            className="h-full w-full object-cover object-[50%_40%] ml-4"
          />

          <img src="/stickers/hold_blue.svg"
            className="absolute -bottom-10 left-40 z-20 w-20" />
          <img src="/stickers/hold_yellow.svg"
            className="absolute -top-7 -right-15 z-20 w-24 rotate-12" />
          <img src="/stickers/tape2.svg"
            className="absolute -bottom-10 -right-10 z-20 w-18" />
        </div>
    </section>
    </>

  );
}
