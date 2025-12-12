"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

export function CopyToClipboardButton({ textToCopy }: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (typeof window === "undefined") return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "Account number copied successfully.",
      });
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to copy account number.",
      });
    });
  };

  return (
    <Button onClick={handleCopy} className="w-full" variant="secondary">
      {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
      {copied ? 'Copied!' : 'Click to Copy Account Number'}
    </Button>
  );
}
