"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Art Gallery Discover Arts & Selling place
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Explore a collection of Arts, ready to
          preview and buy the Arts. Publish your Arts on ArtGallery and sell you Arts.
        </p>
       <div className="mt-12 flex items-center justify-center gap-4">
  <Button
    size="lg"
    className="rounded-full px-6 py-6 text-base font-medium flex items-center gap-2"
    asChild
  >
    <Link href="/publishart">
      <span>Get Started</span>
      <ArrowUpRight className="h-5 w-5" />
    </Link>
  </Button>

    <Button
    variant="outline"
    size="lg"
    className="rounded-full px-6 py-6 text-base font-medium shadow-none"
    >
    Learn More
  </Button>
</div>

      </div>
    </div>
  );
}
