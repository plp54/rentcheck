"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, FileText, Mail, Loader2 } from "lucide-react";

export function MerciContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId && !pdfUrl) {
      generatePDF();
    }
  }, [sessionId]);

  const generatePDF = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la génération du PDF");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      setError("Une erreur est survenue lors de la génération du PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 text-center border border-black/5">
      <div className="w-20 h-20 bg-[#34C759]/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-[#34C759]" />
      </div>

      <h1 className="text-3xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
        Merci pour votre achat !
      </h1>
      <p className="text-[#86868B] mb-8">
        Votre paiement a été confirmé. Vous pouvez maintenant télécharger
        votre rapport PDF.
      </p>

      {loading ? (
        <div className="py-8">
          <Loader2 className="w-8 h-8 animate-spin text-[#007AFF] mx-auto mb-4" />
          <p className="text-[#86868B]">
            Génération de votre rapport en cours...
          </p>
        </div>
      ) : error ? (
        <div className="bg-[#FF3B30]/5 rounded-2xl p-6 mb-6 border border-[#FF3B30]/10">
          <p className="text-[#FF3B30]">{error}</p>
          <Button
            onClick={generatePDF}
            variant="outline"
            className="mt-4 border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/5"
          >
            Réessayer
          </Button>
        </div>
      ) : pdfUrl ? (
        <div className="space-y-4">
          <div className="bg-[#34C759]/5 rounded-2xl p-6 border border-[#34C759]/10">
            <div className="w-14 h-14 bg-[#34C759]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-[#34C759]" />
            </div>
            <h3 className="font-semibold text-[#1D1D1F] mb-2">
              Votre rapport est prêt !
            </h3>
            <p className="text-sm text-[#86868B] mb-6">
              Le fichier PDF contient l&apos;analyse complète de votre loyer
              ainsi qu&apos;une lettre de mise en demeure prête à être envoyée.
            </p>
            <a
              href={pdfUrl}
              download="loyerlegal-rapport.html"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0071E3] transition-all shadow-lg shadow-[#007AFF]/25"
            >
              <Download className="w-5 h-5" />
              Télécharger mon rapport
            </a>
          </div>

          <div className="bg-[#F5F5F7] rounded-2xl p-6">
            <Mail className="w-8 h-8 text-[#86868B] mx-auto mb-3" />
            <p className="text-sm text-[#86868B]">
              Une copie de votre rapport vous a également été envoyée par
              email.
            </p>
          </div>
        </div>
      ) : (
        <Button
          onClick={generatePDF}
          className="px-8 py-6 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0071E3] transition-all shadow-lg shadow-[#007AFF]/25 h-auto"
        >
          <FileText className="w-5 h-5 mr-2" />
          Générer mon rapport
        </Button>
      )}
    </div>
  );
}
