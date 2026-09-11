const NOTION_API_URL = "https://api.notion.com/v1";

function getPlainText(property) {
  if (!property) return "";

  if (property.type === "title") {
    return property.title?.map((item) => item.plain_text).join("") || "";
  }

  if (property.type === "rich_text") {
    return property.rich_text?.map((item) => item.plain_text).join("") || "";
  }

  return "";
}

function getFileUrl(property) {
  const file = property?.files?.[0];
  if (!file) return "";

  return file.file?.url || file.external?.url || "";
}

function formatEventDate(property) {
  const start = property?.date?.start;
  const end = property?.date?.end;

  if (!start) return "";

  const formatter = new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Notion returns dates as ISO strings (e.g. "2025-09-11" or
  // "2025-09-11T23:00:00.000-07:00"). The "YYYY-MM-DD" part is already the
  // calendar day Notion shows, so pull it out directly and build a local
  // Date from those parts instead of going through `new Date(start)`, which
  // reinterprets the string as a UTC instant and can shift it to the
  // adjacent day once the server renders it back out in its own timezone.
  const toLocalDate = (value) => {
    const [year, month, day] = value.slice(0, 10).split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const startText = formatter.format(toLocalDate(start));

  if (!end) return startText;

  const endText = formatter.format(toLocalDate(end));
  return `${startText} -> ${endText}`;
}

function isPastEvent(property) {
  if (!property) return false;

  if (property.type === "select") {
    return property.select?.name === "Past";
  }

  if (property.type === "status") {
    return property.status?.name === "Past";
  }

  if (property.type === "rich_text") {
    return getPlainText(property) === "Past";
  }

  return false;
}

export async function getEvents() {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_EVENTS_DATABASE_ID;

  if (!token) {
    throw new Error("NOTION_TOKEN is not set in environment variables");
  }

  if (!databaseId) {
    throw new Error("NOTION_EVENTS_DATABASE_ID is not set in environment variables");
  }

  const response = await fetch(`${NOTION_API_URL}/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Event Date",
          direction: "ascending",
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Notion API error: ${response.status} - ${error}`);
  }

  const data = await response.json();

  const events = data.results
    .map((page) => {
      const properties = page.properties;
      const isPast = isPastEvent(properties["Status"]);
      const actionLabel = getPlainText(properties["URL Title (default RSVP)"]);

      return {
        id: page.id,
        title: getPlainText(properties["Event Name"]),
        description: getPlainText(properties["Event Description"]),
        link: properties["Event Sign URL"]?.url || "",
        imgUrl: getFileUrl(properties["Event Image"]),
        date: formatEventDate(properties["Event Date"]),
        action: actionLabel || (isPast ? "Photos Link" : "RSVP"),
        isPast,
      };
    })
    // Skip empty/placeholder rows in the Notion database (e.g. a row with
    // no Event Name filled in yet) so they don't render as blank cards.
    .filter((event) => event.title.trim() !== "");

  return {
    upcoming: events.filter((event) => !event.isPast),
    past: events.filter((event) => event.isPast),
  };
}
