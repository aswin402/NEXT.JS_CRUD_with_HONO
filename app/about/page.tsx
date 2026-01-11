"use client";
import { PrinciplesSection } from "@/components/PrincipleSection";
import Team from "@/components/teams";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Brush, CirclePlay } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
   <div className="min-h-screen flex items-center">
  <div className="mx-auto max-w-(--breakpoint-xl) w-full px-6 grid lg:grid-cols-2 gap-14">
    
    {/* Left */}
    <div>
      <Badge variant="secondary" className="rounded-full px-4 py-1">
        About ArtGallery
      </Badge>

      <h1 className="mt-6 max-w-[18ch] text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight">
        Where Art Meets
        <span className="text-primary"> Technology</span>
      </h1>

      <p className="mt-6 max-w-[60ch] text-lg text-muted-foreground">
        ArtGallery is a digital marketplace and creative platform built to
        empower artists and connect collectors with meaningful art from
        around the world.
      </p>

      <div className="mt-10 flex items-center gap-4">
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
    className="rounded-full px-6 py-6 text-base font-medium shadow-none flex items-center gap-2"
    asChild
    >
     <Link href="/arts">
      <span>Explore</span>
     <Brush className="h-5 w-5"/>
    </Link>
  </Button>
      </div>
    </div>

    {/* Right */}
    <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-accent">
      <Image src="/features/img1.jpg" alt="ArtGallery" fill className="object-cover" />
    </div>

  </div>
</div>
    <PrinciplesSection />
    <Team />
    </>
  );
}
