"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

import DeleteArtDialog from "./DeleteArtDialog";
import { Art } from "@/lib/types";

type Props = {
  arts: Art[];
  onEdit: (art: Art) => void;
  onDelete: (id: number) => void;
};

export default function InventoryTable({
  arts,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Art Name</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {arts.map((art) => (
            <TableRow key={art.id}>
              <TableCell>{art.id}</TableCell>
              <TableCell>{art.artname}</TableCell>
              <TableCell>{art.artist}</TableCell>
              <TableCell>₹{art.price}</TableCell>

              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(art)}
                    className="w-8 h-8 p-0 sm:w-auto sm:h-7 sm:px-2.5"
                  >
                    <Pencil className="size-4 sm:size-3.5 sm:mr-1" />
                    <span className="hidden sm:inline">Edit</span>
                  </Button>

                  <DeleteArtDialog
                    setDeleteId={() => onDelete(art.id)}
                    onDelete={() => onDelete(art.id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
