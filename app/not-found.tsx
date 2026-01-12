import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center gap-6">
      <h1 className="text-6xl md:text-7xl font-extrabold
  bg-linear-to-r from-green-500 via-teal-500 to-emerald-500
  bg-size-[200%_200%]
  bg-clip-text text-transparent
  animate-gradient">
  404
</h1>

      <p className="text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>

      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
