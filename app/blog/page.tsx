import { NavbarFixed } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    slug: "comprendre-code-logement-bruxelles",
    title: "Comprendre le Code du Logement à Bruxelles",
    excerpt:
      "Tout savoir sur la réglementation des loyers dans la Région de Bruxelles-Capitale : prix de référence, coefficients et obligations du propriétaire.",
    readTime: "5 min",
    category: "Législation",
  },
  {
    slug: "guide-certificat-peb",
    title: "Guide complet du certificat PEB",
    excerpt:
      "Le PEB influence directement votre loyer. Découvrez comment lire votre certificat et comprendre son impact sur le montant maximal de votre loyer.",
    readTime: "4 min",
    category: "Pratique",
  },
  {
    slug: "demarches-proprietaire-loyer-illegal",
    title: "Démarches auprès de votre propriétaire",
    excerpt:
      "Comment aborder la conversation avec votre propriétaire ? Quels sont vos droits ? Comment rédiger une lettre de mise en demeure efficace ?",
    readTime: "7 min",
    category: "Conseils",
  },
  {
    slug: "justice-paix-reclamation",
    title: "Saisir la Justice de Paix : le guide",
    excerpt:
      "Si votre propriétaire refuse de baisser le loyer, vous pouvez saisir la Justice de Paix. Voici la procédure étape par étape.",
    readTime: "6 min",
    category: "Juridique",
  },
  {
    slug: "calcul-loyer-anvers-liege",
    title: "Calculer son loyer à Anvers et Liège",
    excerpt:
      "La Flandre et la Wallonie ont leurs propres règles. Découvrez les spécificités de chaque région pour calculer votre loyer maximum.",
    readTime: "5 min",
    category: "Régions",
  },
  {
    slug: "erreurs-loyer-illegal",
    title: "Les erreurs courantes des propriétaires",
    excerpt:
      "Augmentation abusive, charges non justifiées, dépôt de garantie trop élevé... Voici les pratiques illégales les plus fréquentes.",
    readTime: "4 min",
    category: "Pratique",
  },
];

export const metadata = {
  title: "Blog - Loyer Légal",
  description:
    "Conseils et guides sur les loyers illégaux en Belgique. Découvrez vos droits en tant que locataire.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <NavbarFixed />

      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#007AFF]" />
              <span className="text-[#007AFF] font-semibold text-sm">Blog</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
              Guides et conseils
            </h1>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur les loyers illégaux et vos
              droits de locataire en Belgique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full bg-white border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#86868B]">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-[#007AFF] transition-colors text-[#1D1D1F]">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#86868B] text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#007AFF] font-medium text-sm group-hover:gap-2 transition-all">
                      Lire l&apos;article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
