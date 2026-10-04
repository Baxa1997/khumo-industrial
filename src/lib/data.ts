import type { IconName } from "@/components/Icon";

export const company = {
  name: "Khumo Industrial",
  legalName: "KHUMO INDUSTRIAL ООО",
  short: "Khumo",
  tagline: "Official Cyklop partner in Uzbekistan",
  // From the Instagram bio (@khumo_industrial).
  focus: "Product marking solutions",
  technologies: "CIJ / TIJ / Laser marking",
  services: "Supply, setup, service",
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
    slug: "eggs-poultry",
    name: "Eggs & Poultry",
    icon: "egg",
    title: "Clear codes on every egg",
    summary: "Print dates and farm codes directly on eggs and egg trays with food-safe inkjet printers.",
    challenges: ["Curved, fragile surfaces", "Food-safe inks", "High line speeds"],
    solutionSlugs: ["coding-marking", "consumables"],
  },
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
  { value: "3", label: "Marking technologies: CIJ, TIJ & laser" },
  { value: "150", label: "m/min — CIJ printing speed" },
  { value: "Local", label: "Supply, setup & service" },
  { value: "Official", label: "Cyklop partner in Uzbekistan" },
];

/** Highlights from the @khumo_industrial Instagram account. */
export const news = [
  {
    slug: "uk-standard-cij",
    category: "Instagram",
    title: "UK-Standard CIJ Printer: Up to 150 m/min",
    excerpt: "Cyklop CIJ printers mark up to 150 metres per minute, print in any direction and come at an affordable price.",
    href: "https://www.instagram.com/khumo_industrial/",
  },
  {
    slug: "training",
    category: "Instagram",
    title: "Operator Training on Site",
    excerpt: "Our engineers set up your coder and train your team to run it with confidence.",
    href: "https://www.instagram.com/khumo_industrial/",
  },
  {
    slug: "egg-marking",
    category: "Instagram",
    title: "Egg Marking With Inkjet Printers",
    excerpt: "Date and farm codes printed directly on every egg — fast, clean and food-safe.",
    href: "https://www.instagram.com/khumo_industrial/",
  },
  {
    slug: "labeling",
    category: "Instagram",
    title: "Labeling and Printing in Action",
    excerpt: "See how our customers code and label products on their lines in Uzbekistan.",
    href: "https://www.instagram.com/khumo_industrial/",
  },
];

/** "Our story" page — what Khumo Industrial does, in order. */
export const milestones = [
  { year: "Partner", text: "Khumo Industrial is the official Cyklop partner in Uzbekistan for product marking solutions." },
  { year: "CIJ · TIJ · Laser", text: "We supply continuous inkjet, thermal inkjet and laser marking systems, plus inks and consumables." },
  { year: "Setup", text: "Our engineers install and configure every coder on site and train your operators." },
  { year: "Service", text: "Local service, spare parts and support keep your marking running every day." },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

/** Optional photos used across the site. Drop files into /public/images and set the paths here. */
export const images: { hero?: string; history?: string; sustainabilityTall?: string; sustainabilityTool?: string; sustainabilityTeam?: string } = {};

export const hero = {
  lines: ["Product Marking\nSolutions."],
  text: "Khumo Industrial is the official Cyklop partner in Uzbekistan. CIJ, TIJ and laser marking — supply, setup and service for your production.",
};

export const announcement = {
  partner: "Official Cyklop partner in Uzbekistan",
  text: "CIJ / TIJ / Laser marking ·",
  link: { href: "https://t.me/khumo_industrial", label: "Write to us" },
};

export const locations = [
  { name: "Uzbekistan", label: "Uzbekistan", city: "Service across Uzbekistan", phone: "+998 88 088 93 20", lat: 41.3, lng: 69.24 },
];

export const regions = [
  "Tashkent city", "Tashkent region", "Andijan", "Bukhara", "Fergana", "Jizzakh", "Kashkadarya", "Khorezm",
  "Namangan", "Navoi", "Samarkand", "Surkhandarya", "Syrdarya", "Karakalpakstan",
];


export const resources = [
  { href: "/news", label: "News & Events", description: "Highlights from our Instagram: new equipment, installations and training." },
  { href: "/support", label: "FAQ & Support", description: "Answers to common questions about machines and service." },
  { href: "/sustainability", label: "Sustainability", description: "How we help customers reduce packaging waste." },
  { href: "/company-history", label: "Our Story", description: "Who we are and how we support product marking in Uzbekistan." },
];
