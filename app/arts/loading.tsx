import ArtCardSkeleton from "@/components/ArtCardSkeleton";

export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-x-8
          gap-y-6
          place-items-center
        "
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <ArtCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
