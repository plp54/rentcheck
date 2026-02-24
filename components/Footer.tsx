"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre inscription !");
    setEmail("");
  };

  return (
    <footer className="bg-[#1D1D1F] text-white relative overflow-hidden">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="glass-card bg-white/5 border-white/10 p-10 lg:p-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à découvrir si vous surpayez ?
            </h3>
            <p className="text-[#86868B] text-lg mb-8 max-w-2xl mx-auto">
              Vérifiez gratuitement votre loyer en 2 minutes. C'est simple, rapide et sans engagement.
            </p>
            <Link href="/bruxelles">
              <Button className="group inline-flex items-center justify-center gap-3 px-10 py-7 bg-[#007AFF] hover:bg-[#0071E3] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#007AFF]/30 hover:shadow-xl hover:shadow-[#007AFF]/40 hover:scale-[1.02] text-lg h-auto">
                <Calculator className="w-5 h-5" />
                Tester mon loyer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.webp" alt="Loyer Légal" width={40} height={40} className="rounded-xl" />
              <h3 className="font-semibold text-xl">
                Loyer<span className="text-[#007AFF]">Légal</span>.be
              </h3>
            </div>
            <p className="text-[#86868B] text-sm mb-6 leading-relaxed">
              Vérifiez si votre loyer est illégal et récupérez votre argent. 
              Service conforme au Code du Logement belge.
            </p>
            <div className="text-3xl font-bold text-white">
              2,847
              <span className="text-sm font-normal text-[#86868B] ml-2">loyers analysés</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-[#86868B] hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/#comment" className="text-[#86868B] hover:text-white transition-colors">Comment ça marche</Link></li>
              <li><Link href="/#temoignages" className="text-[#86868B] hover:text-white transition-colors">Témoignages</Link></li>
              <li><Link href="/faq" className="text-[#86868B] hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-[#86868B] hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Villes</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/bruxelles" className="text-[#86868B] hover:text-white transition-colors">Bruxelles</Link></li>
              <li><Link href="/anvers" className="text-[#86868B] hover:text-white transition-colors">Anvers</Link></li>
              <li><Link href="/liege" className="text-[#86868B] hover:text-white transition-colors">Liège</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-[#86868B] text-sm mb-4">
              Recevez nos conseils pour faire baisser votre loyer.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-[#86868B] h-12 rounded-xl"
                required
              />
              <Button type="submit" className="w-full bg-[#007AFF] hover:bg-[#0071E3] h-12 rounded-xl">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#86868B]">
            © {new Date().getFullYear()} LoyerLegal.be - Tous droits réservés
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/confidentialite" className="text-[#86868B] hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/conditions" className="text-[#86868B] hover:text-white transition-colors">Conditions</Link>
            <Link href="mailto:contact@loyerlegal.be" className="text-[#86868B] hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
