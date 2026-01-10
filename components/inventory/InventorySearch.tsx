"use client";

import { Input } from "@/components/ui/input";

type Props = {
  search: string;
  setSearch: (v: string) => void;
};

export default function InventorySearch({ search, setSearch }: Props) {
  return (
    <Input
      placeholder="Search by art name or artist..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="max-w-md"
    />
  );
}
