import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Sanya Mittal",
};

export default function Shop() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium tracking-tight">Shop</h1>
      <p className="max-w-prose text-foreground/70">
        Coming soon.
      </p>
    </div>
  );
}
