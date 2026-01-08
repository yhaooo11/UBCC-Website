export default function UpcomingEvents() {
  const events = [
    { date: "Jan 16", time: "6:30-8:30pm", name: "Hive Night", action: "Sign up here", link: "https://docs.google.com/forms/d/e/1FAIpQLSen3qke6T7gfmxt0de43QX5X8jFH7FOZixnL1yLRkwuqAKyhA/viewform" },
    // { date: "Feb 20", time: "Time", name: "Event 2", action: "Sign up here", link: "#" },
    // { date: "Mar 10", time: "Time", name: "Event 3", action: "Sign up here", link: "#" },
    // { date: "Apr 5", time: "Time", name: "Event 4", action: "Sign up here", link: "#" },
  ];

  return (
    <section id="events" className="w-full bg-[#E1DFC7] py-16 px-20 md:px-24">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-mono mb-2">
        UPCOMING EVENTS
      </h2>
      
      <div className="mx-auto border-y border-black">
        {events.map((event, index) => (
          <div key={index}>
            <div className="grid grid-cols-[5rem_auto_10rem_auto_1fr_auto_auto] items-center gap-2 py-4 font-mono text-gray-800">
              <span className="text-xl font-bold">{event.date}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <span className="text-xl text-left">{event.time}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <span className="text-xl text-left">{event.name}</span>
              <span className="text-xl text-gray-600 text-center">|</span>
              <a href={event.link} className="text-xl text-gray-800 hover:underline text-left">{event.action}</a>
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

