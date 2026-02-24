"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return null; // Fusionné avec Hero
}

export function NavbarFixed() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.webp"
              alt="Loyer Légal"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-black text-lg text-white tracking-tight">
              Loyer<span className="text-emerald-400">Légal</span>.be
            </span>
          </Link>
          <Link
            href="/"
            className="text-slate-300 hover:text-white font-medium flex items-center gap-2 transition text-sm"
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
            Retour
          </Link>
        </div>
      </div>
    </nav>
  );
}
