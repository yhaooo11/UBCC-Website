import { getEvents } from "@/lib/notion";
import Card from "../layout/Card";

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default async function Events() {
  const events = await getEvents();

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
        {events.map((event) => (
          <div 
            key={event.id} 
            className="min-w-[75vw] md:min-w-0 snap-center shrink-0"
          >
            <Card
              title={event.title}
              description={event.description}
              date={event.date}
              link={event.link}
              imgUrl={event.imgUrl}
              action={event.action}
            />
          </div>
        ))}
      </div>
    </section>
  );
}