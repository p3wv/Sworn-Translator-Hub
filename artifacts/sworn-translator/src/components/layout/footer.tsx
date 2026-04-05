import { Link } from "wouter";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="container px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3" data-testid="link-footer-logo">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-sm">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight tracking-wide">MARCUS V. AURELIUS</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">Sworn Translator</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Certified sworn translations with legal validity across international borders. Precision, confidentiality, and absolute reliability for your most important documents.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-serif font-semibold mb-6 text-foreground tracking-wide">SERVICES</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/pricing" className="hover:text-primary transition-colors" data-testid="link-footer-legal">Legal Contracts</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors" data-testid="link-footer-certs">Certificates</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors" data-testid="link-footer-academic">Academic Transcripts</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors" data-testid="link-footer-medical">Medical Records</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors" data-testid="link-footer-corporate">Corporate Documents</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-serif font-semibold mb-6 text-foreground tracking-wide">CONTACT</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">1200 Legal Avenue, Suite 400<br/>1204 Geneva, Switzerland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+41 22 555 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contact@aurelius-translation.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Marcus V. Aurelius, Sworn Translator. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors" data-testid="link-terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
