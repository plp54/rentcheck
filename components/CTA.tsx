"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Lock, ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMjAgMjBoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-orange-300 font-semibold text-sm">
            Rejoignez les 2 847 locataires qui ont déjà agi
          </span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          Ne laissez plus votre propriétaire vous <span className="text-orange-400">arnaquer</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Vérifiez <strong className="text-white">gratuitement</strong> si votre loyer est illégal. 
          En 2 minutes, découvrez combien vous pouvez récupérer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/bruxelles">
            <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 text-lg">
              <Calculator className="w-5 h-5" />
              Vérifier mon loyer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            Sans engagement
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            Données sécurisées
          </span>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Conforme RGPD
          </span>
        </div>

        <p className="text-slate-500 text-sm mt-8">
          Temps moyen : 2 minutes · Résultat instantané · Moyenne récupérée : 2 160€/an
        </p>
      </div>
    </section>
  );
}
