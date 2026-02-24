"use client";

import { Calculator, FileSearch, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Calculez votre loyer légal",
    description:
      "Entrez les infos de votre logement. Notre algorithme compare instantanément votre loyer au maximum légal selon le Code du Logement bruxellois.",
    icon: Calculator,
    benefit: "Gratuit et sans engagement",
  },
  {
    number: "02",
    title: "Découvrez si vous surpayez",
    description:
      "Obtenez immédiatement le montant exact de votre surpaye mensuelle et annuelle. 35% des locataires découvrent qu'ils paient trop cher !",
    icon: FileSearch,
    benefit: "Résultat en 30 secondes",
  },
  {
    number: "03",
    title: "Récupérez votre argent",
    description:
      "Téléchargez votre rapport juridique complet avec lettre de mise en demeure. Vous pouvez réclamer jusqu'à 12 mois de trop-perçu !",
    icon: Sparkles,
    benefit: "Moyenne : 2 160€ récupérés",
  },
];

export function HowItWorks() {
  return (
    <section id="comment" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-full text-sm mb-4">
            COMMENT RÉCUPÉRER VOTRE ARGENT
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            3 étapes pour faire baisser votre loyer
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des milliers de locataires ont déjà récupéré en moyenne <strong className="text-emerald-600">2 160€</strong> par an
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-6xl font-black text-slate-100 absolute top-6 right-6">
                {step.number}
              </span>
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-3">
                  {step.benefit}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/bruxelles">
            <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 text-lg">
              Vérifier si je surpaye
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Button>
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            ⚡ Analyse gratuite · Sans engagement · Résultat immédiat
          </p>
        </div>
      </div>
    </section>
  );
}
