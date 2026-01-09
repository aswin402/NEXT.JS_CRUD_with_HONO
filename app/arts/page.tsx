import ArtCard from "@/components/ArtCards";
import { getAllArts } from "@/lib/api";


export default async function ArtPage() {
  const arts = await getAllArts();

  return (
    <section className="min-h-screen flex py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Art Gallery</h1>
      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {arts.map((art: any) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
    </section>
  );
}
