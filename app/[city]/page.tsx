import { notFound } from "next/navigation";
import Image from "next/image";
import { NavbarFixed } from "@/components/Navbar";
import { RentCalculator } from "@/components/RentCalculator";
import { Footer } from "@/components/Footer";
import { cities } from "@/lib/data";
import { Shield, Info, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
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
    <main className="min-h-screen bg-slate-50">
      <NavbarFixed />

      {/* Hero section fusionné */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMjAgMjBoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center pt-8 pb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-300 font-semibold text-sm">
                35% des locataires de {city.name} paient trop cher
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Votre loyer à <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{city.name}</span> est-il <span className="text-orange-400">illégal</span> ?
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Prix de référence officiel SPF Finances : <strong className="text-white">{city.referencePrice}€/m²</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-8">
        <div className="max-w-4xl mx-auto px-6">
          <RentCalculator city={city} />

          {/* Trust indicators */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm font-semibold text-slate-900">100% Gratuit</p>
              <p className="text-xs text-slate-500">Analyse sans engagement</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm font-semibold text-slate-900">Conforme au Code</p>
              <p className="text-xs text-slate-500">Données SPF Finances</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <ArrowRight className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm font-semibold text-slate-900">Résultat immédiat</p>
              <p className="text-xs text-slate-500">En 30 secondes</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Comment est calculé votre loyer maximum ?
              </h3>
              <p className="text-sm text-blue-800">
                <strong>Formule officielle :</strong> Surface × Prix de référence ({city.referencePrice}€/m²) × Coefficient PEB × Coefficient ancienneté. 
                Notre algorithme utilise les données officielles du SPF Finances pour garantir un calcul précis conforme au Code du Logement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
