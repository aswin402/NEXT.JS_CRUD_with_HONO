"use client";

import { useEffect, useState } from "react";
import { Art } from "@/components/inventory/types";

import InventorySearch from "@/components/inventory/InventorySearch";
import InventoryTable from "@/components/inventory/InventoryTable";
import EditArtDialog from "@/components/inventory/EditArtDialog";

export default function InventoryPage() {
  const [arts, setArts] = useState<Art[]>([]);
  const [search, setSearch] = useState("");
  const [editArt, setEditArt] = useState<Art | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/art")
      .then((res) => res.json())
      .then(setArts);
  }, []);

  const deleteArt = async (id: number) => {
    await fetch(`http://localhost:5000/art/${id}`, {
      method: "DELETE",
    });

    setArts((prev) => prev.filter((a) => a.id !== id));
  };

  const updateArt = async () => {
    if (!editArt) return;
    setSaving(true);

    await fetch(`http://localhost:5000/art/${editArt.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editArt),
    });

    setArts((prev) =>
      prev.map((a) => (a.id === editArt.id ? editArt : a))
    );

    setEditArt(null);
    setSaving(false);
  };

  const filteredArts = arts.filter(
    (a) =>
      a.artname.toLowerCase().includes(search.toLowerCase()) ||
      a.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 my-16">
      <h1 className="text-3xl font-bold">📦 Art Inventory</h1>

      <InventorySearch search={search} setSearch={setSearch} />

      <InventoryTable
        arts={filteredArts}
        onEdit={(art) => setEditArt({ ...art })}
        onDelete={deleteArt}
      />

      <EditArtDialog
        art={editArt}
        setArt={setEditArt}
        onSave={updateArt}
        saving={saving}
      />
    </div>
  );
}
