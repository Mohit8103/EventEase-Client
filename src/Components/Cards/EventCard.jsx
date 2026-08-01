"use client";
import { cn } from "../../lib/utils";

export function EventCard({
  organizer,
  image,
  title,
  description,
  date,
  avgRating,
  price,
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-sm mx-auto flex flex-col justify-between p-4",
          "bg-cover bg-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(253,224,71,0.2)]"
        )}
        style={{
          backgroundImage: `url(${image || "https://via.placeholder.com/300"})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/70 bg-black/40"></div>

        {/* Date */}
        <div className="flex flex-row items-center space-x-4 z-10">
            <p className="text-sm text-gray-300">{new Date(date).toDateString()}</p>
        </div>

        {/* Event Content */}
        <div className="z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {title}
          </h1>

          {/* Bottom Info */}
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm text-gray-200">⭐ {avgRating || "N/A"}</p>
            <p className="text-sm font-semibold text-white">🏷️₹ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
