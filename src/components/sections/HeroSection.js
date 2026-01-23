export default function HeroSection() {
  return (
    <section className="mx-auto max-w-3xl text-9xl">
      <div className="h-[9rem] flex content-between justify-between font-judson">
        UBC
        <div className="w-[60%]">
         <img 
              src="/hero.png" 
              alt="Climbing club activity" 
              className="h-full w-full object-cover object-top"
            />
        </div>

      </div>

      <div className="h-[8rem] mb-7 flex content-between justify-between font-eb-garamond italic">
        <div className="w-[30%]">
          <img 
              src="/IMG_9481.jpg" 
              alt="Climbing club activity" 
              className="h-full w-full object-cover ml-4"
            />
        </div>
        Climbing
      </div>

      <div className="h-[8rem] flex content-between justify-between">
        Club
        <div className="w-[60%]">
        <img 
              src="/IMG_9525.jpg" 
              alt="Climbing club activity" 
              className="h-full w-full object-cover object-[50%_40%] ml-4"
            />
        </div>
      </div>
    </section>
  );
}
