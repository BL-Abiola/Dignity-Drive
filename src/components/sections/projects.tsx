import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const projectImages = PlaceHolderImages.filter(
    (p) =>
      p.id.startsWith('gallery-')
  ).slice(0, 6); // Limit to 6 projects for a clean grid

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              My Projects
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              A collection of community outreach projects I've been involved in.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((item) => (
            <Card
              key={item.id}
              className="rounded-xl shadow-lg bg-secondary border-transparent overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={item.imageHint}
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.description}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70 mb-4">
                  A brief description of the project and its impact on the
                  community.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
