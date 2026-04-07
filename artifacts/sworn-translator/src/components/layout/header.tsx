import { Link, useLocation } from "wouter";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Strona główna" },
    { href: "/about", label: "O mnie" },
    { href: "/pricing", label: "Cennik" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-sm">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight text-foreground tracking-wide">ELŻBIETA SCHRÖDER</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">Tłumacz przysięgły</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary font-semibold" : "text-muted-foreground"}`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/request" data-testid="link-request-quote">
            <Button size="lg" className="font-serif text-md tracking-wide px-8">Zamów Tłumaczenie</Button>
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-b border-border bg-background p-6 shadow-lg absolute w-full">
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-base font-medium ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/request" onClick={() => setIsMenuOpen(false)} data-testid="link-mobile-request">
              <Button className="w-full font-serif text-md" size="lg">Zamów Tłumaczenie</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
