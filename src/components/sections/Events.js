import eventsData from "@/data/events.json";
import Card from "../layout/Card";

export default function Events() {
  const events = eventsData.upcoming;
  const pastEvents = eventsData.past;

  // Hard-coded dummy array for 6 cards for now..
  const dummyEvents = Array(6).fill({
    title: "The Send Off",
    description: "Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners.",
    date: "Jan 6",
    link: "https://www.instagram.com/"
  });

  return (
    <section id="events" className="mt-30 px-6 md:px-0">
      <div className="mx-auto max-w-4xl mb-12">
        <h2 className="mb-3 text-5xl md:text-6xl font-serif">upcoming sends...</h2>
        <div className="text-xl md:text-2xl font-pp-neue-montreal">
          Checkout events below and sign up!
        </div>
      </div>

      {/* MOBILE: Horizontal scroll (flex-nowrap + overflow-x-auto)
          DESKTOP: 3-column grid (md:grid-cols-3)
      */}
      <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-8 md:overflow-visible mx-auto max-w-4xl">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="min-w-[75vw] md:min-w-0 snap-center shrink-0"
          >
            <Card
              title={event.title}
              description={event.description}
              date={event.date}
              link={event.link}
              imgUrl={event.imgUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}