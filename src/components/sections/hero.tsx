import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-children-joy');

  if (!heroImage) return null;

  return (
    <section className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              PUT A SMILE On a Child's Face: Continuous Mission.
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              Your Contribution Guarantees the Provision of Clothes, Food, and Dignity.
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full overflow-hidden rounded-xl shadow-lg aspect-video">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
