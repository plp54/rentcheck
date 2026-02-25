"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Step1Illustration, Step2Illustration, Step3Illustration } from "./illustrations/StepsIllustration";

const steps = [
  {
    number: "01",
    title: "Calculez votre loyer légal",
    description:
      "Entrez les informations de votre logement. Notre algorithme certifié compare instantanément votre loyer au maximum légal.",
    illustration: Step1Illustration,
    time: "30 secondes",
  },
  {
    number: "02",
    title: "Découvrez votre surpaye",
    description:
      "Obtenez le montant exact de votre surpaye mensuelle et annuelle. 35% des locataires découvrent qu'ils paient trop cher.",
    illustration: Step2Illustration,
    time: "Résultat immédiat",
  },
  {
    number: "03",
    title: "Récupérez votre argent",
    description:
      "Téléchargez votre rapport juridique complet. Vous pouvez réclamer jusqu'à 12 mois de trop-perçu d'un seul coup.",
    illustration: Step3Illustration,
    time: "Moyenne : 2 160€",
  },
];

export function HowItWorks() {
  return (
    <section id="comment" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="caption-apple mb-4 block">COMMENT ÇA MARCHE</span>
          <h2 className="section-title text-[#1D1D1F] mb-4">
            Récupérez votre argent en 3 étapes
          </h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
            Notre processus est conçu pour être rapide, simple et efficace.
            <strong className="text-[#1D1D1F]"> Zéro risque, tout à gagner.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#007AFF]/20 to-transparent" />
              )}
              
              <div className="relative bg-[#F5F5F7] rounded-3xl overflow-hidden border border-transparent hover:border-[#007AFF]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#007AFF]/5 hover:-translate-y-1">
                {/* Illustration */}
                <div className="h-48 bg-gradient-to-b from-white to-transparent p-6">
                  <step.illustration />
                </div>
                
                {/* Content */}
                <div className="p-8 pt-0">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl font-bold text-[#007AFF]/10">
                      {step.number}
                    </span>
                    <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-semibold rounded-full">
                      {step.time}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#86868B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/bruxelles">
            <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/25 hover:shadow-xl hover:shadow-[#007AFF]/30 hover:scale-[1.02] text-lg h-auto">
              Vérifier mon loyer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-[#86868B] text-sm mt-4">
            Analyse gratuite · Sans engagement · Données sécurisées
          </p>
        </div>
      </div>
    </section>
  );
}
