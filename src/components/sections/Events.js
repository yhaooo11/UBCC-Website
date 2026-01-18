import eventsData from "@/data/events.json";

export default function Events() {
  const events = eventsData.upcoming;
  const pastEvents = eventsData.past;

  return (
    <section id="events" className="w-full bg-[#E1DFC7] py-8 md:py-16 px-4 sm:px-8 md:px-20 lg:px-24">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 font-mono mb-2">
        UPCOMING EVENTS
      </h2>
      
      <div className="mx-auto border-y border-black">
        {events.map((event, index) => (
          <div key={index}>
            {/* Mobile layout - stacked */}
            <div className="flex flex-col md:hidden py-4 font-mono text-gray-800 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">{event.date}</span>
                <span className="text-base text-gray-600">|</span>
                <span className="text-base">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">{event.name}</span>
                <span className="text-base text-gray-600">|</span>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-base text-gray-800 hover:underline">{event.action}</a>
              </div>
            </div>
            {/* Desktop layout - grid */}
            <div className="hidden md:grid grid-cols-[5rem_auto_10rem_auto_1fr_auto_auto] items-center gap-2 py-4 font-mono text-gray-800">
              <span className="text-xl font-bold">{event.date}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <span className="text-xl text-left">{event.time}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <span className="text-xl text-left">{event.name}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-xl text-gray-800 hover:underline text-left">{event.action}</a>
            </div>
            {index < events.length - 1 && (
              <div className="border-t border-black"></div>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 font-mono mt-8 md:mt-16">
        PAST EVENTS
      </h2>
      
      <div className="mx-auto border-y border-black">
        {pastEvents.map((event, index) => (
          <div key={index}>
            {/* Mobile layout - stacked */}
            <div className="flex flex-col md:hidden py-4 font-mono text-gray-800 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">{event.date}</span>
                <span className="text-base text-gray-600">|</span>
                <span className="text-base">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">{event.name}</span>
                <span className="text-base text-gray-600">|</span>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-base text-gray-800 hover:underline">{event.action}</a>
              </div>
            </div>
            {/* Desktop layout - grid */}
            <div className="hidden md:grid grid-cols-[5rem_auto_10rem_auto_1fr_auto_auto] items-center gap-2 py-4 font-mono text-gray-800">
              <span className="text-xl font-bold">{event.date}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <span className="text-xl text-left">{event.time}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <span className="text-xl text-left">{event.name}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-xl text-gray-800 hover:underline text-left">{event.action}</a>
            </div>
            {index < pastEvents.length - 1 && (
              <div className="border-t border-black"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
