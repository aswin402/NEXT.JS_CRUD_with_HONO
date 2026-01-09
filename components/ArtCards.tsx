"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
    : "/placeholder.png";

  return (
    <Link href={`/art/${art.id}`} className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={art.artname}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Price badge */}
          <Badge className="absolute top-3 right-3 bg-black/80 text-white">
            ₹ {art.price}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className="p-4 space-y-1">
          <h3 className="text-lg font-semibold leading-tight line-clamp-1">
            {art.artname}
          </h3>

          <p className="text-sm text-muted-foreground">
            {art.artist}
          </p>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {art.description || "No description available"}
          </p>
        </CardContent>

        {/* Footer */}
        <CardFooter className="px-4 pb-4">
          <span className="text-sm font-medium text-primary">
            View details →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
