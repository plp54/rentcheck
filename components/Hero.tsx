"use client";

import Link from "next/link";
import { Calculator, ArrowRight, MapPin, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute top-1/3 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full mb-8">
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
                  className="w-4 h-4 text-emerald-600"
                >
                  <line x1="3" x2="21" y1="22" y2="22" />
                  <line x1="6" x2="6" y1="18" y2="11" />
                  <line x1="10" x2="10" y1="18" y2="11" />
                  <line x1="14" x2="14" y1="18" y2="11" />
                  <line x1="18" x2="18" y1="18" y2="11" />
                  <polygon points="12 2 20 7 4 7" />
                </svg>
                <span className="text-emerald-700 font-medium text-sm">
                  Bruxelles-Capitale
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Votre loyer à{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Bruxelles
                </span>{" "}
                est-il illégal ?
              </h1>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                35% des loyers à Bruxelles dépassent le maximum légal. Vérifiez
                gratuitement en 2 minutes et récupérez votre argent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link href="/bruxelles">
                  <Button className="group inline-flex items-center justify-center gap-3 px-8 py-6 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:scale-105 text-lg">
                    <Calculator className="w-5 h-5" />
                    Vérifier gratuitement
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-emerald-600">
                    {stats.analyzedRentals.toLocaleString()}
                  </div>
                  <div className="text-slate-500 font-medium text-sm mt-1">
                    Loyers analysés à Bruxelles
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-emerald-600">
                    {stats.savingsGenerated}
                  </div>
                  <div className="text-slate-500 font-medium text-sm mt-1">
                    Économies réalisées
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-amber-500">
                    {stats.averageRating}
                  </div>
                  <div className="text-slate-500 font-medium text-sm mt-1">
                    Note moyenne
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Card preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-1 shadow-2xl shadow-emerald-500/30">
                <div className="bg-white rounded-3xl p-8">
                  <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Ville</p>
                        <p className="font-bold text-slate-900">Bruxelles</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Surface</p>
                        <p className="font-bold text-slate-900">75 m²</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Certificat PEB</p>
                        <p className="font-bold text-slate-900">C</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
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
                          className="w-5 h-5 text-emerald-600"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Ancienneté</p>
                        <p className="font-bold text-slate-900">8 ans</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div>
                      <p className="text-sm text-emerald-700 font-medium">
                        Loyer maximum légal
                      </p>
                      <p className="text-2xl font-black text-emerald-700">
                        985€/mois
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
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
                        className="w-6 h-6 text-emerald-600"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
