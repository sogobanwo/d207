export const site = {
  name: "D207",
  legalName: "D207 Construction Limited",
  tagline: "Refined homes, precisely built.",
  description:
    "D207 Construction Limited — luxury residential construction, smart home technology, interiors and concrete stamp design in Lekki, Lagos. Building since 2006.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://d207.com.ng",
  rc: "RC 927511",
  established: 2006,
  phone: "+234 803 704 9853",
  phoneHref: "tel:+2348037049853",
  email: "info@d207construction.com.ng",
  address: {
    line1: "2 Cornelius Odinjor Close, Chevy View Estate",
    line2: "Chevron Drive, Lekki, Lagos",
    mapsUrl: "https://maps.google.com/?q=Chevy+View+Estate+Chevron+Drive+Lekki+Lagos",
  },
};

export const nav = [
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "How we build", href: "/#process" },
  { label: "Contact", href: "/contact" },
];
