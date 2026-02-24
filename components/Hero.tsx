"use client";

import Link from "next/link";
import Image from "next/image";
import { Calculator, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-white">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl animate-float delay-500" />

      {/* Header fusionné */}
      <nav className="relative z-50 w-full border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.webp"
                alt="Loyer Légal"
                width={48}
                height={48}
                className="rounded-xl shadow-lg"
              />
              <div>
                <span className="font-semibold text-xl text-[#1D1D1F] tracking-tight block leading-none">
                  Loyer<span className="text-[#007AFF]">Légal</span>.be
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-[#34C759] text-sm font-medium bg-[#34C759]/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                100% conforme au Code du Logement
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-full mb-8 animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-[#007AFF]" />
                <span className="text-[#007AFF] font-semibold text-sm">
                  L'analyse la plus précise de Belgique
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#1D1D1F] leading-[1.1] mb-6 tracking-tight animate-fade-in-up delay-100">
                Votre loyer à{" "}
                <span className="bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] bg-clip-text text-transparent">
                  Bruxelles
                </span>{" "}
                est-il <span className="text-[#FF3B30]">illégal</span> ?
              </h1>

              <p className="text-xl text-[#86868B] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                Découvrez gratuitement si vous surpayez. Notre algorithme utilise 
                <strong className="text-[#1D1D1F]"> les données officielles du SPF Finances</strong>.
              </p>

              {/* Bénéfices */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 animate-fade-in-up delay-300">
                <div className="flex items-center gap-2 text-[#86868B] text-sm">
                  <Clock className="w-4 h-4 text-[#007AFF]" />
                  2 minutes
                </div>
                <div className="flex items-center gap-2 text-[#86868B] text-sm">
                  <Shield className="w-4 h-4 text-[#007AFF]" />
                  100% gratuit
                </div>
                <div className="flex items-center gap-2 text-[#86868B] text-sm">
                  <svg className="w-4 h-4 text-[#007AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  +2 800 locataires aidés
                </div>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up delay-400">
                <Link href="/bruxelles">
                  <Button className="group inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/25 hover:shadow-xl hover:shadow-[#007AFF]/30 hover:scale-[1.02] text-lg h-auto">
                    <Calculator className="w-5 h-5" />
                    Vérifier mon loyer
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Preuve sociale premium */}
              <div className="flex items-center justify-center lg:justify-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-black/5 animate-fade-in-up delay-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-[#1D1D1F] text-xs font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-[#FF9500]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#86868B] text-sm">
                    <strong className="text-[#1D1D1F]">4.9/5</strong> basé sur 2 847 avis
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Card premium */}
            <div className="relative animate-scale-in delay-300">
              <div className="relative">
                {/* Card glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#007AFF]/20 to-[#5AC8FA]/20 rounded-[32px] blur-xl opacity-60" />
                
                <div className="relative glass-card p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[#1D1D1F] font-semibold text-lg">Simulation gratuite</h3>
                    <span className="text-[#007AFF] text-sm font-medium bg-[#007AFF]/10 px-3 py-1 rounded-full">
                      En 2 min
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#F5F5F7] rounded-2xl p-4 flex items-center gap-4 border border-black/5">
                      <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center">
                        <span className="text-[#007AFF] font-bold text-lg">75</span>
                      </div>
                      <div>
                        <p className="text-[#86868B] text-sm">Surface habitable</p>
                        <p className="text-[#1D1D1F] font-semibold">m²</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#F5F5F7] rounded-2xl p-4 flex items-center gap-4 border border-black/5">
                      <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center">
                        <span className="text-[#007AFF] font-bold text-lg">C</span>
                      </div>
                      <div>
                        <p className="text-[#86868B] text-sm">Certificat PEB</p>
                        <p className="text-[#1D1D1F] font-semibold">Performance énergétique</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#F5F5F7] rounded-2xl p-4 flex items-center gap-4 border border-black/5">
                      <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center">
                        <span className="text-[#007AFF] font-bold text-lg">8</span>
                      </div>
                      <div>
                        <p className="text-[#86868B] text-sm">Ancienneté</p>
                        <p className="text-[#1D1D1F] font-semibold">ans</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-[#FF3B30]/5 rounded-2xl border border-[#FF3B30]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-[#FF3B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-[#FF3B30] text-sm font-medium">Loyer potentiellement illégal</p>
                    </div>
                    <p className="text-[#1D1D1F] text-2xl font-bold">985€ max / mois</p>
                  </div>

                  <Link href="/bruxelles">
                    <Button className="w-full mt-6 py-6 bg-[#1D1D1F] hover:bg-[#000] text-white font-semibold rounded-2xl transition-all h-auto">
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
