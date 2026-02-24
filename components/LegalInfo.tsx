"use client";

import { Check } from "lucide-react";

export function LegalInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-full text-sm mb-4">
              SÉCURITÉ JURIDIQUE
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Conforme au Code du Logement bruxellois
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Notre algorithme utilise les prix de référence officiels du SPF
              Finances pour la Région de Bruxelles-Capitale (15,80€/m²).
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-slate-700">
                  <strong>Prix de référence Bruxelles 2024 :</strong> 15,80€/m²
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-slate-700">
                  <strong>Arrêté royal du 22 décembre 2023</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-slate-700">
                  <strong>Coefficients PEB officiels</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-slate-700">
                  <strong>Spécifique à la RBC</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Analyse certifiée
              </h3>
              <p className="text-slate-600 mb-4">
                Conforme à la législation RBC
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <Check className="w-5 h-5" />
                <span>Prix de référence SPF : 15.80€/m²</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold mt-2">
                <Check className="w-5 h-5" />
                <span>Coefficient PEB (C) : × 0.95</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold mt-2">
                <Check className="w-5 h-5" />
                <span>Coefficient ancienneté : × 0.90</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Rapport PDF</h3>
              <p className="text-indigo-100 mb-4">4 pages complètes</p>
              <ol className="space-y-2 text-indigo-100">
                <li>1. Analyse détaillée du calcul</li>
                <li>2. Cadre juridique complet</li>
                <li>3. Lettre de mise en demeure type</li>
                <li>4. Guide des démarches</li>
              </ol>
              <div className="mt-6 pt-6 border-t border-indigo-400/30">
                <span className="text-3xl font-black">0,50€</span>
                <span className="text-indigo-200 ml-2">Prix du rapport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
