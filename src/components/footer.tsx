import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:px-8">
        <div className="flex items-baseline gap-1.5 font-heading font-bold">
          <span>Gagga</span>
          <span className="text-fire">boom</span>
          <span className="ml-2 font-sans text-xs font-normal text-muted-foreground">
            © {new Date().getFullYear()} {site.person}
          </span>
        </div>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="transition-colors hover:text-fire">
            Impressum
          </a>
          <a href="#" className="transition-colors hover:text-fire">
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  );
}
