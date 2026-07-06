import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium tracking-tight">Sanya Mittal</h1>
      <p className="max-w-prose text-foreground/70">
        Art, projects, and writing.
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
