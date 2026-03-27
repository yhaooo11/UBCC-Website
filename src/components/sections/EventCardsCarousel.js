"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../layout/Card";

export default function EventCardsCarousel({
  events,
  showAction = true,
  isPastEvent = false,
}) {
  return (
    <div className="relative -mt-10 pt-10">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent className="-ml-0 gap-5">
          {events.map((event) => (
            <CarouselItem
              key={event.id}
              className="basis-[18rem] pl-0"
            >
              <Card
                title={event.title}
                description={event.description}
                date={event.date}
                link={event.link}
                imgUrl={event.imgUrl}
                action={event.action}
                showAction={showAction}
                isPastEvent={isPastEvent}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden border-black bg-[#FDFAEA] text-black hover:bg-[#F7F2D4] md:flex md:-left-6" />
        <CarouselNext className="hidden border-black bg-[#FDFAEA] text-black hover:bg-[#F7F2D4] md:flex md:-right-6" />
      </Carousel>
    </div>
  );
}
