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
                  >
                    Edit
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
