import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SOAPSectionProps {
  title: string;
  description: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  color: "mint" | "blush" | "sky" | "gray";
}

const colorClasses = {
  mint: "bg-primary/10 border-primary/20",
  blush: "bg-medical-blush/30 border-medical-blush/40",
  sky: "bg-medical-sky/50 border-medical-sky/60",
  gray: "bg-muted border-muted-foreground/20",
};

export const SOAPSection = ({
  title,
  description,
  value,
  placeholder,
  onChange,
  color,
}: SOAPSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="animate-fade-in">
      <div className={`glass rounded-2xl border ${colorClasses[color]} overflow-hidden transition-all duration-300`}>
        <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-primary" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="px-6 pb-6">
          <div className="space-y-2 pt-4">
            <Textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="glass-hover min-h-[120px] border-border/50 focus:border-primary transition-all duration-300 resize-none"
            />
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
