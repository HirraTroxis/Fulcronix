"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="text-brand flex h-12 w-full max-w-md items-center text-sm">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="Stay Ahead with AI & Product Insights"
        className="focus:border-brand h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
      />
      <Button
        type="submit"
        variant="brand"
        size="sm"
        className="h-12 shrink-0 px-6"
      >
        Subscribe
      </Button>
    </form>
  );
}
