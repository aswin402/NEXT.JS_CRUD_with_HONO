"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Art } from "@/lib/types";


type Props = {
  art: Art | null;
  setArt: (art: Art | null) => void;
  onSave: () => void;
  saving: boolean;
};

export default function EditArtDialog({
  art,
  setArt,
  onSave,
  saving,
}: Props) {
  if (!art) return null;

  return (
    <Dialog open={!!art} onOpenChange={() => setArt(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Art</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Art Name</Label>
            <Input
              value={art.artname}
              onChange={(e) =>
                setArt({ ...art, artname: e.target.value })
              }
            />
          </div>

          <div>
            <Label>Artist</Label>
            <Input
              value={art.artist}
              onChange={(e) =>
                setArt({ ...art, artist: e.target.value })
              }
            />
          </div>

          <div>
            <Label>Price</Label>
            <Input
              type="number"
              value={art.price}
              onChange={(e) =>
                setArt({ ...art, price: Number(e.target.value) })
              }
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setArt(null)}>
            Cancel
          </Button>
          <Button onClick={onSave} disabled={saving}>
            {saving ? "Saving..." : "Done"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
