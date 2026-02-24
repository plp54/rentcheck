"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Building2, Zap, Calendar, Euro, ArrowRight } from "lucide-react";
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
  const router = useRouter();
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

  // Form state
  const [surface, setSurface] = useState("");
  const [peb, setPeb] = useState("");
  const [age, setAge] = useState("");
  const [currentRent, setCurrentRent] = useState("");
  const [email, setEmail] = useState("");

  const handleCalculate = async () => {
    const surfaceNum = parseFloat(surface);
    const ageNum = parseInt(age);
    const currentRentNum = parseFloat(currentRent);

    if (!surfaceNum || !peb || !ageNum || !currentRentNum) {
      return;
    }

    const calc = calculateMaxRent(surfaceNum, city.slug, peb, ageNum);
    const maxRent = calc.maxRent;

    const isIllegal = currentRentNum > maxRent;
    const overpayAmount = isIllegal ? currentRentNum - maxRent : 0;
    const yearlyOverpay = overpayAmount * 12;

    const resultData = {
      currentRent: currentRentNum,
      maxRent,
      isIllegal,
      overpayAmount,
      yearlyOverpay,
    };

    setResult(resultData);
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
          email,
          city: city.slug,
          surface,
          peb,
          age,
          currentRent: result.currentRent,
          maxRent: result.maxRent,
          overpayAmount: result.overpayAmount,
          yearlyOverpay: result.yearlyOverpay,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  if (step === "result" && result) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {result.isIllegal ? (
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-red-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" x2="9" y1="9" y2="15" />
                  <line x1="9" x2="15" y1="9" y2="15" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">
                Votre loyer est illégal !
              </h2>
              <p className="text-slate-600">
                Vous payez{" "}
                <strong className="text-red-600">
                  {result.overpayAmount.toFixed(0)}€
                </strong>{" "}
                de trop chaque mois
              </p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-emerald-600"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">
                Votre loyer est conforme
              </h2>
              <p className="text-slate-600">
                Vous respectez le maximum légal de {result.maxRent.toFixed(0)}€/mois
              </p>
            </div>
          )}

          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Loyer actuel</p>
                <p className="text-2xl font-black text-slate-900">
                  {result.currentRent.toFixed(0)}€
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Maximum légal</p>
                <p className="text-2xl font-black text-emerald-600">
                  {result.maxRent.toFixed(0)}€
                </p>
              </div>
              {result.isIllegal && (
                <>
                  <div>
                    <p className="text-sm text-slate-500">Surpaye mensuelle</p>
                    <p className="text-2xl font-black text-red-600">
                      {result.overpayAmount.toFixed(0)}€
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Surpaye annuelle</p>
                    <p className="text-2xl font-black text-red-600">
                      {result.yearlyOverpay.toFixed(0)}€
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {result.isIllegal && (
            <div className="space-y-4">
              <p className="text-slate-700 text-center">
                Obtenez votre rapport PDF professionnel avec lettre de mise en
                demeure pour seulement 0,50€
              </p>
              <div>
                <Label htmlFor="email" className="text-slate-700">
                  Votre email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                />
              </div>
              <Button
                onClick={handleCheckout}
                disabled={!email || loading}
                className="w-full py-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
              >
                {loading ? (
                  "Chargement..."
                ) : (
                  <>
                    Obtenir mon rapport PDF - 0,50€
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}

          <Button
            variant="outline"
            onClick={() => setStep("form")}
            className="w-full mt-4"
          >
            Recalculer
          </Button>
        </div>

        {result.isIllegal && (
          <>
            <SavingsCalculator />
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <ShareButtons
                title="Mon loyer est illégal !"
                text={`J'ai découvert que je payais ${result.overpayAmount.toFixed(
                  0
                )}€ de trop chaque mois à ${city.name}. Vérifiez votre loyer !`}
              />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="space-y-6">
        {/* Surface */}
        <div>
          <Label
            htmlFor="surface"
            className="flex items-center gap-2 text-slate-700"
          >
            <Building2 className="w-4 h-4" />
            Surface habitable (m²)
          </Label>
          <Input
            id="surface"
            type="number"
            placeholder="Ex: 75"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            className="mt-2"
          />
        </div>

        {/* PEB */}
        <div>
          <Label htmlFor="peb" className="flex items-center gap-2 text-slate-700">
            <Zap className="w-4 h-4" />
            Certificat PEB
          </Label>
          <select
            id="peb"
            value={peb}
            onChange={(e) => setPeb(e.target.value)}
            className="w-full mt-2 px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Sélectionnez votre PEB</option>
            {pebCoefficients.map((p) => (
              <option key={p.label} value={p.label}>
                {p.label} - {p.description}
              </option>
            ))}
          </select>
        </div>

        {/* Age */}
        <div>
          <Label htmlFor="age" className="flex items-center gap-2 text-slate-700">
            <Calendar className="w-4 h-4" />
            Âge du bien (années)
          </Label>
          <Input
            id="age"
            type="number"
            placeholder="Ex: 8"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2"
          />
        </div>

        {/* Current Rent */}
        <div>
          <Label
            htmlFor="rent"
            className="flex items-center gap-2 text-slate-700"
          >
            <Euro className="w-4 h-4" />
            Loyer actuel (€/mois)
          </Label>
          <Input
            id="rent"
            type="number"
            placeholder="Ex: 1200"
            value={currentRent}
            onChange={(e) => setCurrentRent(e.target.value)}
            className="mt-2"
          />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!surface || !peb || !age || !currentRent}
          className="w-full py-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg disabled:opacity-50"
        >
          Vérifier mon loyer
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-sm text-slate-500 text-center">
          Analyse gratuite et instantanée. Le rapport PDF est payant (0,50€).
        </p>
      </div>
    </div>
  );
}
