import Link from 'next/link';
import { Phone } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} Dignity Drive. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            +234 701 519 3795
          </span>
        </div>
      </div>
    </footer>
  );
}
