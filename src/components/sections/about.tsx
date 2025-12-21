import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-me');

  if (!aboutImage) return null;

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={aboutImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                I am a passionate individual dedicated to community development
                and child welfare, focusing on creating sustainable solutions to
                empower children and uplift communities.
              </p>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                My goal is to inspire change and build a brighter future for the next generation through outreach and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
