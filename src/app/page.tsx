import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Mission } from '@/components/sections/mission';
import { Donate } from '@/components/sections/donate';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Mission />
        <Projects />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
