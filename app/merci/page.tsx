"use client";

import { Suspense } from "react";
import { NavbarFixed } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MerciContent } from "./MerciContent";
import { CheckCircle2 } from "lucide-react";

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <NavbarFixed />

      <section className="pt-32 pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <Suspense fallback={
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center border border-black/5">
              <div className="w-20 h-20 bg-[#34C759]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#34C759]" />
              </div>
              <h1 className="text-3xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
                Merci pour votre achat !
              </h1>
              <p className="text-[#86868B]">
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
