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
          overflow-hidden 
          bg-muted/30 
          border border-border/40 
          rounded-xl
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          w-80
          h-100
        "
      >
        {/* Image */}
        <div className="relative aspect-3/4 overflow-hidden">
       
       <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-muted ">
    <Image
    src={imageSrc}
    alt={art.artname}
    fill
    className="object-cover"
     sizes="(max-width: 768px) 100vw, 33vw (max-height: 768px)"
    unoptimized={true}
    />
    </div>


          {/* Price */}
          <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">
            ₹ {art.price}
          </Badge>
        </div>

        {/* Info */}
        <div className="p-3 space-y-1">
          <h3 className="text-sm font-semibold truncate">
            {art.artname}
          </h3>

          <p className="text-xs text-muted-foreground truncate">
            {art.artist}
          </p>
            <p className="text-xs text-muted-foreground truncate">
            {art.description}
          </p>
        </div>
      </Card>
  );
}
