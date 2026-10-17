import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isHidden } from "@/lib/flags";

export const metadata: Metadata = {
  title: "about @ sanyamittal.com",
};

export default function About() {
  if (isHidden("/about")) notFound();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium tracking-tight">About</h1>
      <p className="max-w-prose text-foreground/70">
        A short bio will go here.
      </p>
    </div>
  );
}
