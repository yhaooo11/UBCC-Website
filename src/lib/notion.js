const NOTION_API_URL = "https://api.notion.com/v1";

export async function getEvents() {
  try {
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
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Notion API error: ${response.status} - ${error}`);
    }

    const data = await response.json();

    return data.results.map((page) => {
      const properties = page.properties;
      
      let photoUrl = "";
      if (properties.Photo?.files?.[0]) {
        const file = properties.Photo.files[0];
        photoUrl = file.file?.url || file.external?.url || "";
      }

      return {
        id: page.id,
        title: properties.Name?.title?.[0]?.plain_text || "",
        description: properties.Description?.rich_text?.[0]?.plain_text || "",
        link: properties["CTA (RSVP LINK)"]?.url || "",
        imgUrl: photoUrl,
        date: properties.Date?.rich_text?.[0]?.plain_text || 
              properties.Date?.date?.start || "",
      };
    });
  } catch (error) {
    console.error("Error fetching events from Notion:", error);
    return [];
  }
}
