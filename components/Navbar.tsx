"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="relative z-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.webp"
              alt="Loyer Légal"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-black text-xl text-slate-900 tracking-tight">
              Loyer<span className="text-emerald-600">Légal</span>.be
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#comment"
              className="text-slate-600 hover:text-slate-900 font-medium transition"
            >
              Comment ça marche
            </Link>
            <Link
              href="/#temoignages"
              className="text-slate-600 hover:text-slate-900 font-medium transition"
            >
              Témoignages
            </Link>
            <Link href="/bruxelles">
              <Button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30">
                Vérifier mon loyer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarFixed() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.webp"
              alt="Loyer Légal"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-black text-xl text-slate-900 tracking-tight">
              Loyer<span className="text-emerald-600">Légal</span>.be
            </span>
          </Link>
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Accueil
          </Link>
        </div>
      </div>
    </nav>
  );
}
