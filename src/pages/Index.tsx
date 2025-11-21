import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { PatientForm } from "@/components/PatientForm";
import { SOAPSection } from "@/components/SOAPSection";
import { LivePreview } from "@/components/LivePreview";

const Index = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    sex: "",
    mrn: "",
    visitDate: new Date().toISOString().slice(0, 16),
  });

  const [soapData, setSOAPData] = useState({
    subjective: "",
    objective: "",
    assessment: "",
    plan: "",
  });

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("soapNote");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setPatientData(parsed.patientData || patientData);
      setSOAPData(parsed.soapData || soapData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("soapNote", JSON.stringify({ patientData, soapData }));
  }, [patientData, soapData]);

  const updatePatient = (field: string, value: string) => {
    setPatientData((prev) => ({ ...prev, [field]: value }));
  };

  const updateSOAP = (field: string, value: string) => {
    setSOAPData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form Entry */}
          <div className="space-y-6">
            <PatientForm patientData={patientData} onUpdate={updatePatient} />

            <SOAPSection
              title="Subjective"
              description="Patient's symptoms and concerns"
              value={soapData.subjective}
              placeholder="Chief complaint, history of present illness, review of systems..."
              onChange={(value) => updateSOAP("subjective", value)}
              color="mint"
            />

            <SOAPSection
              title="Objective"
              description="Clinical findings and measurements"
              value={soapData.objective}
              placeholder="Vital signs, physical examination findings, lab results..."
              onChange={(value) => updateSOAP("objective", value)}
              color="blush"
            />

            <SOAPSection
              title="Assessment"
              description="Diagnosis and clinical impression"
              value={soapData.assessment}
              placeholder="Primary diagnosis, differential diagnoses, clinical reasoning..."
              onChange={(value) => updateSOAP("assessment", value)}
              color="sky"
            />

            <SOAPSection
              title="Plan"
              description="Treatment and follow-up"
              value={soapData.plan}
              placeholder="Medications, procedures, patient education, follow-up appointments..."
              onChange={(value) => updateSOAP("plan", value)}
              color="gray"
            />
          </div>

          {/* Right Column - Live Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <LivePreview patientData={patientData} soapData={soapData} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16 py-6 print:hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">💡 <strong>Tip:</strong> Your note auto-saves as you type</p>
            <p className="text-xs">Use Ctrl/Cmd + P to print directly from your browser</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
