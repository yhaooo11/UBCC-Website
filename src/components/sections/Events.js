import eventsData from "@/data/events.json";
import Card from "../layout/Card";

export default function Events() {
  const events = eventsData.upcoming;
  const pastEvents = eventsData.past;

  return (
    <section id="events" className="mt-30">
      <div className="mx-auto max-w-3xl mb-12">
        <h2 className="mb-3 text-6xl font-serif">upcoming sends...</h2>
        <div className="text-2xl font-pp-neue-montreal">
          Checkout events below and sign up!
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-6 mx-auto max-w-5xl">
        <Card
          title={"The Send Off"}
          description={"Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners. We'll be sharing beta, trading stickers, and planning our next trips to Squamish."}
          date={"Jan 6"}
          link={"https://www.instagram.com/"}
        />

        <Card
          title={"The Send Off"}
          description={"Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners. We'll be sharing beta, trading stickers, and planning our next trips to Squamish."}
          date={"Jan 6"}
          link={"https://www.instagram.com/"}
        />

        <Card
          title={"The Send Off"}
          description={"Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners. We'll be sharing beta, trading stickers, and planning our next trips to Squamish."}
          date={"Jan 6"}
          link={"https://www.instagram.com/"}
        />

<Card
          title={"The Send Off"}
          description={"Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners. We'll be sharing beta, trading stickers, and planning our next trips to Squamish."}
          date={"Jan 6"}
          link={"https://www.instagram.com/"}
        />

        <Card
          title={"The Send Off"}
          description={"Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners. We'll be sharing beta, trading stickers, and planning our next trips to Squamish."}
          date={"Jan 6"}
          link={"https://www.instagram.com/"}
        />

        <Card
          title={"The Send Off"}
          description={"Kick off the new term with our first community mixer. Whether you're a seasoned lead climber or just bought your first pair of shoes, come meet your new belay partners. We'll be sharing beta, trading stickers, and planning our next trips to Squamish."}
          date={"Jan 6"}
          link={"https://www.instagram.com/"}
        />
      </div>



    </section>
  );
}
