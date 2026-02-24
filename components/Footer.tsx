"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre inscription !");
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.webp"
                alt="Loyer Légal"
                width={32}
                height={32}
                className="rounded"
              />
              <h3 className="text-white font-black text-xl">
                Loyer<span className="text-emerald-500">Légal</span>.be
              </h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Vérifiez si votre loyer est illégal et récupérez votre argent.
              Service conforme au Code du Logement belge.
            </p>
            <div className="text-2xl font-black text-emerald-500">
              2,847
              <span className="text-sm font-normal text-slate-400 ml-2">
                loyers analysés
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/#comment"
                  className="hover:text-white transition"
                >
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link
                  href="/#temoignages"
                  className="hover:text-white transition"
                >
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Villes</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/bruxelles"
                  className="hover:text-white transition"
                >
                  Bruxelles
                </Link>
              </li>
              <li>
                <Link
                  href="/anvers"
                  className="hover:text-white transition"
                >
                  Anvers
                </Link>
              </li>
              <li>
                <Link href="/liege" className="hover:text-white transition">
                  Liège
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">
              Recevez nos conseils et actualités sur les loyers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                S&apos;inscrire
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} LoyerLegal.be - Tous droits réservés
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/confidentialite"
              className="text-slate-500 hover:text-white transition"
            >
              Confidentialité
            </Link>
            <Link
              href="/conditions"
              className="text-slate-500 hover:text-white transition"
            >
              Conditions
            </Link>
            <Link
              href="mailto:contact@loyerlegal.be"
              className="text-slate-500 hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
