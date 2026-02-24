import { NavbarFixed } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "Comment est calculé le loyer maximum légal ?",
    answer:
      "Le loyer maximum est calculé selon la formule : Surface × Prix de référence × Coefficient PEB × Coefficient ancienneté. Le prix de référence est fixé par le SPF Finances (15,80€/m² pour Bruxelles). Les coefficients PEB varient de 0.80 (PEB F) à 1.15 (PEB A+).",
  },
  {
    question: "Que faire si mon loyer est illégal ?",
    answer:
      "Vous pouvez : 1) Envoyer une lettre de mise en demeure à votre propriétaire par recommandé, 2) Négocier une réduction de loyer, 3) Saisir la Justice de Paix si le propriétaire refuse. Vous pouvez réclamer les trop-perçus des 12 derniers mois.",
  },
  {
    question: "Qu'est-ce que le certificat PEB ?",
    answer:
      "Le PEB (Performance Énergétique des Bâtiments) est un certificat qui évalue la consommation énergétique de votre logement sur une échelle de A+ (très performant) à F (peu performant). Ce certificat est obligatoire pour toute location en Belgique.",
  },
  {
    question: "Le rapport PDF est-il juridiquement valable ?",
    answer:
      "Le rapport PDF est un document informatif basé sur les données officielles du SPF Finances. Il n'a pas de valeur juridique en soi, mais il constitue une base solide pour votre démarche auprès du propriétaire ou de la Justice de Paix.",
  },
  {
    question: "Puis-je réclamer les trop-perçus ?",
    answer:
      "Oui, vous pouvez réclamer le remboursement des trop-perçus des 12 derniers mois. Au-delà, la prescription s'applique. Le propriétaire est tenu de vous rembourser la différence entre ce que vous avez payé et le loyer légal.",
  },
  {
    question: "Que contient exactement le rapport PDF ?",
    answer:
      "Le rapport PDF de 4 pages contient : 1) L'analyse détaillée du calcul de votre loyer, 2) Le cadre juridique applicable, 3) Une lettre de mise en demeure type prête à envoyer, 4) Un guide des démarches à suivre.",
  },
  {
    question: "Combien de temps prend l'analyse ?",
    answer:
      "L'analyse en ligne est instantanée. Vous obtenez immédiatement le résultat. Le rapport PDF est généré en quelques secondes après le paiement de 0,50€.",
  },
  {
    question: "Mes données sont-elles protégées ?",
    answer:
      "Absolument. Nous ne stockons aucune donnée personnelle. Les informations saisies sont uniquement utilisées pour générer votre rapport et ne sont pas conservées après la session.",
  },
  {
    question: "Le service fonctionne-t-il pour toute la Belgique ?",
    answer:
      "Actuellement, nous couvrons Bruxelles, Anvers et Liège. Chaque région a sa propre législation et ses prix de référence. Nous ajouterons d'autres villes prochainement.",
  },
  {
    question: "Que se passe-t-il après le paiement ?",
    answer:
      "Après le paiement sécurisé via Stripe, vous êtes redirigé vers une page de confirmation où vous pouvez immédiatement télécharger votre rapport PDF. Une copie vous est également envoyée par email.",
  },
];

export const metadata = {
  title: "FAQ - RentCheck",
  description:
    "Questions fréquentes sur la vérification des loyers illégaux en Belgique. Comment calculer son loyer maximum légal ? Que faire si on surpaye ?",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <NavbarFixed />

      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 font-medium text-sm">FAQ</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Questions fréquentes
            </h1>
            <p className="text-xl text-slate-600">
              Tout ce que vous devez savoir sur les loyers illégaux en Belgique
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">
              Vous avez d&apos;autres questions ?
            </h2>
            <p className="text-indigo-100 mb-6">
              Notre équipe est là pour vous aider avec votre démarche.
            </p>
            <Link href="mailto:contact@rentcheck.be">
              <Button
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-indigo-50"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
