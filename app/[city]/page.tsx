import { notFound } from "next/navigation";
import { NavbarFixed } from "@/components/Navbar";
import { RentCalculator } from "@/components/RentCalculator";
import { Footer } from "@/components/Footer";
import { cities } from "@/lib/data";
import { Landmark, Info } from "lucide-react";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: "Ville non trouvée - RentCheck",
    };
  }

  return {
    title: `Vérifier mon loyer à ${city.name} - RentCheck`,
    description: `Vérifiez gratuitement si votre loyer à ${city.name} est illégal selon le Code du Logement. Prix de référence : ${city.referencePrice}€/m².`,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <NavbarFixed />

      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
              <Landmark className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 font-medium text-sm">
                {city.region}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Vérifiez votre loyer à{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {city.name}
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Prix de référence SPF Finances pour {city.name} :{" "}
              <strong>{city.referencePrice}€/m²</strong>
            </p>
          </div>

          <RentCalculator city={city} />

          <div className="mt-8 bg-blue-50 rounded-xl p-6 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Comment est calculé le loyer maximum ?
              </h3>
              <p className="text-sm text-blue-800">
                Le loyer maximum légal est calculé selon la formule :{" "}
                <strong>
                  Surface × Prix de référence × Coefficient PEB × Coefficient
                  ancienneté
                </strong>
                . Notre algorithme utilise les données officielles du SPF
                Finances et du Code du Logement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
