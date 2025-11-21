import { Copy, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LivePreviewProps {
  patientData: {
    name: string;
    age: string;
    sex: string;
    mrn: string;
    visitDate: string;
  };
  soapData: {
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
  };
}

export const LivePreview = ({ patientData, soapData }: LivePreviewProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const generateNoteText = () => {
    return `SOAP NOTE

PATIENT INFORMATION
Name: ${patientData.name || "Not provided"}
Age: ${patientData.age || "Not provided"}
Sex: ${patientData.sex || "Not provided"}
MRN: ${patientData.mrn || "Not provided"}
Visit Date: ${formatDate(patientData.visitDate)}

SUBJECTIVE
${soapData.subjective || "No subjective data recorded."}

OBJECTIVE
${soapData.objective || "No objective data recorded."}

ASSESSMENT
${soapData.assessment || "No assessment recorded."}

PLAN
${soapData.plan || "No plan recorded."}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateNoteText());
    toast.success("Note copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
    toast.success("Opening print dialog...");
  };

  const handleDownload = () => {
    const blob = new Blob([generateNoteText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SOAP_Note_${patientData.name || "Patient"}_${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Note downloaded!");
  };

  return (
    <div className="space-y-4 animate-slide-in print:block">
      <div className="flex gap-2 print:hidden">
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="flex-1 glass-hover border-border/50"
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          size="sm"
          className="flex-1 glass-hover border-border/50"
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        <Button
          onClick={handlePrint}
          variant="outline"
          size="sm"
          className="flex-1 glass-hover border-border/50"
        >
          <Printer className="h-4 w-4 mr-2" />
          Print
        </Button>
      </div>

      <div className="glass rounded-2xl p-8 space-y-6 print:shadow-none print:border print:border-gray-300">
        <div className="border-b border-border/50 pb-4 print:border-black">
          <h2 className="text-2xl font-bold text-foreground mb-4 print:text-black">SOAP NOTE</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-semibold text-foreground print:text-black">Name:</span>{" "}
              <span className="text-muted-foreground print:text-gray-700">
                {patientData.name || "Not provided"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-foreground print:text-black">Age:</span>{" "}
              <span className="text-muted-foreground print:text-gray-700">
                {patientData.age || "Not provided"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-foreground print:text-black">Sex:</span>{" "}
              <span className="text-muted-foreground print:text-gray-700">
                {patientData.sex || "Not provided"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-foreground print:text-black">MRN:</span>{" "}
              <span className="text-muted-foreground print:text-gray-700">
                {patientData.mrn || "Not provided"}
              </span>
            </div>
            <div className="col-span-2">
              <span className="font-semibold text-foreground print:text-black">Visit Date:</span>{" "}
              <span className="text-muted-foreground print:text-gray-700">
                {formatDate(patientData.visitDate)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2 print:text-black">SUBJECTIVE</h3>
            <p className="text-sm text-foreground whitespace-pre-wrap print:text-gray-900">
              {soapData.subjective || "No subjective data recorded."}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-2 print:text-black">OBJECTIVE</h3>
            <p className="text-sm text-foreground whitespace-pre-wrap print:text-gray-900">
              {soapData.objective || "No objective data recorded."}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-2 print:text-black">ASSESSMENT</h3>
            <p className="text-sm text-foreground whitespace-pre-wrap print:text-gray-900">
              {soapData.assessment || "No assessment recorded."}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-2 print:text-black">PLAN</h3>
            <p className="text-sm text-foreground whitespace-pre-wrap print:text-gray-900">
              {soapData.plan || "No plan recorded."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
