"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Lock, ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9500]/10 border border-[#FF9500]/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#FF9500]" />
          <span className="text-[#FF9500] font-semibold text-sm">
            Rejoignez les 2 847 locataires qui ont déjà agi
          </span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
          Ne laissez plus votre propriétaire vous <span className="text-[#FF3B30]">arnaquer</span>
        </h2>
        
        <p className="text-xl text-[#86868B] mb-10 max-w-2xl mx-auto">
          Vérifiez <strong className="text-[#1D1D1F]">gratuitement</strong> si votre loyer est illégal. 
          En 2 minutes, découvrez combien vous pouvez récupérer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/bruxelles">
            <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/30 hover:shadow-xl hover:shadow-[#007AFF]/40 hover:scale-[1.02] text-lg h-auto">
              <Calculator className="w-5 h-5" />
              Vérifier mon loyer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-[#86868B]">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#34C759]" />
            Sans engagement
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#34C759]" />
            Données sécurisées
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Conforme RGPD
          </span>
        </div>

        <p className="text-[#86868B] text-sm mt-8">
          Temps moyen : 2 minutes · Résultat instantané · Moyenne récupérée : 2 160€/an
        </p>
      </div>
    </section>
  );
}
