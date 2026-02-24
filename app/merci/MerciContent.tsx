"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, FileText, Mail, Loader2 } from "lucide-react";

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
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-emerald-600" />
      </div>

      <h1 className="text-3xl font-black text-slate-900 mb-4">
        Merci pour votre achat !
      </h1>
      <p className="text-slate-600 mb-8">
        Votre paiement a été confirmé. Vous pouvez maintenant télécharger
        votre rapport PDF.
      </p>

      {loading ? (
        <div className="py-8">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-600 mx-auto mb-4" />
          <p className="text-slate-600">
            Génération de votre rapport en cours...
          </p>
        </div>
      ) : error ? (
        <div className="bg-red-50 rounded-xl p-6 mb-6">
          <p className="text-red-700">{error}</p>
          <Button
            onClick={generatePDF}
            variant="outline"
            className="mt-4"
          >
            Réessayer
          </Button>
        </div>
      ) : pdfUrl ? (
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-xl p-6">
            <FileText className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold text-emerald-900 mb-2">
              Votre rapport est prêt !
            </h3>
            <p className="text-sm text-emerald-700 mb-4">
              Le fichier PDF contient l&apos;analyse complète de votre loyer
              ainsi qu&apos;une lettre de mise en demeure prête à être envoyée.
            </p>
            <a
              href={pdfUrl}
              download="rentcheck-rapport.html"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition"
            >
              <Download className="w-5 h-5" />
              Télécharger mon rapport
            </a>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <Mail className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600">
              Une copie de votre rapport vous a également été envoyée par
              email.
            </p>
          </div>
        </div>
      ) : (
        <Button
          onClick={generatePDF}
          className="px-8 py-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
        >
          <FileText className="w-5 h-5 mr-2" />
          Générer mon rapport
        </Button>
      )}
    </div>
  );
}
