import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CopyToClipboardButton } from '@/components/copy-to-clipboard-button';
import { Banknote } from 'lucide-react';

export function DonationBlock() {
  const accountNumber = '0643276713';

  return (
    <section id="donate" className="py-12 lg:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <Card className="rounded-xl shadow-lg bg-accent border-4 border-yellow-700">
            <CardHeader className="items-center pb-4">
              <div className="bg-accent-foreground/10 p-3 rounded-full">
                <Banknote className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-accent-foreground font-headline">
                Donate Directly
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="space-y-1">
                <p className="font-semibold text-accent-foreground">Account Name</p>
                <p className="text-lg font-medium text-accent-foreground/90">SANI MARY OJONUGWA</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-accent-foreground">GTBank Account</p>
                <p className="text-2xl font-bold tracking-widest text-accent-foreground/90">{accountNumber}</p>
              </div>
              <CopyToClipboardButton textToCopy={accountNumber} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
