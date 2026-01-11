"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ArtCardProps = {
  art: {
    id: number;
    artname: string;
    artist: string;
    description?: string;
    price: string;
    imageUrl?: string;
  };
};

export default function ArtCard({ art }: ArtCardProps) {
  const imageSrc = art.imageUrl
    ? `${process.env.NEXT_PUBLIC_API_URL}${art.imageUrl}`
    : "/placeholder.jpg";

  return (
    <Card
      className="
        group
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
      <div className="relative aspect-1/12 overflow-hidden">
        <Image
          src={imageSrc}
          alt={art.artname}
          fill
          className="
            object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
          unoptimized
        />

        {/* PRICE */}
        <Badge
          className="
            absolute top-2 right-2
            bg-black/70 text-white
            text-xs px-2 py-0.5
            rounded-full
          "
        >
          ₹ {art.price}
        </Badge>
      </div>

      {/* INFO */}
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold truncate">
          {art.artname}
        </h3>

        <p className="text-xs text-muted-foreground truncate">
          {art.artist}
        </p>
        
      </div>
    </Card>
  );
}
