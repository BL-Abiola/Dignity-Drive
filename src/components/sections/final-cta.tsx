import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Be a Part of the Continuous Mission.
        </h2>
        <Button size="lg" asChild>
          <a href="#donate">Support The Mission Now</a>
        </Button>
      </div>
    </section>
  );
}
