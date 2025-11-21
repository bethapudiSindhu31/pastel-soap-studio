import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PatientFormProps {
  patientData: {
    name: string;
    age: string;
    sex: string;
    mrn: string;
    visitDate: string;
  };
  onUpdate: (field: string, value: string) => void;
}

export const PatientForm = ({ patientData, onUpdate }: PatientFormProps) => {
  return (
    <div className="glass rounded-2xl p-6 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-1 w-12 rounded-full bg-primary" />
        <h2 className="text-lg font-semibold text-foreground">Patient Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Patient Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={patientData.name}
            onChange={(e) => onUpdate("name", e.target.value)}
            className="glass-hover border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age" className="text-sm font-medium text-foreground">
            Age
          </Label>
          <Input
            id="age"
            placeholder="45"
            value={patientData.age}
            onChange={(e) => onUpdate("age", e.target.value)}
            className="glass-hover border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sex" className="text-sm font-medium text-foreground">
            Sex
          </Label>
          <Input
            id="sex"
            placeholder="M/F/Other"
            value={patientData.sex}
            onChange={(e) => onUpdate("sex", e.target.value)}
            className="glass-hover border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mrn" className="text-sm font-medium text-foreground">
            MRN (Optional)
          </Label>
          <Input
            id="mrn"
            placeholder="123456789"
            value={patientData.mrn}
            onChange={(e) => onUpdate("mrn", e.target.value)}
            className="glass-hover border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="visitDate" className="text-sm font-medium text-foreground">
            Visit Date & Time
          </Label>
          <Input
            id="visitDate"
            type="datetime-local"
            value={patientData.visitDate}
            onChange={(e) => onUpdate("visitDate", e.target.value)}
            className="glass-hover border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};
