"use client";

import { Calculator, FileSearch, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Calculez",
    description:
      "Entrez les informations de votre logement à Bruxelles : surface, PEB et loyer actuel.",
    icon: Calculator,
  },
  {
    number: "02",
    title: "Analysez",
    description:
      "Notre algorithme compare votre loyer au maximum légal selon le Code du Logement bruxellois.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Agissez",
    description:
      "Téléchargez votre rapport avec lettre de mise en demeure prête à envoyer à votre propriétaire.",
    icon: Send,
  },
];

export function HowItWorks() {
  return (
    <section id="comment" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-full text-sm mb-4">
            COMMENT ÇA MARCHE
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Trois étapes simples
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Vérifiez votre loyer bruxellois et obtenez votre rapport légal en
            quelques minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-5xl font-black text-slate-100">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
