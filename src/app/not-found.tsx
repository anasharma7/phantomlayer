import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
        Signal Lost
      </p>
      <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight">
        404
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This route isn&apos;t in the archive yet. The page may have moved or
        never existed in this build phase.
      </p>
      <Button asChild className="mt-8" variant="secondary">
        <Link href="/">
          <ArrowLeft aria-hidden />
          Return home
        </Link>
      </Button>
    </main>
  );
}
