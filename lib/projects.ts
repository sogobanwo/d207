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
  /** Extra images shown on the project page. The first can span full width with `wide`. */
  gallery?: { src: string; alt: string; wide?: boolean }[];
  featured?: boolean;
  /** Fields still to be confirmed with D207. */
  year?: string;
  status?: string;
};

export const projects: Project[] = [
  // Drive renders. TODO(D207): confirm location, status and year for these three.
  {
    slug: "phoenix-apartments",
    number: "01",
    title: "Phoenix Apartments",
    location: "[Location — confirm], Lagos",
    area: "Lagos",
    category: "Apartments",
    type: "Apartments",
    scope: "Multi-storey residential apartments with covered parking, a gym and pool deck, and fitted interiors.",
    services: ["Construction", "Interiors & Furnishing", "Smart Home Technology"],
    image: "/images/projects/phoenix.jpg",
    imageAlt: "Render of Phoenix Apartments at sunset",
    gallery: [
      { src: "/images/projects/phoenix/2.jpg", alt: "Render of the apartment block from the street", wide: true },
      { src: "/images/projects/phoenix/1.jpg", alt: "Render of the Phoenix Apartments entrance lit at night" },
      { src: "/images/projects/phoenix/3.jpg", alt: "Render of the Phoenix Apartments entrance by day" },
      { src: "/images/projects/phoenix/4.jpg", alt: "Aerial render of the block and its driveway", wide: true },
      { src: "/images/projects/phoenix/5.jpg", alt: "Render of the covered car park with landscaped planters" },
      { src: "/images/projects/phoenix/6.jpg", alt: "Render of the gym entrance and pool deck at night" },
      { src: "/images/projects/phoenix/7.jpg", alt: "Render of a fitted kitchen with under-cabinet lighting" },
      { src: "/images/projects/phoenix/8.jpg", alt: "Render of a bedroom with a timber feature wall" },
      { src: "/images/projects/phoenix/9.jpg", alt: "Render of a bedroom with a mirrored wardrobe" },
      { src: "/images/projects/phoenix/10.jpg", alt: "Render of the block from the corner of the site" },
    ],
    featured: true,
  },
  {
    slug: "contemporary-residence-interiors",
    number: "02",
    title: "Contemporary Residence Interiors",
    location: "[Location — confirm], Lagos",
    area: "Lagos",
    category: "Interiors",
    type: "Interiors",
    scope: "Interior design and finishing of the main lounge, bedrooms and three bathrooms of a private residence.",
    services: ["Interiors & Furnishing"],
    image: "/images/projects/residence-interiors.jpg",
    imageAlt: "Render of a lounge with terracotta seating and a botanical feature wall",
    gallery: [
      { src: "/images/projects/residence-interiors/1.jpg", alt: "Render of the main lounge with linear ceiling lights", wide: true },
      { src: "/images/projects/residence-interiors/2.jpg", alt: "Render of the lounge seating and marble TV wall" },
      { src: "/images/projects/residence-interiors/3.jpg", alt: "Render of the lounge opening onto the dining area" },
      { src: "/images/projects/residence-interiors/4.jpg", alt: "Render of a bedroom with an upholstered headboard wall" },
      { src: "/images/projects/residence-interiors/5.jpg", alt: "Render of the bedroom with a bench at the foot of the bed" },
      { src: "/images/projects/residence-interiors/6.jpg", alt: "Render of a marble bathroom with a backlit mirror" },
      { src: "/images/projects/residence-interiors/7.jpg", alt: "Render of a bathroom with timber shelving and a round mirror" },
      { src: "/images/projects/residence-interiors/8.jpg", alt: "Render of a bathroom with a stone basin and pendant lights" },
      { src: "/images/projects/residence-interiors/9.jpg", alt: "Render of a walk-in shower with timber cladding" },
    ],
    featured: true,
  },
  {
    slug: "signature-lounge-interiors",
    number: "03",
    title: "Signature Lounge Interiors",
    location: "[Location — confirm], Lagos",
    area: "Lagos",
    category: "Interiors",
    type: "Interiors",
    scope: "Interior design of a formal lounge, reception and bedroom suite.",
    services: ["Interiors & Furnishing"],
    image: "/images/projects/lounge-interiors.jpg",
    imageAlt: "Render of a cream lounge with green armchairs and a sculptural gold ceiling light",
    gallery: [
      { src: "/images/projects/lounge-interiors/1.jpg", alt: "Render of the lounge facing the marble TV wall", wide: true },
      { src: "/images/projects/lounge-interiors/2.jpg", alt: "Render of the lounge seating from above" },
      { src: "/images/projects/lounge-interiors/3.jpg", alt: "Render of a reception desk with a timber slat wall" },
      { src: "/images/projects/lounge-interiors/4.jpg", alt: "Render of the reception waiting area" },
      { src: "/images/projects/lounge-interiors/5.jpg", alt: "Render of a dark bedroom with a ring pendant light" },
      { src: "/images/projects/lounge-interiors/6.jpg", alt: "Render of the bedroom and lit wardrobe" },
      { src: "/images/projects/lounge-interiors/7.jpg", alt: "Render of the bedroom with a wall-mounted TV" },
    ],
    featured: true,
  },
  {
    slug: "road-26-duplex-residences",
    number: "04",
    title: "Road 26 Duplex Residences",
    location: "Road 26, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    category: "Residential",
    type: "Residential",
    scope: "Construction of two units of 5-bedroom duplexes.",
    services: ["Construction"],
    image: "/images/projects/road-26.jpg",
    imageAlt: "Completed two-storey duplex with red and grey facade",
    gallery: [
      { src: "/images/projects/road-26/1.jpg", alt: "Finished bungalow with a vehicle in the forecourt" },
      { src: "/images/projects/road-26/2.jpg", alt: "Two-storey house under scaffolding" },
    ],
    featured: true,
  },
  {
    slug: "christchurch-avenue-duplexes",
    number: "05",
    title: "Christchurch Avenue Duplexes",
    location: "Christchurch Avenue, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    category: "Residential",
    type: "Residential",
    scope: "Construction of two units of 5-bedroom duplexes.",
    services: ["Construction"],
    image: "/images/projects/christchurch.jpg",
    imageAlt: "Duplex under construction with timber scaffolding",
    gallery: [
      { src: "/images/projects/christchurch/1.jpg", alt: "Duplex frame rising behind stacked scaffolding poles" },
      { src: "/images/projects/christchurch/2.jpg", alt: "Blockwork walls with formwork for the roof beam" },
    ],
  },
  {
    slug: "lekki-terrace-apartments",
    number: "06",
    title: "Lekki Terrace Apartments",
    location: "Lekki, Lagos",
    area: "Lekki",
    category: "Apartments",
    type: "Apartments",
    scope: "Construction of a block of terrace residential apartments.",
    services: ["Construction"],
    image: "/images/projects/lekki-terrace.jpg",
    imageAlt: "Terrace apartment blocks at blockwork stage, with aggregate on site",
    gallery: [
      { src: "/images/projects/lekki-terrace/1.jpg", alt: "Site operative setting out blockwork" },
      { src: "/images/projects/lekki-terrace/2.jpg", alt: "Crew building internal block walls" },
    ],
  },
  {
    slug: "ikate-five-bedroom-residence",
    number: "07",
    title: "Ikate Five-Bedroom Residence",
    location: "Ikate, Elegushi, Lekki, Lagos",
    area: "Ikate",
    category: "Residential",
    type: "Residential",
    scope: "Construction of a 5-bedroom duplex.",
    services: ["Construction"],
    image: "/images/projects/ikate.jpg",
    imageAlt: "Two-storey blockwork shell with scaffolding",
    gallery: [
      { src: "/images/projects/ikate/1.jpg", alt: "Corner of a blockwork shell with window openings" },
      { src: "/images/projects/ikate/2.jpg", alt: "Ground-floor blockwork with propped lintels" },
    ],
  },
  {
    slug: "agungi-duplex-development",
    number: "08",
    title: "Agungi Duplex Development",
    location: "Agungi, Lekki, Lagos",
    area: "Agungi",
    category: "Residential",
    type: "Residential",
    scope: "Construction of two units of 5-bedroom duplexes.",
    services: ["Construction"],
    image: "/images/projects/agungi.jpg",
    imageAlt: "Two-storey duplex under scaffolding",
    gallery: [
      { src: "/images/projects/agungi/1.jpg", alt: "Ground-floor slab being formed on site" },
      { src: "/images/projects/agungi/2.jpg", alt: "Crew fixing formwork and reinforcement" },
    ],
  },
  {
    slug: "oniru-mixed-residential-blocks",
    number: "09",
    title: "Oniru Mixed Residential Blocks",
    location: "Oniru Estate, Lekki, Lagos",
    area: "Oniru",
    category: "Apartments",
    type: "Mixed residential",
    scope: "Construction of two blocks of 5-bedroom duplexes and three units of 3-bedroom apartments.",
    services: ["Construction"],
    image: "/images/projects/oniru.jpg",
    imageAlt: "Crew fixing reinforcement on a slab",
    gallery: [
      { src: "/images/projects/oniru/1.jpg", alt: "Workers carrying materials up a timber ramp" },
      { src: "/images/projects/oniru/2.jpg", alt: "Crew on a ramp at first-floor level" },
    ],
  },
  {
    slug: "pw-views-apartment-block",
    number: "10",
    title: "PW Views Apartment Block",
    location: "Lagos",
    area: "Lagos",
    category: "Apartments",
    type: "Subcontract",
    scope: "Construction subcontractor to Bullwark Construction for an eight-storey block of 2- and 3-bedroom apartments.",
    services: ["Construction"],
    image: "/images/projects/pw-views.jpg",
    imageAlt: "Crew on scaffolding along a block wall",
    gallery: [
      { src: "/images/projects/pw-views/1.jpg", alt: "Narrow passage between new block walls" },
      { src: "/images/projects/pw-views/2.jpg", alt: "Single-storey building near completion" },
    ],
  },
  {
    slug: "carlton-gate-estate-residence",
    number: "11",
    title: "Carlton Gate Estate Residence",
    location: "Carlton Gate Estate, Lekki, Lagos",
    area: "Lekki",
    category: "Interiors",
    type: "Build + interiors",
    scope: "Construction and furnishing of a 5-bedroom duplex — delivered turnkey.",
    services: ["Construction", "Interiors & Furnishing"],
    image: "/images/projects/carlton-gate.jpg",
    imageAlt: "Furnished living room with a crystal chandelier",
    gallery: [
      { src: "/images/projects/carlton-gate/1.jpg", alt: "Living room with sofas and a patterned rug" },
      { src: "/images/projects/carlton-gate/2.jpg", alt: "Lounge with leather sofas and an orange feature wall" },
      { src: "/images/projects/carlton-gate/3.jpg", alt: "Dressing area with a chandelier and armchair" },
      { src: "/images/projects/carlton-gate/4.jpg", alt: "Staircase hall with marble floors" },
    ],
    featured: true,
  },
  {
    slug: "vgc-boat-jetty-renovation",
    number: "12",
    title: "VGC Boat Jetty Renovation",
    location: "VGC Estate, Lekki, Lagos",
    area: "VGC",
    category: "Renovation",
    type: "Renovation",
    scope: "Renovation of a four-bedroom duplex with an adjoining boat jetty.",
    services: ["Renovation", "Concrete Stamp Design"],
    image: "/images/projects/vgc.jpg",
    imageAlt: "Concrete boat jetty with steel railings",
    gallery: [
      { src: "/images/projects/vgc/1.jpg", alt: "Jetty extending out over the lagoon" },
      { src: "/images/projects/vgc/2.jpg", alt: "Jetty deck seen from the shoreline" },
    ],
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
