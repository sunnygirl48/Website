import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isHidden } from "@/lib/flags";

export const metadata: Metadata = {
  title: "shop @ sanyamittal.com",
};

export default function Shop() {
  if (isHidden("/shop")) notFound();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium tracking-tight">Shop</h1>
      <p className="max-w-prose text-foreground/70">
        Coming soon.
      </p>
    </div>
  );
}
