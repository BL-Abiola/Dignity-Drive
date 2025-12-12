import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container flex h-14 items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Dignity Drive</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#mission"
              className="transition-colors hover:text-primary"
            >
              Our Mission
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="ml-auto">
          <Button asChild>
            <a href="#donate">Donate Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
