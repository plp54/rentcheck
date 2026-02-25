"use client";

import { useState } from "react";
import { Building2, Zap, Calendar, Euro, ArrowRight, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  pebCoefficients,
  calculateMaxRent,
  CityConfig,
} from "@/lib/data";
import { useAnalytics } from "@/hooks/useAnalytics";
import { SavingsCalculator } from "./SavingsCalculator";
import { ShareButtons } from "./ShareButtons";

interface RentCalculatorProps {
  city: CityConfig;
}

export function RentCalculator({ city }: RentCalculatorProps) {
  const { trackCalculation } = useAnalytics();
  const [step, setStep] = useState<"form" | "result">("form");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    currentRent: number;
    maxRent: number;
    isIllegal: boolean;
    overpayAmount: number;
    yearlyOverpay: number;
  } | null>(null);

  const [surface, setSurface] = useState("");
  const [peb, setPeb] = useState("");
  const [age, setAge] = useState("");
  const [currentRent, setCurrentRent] = useState("");
  const [email, setEmail] = useState("");

  const handleCalculate = async () => {
    const surfaceNum = parseFloat(surface);
    const ageNum = parseInt(age);
    const currentRentNum = parseFloat(currentRent);

    if (!surfaceNum || !peb || !ageNum || !currentRentNum) return;

    const calc = calculateMaxRent(surfaceNum, city.slug, peb, ageNum);
    const maxRent = calc.maxRent;
    const isIllegal = currentRentNum > maxRent;
    const overpayAmount = isIllegal ? currentRentNum - maxRent : 0;
    const yearlyOverpay = overpayAmount * 12;

    setResult({ currentRent: currentRentNum, maxRent, isIllegal, overpayAmount, yearlyOverpay });
    trackCalculation(isIllegal, yearlyOverpay);
    setStep("result");
  };

  const handleCheckout = async () => {
    if (!result || !email) return;
    setLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, city: city.slug, surface, peb, age,
          currentRent: result.currentRent, maxRent: result.maxRent,
          overpayAmount: result.overpayAmount, yearlyOverpay: result.yearlyOverpay,
        }),
      });

      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  if (step === "result" && result) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10 border border-black/5">
          {result.isIllegal ? (
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#FF3B30]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-[#FF3B30]" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF3B30]/10 text-[#FF3B30] font-semibold rounded-full text-sm mb-4">
                <AlertTriangle className="w-4 h-4" />
                Votre loyer est illégal
              </div>
              <h2 className="text-3xl font-bold text-[#1D1D1F] mb-2 tracking-tight">
                Vous surpayez {result.overpayAmount.toFixed(0)}€/mois
              </h2>
              <p className="text-[#86868B]">
                C'est <strong className="text-[#FF3B30] text-xl">{result.yearlyOverpay.toFixed(0)}€ par an</strong> qui vous échappent !
              </p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#34C759]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#34C759]" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34C759]/10 text-[#34C759] font-semibold rounded-full text-sm mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Bonne nouvelle
              </div>
              <h2 className="text-3xl font-bold text-[#1D1D1F] mb-2 tracking-tight">
                Votre loyer est conforme
              </h2>
              <p className="text-[#86868B]">
                Vous payez le juste prix pour votre logement.
              </p>
            </div>
          )}

          <div className="bg-[#F5F5F7] rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#86868B] mb-1">Votre loyer actuel</p>
                <p className="text-3xl font-bold text-[#1D1D1F]">{result.currentRent.toFixed(0)}€</p>
              </div>
              <div>
                <p className="text-sm text-[#86868B] mb-1">Maximum légal</p>
                <p className="text-3xl font-bold text-[#007AFF]">{result.maxRent.toFixed(0)}€</p>
              </div>
              {result.isIllegal && (
                <>
                  <div>
                    <p className="text-sm text-[#86868B] mb-1">Surpaye mensuelle</p>
                    <p className="text-3xl font-bold text-[#FF3B30]">{result.overpayAmount.toFixed(0)}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#86868B] mb-1">Surpaye annuelle</p>
                    <p className="text-3xl font-bold text-[#FF3B30]">{result.yearlyOverpay.toFixed(0)}€</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {result.isIllegal && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#FF9500]/5 to-[#FF3B30]/5 rounded-2xl p-6 border border-[#FF9500]/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF9500]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-[#FF9500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D1D1F] mb-2 text-lg">
                      Récupérez votre argent avec notre rapport juridique
                    </h3>
                    <p className="text-[#86868B] mb-4">
                      Notre rapport PDF de 4 pages vous donne toutes les armes pour faire baisser votre loyer :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#34C759]/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                        </div>
                        <span className="text-[#1D1D1F]">Calcul détaillé avec références légales</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#34C759]/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                        </div>
                        <span className="text-[#1D1D1F]">Lettre de mise en demeure prête à envoyer</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#34C759]/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                        </div>
                        <span className="text-[#1D1D1F]">Guide des démarches étape par étape</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F7] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[#86868B]">Prix du rapport complet</span>
                    <p className="text-sm text-[#86868B]">Paiement unique</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-[#007AFF]">14,99€</span>
                    <span className="text-[#86868B] text-sm block">pour récupérer jusqu'à {result.yearlyOverpay.toFixed(0)}€</span>
                  </div>
                </div>
                <div className="text-sm text-[#007AFF] bg-[#007AFF]/5 rounded-xl p-3 border border-[#007AFF]/10">
                  💡 <strong>ROI :</strong> Vous rentabilisez votre investissement en {Math.ceil(14.99 / result.overpayAmount)} mois seulement !
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-[#1D1D1F] font-medium">
                  Votre email pour recevoir le rapport
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ex: jean.dupont@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 rounded-xl border-black/10 focus:border-[#007AFF] focus:ring-[#007AFF]/20"
                />
              </div>

              <Button
                onClick={handleCheckout}
                disabled={!email || loading}
                className="w-full py-7 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/25 hover:shadow-xl hover:shadow-[#007AFF]/30 disabled:opacity-50 h-auto text-lg"
              >
                {loading ? "Redirection vers le paiement sécurisé..." : (
                  <>Obtenir mon rapport pour 14,99€ <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
              <p className="text-center text-[#86868B] text-sm">
                Paiement sécurisé par Stripe · Accès immédiat au rapport
              </p>
            </div>
          )}

          <Button 
            variant="outline" 
            onClick={() => setStep("form")} 
            className="w-full mt-4 rounded-full border-black/10 hover:bg-black/5"
          >
            Recalculer pour un autre logement
          </Button>
        </div>

        {result.isIllegal && (
          <>
            <SavingsCalculator monthlySavings={result.overpayAmount} />
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
              <ShareButtons
                title="Mon loyer est illégal !"
                text={`J'ai découvert que je payais ${result.overpayAmount.toFixed(0)}€ de trop chaque mois à ${city.name}. Vérifiez votre loyer !`}
              />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10 border border-black/5">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">Calculez votre loyer légal</h3>
        <p className="text-[#86868B]">Gratuit et sans engagement</p>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="surface" className="flex items-center gap-2 text-[#1D1D1F] font-medium mb-2">
            <Building2 className="w-4 h-4 text-[#007AFF]" />
            Surface habitable (m²)
          </Label>
          <Input 
            id="surface" 
            type="number" 
            placeholder="Ex: 75" 
            value={surface} 
            onChange={(e) => setSurface(e.target.value)} 
            className="h-12 rounded-xl border-black/10 focus:border-[#007AFF] focus:ring-[#007AFF]/20"
          />
        </div>

        <div>
          <Label htmlFor="peb" className="flex items-center gap-2 text-[#1D1D1F] font-medium mb-2">
            <Zap className="w-4 h-4 text-[#007AFF]" />
            Certificat PEB
          </Label>
          <select 
            id="peb" 
            value={peb} 
            onChange={(e) => setPeb(e.target.value)} 
            className="w-full h-12 px-4 border border-black/10 rounded-xl focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 bg-white"
          >
            <option value="">Sélectionnez votre PEB</option>
            {pebCoefficients.map((p) => (
              <option key={p.label} value={p.label}>{p.label} - {p.description}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="age" className="flex items-center gap-2 text-[#1D1D1F] font-medium mb-2">
            <Calendar className="w-4 h-4 text-[#007AFF]" />
            Âge du bien (années)
          </Label>
          <Input 
            id="age" 
            type="number" 
            placeholder="Ex: 8" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            className="h-12 rounded-xl border-black/10 focus:border-[#007AFF] focus:ring-[#007AFF]/20"
          />
        </div>

        <div>
          <Label htmlFor="rent" className="flex items-center gap-2 text-[#1D1D1F] font-medium mb-2">
            <Euro className="w-4 h-4 text-[#007AFF]" />
            Loyer actuel (€/mois)
          </Label>
          <Input 
            id="rent" 
            type="number" 
            placeholder="Ex: 1200" 
            value={currentRent} 
            onChange={(e) => setCurrentRent(e.target.value)} 
            className="h-12 rounded-xl border-black/10 focus:border-[#007AFF] focus:ring-[#007AFF]/20"
          />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!surface || !peb || !age || !currentRent}
          className="w-full py-7 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/25 hover:shadow-xl hover:shadow-[#007AFF]/30 disabled:opacity-50 h-auto text-lg"
        >
          Vérifier si mon loyer est illégal
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <div className="flex items-center justify-center gap-6 text-xs text-[#86868B]">
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#34C759]" /> Analyse gratuite</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#34C759]" /> Résultat instantané</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#34C759]" /> Sans engagement</span>
        </div>
      </div>
    </div>
  );
}
