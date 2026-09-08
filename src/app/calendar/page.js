import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CalendarView from "@/components/sections/CalendarView";
import { getSheetEvents } from "@/lib/sheetEvents";

export const revalidate = 3600;

export default async function Calendar() {
  let events = [];
  let hasError = false;

  try {
    events = await getSheetEvents();
  } catch (error) {
    hasError = true;
    console.error("Failed to fetch calendar events:", error);
  }

  return (
    <main className="w-full md:pt-38 pt-30 flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="container mx-auto max-w-5xl px-6 md:px-0">
        <h1 className="mb-8 text-center text-6xl font-serif text-white md:text-left">Calendar</h1>

        {hasError ? (
          <div className="font-pp-neue-montreal text-lg">Unable to load the calendar right now.</div>
        ) : (
          <CalendarView events={events} />
        )}
      </div>
      <Footer />
    </main>
  );
}
