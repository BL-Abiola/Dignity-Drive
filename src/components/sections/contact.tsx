import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary-foreground">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or want to get involved? We'd love to hear from
              you.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+2347015193795" className="text-lg hover:underline">
                  +234 701 519 3795
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" type="text" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
