import { FileText, Check } from "lucide-react";

export const Header = () => {
  return (
    <header className="glass sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">SOAP Note Generator</h1>
              <p className="text-xs text-muted-foreground">Clinical Documentation Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Check className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Auto-saved</span>
          </div>
        </div>
      </div>
    </header>
  );
};
