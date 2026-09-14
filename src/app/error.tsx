"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="bg-ink-900 flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-white">Something went wrong</h1>
      <p className="max-w-md text-lg text-slate-400">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={reset} variant="primary" withIcon>
        Try again
      </Button>
    </Container>
  );
}
