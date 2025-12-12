import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-me');

  if (!aboutImage) return null;

  return (
    <section id="about" className="py-12 lg:py-24 bg-secondary">
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary-foreground">
                Who We Are
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                Dignity Drive is a dedicated non-profit organization committed
                to restoring hope and providing essential support to
                marginalized communities. We believe that every individual
                deserves to live with dignity and respect.
              </p>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                Our outreach programs are designed to deliver critical aid,
                including food, clothing, and toiletries, directly to those who
                need it most. We strive to create a world where everyone has the
                opportunity to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
