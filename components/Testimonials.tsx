"use client";

import { testimonials } from "@/lib/data";
import { Quote, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-full text-sm mb-4">
            ILS ONT RÉCUPÉRÉ LEUR ARGENT
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Des milliers de locataires soulagés
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez comment ils ont fait baisser leur loyer grâce à notre rapport
          </p>
        </div>

        {/* Stats globales */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-emerald-600 mb-1">2 847</div>
            <div className="text-slate-500 text-sm">Loyers analysés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-orange-500 mb-1">35%</div>
            <div className="text-slate-500 text-sm">Sont illégaux</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-emerald-600 mb-1">2 160€</div>
            <div className="text-slate-500 text-sm">Moyenne récupérée/an</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-emerald-200 mb-4" />
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 px-4 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-full text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.amount}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/bruxelles">
            <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 text-lg">
              Vérifier mon loyer maintenant
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-1 transition"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            Analyse gratuite · 2 minutes · Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
}
