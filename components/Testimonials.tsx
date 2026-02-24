"use client";

import { testimonials } from "@/lib/data";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="caption-apple mb-4 block">TÉMOIGNAGES VÉRIFIÉS</span>
          <h2 className="section-title text-[#1D1D1F] mb-4">
            Des milliers de locataires soulagés
          </h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
            Découvrez comment ils ont fait baisser leur loyer grâce à notre rapport juridique
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border border-black/5">
            <div className="text-4xl font-bold text-[#007AFF] mb-1">2 847</div>
            <div className="text-[#86868B] text-sm">Loyers analysés</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-black/5">
            <div className="text-4xl font-bold text-[#FF9500] mb-1">35%</div>
            <div className="text-[#86868B] text-sm">Sont illégaux</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-black/5">
            <div className="text-4xl font-bold text-[#34C759] mb-1">2 160€</div>
            <div className="text-[#86868B] text-sm">Moyenne récupérée/an</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 text-[#FF9500] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-[#007AFF]/10 mb-4" />
              
              <p className="text-[#1D1D1F] mb-8 leading-relaxed text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-black/5">
                <div>
                  <p className="font-semibold text-[#1D1D1F]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#86868B]">
                    {testimonial.location}
                  </p>
                </div>
                <div className="px-4 py-2 bg-[#34C759]/10 text-[#34C759] font-bold rounded-full text-sm">
                  {testimonial.amount}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/bruxelles">
            <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/25 hover:shadow-xl hover:shadow-[#007AFF]/30 hover:scale-[1.02] text-lg h-auto">
              Vérifier mon loyer maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-[#86868B] text-sm mt-4">
            Analyse gratuite · 2 minutes · Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
}
