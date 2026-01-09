export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllArts() {
  const res = await fetch(`${API_URL}/art`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch arts");
  return res.json();
}

export async function getArtById(id: number) {
  const res = await fetch(`${API_URL}/art/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch art");
  return res.json();
}
