"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Calendar, PiggyBank } from "lucide-react";

interface SavingsCalculatorProps {
  monthlySavings?: number;
}

export function SavingsCalculator({ monthlySavings = 150 }: SavingsCalculatorProps) {
  const [years, setYears] = useState(3);
  const totalSavings = monthlySavings * 12 * years;

  return (
    <Card className="bg-gradient-to-br from-[#F5F5F7] to-white border-black/5 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#1D1D1F]">
          <div className="w-10 h-10 bg-[#34C759]/10 rounded-xl flex items-center justify-center">
            <PiggyBank className="w-5 h-5 text-[#34C759]" />
          </div>
          Combien vous allez économiser
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-black/5">
            <p className="text-sm text-[#86868B] mb-1">Économie mensuelle</p>
            <p className="text-2xl font-bold text-[#007AFF]">{monthlySavings.toFixed(0)}€</p>
          </div>
          <div>
            <Label htmlFor="years" className="text-[#1D1D1F] flex items-center gap-2 text-sm mb-2">
              <Calendar className="w-4 h-4 text-[#007AFF]" />
              Sur combien d'années ?
            </Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="h-12 rounded-xl border-black/10 focus:border-[#007AFF] focus:ring-[#007AFF]/20"
              min={1}
              max={10}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-black/5">
          <p className="text-sm text-[#86868B] mb-2">
            Vos économies totales sur {years} an{years > 1 ? "s" : ""}
          </p>
          <p className="text-5xl font-bold text-[#34C759]">
            {totalSavings.toLocaleString("fr-FR")}€
          </p>
          <p className="text-sm text-[#86868B] mt-2">
            soit {(monthlySavings * 12).toLocaleString("fr-FR")}€ par an
          </p>
        </div>

        <div className="text-sm text-[#007AFF] bg-[#007AFF]/5 rounded-2xl p-4 border border-[#007AFF]/10">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#007AFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-[#007AFF]" />
            </div>
            <div className="text-[#1D1D1F]">
              <strong>Le saviez-vous ?</strong> Vous pouvez réclamer les trop-perçus des 12 derniers mois, 
              et votre loyer sera réduit pour toute la durée de votre bail. 
              <span className="text-[#007AFF] font-semibold"> Investissement : 14,99€ → Retour : jusqu'à {totalSavings.toLocaleString("fr-FR")}€</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
