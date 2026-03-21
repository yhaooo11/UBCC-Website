# Updating Website Events in Notion

This guide is for non-technical club members updating the website's event cards through Notion.

## What the website reads from Notion

Each event card on the website is built from these Notion properties:

- `Event Name`
- `Event Description`
- `Event Date`
- `Event Sign URL`
- `URL Title (default RSVP)`
- `Event Image`

If these property names are changed in Notion, the website may stop showing event info correctly.

## How to add a new event

1. Open the Events database in Notion.
2. Add a new row/page.
3. Fill in these fields:

- `Event Name`: The event title shown on the card.
- `Event Description`: The main event details. This can be short or long. On the website, long text can now be expanded with a "Show more" button.
- `Event Date`: The date shown on the card.
- `Event Sign URL`: The signup or info link.
- `URL Title (default RSVP)`: Optional button text like `Register`, `Sign Up`, or `More Info`.
- `Event Image`: The main photo for the card.

## What happens if something is left blank

- No `Event Name`: The card may look incomplete.
- No `Event Description`: The site will show `More event details coming soon.`
- No `Event Date`: The site will show `Date TBA`.
- No `Event Sign URL`: No button will appear. The card will show `RSVP link coming soon`.
- No `URL Title (default RSVP)`: If there is a link, the button will say `RSVP`.
- No `Event Image`: The site uses a fallback image.

## Best practices

- Keep `Event Name` short and clear.
- Put the most important details near the start of `Event Description`.
- Use `Event Sign URL` only for a full valid link.
- Add an image whenever possible so the card feels complete.
- Double-check the date before publishing.

## How event order works

The website sorts events by `Event Date` in ascending order.

That means:

- earlier events appear first
- later events appear after them

## Safe editing rules

- Do not rename the Notion property columns listed above.
- Do not delete a property unless someone is also updating the website code.
- It is safe to edit the values inside those properties.

## Quick checklist before you finish

- Event title is filled in
- Description is readable
- Date is correct
- Link works
- Button title is set if needed
- Image is uploaded

