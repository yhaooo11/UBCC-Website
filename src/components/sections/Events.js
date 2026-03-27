import { getEvents } from "@/lib/notion";
import Card from "../layout/Card";
import EventCardsCarousel from "./EventCardsCarousel";

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

function EventSection({
  title,
  subtitle,
  emptyMessage,
  events,
  showAction = true,
  isPastEvent = false,
}) {
  const useCarousel = events.length > 3;

  return (
    <div className={`mx-auto ${useCarousel ? "max-w-[58rem]" : "max-w-4xl"}`}>
      <div className="mb-12">
        <h2 className="mb-3 text-5xl md:text-6xl font-serif">{title}</h2>
        <div className="text-xl md:text-2xl font-pp-neue-montreal">
          {subtitle}
        </div>
      </div>

      {events.length === 0 ? (
        <div className="font-pp-neue-montreal text-lg">
          {emptyMessage}
        </div>
      ) : useCarousel ? (
        <EventCardsCarousel
          events={events}
          showAction={showAction}
          isPastEvent={isPastEvent}
        />
      ) : (
        <div className="-mt-10 flex gap-5 overflow-x-auto pt-10 pb-8 snap-x snap-mandatory no-scrollbar md:mt-0 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-8 md:pt-0 md:overflow-visible">
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
                showAction={showAction}
                isPastEvent={isPastEvent}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default async function Events() {
  let upcomingEvents = [];
  let pastEvents = [];
  let hasError = false;

  try {
    const events = await getEvents();
    upcomingEvents = events.upcoming;
    pastEvents = events.past;
  } catch (error) {
    hasError = true;
    console.error("Failed to fetch events:", error);
  }

  return (
    <section id="events" className="mt-30 px-6 md:px-0">
      {hasError ? (
        <div className="mx-auto max-w-4xl font-pp-neue-montreal text-lg">
          Unable to load events right now.
        </div>
      ) : (
        <div className="space-y-20">
          <EventSection
            title="upcoming sends..."
            subtitle="Checkout events below and sign up!"
            emptyMessage="No upcoming events yet."
            events={upcomingEvents}
          />
          <EventSection
            title="previous sends..."
            subtitle="Take a look back at sends that already happened."
            emptyMessage="No previous events yet."
            events={pastEvents}
            isPastEvent
          />
        </div>
      )}
    </section>
  );
}
