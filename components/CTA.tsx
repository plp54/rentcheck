"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Lock } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
          Prêt à récupérer votre argent ?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Vérifiez gratuitement si votre loyer bruxellois est conforme en 2
          minutes chrono.
        </p>

        <Link href="/bruxelles">
          <Button className="group inline-flex items-center justify-center gap-3 px-10 py-6 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:scale-105 text-lg">
            <Calculator className="w-5 h-5" />
            Vérifier mon loyer gratuitement
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Sans engagement
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Données sécurisées
          </span>
          <span className="flex items-center gap-2">
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
              className="w-4 h-4"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            Conforme RGPD
          </span>
        </div>
      </div>
    </section>
  );
}
