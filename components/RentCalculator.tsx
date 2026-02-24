"use client";

import { useState } from "react";
import { MapPin, Building2, Zap, Calendar, Euro, ArrowRight, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  pebCoefficients,
  ageCoefficients,
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
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          {result.isIllegal ? (
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 font-bold rounded-full text-sm mb-4">
                <AlertTriangle className="w-4 h-4" />
                Votre loyer est illégal
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">
                Vous surpayez {result.overpayAmount.toFixed(0)}€/mois
              </h2>
              <p className="text-slate-600">
                C'est <strong className="text-red-600 text-xl">{result.yearlyOverpay.toFixed(0)}€ par an</strong> qui vous échappent !
              </p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-full text-sm mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Bonne nouvelle
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">
                Votre loyer est conforme
              </h2>
              <p className="text-slate-600">
                Vous payez le juste prix pour votre logement.
              </p>
            </div>
          )}

          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Votre loyer actuel</p>
                <p className="text-2xl font-black text-slate-900">{result.currentRent.toFixed(0)}€</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Maximum légal</p>
                <p className="text-2xl font-black text-emerald-600">{result.maxRent.toFixed(0)}€</p>
              </div>
              {result.isIllegal && (
                <>
                  <div>
                    <p className="text-sm text-slate-500">Surpaye mensuelle</p>
                    <p className="text-2xl font-black text-red-600">{result.overpayAmount.toFixed(0)}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Surpaye annuelle</p>
                    <p className="text-2xl font-black text-red-600">{result.yearlyOverpay.toFixed(0)}€</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {result.isIllegal && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Récupérez votre argent avec notre rapport juridique
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Notre rapport PDF de 4 pages vous donne toutes les armes pour faire baisser votre loyer :
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Calcul détaillé avec références légales
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Lettre de mise en demeure prête à envoyer
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Guide des démarches étape par étape
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-700 font-medium">Prix du rapport complet</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-emerald-600">14,99€</span>
                    <span className="text-slate-500 text-sm block">pour récupérer jusqu'à {result.yearlyOverpay.toFixed(0)}€</span>
                  </div>
                </div>
                <div className="text-sm text-emerald-700 bg-emerald-100/50 rounded-lg p-3">
                  💡 ROI : Vous rentabilisez votre investissement en {Math.ceil(14.99 / result.overpayAmount)} mois seulement !
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Votre email pour recevoir le rapport
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ex: jean.dupont@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                />
              </div>

              <Button
                onClick={handleCheckout}
                disabled={!email || loading}
                className="w-full py-7 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-50 text-lg"
              >
                {loading ? "Redirection vers le paiement sécurisé..." : (
                  <>Obtenir mon rapport pour 14,99€ <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
              <p className="text-center text-slate-500 text-sm">
                Paiement sécurisé par Stripe · Accès immédiat au rapport
              </p>
            </div>
          )}

          <Button variant="outline" onClick={() => setStep("form")} className="w-full mt-4">
            Recalculer pour un autre logement
          </Button>
        </div>

        {result.isIllegal && (
          <>
            <SavingsCalculator monthlySavings={result.overpayAmount} />
            <div className="bg-white rounded-xl p-6 shadow-sm">
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
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Calculez votre loyer légal</h3>
        <p className="text-slate-500 text-sm">Gratuit et sans engagement</p>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="surface" className="flex items-center gap-2 text-slate-700 font-medium">
            <Building2 className="w-4 h-4 text-emerald-600" />
            Surface habitable (m²)
          </Label>
          <Input id="surface" type="number" placeholder="Ex: 75" value={surface} onChange={(e) => setSurface(e.target.value)} className="mt-2" />
        </div>

        <div>
          <Label htmlFor="peb" className="flex items-center gap-2 text-slate-700 font-medium">
            <Zap className="w-4 h-4 text-emerald-600" />
            Certificat PEB
          </Label>
          <select id="peb" value={peb} onChange={(e) => setPeb(e.target.value)} className="w-full mt-2 px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
            <option value="">Sélectionnez votre PEB</option>
            {pebCoefficients.map((p) => (
              <option key={p.label} value={p.label}>{p.label} - {p.description}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="age" className="flex items-center gap-2 text-slate-700 font-medium">
            <Calendar className="w-4 h-4 text-emerald-600" />
            Âge du bien (années)
          </Label>
          <Input id="age" type="number" placeholder="Ex: 8" value={age} onChange={(e) => setAge(e.target.value)} className="mt-2" />
        </div>

        <div>
          <Label htmlFor="rent" className="flex items-center gap-2 text-slate-700 font-medium">
            <Euro className="w-4 h-4 text-emerald-600" />
            Loyer actuel (€/mois)
          </Label>
          <Input id="rent" type="number" placeholder="Ex: 1200" value={currentRent} onChange={(e) => setCurrentRent(e.target.value)} className="mt-2" />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!surface || !peb || !age || !currentRent}
          className="w-full py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-50"
        >
          Vérifier si mon loyer est illégal
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Analyse gratuite</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Résultat instantané</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Sans engagement</span>
        </div>
      </div>
    </div>
  );
}
