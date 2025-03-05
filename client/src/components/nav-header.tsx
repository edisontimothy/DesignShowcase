import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function NavHeader() {
  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href}>
      <a className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        location === href ? "text-primary" : "text-muted-foreground"
      )}>
        {children}
      </a>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">UX Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink href="/">Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
