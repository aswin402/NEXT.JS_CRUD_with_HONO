"use client";

import { useEffect, useState } from "react";
import InventorySearch from "@/components/inventory/InventorySearch";
import InventoryTable from "@/components/inventory/InventoryTable";
import InventoryTableSkeleton from "@/components/inventory/InventoryTableSkeleton";
import EditArtDialog from "@/components/inventory/EditArtDialog";
import { Art } from "@/lib/types";
import { getAllArts, deleteArt as deleteArtApi, updateArt as updateArtApi } from "@/lib/api";


export default function InventoryPage() {
  const [arts, setArts] = useState<Art[]>([]);
  const [search, setSearch] = useState("");
  const [editArt, setEditArt] = useState<Art | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadArts = async () => {
    try {
      const data = await getAllArts();
      setArts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadArts();
}, []);

const deleteArt = async (id: number) => {
  try {
    await deleteArtApi(id);
    setArts((prev) => prev.filter((a) => a.id !== id));
  } catch (err) {
    console.error(err);
  }
};

const updateArt = async () => {
  if (!editArt) return;

  setSaving(true);
  try {
    const updated = await updateArtApi(editArt);

    setArts((prev) =>
      prev.map((a) => (a.id === updated.id ? updated : a))
    );
  } finally {
    setSaving(false);
    setEditArt(null);
  }
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

      {loading ? (
        <InventoryTableSkeleton />
      ) : (
        <InventoryTable
          arts={filteredArts}
          onEdit={(art) => setEditArt({ ...art })}
          onDelete={deleteArt}
        />
      )}

      <EditArtDialog
        art={editArt}
        setArt={setEditArt}
        onSave={updateArt}
        saving={saving}
      />
    </div>
  );
}
