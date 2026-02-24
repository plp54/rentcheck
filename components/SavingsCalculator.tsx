"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Calendar } from "lucide-react";

export function SavingsCalculator() {
  const [monthlySavings, setMonthlySavings] = useState(150);
  const [years, setYears] = useState(3);

  const totalSavings = monthlySavings * 12 * years;

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-900">
          <TrendingUp className="w-5 h-5" />
          Calculateur d&apos;économies
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="monthly" className="text-emerald-800">
              Économie mensuelle (€)
            </Label>
            <Input
              id="monthly"
              type="number"
              value={monthlySavings}
              onChange={(e) => setMonthlySavings(Number(e.target.value))}
              className="mt-1 bg-white"
            />
          </div>
          <div>
            <Label htmlFor="years" className="text-emerald-800 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Sur combien d&apos;années ?
            </Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-1 bg-white"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <p className="text-sm text-slate-600 mb-2">
            Vos économies potentielles sur {years} an{years > 1 ? "s" : ""}
          </p>
          <p className="text-4xl font-black text-emerald-600">
            {totalSavings.toLocaleString("fr-FR")}€
          </p>
          <p className="text-sm text-slate-500 mt-2">
            soit {monthlySavings * 12}€ par an
          </p>
        </div>

        <div className="text-sm text-emerald-700 bg-emerald-100/50 rounded-lg p-4">
          💡 <strong>Le saviez-vous ?</strong> Vous pouvez réclamer les
          trop-perçus des 12 derniers mois, et votre loyer sera réduit pour
          toute la durée du bail.
        </div>
      </CardContent>
    </Card>
  );
}
