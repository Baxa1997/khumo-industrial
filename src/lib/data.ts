import type { IconName } from "@/components/Icon";

export const company = {
  name: "Khumo Industrial",
  legalName: "KHUMO INDUSTRIAL ООО",
  short: "Khumo",
  tagline: "Official Cyklop partner in Uzbekistan",
  phone: "+998 88 088 93 20",
  phoneHref: "tel:+998880889320",
  address: "Uzbekistan",
  telegram: { label: "@khumo_industrial", href: "https://t.me/khumo_industrial" },
  instagram: { label: "@khumo_industrial", href: "https://www.instagram.com/khumo_industrial/" },
};

export type Solution = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  intro: string;
  benefits: string[];
  /** Optional product photo, e.g. "/images/products/strapping.png" (transparent PNG works best). */
  image?: string;
  /** Sub-categories / machine types. `image` is optional (e.g. "/images/products/turntable.png"). */
  products: { name: string; description: string; image?: string }[];
  faqs: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "coding-marking",
    name: "Coding & Marking",
    icon: "code",
    image: "/images/products/cij-printer.webp",
    summary:
      "Continuous inkjet (CIJ), thermal inkjet (TIJ) and laser marking systems plus inks for traceability on cartons, films and products.",
    intro:
      "Put clear, durable codes on every product. Our coding and marking portfolio covers continuous and thermal inkjet, large-character printers, laser coders and print-and-apply labeling.",
    benefits: [
      "Full traceability with batch, date and serial codes",
      "Inks for porous and non-porous substrates",
      "Easy integration with ERP and line controllers",
      "Low maintenance, high uptime print heads",
    ],
    faqs: [
      { q: "Which coding technology is right for my product?", a: "Continuous inkjet suits high-speed coding on almost any surface, thermal inkjet delivers crisp high-resolution codes, and laser coders mark permanently without consumables." },
      { q: "Can coders connect to my ERP or MES?", a: "Yes. Our coders support standard communication protocols so codes, batches and dates can be sent automatically from your systems." },
    ],
    products: [
      { name: "Continuous inkjet (CIJ)", description: "High-speed small character coding on almost any surface." },
      { name: "Thermal inkjet (TIJ)", description: "Crisp high-resolution codes, barcodes and logos with cartridge simplicity." },
      { name: "Large character printers", description: "Case coding with text, barcodes and graphics directly on cardboard." },
      { name: "Laser coders", description: "Permanent marking without consumables." },
      { name: "Print & apply labelers", description: "Automatic labeling of cartons and pallets for logistics compliance." },
    ],
  },
  {
    slug: "strapping",
    name: "Strapping",
    icon: "strap",
    summary:
      "From manual and battery-powered tools to fully automatic pallet strapping systems for PP, PET and steel strap.",
    intro:
      "Secure loads of every size and weight. Our strapping range covers handheld tools for occasional use through to inline, fully automatic systems for high-volume production lines.",
    benefits: [
      "Reliable load securing for PP, PET and steel strap",
      "Ergonomic battery tools that reduce operator fatigue",
      "Automatic systems that integrate into existing conveyor lines",
      "Lower strap consumption through precise tension control",
    ],
    faqs: [
      { q: "Which strap material should I use: PP, PET or steel?", a: "PP strap is ideal for light to medium loads, PET is a strong and cost-effective alternative to steel for heavy loads, and steel strap is used for the heaviest, sharp-edged or hot products." },
      { q: "Should I choose a manual tool or an automatic machine?", a: "Battery and manual tools are perfect for lower volumes and changing locations. Once you strap many packages per hour, a semi-automatic or automatic machine quickly pays for itself." },
      { q: "Can a strapping machine be integrated into my conveyor line?", a: "Yes. Our automatic arch and pallet strapping systems are designed for inline integration and can be connected to your existing line controls." },
    ],
    products: [
      { name: "Battery strapping tools", description: "Lightweight cordless tools for PP and PET strap with adjustable tension and friction weld." },
      { name: "Manual strapping tools", description: "Robust tensioners and sealers for steel and plastic strap in any environment." },
      { name: "Semi-automatic machines", description: "Table-top arch-free machines for cartons, bundles and small packages." },
      { name: "Automatic strapping machines", description: "Arch machines with high cycle rates for integration into end-of-line automation." },
      { name: "Pallet strapping systems", description: "Horizontal and vertical pallet strapping for heavy and unstable loads." },
    ],
  },
  {
    slug: "stretch-wrapping",
    name: "Stretch Wrapping",
    icon: "wrap",
    summary:
      "Turntable, rotary-arm and ring wrappers that protect products, improve load stability and optimize film use.",
    intro:
      "Complete stretch-wrapping solutions, from simple turntable machines to fully automated systems. Every machine is configured to deliver stable loads with the minimum amount of film.",
    benefits: [
      "Up to 300% film pre-stretch to cut consumable costs",
      "Consistent containment force for safer transport",
      "Semi-automatic and fully automatic options",
      "Top-sheet dispensers and weather protection available",
    ],
    faqs: [
      { q: "What is the difference between turntable, rotary-arm and ring wrappers?", a: "On a turntable the load rotates while the film stays put. With a rotary-arm or ring wrapper the load stays still and the film rotates around it — ideal for heavy, unstable or high-volume loads." },
      { q: "How much film can pre-stretch save?", a: "Powered pre-stretch can elongate film by up to 300%, which significantly reduces film consumption per pallet compared to hand wrapping." },
      { q: "Can I wrap pallets of different sizes on one machine?", a: "Yes. Photo-eye height detection and programmable wrap recipes let one machine handle a wide range of load sizes." },
    ],
    products: [
      { name: "Turntable wrappers", description: "Entry-level and heavy-duty turntables for mixed pallet sizes." },
      { name: "Rotary-arm wrappers", description: "Wraps heavy or unstable loads without rotating the pallet." },
      { name: "Ring wrappers", description: "High-speed automatic wrapping for continuous production lines." },
      { name: "Mobile robot wrappers", description: "Self-propelled wrapping robot for oversize loads and flexible locations." },
      { name: "Horizontal orbital wrappers", description: "Wrapping of long products such as profiles, pipes and timber." },
    ],
  },
  {
    slug: "case-sealing",
    name: "Case Sealing",
    icon: "box",
    summary:
      "Case erectors, tapers and sealers that protect products, reduce packaging costs and improve end-of-line efficiency.",
    intro:
      "Close every carton consistently and securely. Our case sealing solutions range from handheld tape dispensers to fully automatic erect–fill–seal lines.",
    benefits: [
      "Uniform, secure carton closure",
      "Random and fixed-size sealing options",
      "Fast changeovers with tool-free adjustment",
      "Pressure-sensitive and water-activated tape",
    ],
    faqs: [
      { q: "Do I need a fixed-size or random case sealer?", a: "Fixed-size sealers are ideal when you run one carton size for long periods. Random sealers adjust automatically to every carton and suit mixed production." },
      { q: "Which tape works best for my cartons?", a: "Acrylic tape performs well in cold or humid conditions, hot-melt offers strong instant adhesion, and water-activated paper tape provides tamper evidence and recyclability." },
    ],
    products: [
      { name: "Case erectors", description: "Automatic forming and bottom sealing of regular slotted cartons." },
      { name: "Semi-automatic tapers", description: "Top and bottom sealing with manual flap folding." },
      { name: "Automatic case sealers", description: "Fully automatic flap folding and sealing for fixed and random sizes." },
      { name: "Tape dispensers", description: "Manual and electronic dispensers for every packing bench." },
    ],
  },
  {
    slug: "binding-bundling",
    name: "Binding & Bundling",
    icon: "bundle",
    summary:
      "Banding and binding machines that hold products together gently, using paper, film or elastic materials.",
    intro:
      "Bundle products without damage. Banding and binding machines combine products into units, apply labels and add branding with minimal material.",
    benefits: [
      "Gentle bundling for sensitive products",
      "Paper and film band options for sustainability",
      "Print-on-band for branding and information",
      "Compact footprint for packing benches",
    ],
    faqs: [
      { q: "What can be bundled with banding machines?", a: "Banding works for printed matter, food, textiles, banknotes, pharmaceuticals and many other products that need gentle bundling." },
      { q: "Is paper banding a sustainable option?", a: "Yes. Paper bands are recyclable together with cardboard and use far less material than shrink film." },
    ],
    products: [
      { name: "Banding machines", description: "Table-top and automatic banding with paper or film." },
      { name: "Twine binding machines", description: "Binding of newspapers, stacks and bundles with elastic yarn." },
      { name: "Shrink bundlers", description: "Sleeve wrapping and shrink tunnels for multipacks." },
    ],
  },
  {
    slug: "consumables",
    name: "Consumables",
    icon: "roll",
    summary:
      "Strap, stretch film, tape, seals and inks engineered to run perfectly on our machines.",
    intro:
      "The right consumable is just as important as the right machine. We supply strap, film, tape, seals and inks matched to our equipment for maximum performance.",
    benefits: [
      "Quality matched to machine specifications",
      "Recycled-content and lightweight options",
      "Reliable stock and scheduled deliveries",
      "Technical advice on optimizing consumption",
    ],
    faqs: [
      { q: "Do your consumables run on other brands' machines?", a: "In most cases, yes. Tell us your machine model and we will recommend a compatible strap, film, tape or ink." },
      { q: "Can I set up scheduled deliveries?", a: "Yes. We can agree a delivery schedule or keep safety stock for you so you never run out." },
    ],
    products: [
      { name: "PP & PET strap", description: "Embossed and smooth strap in a wide range of widths and break strengths." },
      { name: "Steel strap & seals", description: "High-tensile steel strap for the heaviest loads." },
      { name: "Stretch film", description: "Machine and hand film, including high-performance pre-stretched film." },
      { name: "Packaging tape", description: "Acrylic, hot-melt and paper tapes for every carton." },
      { name: "Coding inks & ribbons", description: "Inks, solvents and thermal transfer ribbons." },
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  title: string;
  summary: string;
  challenges: string[];
  solutionSlugs: string[];
  /** Optional photo, e.g. "/images/industries/logistics.jpg". */
  image?: string;
};

export const industries: Industry[] = [
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    title: "Streamlined packaging & handling",
    summary: "Keep goods moving with stable pallets, compliant labels and fast end-of-line packing.",
    challenges: ["High throughput with peak volumes", "Mixed pallet sizes and loads", "Label compliance for carriers"],
    solutionSlugs: ["stretch-wrapping", "strapping", "coding-marking"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "brick",
    title: "Durable packaging for heavy loads",
    summary: "Secure bricks, blocks, tiles and building materials for outdoor storage and rough transport.",
    challenges: ["Heavy, abrasive loads", "Outdoor storage and weather", "Load shifting in transit"],
    solutionSlugs: ["strapping", "stretch-wrapping", "consumables"],
  },
  {
    slug: "lumber",
    name: "Lumber",
    icon: "tree",
    title: "Reliable strapping & wrapping methods",
    summary: "Bundle and protect timber, panels and wood products from sawmill to site.",
    challenges: ["Long and irregular bundles", "Moisture and UV protection", "High-tension strapping"],
    solutionSlugs: ["strapping", "stretch-wrapping", "coding-marking"],
  },
  {
    slug: "metal",
    name: "Metal",
    icon: "gear",
    title: "Heavy-duty securing for steel and metals",
    summary: "Coils, bars, profiles and sheets secured with high-tensile strapping systems.",
    challenges: ["Extreme weights and sharp edges", "Corrosion protection", "Automated mill lines"],
    solutionSlugs: ["strapping", "consumables", "coding-marking"],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "bottle",
    title: "Hygienic, traceable packaging",
    summary: "Fast, clean packing lines with date coding and stable pallets for retail distribution.",
    challenges: ["Hygiene requirements", "Best-before and batch coding", "High line speeds"],
    solutionSlugs: ["coding-marking", "case-sealing", "stretch-wrapping"],
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    icon: "pill",
    title: "Compliant packaging systems",
    summary: "Serialization-ready coding and tamper-evident packaging for regulated products.",
    challenges: ["Serialization and track & trace", "Tamper evidence", "Validated processes"],
    solutionSlugs: ["coding-marking", "case-sealing", "binding-bundling"],
  },
  {
    slug: "electronics",
    name: "Electronics",
    icon: "chip",
    title: "Protective packaging for sensitive goods",
    summary: "Protect high-value devices from damage and theft throughout the supply chain.",
    challenges: ["Fragile, high-value products", "Theft protection", "Product identification"],
    solutionSlugs: ["case-sealing", "coding-marking", "stretch-wrapping"],
  },
  {
    slug: "cosmetics",
    name: "Cosmetics",
    icon: "drop",
    title: "Quality packaging for delicate goods",
    summary: "Premium presentation with gentle bundling and crisp coding on every unit.",
    challenges: ["Premium appearance", "Small, delicate items", "Frequent format changes"],
    solutionSlugs: ["binding-bundling", "coding-marking", "case-sealing"],
  },
  {
    slug: "paper-corrugate",
    name: "Paper & Corrugate",
    icon: "layers",
    title: "Tailored packaging solutions",
    summary: "Bundle and unitize corrugated sheets, boxes and paper rolls at the end of the line.",
    challenges: ["High-volume bundling", "Crush-free strapping", "Integration with stackers"],
    solutionSlugs: ["strapping", "binding-bundling", "stretch-wrapping"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: "car",
    title: "Robust packaging for parts & components",
    summary: "Secure parts in returnable and one-way packaging with full traceability.",
    challenges: ["Just-in-time delivery", "Part traceability", "Returnable packaging"],
    solutionSlugs: ["strapping", "coding-marking", "stretch-wrapping"],
  },
];

export const services: { icon: IconName; name: string; description: string }[] = [
  { icon: "chat", name: "Custom advice", description: "Our engineers analyze your packaging process and recommend the solution that fits your goals and budget." },
  { icon: "tool", name: "Installation", description: "Professional installation, commissioning and integration into your existing production line." },
  { icon: "shield", name: "Maintenance", description: "Preventive maintenance contracts that keep machines running at peak performance and maximize uptime." },
  { icon: "headset", name: "Technical support", description: "Fast help by phone, remote diagnostics or on-site service visits whenever you need it." },
  { icon: "book", name: "Training", description: "Operator and maintenance training so your team gets the most from every machine." },
  { icon: "gear", name: "Spare parts", description: "Genuine spare parts kept in stock for quick delivery and minimal downtime." },
];

export const stats = [
  { value: "100+", label: "Years of Cyklop innovation" },
  { value: "3", label: "Coding technologies: CIJ, TIJ & laser" },
  { value: "Local", label: "Supply, setup & service" },
  { value: "Official", label: "Cyklop partner in Uzbekistan" },
];

export const news = [
  {
    slug: "co2-laser-marking",
    date: "2026-09-12",
    category: "Products",
    title: "Cyklop CO2 Laser Marking System Now Available in Uzbekistan",
    excerpt: "Permanent, consumable-free coding for cartons, plastics, glass and more — supplied, installed and serviced locally.",
  },
  {
    slug: "cij-tij-laser",
    date: "2026-07-03",
    category: "Guide",
    title: "CIJ, TIJ or Laser: How to Choose the Right Coding Technology",
    excerpt: "Line speed, substrate and code content decide which technology fits your production best.",
  },
  {
    slug: "traceability",
    date: "2026-05-20",
    category: "Guide",
    title: "Why Clear Date and Batch Codes Matter for Your Products",
    excerpt: "Readable codes protect your brand, satisfy retailers and keep your supply chain traceable.",
  },
  {
    slug: "service-training",
    date: "2026-03-08",
    category: "News",
    title: "Operator Training Included With Every Installation",
    excerpt: "Our engineers set up your coder on site and train your team to run it with confidence.",
  },
];

export const milestones = [
  { year: "1912", text: "Cyklop is founded in Cologne, Germany, and grows into a global packaging solutions provider." },
  { year: "2015", text: "Cyklop introduces coding and marking to its portfolio." },
  { year: "2024", text: "Cyklop acquires Needham, a UK and Ireland based ink and laser coder manufacturer." },
  { year: "Today", text: "Khumo Industrial is the official Cyklop partner in Uzbekistan, supplying, setting up and servicing CIJ, TIJ and laser marking systems." },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

/** Optional photos used across the site. Drop files into /public/images and set the paths here. */
export const images: { hero?: string; history?: string; sustainabilityTall?: string; sustainabilityTool?: string; sustainabilityTeam?: string } = {};

export const hero = {
  lines: ["Strong Packaging.\nStronger Partner."],
  text: "Khumo Industrial is the official Cyklop partner in Uzbekistan — your single source for coding, marking and end-of-line packaging. We supply, set up and service your equipment and stay by your side every step of the way.",
};

export const announcement = {
  partner: "Official Cyklop partner in Uzbekistan",
  text: "Learn about our commitment to",
  link: { href: "/sustainability", label: "sustainability" },
};

export const locations = [
  { name: "Uzbekistan", label: "Uzbekistan", city: "Service across Uzbekistan", phone: "+998 88 088 93 20", lat: 41.3, lng: 69.24 },
];

export const regions = [
  "Tashkent city", "Tashkent region", "Andijan", "Bukhara", "Fergana", "Jizzakh", "Kashkadarya", "Khorezm",
  "Namangan", "Navoi", "Samarkand", "Surkhandarya", "Syrdarya", "Karakalpakstan",
];

/** Replace with real client logos (e.g. "/images/clients/acme.svg"). */
export const clients: { name: string; logo?: string }[] = [
  { name: "Client 1" },
  { name: "Client 2" },
  { name: "Client 3" },
  { name: "Client 4" },
];

/** Sample testimonials — replace with real customer quotes before launch. */
export const testimonials = [
  {
    quote: "Khumo Industrial analysed our end-of-line and recommended an automatic strapping system that doubled our throughput. Their service team responds the same day.",
    name: "Operations Manager",
    company: "Building materials producer",
  },
  {
    quote: "Switching to their pre-stretch wrapper cut our film consumption dramatically, and loads arrive at our customers in perfect condition.",
    name: "Logistics Director",
    company: "Food & beverage distributor",
  },
  {
    quote: "From installation to operator training, everything was handled professionally. Having machines and consumables from one partner makes life easy.",
    name: "Plant Manager",
    company: "Paper & corrugate manufacturer",
  },
];

export const resources = [
  { href: "/news", label: "News & Events", description: "Company updates, product launches and events." },
  { href: "/support", label: "FAQ & Support", description: "Answers to common questions about machines and service." },
  { href: "/sustainability", label: "Sustainability", description: "How we help customers reduce packaging waste." },
  { href: "/company-history", label: "Our History", description: "Cyklop’s story since 1912 and our partnership in Uzbekistan." },
];
