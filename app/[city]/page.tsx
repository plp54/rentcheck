import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NavbarFixed } from "@/components/Navbar";
import { RentCalculator } from "@/components/RentCalculator";
import { Footer } from "@/components/Footer";
import { cities } from "@/lib/data";
import { Shield, Info, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return { title: "Ville non trouvée - Loyer Légal" };
  return {
    title: `Vérifier mon loyer à ${city.name} - Gratuit | Loyer Légal`,
    description: `Découvrez si vous surpayez votre loyer à ${city.name}. 35% des loyers sont illégaux. Analyse gratuite en 2 minutes. Prix de référence : ${city.referencePrice}€/m².`,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <NavbarFixed />

      {/* Hero section - Style Apple Premium */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-[#F5F5F7] via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center pt-8 pb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#007AFF]" />
              <span className="text-[#007AFF] font-semibold text-sm">
                35% des locataires de {city.name} paient trop cher
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
              Votre loyer à <span className="bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] bg-clip-text text-transparent">{city.name}</span> est-il <span className="text-[#FF3B30]">illégal</span> ?
            </h1>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
              Prix de référence officiel SPF Finances : <strong className="text-[#1D1D1F]">{city.referencePrice}€/m²</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <RentCalculator city={city} />

          {/* Trust indicators - Style Apple */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-[#007AFF]" />
              </div>
              <p className="text-sm font-semibold text-[#1D1D1F]">100% Gratuit</p>
              <p className="text-xs text-[#86868B] mt-1">Analyse sans engagement</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-[#007AFF]" />
              </div>
              <p className="text-sm font-semibold text-[#1D1D1F]">Conforme au Code</p>
              <p className="text-xs text-[#86868B] mt-1">Données SPF Finances</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-[#007AFF]" />
              </div>
              <p className="text-sm font-semibold text-[#1D1D1F]">Résultat immédiat</p>
              <p className="text-xs text-[#86868B] mt-1">En 30 secondes</p>
            </div>
          </div>

          {/* Info box - Style Apple */}
          <div className="mt-8 bg-[#F5F5F7] rounded-2xl p-6 flex items-start gap-4 border border-black/5">
            <div className="w-10 h-10 bg-[#007AFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-[#007AFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1D1D1F] mb-2">
                Comment est calculé votre loyer maximum ?
              </h3>
              <p className="text-sm text-[#86868B] leading-relaxed">
                <strong className="text-[#1D1D1F]">Formule officielle :</strong> Surface × Prix de référence ({city.referencePrice}€/m²) × Coefficient PEB × Coefficient ancienneté. 
                Notre algorithme utilise les données officielles du SPF Finances pour garantir un calcul précis conforme au Code du Logement.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="group inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/25 hover:shadow-xl hover:shadow-[#007AFF]/30 hover:scale-[1.02] text-lg h-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
