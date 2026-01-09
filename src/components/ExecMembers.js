import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ExecMembers() {
  const members = [
    { name: "Member 1", role: "Role" },
    { name: "Member 2", role: "Role" },
    { name: "Member 3", role: "Role" },
    { name: "Member 4", role: "Role" },
    { name: "Member 5", role: "Role" },
    { name: "Member 6", role: "Role" },
  ];

  return (
    <section id="team" className="w-full bg-[#E1DFC7] py-16 px-8 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-mono mb-12 text-center">
        EXEC MEMBERS
      </h2>

      <div className="mx-auto relative px-12 md:px-16">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {members.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <div
                    className="flex-shrink-0 border-4 border-black p-6 bg-white"
                  >
                    <div className="aspect-square bg-gray-200 mb-4"></div>
                    <h3 className="font-mono font-bold text-xl text-gray-800">{member.name}</h3>
                    <p className="font-mono text-gray-600">{member.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  );
}

