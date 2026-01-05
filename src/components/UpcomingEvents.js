export default function UpcomingEvents() {
  const events = [
    { number: "01", time: "6:00-9:00pm", name: "Hive Night", action: "Sign up here" },
    { number: "02", time: "Time", name: "Event 2", action: "Sign up here" },
    { number: "03", time: "Time", name: "Event 3", action: "Sign up here" },
    { number: "04", time: "Time", name: "Event 4", action: "Sign up here" },
  ];

  return (
    <section id="events" className="w-full bg-[#E1DFC7] py-16 px-8 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-mono mb-12 text-center">
        UPCOMING EVENTS
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {events.map((event, index) => (
          <div key={index}>
            <div className="grid grid-cols-[3rem_auto_8rem_auto_1fr_auto_auto] items-center gap-0 py-4 font-mono text-gray-800">
              <span className="text-xl font-bold">{event.number}</span>
              <span className="text-gray-600 text-center">|</span>
              <span className="text-left">{event.time}</span>
              <span className="text-gray-600 text-center">|</span>
              <span className="text-left">{event.name}</span>
              <span className="text-gray-600 text-center">|</span>
              <a href="#" className="text-gray-800 hover:underline text-left">{event.action}</a>
            </div>
            {index < events.length - 1 && (
              <div className="border-t border-black"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

