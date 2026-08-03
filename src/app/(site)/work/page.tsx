import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "work @ sanyamittal.com",
};

export default function Work() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium tracking-tight">Work</h1>
      <p className="max-w-prose text-foreground/70">
        A selection of art and written work will live here.
      </p>
    </div>
  );
}
