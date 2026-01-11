import ArtCard from "@/components/ArtCards";
import { getAllArts } from "@/lib/api";

export default async function ArtPage() {
  const arts = await getAllArts();

  return (
    <>
    <section className="min-h-screen flex items-center justify-center">
      <div className="  grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    xl:grid-cols-5
    gap-x-8
    gap-y-6
    place-items-center">
        {arts.map((art: any) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
    </section>
    </>
  );
}
