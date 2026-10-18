import Link from "next/link";
import { isHidden } from "@/lib/flags";

const links = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
].filter((link) => !isHidden(link.href));

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="px-safe pt-safe flex items-start justify-between gap-gutter pb-gutter">
        <Link
          href="/"
          className="inline-flex min-h-tap items-center text-fluid-lg italic tracking-tight transition-opacity hover:opacity-70"
        >
          Sanya Mittal
        </Link>
        <nav aria-label="Primary" className="flex flex-col items-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-tap items-center text-fluid-sm tracking-wide text-foreground/70 transition-opacity hover:text-foreground hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="px-safe pb-section mx-auto flex w-full max-w-content flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
