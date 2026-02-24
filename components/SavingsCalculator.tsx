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
    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-900">
          <PiggyBank className="w-5 h-5" />
          Combien vous allez économiser
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4">
            <p className="text-sm text-slate-500 mb-1">Économie mensuelle</p>
            <p className="text-2xl font-black text-emerald-600">{monthlySavings.toFixed(0)}€</p>
          </div>
          <div>
            <Label htmlFor="years" className="text-emerald-800 flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              Sur combien d'années ?
            </Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-1 bg-white"
              min={1}
              max={10}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <p className="text-sm text-slate-600 mb-2">
            Vos économies totales sur {years} an{years > 1 ? "s" : ""}
          </p>
          <p className="text-5xl font-black text-emerald-600">
            {totalSavings.toLocaleString("fr-FR")}€
          </p>
          <p className="text-sm text-slate-500 mt-2">
            soit {(monthlySavings * 12).toLocaleString("fr-FR")}€ par an
          </p>
        </div>

        <div className="text-sm text-emerald-700 bg-emerald-100/50 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Le saviez-vous ?</strong> Vous pouvez réclamer les trop-perçus des 12 derniers mois, 
              et votre loyer sera réduit pour toute la durée de votre bail. 
              <strong> Investissement : 14,99€ → Retour : jusqu'à {totalSavings.toLocaleString("fr-FR")}€</strong>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
