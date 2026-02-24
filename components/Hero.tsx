"use client";

import Link from "next/link";
import Image from "next/image";
import { Calculator, ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Background texture/pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMjAgMjBoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />

      {/* Header fusionné */}
      <nav className="relative z-50 w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/logo.webp"
                alt="Loyer Légal"
                width={56}
                height={56}
                className="rounded-xl shadow-lg shadow-emerald-500/20"
              />
              <div>
                <span className="font-black text-2xl text-white tracking-tight block leading-none">
                  Loyer<span className="text-emerald-400">Légal</span>.be
                </span>
                <span className="text-slate-400 text-xs">Vérifiez votre loyer en 2 min</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                <Shield className="w-4 h-4" />
                100% conforme au Code du Logement
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              {/* Urgence badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6 animate-pulse">
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-orange-300 font-semibold text-sm">
                  ⚠️ 35% des locataires paient trop cher
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Votre loyer à{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Bruxelles
                </span>{" "}
                est-il <span className="text-orange-400">illégal</span> ?
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Découvrez si vous surpayez et récupérez <strong className="text-white">jusqu'à 12 mois de trop-perçu</strong>. 
                Notre analyse est gratuite et prend seulement 2 minutes.
              </p>

              {/* Bénéfices clés */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Résultat instantané
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  100% gratuit
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Users className="w-4 h-4 text-emerald-400" />
                  +2 800 locataires aidés
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link href="/bruxelles">
                  <Button className="group inline-flex items-center justify-center gap-3 px-8 py-7 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 text-lg">
                    <Calculator className="w-5 h-5" />
                    Vérifier mon loyer maintenant
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
              </div>

              {/* Preuve sociale */}
              <div className="flex items-center justify-center lg:justify-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">4.9/5</strong> de satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Calculator preview card */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-1 shadow-2xl shadow-emerald-500/20">
                <div className="bg-slate-900 rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-lg">Simulation gratuite</h3>
                    <span className="text-emerald-400 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-full">
                      En 2 min
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-400 font-bold">75</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Surface</p>
                        <p className="text-white font-semibold">m²</p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-400 font-bold">C</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Certificat PEB</p>
                        <p className="text-white font-semibold">Performance énergétique</p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-400 font-bold">8</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Ancienneté</p>
                        <p className="text-white font-semibold">ans</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30">
                    <p className="text-orange-300 text-sm font-medium mb-1">⚠️ Loyer potentiellement illégal</p>
                    <p className="text-white text-2xl font-black">985€ max / mois</p>
                  </div>

                  <Link href="/bruxelles">
                    <Button className="w-full mt-6 py-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all">
                      Tester mon loyer gratuitement
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
