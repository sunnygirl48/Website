import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about @ sanyamittal.com",
};

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium tracking-tight">About</h1>
      <p className="max-w-prose text-foreground/70">
        A short bio will go here.
      </p>
    </div>
  );
}
