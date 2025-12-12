import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              Sani Mary Foundation
            </span>
          </Link>
        </div>
        <nav className="flex items-center">
          <Button asChild>
            <a href="#donate">SUPPORT THE MISSION</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
