"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArtCardProps } from "@/lib/types";

export default function ArtCard({ art }: ArtCardProps) {
  const imageSrc = art.imageUrl
    ? `${process.env.NEXT_PUBLIC_API_URL}${art.imageUrl}`
    : "/placeholder.jpg";

  return (
    <Card
      className="
        group
        relative
        w-68
        h-88
        rounded-2xl
        overflow-hidden
        bg-background/60
        border border-border/40
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* IMAGE */}
      <div
        className="
          absolute
          inset-0
          z-10
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        <Image
          src={imageSrc}
          alt={art.artname}
          fill
          className="object-cover"
          unoptimized
        />

        {/* PRICE */}
        <Badge
          className="
            absolute top-2 right-2
            bg-black/70 text-white
            text-xs px-2 py-0.5
            rounded-full
            z-20
          "
        >
          ₹ {art.price}
        </Badge>
      </div>

      {/* INFO (hidden on hover) */}
      <div
        className="
          relative
          z-20
          mt-68
          p-3
          space-y-1
          inset-0 bg-black/70
          transition-all duration-300
          group-hover:opacity-0
          group-hover:translate-y-4
          pointer-events-none
        "
      >
        <h3 className="text-sm font-semibold text-white truncate">
          {art.artname}
        </h3>

        <p className="text-xs text-white/80 truncate">
          {art.artist}
        </p>
      </div>
    </Card>
  );
}
