import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              I'd love to hear from you. Whether you have a question or just
              want to connect.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a
                    href="mailto:contact@marysani.com"
                    className="text-lg text-foreground/80 hover:text-primary transition-colors"
                  >
                    contact@marysani.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-lg text-foreground/80">+234 701 519 3795</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-lg text-foreground/80">Nigeria</p>
                </div>
              </div>
          </div>
          <Card className="bg-background border-border shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" type="text" className="bg-secondary border-border focus:ring-primary"/>
                <Input placeholder="Your Email" type="email" className="bg-secondary border-border focus:ring-primary"/>
                <Textarea placeholder="Your Message" rows={5} className="bg-secondary border-border focus:ring-primary"/>
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
