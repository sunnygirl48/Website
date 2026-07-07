import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
];

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Link
        href="/"
        className="fixed left-0 top-0 z-10 p-8 text-lg italic tracking-tight transition-opacity hover:opacity-70"
      >
        Sanya Mittal
      </Link>
      <div className="fixed right-0 top-0 z-10 flex flex-col items-end gap-2 p-8 text-sm tracking-wide">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground/70 transition-opacity hover:text-foreground hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        {children}
      </main>
    </div>
  );
}
