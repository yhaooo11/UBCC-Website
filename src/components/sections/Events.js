import { getEvents } from "@/lib/notion";
import Card from "../layout/Card";

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default async function Events() {
  let events = [];
  let hasError = false;

  try {
    events = await getEvents();
  } catch (error) {
    hasError = true;
    console.error("Failed to fetch events:", error);
  }

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
      {hasError ? (
        <div className="mx-auto max-w-4xl font-pp-neue-montreal text-lg">
          Unable to load events right now.
        </div>
      ) : events.length === 0 ? (
        <div className="mx-auto max-w-4xl font-pp-neue-montreal text-lg">
          No upcoming events yet.
        </div>
      ) : (
        <div className="mx-auto flex max-w-4xl gap-5 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-8 md:overflow-visible">
          {events.map((event) => (
            <div
              key={event.id}
              className="min-w-[75vw] snap-center shrink-0 md:min-w-0"
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
      )}
    </section>
  );
}
