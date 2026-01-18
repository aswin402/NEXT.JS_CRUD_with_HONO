"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArtCardSkeleton() {
  return (
    <Card
      className="
        relative
        w-68
        h-88
        rounded-2xl
        overflow-hidden
        bg-background/60
        border border-border/40
      "
    >
      {/* IMAGE SKELETON */}
      <Skeleton className="absolute inset-0" />

      {/* PRICE BADGE */}
      <Skeleton className="absolute top-2 right-2 h-5 w-12 rounded-full z-10" />

      {/* INFO */}
      <div className="absolute bottom-0 w-full p-3 space-y-2 z-10">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </Card>
  );
}
