import { Art } from "./types";

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

export const deleteArt = async (id: number) => {
  const res = await fetch(`${API_URL}/art/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const updateArt = async (art: Art) => {
  const res = await fetch(`${API_URL}/art/${art.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(art),
  });

  if (!res.ok) throw new Error("Failed to update art");
  return res.json();
};
