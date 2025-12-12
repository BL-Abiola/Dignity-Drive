import { HandCoins, Shirt, UtensilsCrossed, Sparkles } from 'lucide-react';

export function Mission() {
  return (
    <section id="mission" className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary-foreground">
              Our Mission: What We Provide
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your donations enable us to provide essential dignity items that
              make a real difference.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <HandCoins className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cash</h3>
            <p className="text-sm text-muted-foreground">
              Direct financial support for urgent needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Shirt className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Clothes</h3>
            <p className="text-sm text-muted-foreground">
              Clean clothing for warmth and comfort.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Foodstuffs</h3>
            <p className="text-sm text-muted-foreground">
              Nutritious food to combat hunger.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Toiletries</h3>
            <p className="text-sm text-muted-foreground">
              Essential hygiene products for health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
