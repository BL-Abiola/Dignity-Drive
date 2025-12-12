'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

export function Donate() {
  const { toast } = useToast();
  const bankAccountNumber = '1234567890';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankAccountNumber);
    toast({
      title: 'Copied to Clipboard!',
      description: 'Bank account number has been copied.',
    });
  };

  return (
    <section id="donate" className="py-12 lg:py-24 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Support Dignity Drive
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Your generosity can change lives. Please consider making a direct
            donation to our bank account.
          </p>
          <Card className="mt-8 rounded-xl border-4 border-yellow-700 bg-background shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4 text-left">
                <div>
                  <h3 className="font-semibold text-muted-foreground">
                    Bank Name
                  </h3>
                  <p className="text-lg font-mono text-primary-foreground">
                    FIRST BANK
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">
                    Account Name
                  </h3>
                  <p className="text-lg font-mono text-primary-foreground">
                    MARY SANI
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">
                    Account Number
                  </h3>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-mono text-primary-foreground">
                      {bankAccountNumber}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyToClipboard}
                      aria-label="Copy account number"
                    >
                      <Copy className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
