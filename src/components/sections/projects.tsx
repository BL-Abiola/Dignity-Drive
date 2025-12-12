import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function Projects() {
  const projectImages = PlaceHolderImages.filter(
    (p) =>
      p.id.startsWith('gallery-') &&
      (p.imageHint.includes('charity') || p.imageHint.includes('community'))
  );

  return (
    <section id="projects" className="py-12 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              My Projects
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the community outreach projects I've been
              involved in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((item) => (
            <Card
              key={item.id}
              className="rounded-xl shadow-lg bg-card overflow-hidden group transition-transform duration-300 hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2">
                  {item.description}
                </CardTitle>
                <p className="text-sm text-foreground/80">
                  A brief description of the project and its impact on the
                  community.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
