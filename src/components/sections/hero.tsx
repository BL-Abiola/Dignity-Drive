import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-me');

  if (!heroImage) return null;

  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
              Mary Sani
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              Passionate about community empowerment and creating a better future for children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                    <a href="#projects">View My Work</a>
                </Button>
                 <Button size="lg" variant="secondary" asChild>
                    <a href="#contact">Contact Me</a>
                </Button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl shadow-2xl shadow-primary/20">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-cover object-top"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
