"use client";

import { Suspense } from "react";
import { NavbarFixed } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MerciContent } from "./MerciContent";

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <NavbarFixed />

      <section className="pt-32 pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <Suspense fallback={
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  className="w-10 h-10 text-emerald-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-4">
                Merci pour votre achat !
              </h1>
              <p className="text-slate-600">
                Chargement de votre rapport...
              </p>
            </div>
          }>
            <MerciContent />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
