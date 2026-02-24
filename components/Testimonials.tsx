"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 font-medium rounded-full text-sm mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Ils ont récupéré leur argent à Bruxelles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-emerald-200 mb-6" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-full text-sm">
                  {testimonial.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
