import Image from "next/image";
import { getRecentDrivePhotos } from "@/lib/googleDrive";

const DEFAULT_FOLDER_ID = "12ScVsTUDjaZ8K1cyYyLo8-e_WmX6EweB";

function pickTapeSticker(seed) {
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }

  return hash % 10 < 4 ? "/stickers/tape3.png" : "/stickers/tape.png";
}

export default async function FeaturedPhotosSection() {
  const folderId =
    process.env.GOOGLE_DRIVE_FEATURED_FOLDER_ID || DEFAULT_FOLDER_ID;

  let photos = [];
  let hasError = false;

  try {
    photos = await getRecentDrivePhotos({ folderId, limit: 8 });
  } catch (error) {
    hasError = true;
    console.error("Failed to fetch photos:", error);
  }

  return (
    <section id="featured-photos" className="mt-30 px-6 md:px-0">
      <div className="mx-auto max-w-4xl mb-12">
        <h2 className="mb-3 text-5xl md:text-6xl font-serif">featured photos.</h2>
      </div>

      {hasError ? (
        <div className="mx-auto max-w-4xl font-pp-neue-montreal text-lg">
          Unable to load photos right now.
        </div>
      ) : photos.length === 0 ? (
        <div className="mx-auto max-w-4xl font-pp-neue-montreal text-lg">
          No photos available yet.
        </div>
      ) : (
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative pt-3">
                <Image
                  src={pickTapeSticker(photo.id)}
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className="pointer-events-none absolute top-[-25] left-1/2 z-20 w-20 -translate-x-1/2 rotate-180"
                />
                <a
                  href={photo.viewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden"
                >
                  <Image
                    src={photo.thumbnailUrl}
                    alt={photo.name || "UBC Climbing Club featured photo"}
                    width={800}
                    height={800}
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="h-40 md:h-54 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 font-pp-neue-montreal text-lg md:text-xl">
            <a
              href={`https://drive.google.com/drive/folders/${folderId}`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              See all featured photos
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
