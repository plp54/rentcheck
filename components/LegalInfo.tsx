"use client";

import { Check, FileText, Scale, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LegalInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-full text-sm mb-4">
            SÉCURITÉ JURIDIQUE
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Une analyse conforme au Code du Logement
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Nos calculs sont basés sur les données officielles du SPF Finances pour garantir la solidité de votre dossier
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Base légale solide
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Notre algorithme utilise les prix de référence officiels du SPF Finances pour la Région de Bruxelles-Capitale.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700">
                        <strong>Prix de référence 2024 :</strong> 15,80€/m²
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700">
                        <strong>Arrêté royal</strong> du 22 décembre 2023
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700">
                        <strong>Coefficients PEB</strong> officiels
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Attention aux arnaques
                  </h3>
                  <p className="text-slate-600">
                    De nombreux propriétaires profitent de la méconnaissance des locataires pour facturer des loyers excessifs. 
                    Vous avez le droit de réclamer le remboursement des 12 derniers mois.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-2xl shadow-emerald-600/20">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Rapport PDF Complet</h3>
            </div>
            
            <p className="text-emerald-100 mb-6">
              Obtenez un document professionnel de 4 pages pour défendre vos droits :
            </p>
            
            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</span>
                <span className="text-emerald-100">Analyse détaillée du calcul de votre loyer légal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</span>
                <span className="text-emerald-100">Cadre juridique complet avec références</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold flex-shrink-0">3</span>
                <span className="text-emerald-100">Lettre de mise en demeure prête à envoyer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold flex-shrink-0">4</span>
                <span className="text-emerald-100">Guide des démarches étape par étape</span>
              </li>
            </ol>

            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-emerald-100">Prix du rapport</span>
                <div className="text-right">
                  <span className="text-3xl font-black">14,99€</span>
                  <span className="text-emerald-200 text-sm block">économisez jusqu'à 2 160€/an</span>
                </div>
              </div>
            </div>

            <Link href="/bruxelles">
              <Button className="w-full py-6 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all">
                Obtenir mon rapport maintenant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
