import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-me');

  if (!aboutImage) return null;

  return (
    <section id="about" className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                I am a passionate and dedicated individual with a strong
                commitment to community development and child welfare. My work
                focuses on creating sustainable solutions that empower children
                and uplift communities. I believe in the power of education and
                support to transform lives.
              </p>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                Through various outreach programs and initiatives, I strive to
                provide essential resources and create a nurturing environment
                for children to thrive. My goal is to inspire change and build a
                brighter future for the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
