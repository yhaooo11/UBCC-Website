const SHEET_ID = "1bN7y0Ey0dRmxjxJNZHw4iQDG0rw3kTFbP80nT_m4vJU";
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function parseSheetDate(value) {
  const parts = value.trim().split("/");
  if (parts.length !== 3) return null;

  const [day, month, yearRaw] = parts.map((part) => Number(part));
  if (!day || !month || !yearRaw) return null;

  const year = yearRaw < 100 ? 2000 + yearRaw : yearRaw;
  const date = new Date(year, month - 1, day);

  return Number.isNaN(date.getTime()) ? null : date;
}

export async function getSheetEvents() {
  const response = await fetch(SHEET_CSV_URL, { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error(`Failed to fetch calendar sheet: ${response.status}`);
  }

  const csv = await response.text();
  const rows = parseCsv(csv);
  const [, ...dataRows] = rows;

  return dataRows
    .map(([dateStr, title]) => {
      const date = parseSheetDate(dateStr || "");
      if (!date || !title) return null;

      return { date, title: title.trim() };
    })
    .filter(Boolean)
    .sort((a, b) => a.date - b.date);
}
