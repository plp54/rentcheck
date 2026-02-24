"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-black text-xl mb-4">RentCheck</h3>
            <p className="text-sm text-slate-400">
              Vérifiez si votre loyer est illégal et récupérez votre argent.
              Service conforme au Code du Logement belge.
            </p>
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
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/confidentialite"
                  className="hover:text-white transition"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions"
                  className="hover:text-white transition"
                >
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} RentCheck.be - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
