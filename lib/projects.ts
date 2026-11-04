export type ProjectCategory = "Residential" | "Apartments" | "Interiors" | "Renovation";

export type Project = {
  slug: string;
  number: string;
  title: string;
  location: string;
  /** Short area name used for the homepage location filter. */
  area: string;
  category: ProjectCategory;
  /** Label shown on cards, e.g. "BUILD + INTERIORS". */
  type: string;
  scope: string;
  services: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  /** Fields still to be confirmed with D207. */
  year?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "road-26-duplex-residences",
    number: "01",
    title: "Road 26 Duplex Residences",
    location: "Road 26, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    category: "Residential",
    type: "Residential",
    scope: "Construction of two units of 5-bedroom duplexes.",
    services: ["Construction"],
    image: "/images/projects/road-26.jpg",
    imageAlt: "Contemporary white duplex with a reflecting pool",
    featured: true,
  },
  {
    slug: "christchurch-avenue-duplexes",
    number: "02",
    title: "Christchurch Avenue Duplexes",
    location: "Christchurch Avenue, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    category: "Residential",
    type: "Residential",
    scope: "Construction of two units of 5-bedroom duplexes.",
    services: ["Construction"],
    image: "/images/projects/christchurch.jpg",
    imageAlt: "Modern villa with a pool and outdoor lounge",
    featured: true,
  },
  {
    slug: "lekki-terrace-apartments",
    number: "03",
    title: "Lekki Terrace Apartments",
    location: "Lekki, Lagos",
    area: "Lekki",
    category: "Apartments",
    type: "Apartments",
    scope: "Construction of a block of terrace residential apartments.",
    services: ["Construction"],
    image: "/images/projects/lekki-terrace.jpg",
    imageAlt: "Modern residence lit up at night",
  },
  {
    slug: "ikate-five-bedroom-residence",
    number: "04",
    title: "Ikate Five-Bedroom Residence",
    location: "Ikate, Elegushi, Lekki",
    area: "Ikate",
    category: "Residential",
    type: "Residential",
    scope: "Construction of a 5-bedroom duplex.",
    services: ["Construction"],
    image: "/images/projects/ikate.jpg",
    imageAlt: "Two-storey modern house with a pool",
    featured: true,
  },
  {
    slug: "agungi-duplex-development",
    number: "05",
    title: "Agungi Duplex Development",
    location: "Agungi, Lekki, Lagos",
    area: "Agungi",
    category: "Residential",
    type: "Residential",
    scope: "Construction of two units of 5-bedroom duplexes.",
    services: ["Construction"],
    image: "/images/projects/agungi.jpg",
    imageAlt: "Low modern residence with a long pool and lawn",
  },
  {
    slug: "oniru-mixed-residential-blocks",
    number: "06",
    title: "Oniru Mixed Residential Blocks",
    location: "Oniru Estate, Lekki",
    area: "Oniru",
    category: "Apartments",
    type: "Mixed residential",
    scope: "Construction of two blocks of 5-bedroom duplexes and three units of 3-bedroom apartments.",
    services: ["Construction"],
    image: "/images/projects/oniru.jpg",
    imageAlt: "White modern building beside a swimming pool",
    featured: true,
  },
  {
    slug: "pw-views-apartment-block",
    number: "07",
    title: "PW Views Apartment Block",
    location: "Lagos",
    area: "Lagos",
    category: "Apartments",
    type: "Subcontract",
    scope: "Construction subcontractor for an eight-storey block of 2- and 3-bedroom apartments.",
    services: ["Construction"],
    image: "/images/projects/pw-views.jpg",
    imageAlt: "Multi-storey apartment building with balconies",
  },
  {
    slug: "carlton-gate-estate-residence",
    number: "08",
    title: "Carlton Gate Estate Residence",
    location: "Carlton Gate Estate, Lekki, Lagos",
    area: "Lekki",
    category: "Interiors",
    type: "Build + interiors",
    scope: "Construction and furnishing of a 5-bedroom duplex — delivered turnkey.",
    services: ["Construction", "Interiors & Furnishing"],
    image: "/images/projects/carlton-gate.jpg",
    imageAlt: "Furnished living room with large windows",
    featured: true,
  },
  {
    slug: "vgc-boat-jetty-renovation",
    number: "09",
    title: "VGC Boat Jetty Renovation",
    location: "VGC Estate, Lekki",
    area: "VGC",
    category: "Renovation",
    type: "Renovation",
    scope: "Renovation of a four-bedroom duplex with an adjoining boat jetty.",
    services: ["Renovation", "Concrete Stamp Design"],
    image: "/images/projects/vgc.jpg",
    imageAlt: "Pool deck with loungers beside the water",
    featured: true,
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Apartments",
  "Interiors",
  "Renovation",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
