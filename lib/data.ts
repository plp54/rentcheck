// Données des villes et coefficients pour le calcul du loyer

export interface CityConfig {
  slug: string;
  name: string;
  referencePrice: number; // Prix de référence au m²
  region: string;
  description: string;
}

export interface PEBCoefficient {
  label: string;
  coefficient: number;
  description: string;
}

export interface AgeCoefficient {
  maxYear: number;
  coefficient: number;
  label: string;
}

// Configuration des villes supportées
export const cities: CityConfig[] = [
  {
    slug: "bruxelles",
    name: "Bruxelles",
    referencePrice: 15.8,
    region: "Bruxelles-Capitale",
    description: "Région de Bruxelles-Capitale - Arrêté royal du 22 décembre 2023",
  },
  {
    slug: "anvers",
    name: "Anvers",
    referencePrice: 13.5,
    region: "Flandre",
    description: "Province d'Anvers - Code flamand du logement",
  },
  {
    slug: "liege",
    name: "Liège",
    referencePrice: 12.5,
    region: "Wallonie",
    description: "Province de Liège - Code wallon du logement",
  },
];

// Coefficients PEB (Performance Énergétique des Bâtiments)
export const pebCoefficients: PEBCoefficient[] = [
  { label: "A+", coefficient: 1.15, description: "Performance exceptionnelle" },
  { label: "A", coefficient: 1.1, description: "Très bonne performance" },
  { label: "B", coefficient: 1.05, description: "Bonne performance" },
  { label: "C", coefficient: 0.95, description: "Performance moyenne" },
  { label: "D", coefficient: 0.9, description: "Performance faible" },
  { label: "E", coefficient: 0.85, description: "Mauvaise performance" },
  { label: "F", coefficient: 0.8, description: "Très mauvaise performance" },
];

// Coefficients d'ancienneté
export const ageCoefficients: AgeCoefficient[] = [
  { maxYear: 5, coefficient: 1.0, label: "Moins de 5 ans" },
  { maxYear: 10, coefficient: 0.95, label: "5 à 10 ans" },
  { maxYear: 15, coefficient: 0.92, label: "10 à 15 ans" },
  { maxYear: 20, coefficient: 0.9, label: "15 à 20 ans" },
  { maxYear: 25, coefficient: 0.88, label: "20 à 25 ans" },
  { maxYear: 999, coefficient: 0.85, label: "Plus de 25 ans" },
];

// Calcul du loyer maximum légal
export function calculateMaxRent(
  surface: number,
  citySlug: string,
  pebLabel: string,
  age: number
): {
  baseRent: number;
  maxRent: number;
  pebCoef: number;
  ageCoef: number;
  cityConfig: CityConfig | undefined;
} {
  const cityConfig = cities.find((c) => c.slug === citySlug);
  const pebCoef =
    pebCoefficients.find((p) => p.label === pebLabel)?.coefficient || 1;
  const ageCoef =
    ageCoefficients.find((a) => age <= a.maxYear)?.coefficient || 0.85;

  const baseRent = surface * (cityConfig?.referencePrice || 0);
  const maxRent = baseRent * pebCoef * ageCoef;

  return {
    baseRent,
    maxRent,
    pebCoef,
    ageCoef,
    cityConfig,
  };
}

// Statistiques pour l'affichage
export const stats = {
  analyzedRentals: 2847,
  savingsGenerated: "€1.2M",
  averageRating: "4.9/5",
};

// Témoignages
export const testimonials = [
  {
    id: 1,
    name: "Sophie Dubois",
    location: "Ixelles, Bruxelles",
    amount: "2 160€/an",
    text: "J'ai découvert que je payais 180€ de trop chaque mois à Ixelles. Mon propriétaire a accepté de réduire mon loyer après réception du rapport.",
  },
  {
    id: 2,
    name: "Marc Lambert",
    location: "Saint-Gilles, Bruxelles",
    amount: "3 600€ récupérés",
    text: "Service professionnel et rapide. Le rapport PDF est très bien fait et a fait toute la différence dans ma négociation avec le propriétaire.",
  },
  {
    id: 3,
    name: "Julie Martin",
    location: "Etterbeek, Bruxelles",
    amount: "1 800€/an",
    text: "Je ne savais même pas que mon loyer était illégal. Grâce à RentCheck, j'ai pu faire baisser mon loyer de 150€ par mois à Etterbeek.",
  },
];
