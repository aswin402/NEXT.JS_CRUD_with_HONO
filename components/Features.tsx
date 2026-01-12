"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const features = [
  {
    title: "Explore New Arts",
    description: "Find untapped creativity to explore effortlessly.",
    image: "/features/img1.jpg",
  },
  {
    title: "Upload Your Imagination",
    description: "Craft content that resonates and inspires Arts.",
    image: "/features/img2.jpg",
  },
  {
    title: "Buy & Sell",
    description: "Buy arts, explore arts, sell arts.",
    image: "/features/img3.jpg",
  },
];


const Features = () => {
  return (
    <section className="min-h-screen px-6 py-20">
       <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          Ignite Your Imagination
        </h2>
      <div className="mx-auto max-w-7xl flex items-center justify-center">
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="mt-18 bg-muted/40 border-none shadow-none w-90 h-120 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader className="px-0 pt-6">
                <CardTitle className="text-2xl font-semibold ml-4">
                  {feature.title}
                </CardTitle>
                <CardDescription className="max-w-[25ch] text-base ml-4">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
