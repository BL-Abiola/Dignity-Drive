import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { DonationBlock } from '@/components/sections/donation-block';
import { Benefits } from '@/components/sections/benefits';
import { Gallery } from '@/components/sections/gallery';
import { FinalCta } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <DonationBlock />
        <Benefits />
        <Gallery />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
