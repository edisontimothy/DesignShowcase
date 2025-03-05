import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function NavHeader() {
  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href}>
      <a className={cn(
        "text-sm font-medium transition-colors hover:text-primary relative",
        location === href 
          ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" 
          : "text-muted-foreground"
      )}>
        {children}
      </a>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold gradient-heading">UX Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-8">
            <NavLink href="/">Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}