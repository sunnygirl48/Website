export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-xs text-foreground/50">
        <span>&copy; {new Date().getFullYear()} Sanya Mittal</span>
        <a
          href="mailto:hello@sanyamittal.com"
          className="transition-colors hover:text-foreground"
        >
          hello@sanyamittal.com
        </a>
      </div>
    </footer>
  );
}
