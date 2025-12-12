import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { HandCoins, Shirt, Utensils, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <HandCoins className="h-8 w-8 text-primary" />,
    title: 'Cash',
    description: 'Direct financial support for urgent needs.',
  },
  {
    icon: <Shirt className="h-8 w-8 text-primary" />,
    title: 'Clothes',
    description: 'Providing warmth, comfort, and confidence.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: 'Foodstuffs',
    description: 'Nourishing meals to combat hunger.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Toiletries',
    description: 'Essential hygiene items for health and dignity.',
  },
];

export function Benefits() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Your Support Provides Essential Dignity
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Every donation contributes to providing these fundamental necessities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <Card key={item.title} className="rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1">
              <CardHeader className="items-center pb-4">
                {item.icon}
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
