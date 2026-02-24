"use client";

import { Check, FileText, Scale, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LegalInfo() {
  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="caption-apple mb-4 block">SÉCURITÉ JURIDIQUE</span>
          <h2 className="section-title text-[#1D1D1F] mb-4">
            Une analyse conforme au Code du Logement
          </h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
            Nos calculs sont basés sur les données officielles du SPF Finances pour garantir 
            la solidité irréprochable de votre dossier.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-7 h-7 text-[#007AFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                    Base légale solide
                  </h3>
                  <p className="text-[#86868B] mb-5">
                    Notre algorithme utilise les prix de référence officiels du SPF Finances 
                    pour la Région de Bruxelles-Capitale.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { label: "Prix de référence 2024", value: "15,80€/m²" },
                      { label: "Référence légale", value: "Arrêté royal 22/12/2023" },
                      { label: "Coefficients PEB", value: "Officiels et à jour" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center justify-between p-3 bg-white rounded-xl border border-black/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#34C759]/10 rounded-lg flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#34C759]" />
                          </div>
                          <span className="text-[#1D1D1F] font-medium">{item.label}</span>
                        </div>
                        <span className="text-[#007AFF] font-semibold text-sm">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-[#FF9500]">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#FF9500]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-[#FF9500]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                    Protégez vos droits
                  </h3>
                  <p className="text-[#86868B]">
                    De nombreux propriétaires profitent de la méconnaissance des locataires. 
                    Vous avez le droit de réclamer le remboursement des <strong className="text-[#1D1D1F]">12 derniers mois</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Pricing Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#007AFF]/20 to-[#5AC8FA]/20 rounded-[32px] blur-xl opacity-60" />
            
            <div className="relative glass-card p-8 lg:p-10 border-0 bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] rounded-2xl flex items-center justify-center shadow-lg shadow-[#007AFF]/25">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F]">Rapport PDF Complet</h3>
                  <p className="text-[#86868B]">Document juridique professionnel</p>
                </div>
              </div>
              
              <p className="text-[#86868B] mb-8">
                Obtenez un document de 4 pages pour défendre vos droits avec assurance :
              </p>
              
              <ol className="space-y-4 mb-10">
                {[
                  "Analyse détaillée du calcul de votre loyer légal",
                  "Cadre juridique complet avec références officielles",
                  "Lettre de mise en demeure prête à l'envoi",
                  "Guide des démarches étape par étape",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#F5F5F7] rounded-xl flex items-center justify-center font-bold text-[#007AFF] flex-shrink-0 text-sm">
                      {i + 1}
                    </span>
                    <span className="text-[#1D1D1F] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>

              <div className="bg-[#F5F5F7] rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#86868B]">Investissement</span>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-[#1D1D1F]">14,99€</span>
                    <span className="text-[#86868B] text-sm block">paiement unique</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#86868B]">Retour potentiel</span>
                  <span className="text-[#34C759] font-semibold">jusqu'à 2 160€/an</span>
                </div>
              </div>

              <Link href="/bruxelles">
                <Button className="w-full py-6 bg-[#1D1D1F] hover:bg-black text-white font-semibold rounded-2xl transition-all h-auto text-lg">
                  Obtenir mon rapport
                </Button>
              </Link>
              
              <p className="text-center text-[#86868B] text-sm mt-4">
                Paiement sécurisé · Accès immédiat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
