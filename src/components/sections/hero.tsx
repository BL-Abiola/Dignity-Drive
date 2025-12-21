import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-me');

  if (!heroImage) return null;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/50 z-0"></div>
       <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        priority
        className="object-cover object-top opacity-10 z-0"
        data-ai-hint={heroImage.imageHint}
      />
      <div className="container px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-widest uppercase">Community Builder & Advocate</p>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline text-foreground">
                Mary Sani
              </h1>
            </div>
            <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
              Passionate about community empowerment and creating a better future for children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl shadow-2xl shadow-primary/20 group hidden lg:block">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={heroImage.imageHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
