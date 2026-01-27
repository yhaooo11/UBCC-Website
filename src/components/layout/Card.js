export default function Card({ title, description, date, link, imgUrl }) {
    return (
        <div className="relative w-72 bg-[#FDFAEA] p-2 text-background">
            <img src="/stickers/tape3.svg"
                className="absolute top-[-40] left-1/2 -translate-x-1/2 z-20 w-24 rotate-[-2deg]" />
            <img
                src="/IMG_9525.jpg"
                alt="Climbing club activity"
                className="mb-3"
            />

            <div className="mb-5">
                <h2 className="text-3xl font-serif">{title}</h2>
                <p className="text-xs font-pp-neue-montreal">{description}</p>
            </div>

            <div className="flex justify-between items-end">
                <div className="font-pp-neue-montreal font-bold">{date}</div>

                <button className="bg-[#E4FF6C] border border-black rounded-md px-5 py-1">
                    <a
                        href={link}
                        target="_blank"
                        className="font-pp-neue-montreal font-bold"
                    >
                        RSVP
                    </a>
                </button>
            </div>
        </div>
    );
}
