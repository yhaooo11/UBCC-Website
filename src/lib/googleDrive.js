const DRIVE_API_BASE = "https://www.googleapis.com/drive/v3/files";

export async function getRecentDrivePhotos({ folderId, limit = 8 }) {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!apiKey) {
    throw new Error("Missing GOOGLE_DRIVE_API_KEY");
  }

  if (!folderId) {
    throw new Error("Missing Google Drive folder ID");
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`,
    orderBy: "createdTime desc",
    pageSize: String(limit),
    fields: "files(id,name,createdTime,mimeType)",
    includeItemsFromAllDrives: "true",
    supportsAllDrives: "true",
  });

  const response = await fetch(`${DRIVE_API_BASE}?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    let details = "";

    try {
      const errorData = await response.json();
      const message = errorData?.error?.message;
      const reason = errorData?.error?.errors?.[0]?.reason;
      details = [message, reason].filter(Boolean).join(" | ");
    } catch {
      try {
        details = await response.text();
      } catch {
        details = "";
      }
    }

    throw new Error(
      `Google Drive API request failed: ${response.status}${
        details ? ` (${details})` : ""
      }`
    );
  }

  const data = await response.json();
  const files = data.files || [];

  return files.map((file) => ({
    id: file.id,
    name: file.name,
    createdTime: file.createdTime,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1600`,
    viewUrl: `https://drive.google.com/file/d/${file.id}/view`,
  }));
}
