import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects @ sanyamittal.com",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium tracking-tight">Projects</h1>
      <p className="max-w-prose text-foreground/70">
        Things I&apos;ve built will be listed here.
      </p>
    </div>
  );
}
