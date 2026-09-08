"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_FORMATTER = new Intl.DateTimeFormat("en-CA", { month: "long", year: "numeric" });
const LONG_DATE_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
const PILL_COLORS = [
  "bg-[color:var(--color-metallic-gold)] text-background",
  "bg-[color:var(--color-steel-blue)] text-background",
  "bg-[color:var(--color-petal-pink)] text-background",
  "bg-[color:var(--color-old-rose)] text-background",
];

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateKey(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function isSameDay(a, b) {
  return dateKey(a) === dateKey(b);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function buildGrid(monthDate) {
  const firstOfMonth = startOfMonth(monthDate);
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(gridStart.getDate() - firstOfMonth.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + index);
    return day;
  });
}

export default function CalendarView({ events: rawEvents }) {
  const events = useMemo(
    () => rawEvents.map((event) => ({ ...event, date: parseLocalDate(event.date) })),
    [rawEvents]
  );

  const initialMonth = events.length > 0 ? startOfMonth(events[0].date) : startOfMonth(new Date());
  const [monthDate, setMonthDate] = useState(initialMonth);
  const [selectedDay, setSelectedDay] = useState(null);

  const today = useMemo(() => new Date(), []);

  const eventsByDay = useMemo(() => {
    const map = new Map();
    events.forEach((event, index) => {
      const key = dateKey(event.date);
      const list = map.get(key) || [];
      list.push({ ...event, color: PILL_COLORS[index % PILL_COLORS.length] });
      map.set(key, list);
    });
    return map;
  }, [events]);

  const grid = useMemo(() => buildGrid(monthDate), [monthDate]);

  const selectedEvents = selectedDay ? eventsByDay.get(dateKey(selectedDay)) || [] : [];

  const goToMonth = (offset) => {
    setMonthDate((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
    setSelectedDay(null);
  };

  const goToToday = () => {
    setMonthDate(startOfMonth(today));
    setSelectedDay(today);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_20rem]">
      <div className="border border-black/10 bg-[#FDFAEA] p-4 text-background shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif md:text-3xl">{MONTH_FORMATTER.format(monthDate)}</h2>
          <div className="flex items-center gap-2 font-pp-neue-montreal">
            <button
              type="button"
              onClick={goToToday}
              className="rounded-full border border-black/15 px-3 py-1 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-black/5"
            >
              Today
            </button>
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => goToMonth(-1)}
              className="rounded-full border border-black/15 p-1.5 transition-colors hover:bg-black/5"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => goToMonth(1)}
              className="rounded-full border border-black/15 p-1.5 transition-colors hover:bg-black/5"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10 font-pp-neue-montreal">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="bg-black/5 px-2 py-2 text-center text-[0.7rem] font-bold uppercase tracking-widest text-black/60"
            >
              {day}
            </div>
          ))}

          {grid.map((day) => {
            const inMonth = day.getMonth() === monthDate.getMonth();
            const dayEvents = eventsByDay.get(dateKey(day)) || [];
            const isToday = isSameDay(day, today);
            const isSelected = selectedDay && isSameDay(day, selectedDay);

            return (
              <button
                type="button"
                key={day.toISOString()}
                onClick={() => setSelectedDay(dayEvents.length > 0 ? day : null)}
                className={`flex min-h-[5.5rem] flex-col items-start gap-1 bg-[#FDFAEA] p-1.5 text-left transition-colors md:min-h-[6.5rem] md:p-2 ${
                  inMonth ? "" : "opacity-40"
                } ${isSelected ? "ring-2 ring-inset ring-[color:var(--color-metallic-gold)]" : ""} ${
                  dayEvents.length > 0 ? "cursor-pointer hover:bg-black/5" : "cursor-default"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                    isToday ? "bg-background text-[#FDFAEA] font-bold" : ""
                  }`}
                >
                  {day.getDate()}
                </span>

                <div className="flex w-full flex-col gap-1">
                  {dayEvents.slice(0, 2).map((event, index) => (
                    <span
                      key={index}
                      className={`truncate rounded px-1.5 py-0.5 text-[0.65rem] font-bold leading-tight ${event.color}`}
                    >
                      {event.title}
                    </span>
                  ))}
                  {dayEvents.length > 2 && (
                    <span className="text-[0.65rem] font-bold text-black/50">
                      +{dayEvents.length - 2} more
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {selectedDay && selectedEvents.length > 0 && (
          <div className="mt-6 border-t border-black/10 pt-4 font-pp-neue-montreal">
            <h3 className="mb-2 text-lg font-bold">{LONG_DATE_FORMATTER.format(selectedDay)}</h3>
            <ul className="space-y-2">
              {selectedEvents.map((event, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${event.color}`} />
                  <span>{event.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border border-black/10 bg-[#FDFAEA] p-4 text-background shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:p-6">
        <h2 className="mb-4 text-2xl font-serif">Upcoming</h2>

        {events.length === 0 ? (
          <p className="font-pp-neue-montreal text-sm text-black/55">No events on the calendar yet.</p>
        ) : (
          <ul className="space-y-4 font-pp-neue-montreal">
            {events.map((event, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className={`mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full ${
                    PILL_COLORS[index % PILL_COLORS.length]
                  }`}
                />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-black/50">
                    {LONG_DATE_FORMATTER.format(event.date)}
                  </div>
                  <div className="text-sm leading-snug">{event.title}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
