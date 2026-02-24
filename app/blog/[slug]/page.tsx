import { notFound } from "next/navigation";
import { NavbarFixed } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";

const articles: Record<
  string,
  {
    title: string;
    content: string;
    date: string;
    readTime: string;
  }
> = {
  "comprendre-code-logement-bruxelles": {
    title: "Comprendre le Code du Logement à Bruxelles",
    date: "15 février 2024",
    readTime: "5 min",
    content: `
      <h2>Qu'est-ce que le Code du Logement ?</h2>
      <p>Le Code du Logement bruxellois est un ensemble de règles qui encadrent les relations entre propriétaires et locataires dans la Région de Bruxelles-Capitale. Il fixe notamment les règles concernant le montant maximum des loyers.</p>
      
      <h2>Le prix de référence</h2>
      <p>Le prix de référence est fixé par arrêté royal. Pour Bruxelles, il est actuellement de <strong>15,80€ par m²</strong> (arrêté royal du 22 décembre 2023). Ce prix sert de base au calcul du loyer maximum.</p>
      
      <h2>Les coefficients applicables</h2>
      <p>Le loyer maximum est calculé en appliquant deux coefficients au prix de référence :</p>
      <ul>
        <li><strong>Coefficient PEB :</strong> selon la performance énergétique du logement (de 0,80 à 1,15)</li>
        <li><strong>Coefficient d'ancienneté :</strong> selon l'âge du bien (de 0,85 à 1,00)</li>
      </ul>
      
      <h2>Comment calculer votre loyer maximum ?</h2>
      <p>La formule est simple :</p>
      <blockquote>
        Loyer max = Surface × Prix de référence × Coefficient PEB × Coefficient ancienneté
      </blockquote>
      
      <h2>Que faire en cas de dépassement ?</h2>
      <p>Si votre loyer dépasse le maximum légal, vous avez plusieurs options :</p>
      <ol>
        <li>Envoyer une lettre de mise en demeure à votre propriétaire</li>
        <li>Négocier une réduction amiable</li>
        <li>Saisir la Justice de Paix si nécessaire</li>
      </ol>
      
      <h2>Les sanctions</h2>
      <p>Le propriétaire qui facture un loyer supérieur au maximum légal s'expose à des sanctions. Le locataire peut réclamer le remboursement des trop-perçus des 12 derniers mois.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé" };
  return {
    title: `${article.title} - RentCheck Blog`,
    description: article.content.slice(0, 160).replace(/<[^>]*>/g, ""),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <NavbarFixed />

      <article className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </Link>

          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl font-black text-slate-900 mb-8">
            {article.title}
          </h1>

          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-strong:text-slate-900 prose-blockquote:border-l-indigo-500 prose-blockquote:bg-indigo-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200">
            <ShareButtons
              title={article.title}
              text={`J'ai lu cet article sur RentCheck : ${article.title}`}
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
