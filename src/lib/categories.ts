/**
 * Detailed content for the category landing pages (/category/[slug]).
 * Images are optional: drop files in /public/images and set the paths.
 */

export type RangeItem = {
  slug: string;
  name: string;
  description: string;
  bestFor: string[];
  benefits: string[];
  image?: string;
};

export type Challenge = {
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  image?: string;
};

export type Technology = { title: string; text: string; points: string[]; image?: string };
export type IndustryCard = { name: string; text: string; image?: string };

export type CategoryDetail = {
  eyebrow: string;
  headline: string;
  text: string;
  heroImage?: string;
  band: { badge: string; title: string; text: string; image?: string; primary: string; secondary: string };
  range: { title: string; text: string; items: RangeItem[] };
  challenges: Challenge[];
  technology: Technology;
  /** Optional industry cards; falls back to the global industry list. */
  industries?: IndustryCard[];
  /** Optional FAQ list; falls back to the FAQs in data.ts. */
  faqs?: { q: string; a: string }[];
  unsure: string;
};

export const trustPoints = ["Official Cyklop partner", "Local service & support", "Built for demanding environments"];

export const categoryDetails: Record<string, CategoryDetail> = {
  strapping: {
    eyebrow: "Helping businesses stabilize loads, protect products and streamline end-of-line packaging.",
    headline: "Strapping Tools & Systems for Safe, Stable Loads",
    text: "From manual and battery-powered tools to fully automatic strapping machines and pallet strapping systems, Khumo Industrial delivers dependable solutions for PP, PET and steel strap. Increase load stability, cut transport damage and automate your packing process.",
    band: {
      badge: "PP, PET & steel strapping",
      title: "Good strapping does more than keep products together",
      text: "It builds stable, secure loads that are safer to move and less likely to be damaged. From hand tools to fully automated systems, we help you strap faster, use less material and reduce manual work.",
      primary: "Plan Your Complete Packaging Line",
      secondary: "Talk to a Strapping Specialist",
    },
    range: {
      title: "Choose the Right Strapping Equipment",
      text: "Once you know which strap material suits your product, the next step is equipment that matches your volume and level of automation. From portable tools to fully integrated end-of-line systems, we have equipment for every application.",
      items: [
        {
          slug: "manual-battery-tools",
          name: "Manual & Battery Tools",
          description: "Portable tools for low volumes, mobile jobs and flexible packing — from economical manual tensioners to battery tools with ergonomic handling and repeatable tension.",
          bestFor: ["Low volumes", "Mobile applications", "Flexible packaging", "Construction, manufacturing"],
          benefits: ["Portable", "Economical", "Ergonomic", "Consistent tension"],
        },
        {
          slug: "semi-automatic-machines",
          name: "Semi-Automatic Machines",
          description: "Table machines for medium volumes and repetitive packing that take manual handling out of manufacturing and e-commerce operations.",
          bestFor: ["Medium production", "Repetitive packaging", "Manufacturing, e-commerce"],
          benefits: ["Less manual handling", "Fast cycle times"],
        },
        {
          slug: "automatic-machines",
          name: "Automatic Machines",
          description: "Arch and pallet strapping machines for high-speed, continuous production with maximum throughput in high-volume operations such as FMCG and food & beverage.",
          bestFor: ["High-speed packaging", "Continuous production", "FMCG, food & beverage"],
          benefits: ["High throughput", "Improved efficiency"],
        },
      ],
    },
    challenges: [
      {
        title: "Unstable Loads During Transport",
        problem: "Poor load stability leads to damaged goods, rejected deliveries and higher logistics costs. Palletized goods face acceleration, braking, vibration and repeated handling — without proper securing, products shift, cartons get crushed and whole shipments may be returned.",
        solution: "We supply complete PP and PET strapping solutions — from manual tools to fully automatic systems — that secure loads throughout storage, handling and transport. Consistent strap tension and the right material for each application keep products protected all the way to the customer.",
        benefits: ["Better load stability", "Less transport damage", "Safer warehouse handling", "Lower logistics costs", "Happier customers"],
      },
      {
        title: "Growing Volumes & Manual Strapping",
        problem: "As production grows, manual strapping becomes slow, physically demanding and hard to keep consistent.",
        solution: "Whether you move from manual to battery tools or straight to fully automatic systems, we help automate repetitive work while improving ergonomics and throughput.",
        benefits: ["Less manual handling", "Higher productivity", "Better operator safety", "Consistent strap quality", "Lower labour costs"],
      },
      {
        title: "High Material & Consumable Costs",
        problem: "Over-tensioned or oversized strap wastes material, and steel strap can be costly and hazardous to handle.",
        solution: "Precise tension control and switching from steel to high-strength PET where possible reduce strap consumption without compromising load security.",
        benefits: ["Lower strap usage", "Safer handling", "Recyclable materials", "Predictable costs"],
      },
      {
        title: "Downtime on the Packing Line",
        problem: "A strapping machine that stops halts the entire end of line, delaying shipments.",
        solution: "Preventive maintenance, local technicians and spare parts in stock keep your machines running and get them back online fast when something goes wrong.",
        benefits: ["Higher uptime", "Fast response", "Planned maintenance", "Longer machine life"],
      },
    ],
    technology: {
      title: "The Khumo Difference: Proven Strapping Heads",
      text: "Our automatic machines use friction-weld strapping heads that create strong seals without heat or fumes. Fewer wear parts mean less maintenance, longer service life and more uptime on your line.",
      points: ["No fumes during sealing", "Strong strap joints", "Easy maintenance", "Long service life", "Reliable operation", "Lower operating costs"],
    },
    industries: [
      { name: "Food & Beverage", text: "Keep high production speeds while securing stable pallet loads through storage and distribution. Automated strapping reduces manual handling and integrates into high-speed end-of-line operations." },
      { name: "Logistics & Warehousing", text: "Secure palletized loads efficiently, cut transport damage and raise warehouse productivity with strapping systems that support safe handling throughout the supply chain." },
      { name: "Manufacturing", text: "Protect products while supporting growing volumes. Scalable strapping solutions reduce manual work, improve consistency and grow with your production." },
      { name: "Timber Industry", text: "Secure heavy, long and irregular loads that need high strap strength and tension retention, with high-performance PET strap and heavy-duty equipment." },
      { name: "Paper & Corrugated", text: "Protect paper reels, printed materials and corrugated products without crushing them, using consistent tension that integrates into automated lines." },
      { name: "Building Materials", text: "Secure bricks, blocks and heavy building products for safe transport while reducing movement and product damage." },
      { name: "Metals & Steel", text: "Secure extremely heavy loads in harsh environments where maximum holding force is essential, with heavy-duty steel strapping systems." },
      { name: "FMCG", text: "Maintain continuous, high-speed production while every pallet is securely stabilized for distribution, with fully automatic strapping." },
      { name: "E-Commerce & Distribution", text: "Prepare high volumes of shipments quickly while keeping loads stable and reducing transport damage as order volumes grow." },
    ],
    faqs: [
      { q: "What is industrial strapping?", a: "Industrial strapping applies a tensioned band of PP, PET or steel around a product or pallet to bundle items, hold them together and secure them for storage and transport." },
      { q: "How does a strapping machine work?", a: "The machine feeds strap around the product, pulls it back to the set tension, seals the strap ends by friction weld, heat or a seal, and cuts it — automatically or at the push of a button." },
      { q: "How do I choose the right strapping solution?", a: "Consider load weight and stability, daily volume, available space and the level of automation you need. Our specialists assess your application and recommend tools, machines and strap." },
      { q: "Why is load stability important?", a: "Stable loads prevent product damage, rejected deliveries and accidents during handling, which lowers logistics costs and improves customer satisfaction." },
      { q: "What is the difference between PP, PET and steel strapping?", a: "PP is economical for light to medium loads, PET offers high strength and tension retention for heavy loads, and steel provides maximum strength for very heavy, sharp-edged or hot products." },
      { q: "Can PET strapping replace steel strapping?", a: "In many applications, yes. PET is lighter, safer to handle, does not rust and absorbs impacts better, while delivering comparable holding force." },
      { q: "When should I replace manual strapping?", a: "When volumes grow, operators spend significant time strapping, or strap quality varies, a battery tool or semi-automatic machine usually pays back quickly." },
      { q: "How do I reduce manual handling?", a: "Automatic arch and pallet strapping machines integrated with conveyors remove repetitive tasks and improve ergonomics." },
      { q: "How do I reduce transport damage?", a: "Use the right strap material, the right number of straps and consistent tension, combined with stretch wrapping where needed." },
      { q: "Can strapping improve sustainability?", a: "Yes. Optimized tension and strap selection reduce material use, and recycled-content PET strap lowers environmental impact." },
      { q: "Can strapping systems integrate with conveyors and automation?", a: "Yes. Our automatic systems connect to conveyors and line controls for fully automated end-of-line packaging." },
      { q: "Can Khumo Industrial customize strapping systems?", a: "Yes. We configure machines, strapping patterns and integration to match your products, line layout and throughput." },
    ],
    unsure: "A reliable strapping process is about more than applying a strap. We help you build a complete end-of-line solution that improves load stability, increases productivity and protects products throughout storage and transport.",
  },
  "stretch-wrapping": {
    eyebrow: "Helping businesses protect pallets, stabilize loads and reduce film consumption.",
    headline: "Stretch Wrapping Machines for Secure, Weather-Proof Pallets",
    text: "From turntable wrappers to rotary-arm, ring and robot systems, Khumo Industrial supplies stretch wrapping solutions that keep loads stable, protect products from dust and moisture and use the minimum amount of film.",
    band: {
      badge: "Turntable, arm & ring wrapping",
      title: "The right wrap keeps every pallet intact",
      text: "Correct containment force means loads arrive exactly as they left. Our wrappers pre-stretch film for maximum yield, so you protect more pallets with less material.",
      primary: "Plan Your Complete Packaging Line",
      secondary: "Talk to a Wrapping Specialist",
    },
    range: {
      title: "Choose the Right Stretch Wrapper",
      text: "Pallet size, weight, stability and throughput determine the best wrapping technology. From entry-level turntables to fully automatic ring wrappers, we match the machine to your load.",
      items: [
        {
          slug: "turntable-wrappers",
          name: "Turntable Wrappers",
          description: "The load rotates on a turntable while the film carriage travels up and down — a versatile, cost-effective solution for most stable pallets.",
          bestFor: ["Low to medium volumes", "Stable loads", "Warehouses, distribution"],
          benefits: ["Cost-effective", "Easy to operate", "Small footprint"],
        },
        {
          slug: "rotary-arm-wrappers",
          name: "Rotary-Arm Wrappers",
          description: "The pallet stays still while the arm rotates around it — ideal for heavy, tall or unstable loads that should not be spun.",
          bestFor: ["Heavy or unstable loads", "Medium to high volumes", "Food, beverage, building materials"],
          benefits: ["Load stays stationary", "Inline integration"],
        },
        {
          slug: "ring-wrappers",
          name: "Ring Wrappers",
          description: "The fastest wrapping technology: the film carriage runs on a ring for very high throughput and excellent film optimization.",
          bestFor: ["High-speed production", "Continuous lines", "FMCG, beverages"],
          benefits: ["Maximum throughput", "Lowest film cost per pallet"],
        },
      ],
    },
    challenges: [
      {
        title: "Loads Shifting in Transit",
        problem: "Insufficient containment force lets cartons slide and pallets lean, causing damage and rejected deliveries.",
        solution: "Programmable wrap recipes apply the right containment force for every load, so pallets stay square from warehouse to customer.",
        benefits: ["Stable pallets", "Fewer claims", "Consistent wrap quality", "Safer handling"],
      },
      {
        title: "Rising Film Costs",
        problem: "Hand wrapping and older machines use far more film than necessary.",
        solution: "Powered pre-stretch elongates film by up to 300%, dramatically reducing consumption and plastic waste per pallet.",
        benefits: ["Less film per pallet", "Lower CO₂ footprint", "Lower costs", "Fewer roll changes"],
      },
    ],
    technology: {
      title: "The Khumo Difference: Powered Pre-Stretch",
      text: "Our wrappers stretch film before it reaches the load, delivering consistent containment force with far less material and fewer roll changes.",
      points: ["Up to 300% pre-stretch", "Consistent containment force", "Fewer roll changes", "Programmable recipes", "Lower film costs", "Reduced plastic waste"],
    },
    unsure: "Stable pallets depend on the right machine, film and wrap pattern. We help you find the combination that protects your loads at the lowest cost per pallet.",
  },
  "case-sealing": {
    eyebrow: "Helping businesses close every carton securely, consistently and efficiently.",
    headline: "Case Sealing & Taping Machines for Reliable Carton Closure",
    text: "From handheld tape dispensers to case erectors and fully automatic random sealers, Khumo Industrial helps you seal cartons faster, protect contents and lower packaging costs.",
    band: {
      badge: "Erecting, taping & sealing",
      title: "A well-sealed carton protects everything inside",
      text: "Uniform tape application prevents cartons from opening in transit and presents your brand professionally on arrival.",
      primary: "Plan Your Complete Packaging Line",
      secondary: "Talk to a Sealing Specialist",
    },
    range: {
      title: "Choose the Right Case Sealing Equipment",
      text: "Carton sizes, line speed and labour availability determine the right level of automation.",
      items: [
        {
          slug: "tape-dispensers",
          name: "Tape Dispensers",
          description: "Manual and electronic dispensers for packing benches and low-volume shipping.",
          bestFor: ["Low volumes", "Packing benches", "E-commerce"],
          benefits: ["Economical", "Flexible"],
        },
        {
          slug: "semi-automatic-sealers",
          name: "Semi-Automatic Sealers",
          description: "Top and bottom sealing with manual flap folding for medium volumes.",
          bestFor: ["Medium volumes", "Mixed carton sizes"],
          benefits: ["Consistent seals", "Faster packing"],
        },
        {
          slug: "automatic-sealers",
          name: "Automatic Sealers & Erectors",
          description: "Fully automatic forming, flap folding and sealing for high-volume lines.",
          bestFor: ["High volumes", "Continuous production", "FMCG"],
          benefits: ["High throughput", "Less labour"],
        },
      ],
    },
    challenges: [
      {
        title: "Cartons Opening in Transit",
        problem: "Uneven or short tape lengths let flaps lift, exposing products to damage and theft.",
        solution: "Automatic sealers apply consistent tape length and pressure on every carton, top and bottom.",
        benefits: ["Secure closure", "Fewer returns", "Professional appearance"],
      },
      {
        title: "Manual Taping Bottlenecks",
        problem: "Hand taping limits output and causes repetitive strain for operators.",
        solution: "Semi-automatic and automatic sealers multiply throughput while improving ergonomics.",
        benefits: ["Higher output", "Better ergonomics", "Lower labour costs"],
      },
    ],
    technology: {
      title: "The Khumo Difference: Precise Tape Heads",
      text: "Robust tape heads apply consistent tape length and pressure on every carton, with fast, tool-free changeovers.",
      points: ["Consistent seals", "Tool-free changeover", "Low maintenance", "Works with many tape types", "Safe operation", "Lower tape waste"],
    },
    unsure: "Secure cartons start with the right sealing equipment and tape. We help you build a case sealing process that is fast, consistent and cost-effective.",
  },
  "coding-marking": {
    eyebrow: "Helping businesses mark products clearly for traceability and compliance.",
    headline: "Coding & Marking Systems for Clear, Traceable Products",
    heroImage: "/images/products/laser-marking.webp",
    text: "Continuous inkjet (CIJ), thermal inkjet (TIJ) and laser marking systems from Cyklop — supplied, installed and serviced in Uzbekistan by Khumo Industrial, with inks for every substrate and line speed.",
    band: {
      badge: "CIJ, TIJ & laser marking",
      title: "Every product deserves a clear identity",
      text: "Accurate dates, batch numbers and barcodes protect your brand, satisfy regulations and keep your supply chain traceable.",
      primary: "Plan Your Complete Packaging Line",
      secondary: "Talk to a Coding Specialist",
    },
    range: {
      title: "Choose the Right Coding Technology",
      text: "Substrate, code content and line speed determine the best technology for your application.",
      items: [
        {
          slug: "continuous-inkjet",
          name: "Continuous Inkjet (CIJ)",
          description: "CIJ printers are the preferred choice for high-speed manufacturing where reliability and flexibility are critical. They print on a wide range of materials and are especially effective on continuous production lines.",
          bestFor: ["High-speed production lines", "Curved or uneven surfaces", "Food, beverage, cables and pipes", "Glass, plastic and metal"],
          benefits: ["Prints on almost any material", "Fast-drying inks", "Non-contact printing", "High uptime"],
          image: "/images/products/cij-printer.webp",
        },
        {
          slug: "thermal-inkjet",
          name: "Thermal Inkjet (TIJ)",
          description: "TIJ technology delivers high-resolution printing with minimal maintenance — ideal for businesses that need crisp text, barcodes and QR codes.",
          bestFor: ["Cartons, labels and paper", "Barcodes and QR codes", "Pharma serialization", "Medium line speeds"],
          benefits: ["High-resolution codes", "Clean cartridge system", "Minimal maintenance", "Easy to operate"],
          image: "/images/products/tij-printer.webp",
        },
        {
          slug: "laser-marking-systems",
          name: "Laser Marking Systems",
          description: "Laser marking provides permanent, consumable-free coding directly onto products and packaging. It is often chosen by manufacturers looking to reduce operating costs while improving traceability and code durability.",
          bestFor: ["Permanent product identification", "High-volume manufacturing", "Automotive and electronics industries", "Food, beverage and pharmaceutical applications"],
          benefits: ["Permanent, tamper-resistant marking", "No ink or solvent costs", "Minimal maintenance", "Excellent long-term operating efficiency"],
          image: "/images/products/laser-marking.webp",
        },
      ],
    },
    challenges: [
      {
        title: "Traceability Requirements",
        problem: "Retailers and regulators demand accurate batch, date and serial information on every unit.",
        solution: "Connected coders receive data directly from your ERP, eliminating manual entry errors.",
        benefits: ["Full traceability", "Fewer errors", "Regulatory compliance"],
      },
      {
        title: "Unreadable Codes",
        problem: "Smudged or faint codes lead to rejected deliveries and costly rework.",
        solution: "The right ink and technology for each substrate produce crisp, durable codes every time.",
        benefits: ["Readable codes", "Less rework", "Brand protection"],
      },
    ],
    technology: {
      title: "Cyklop CO2 Laser Marking System",
      image: "/images/products/co2-laser-poster.webp",
      text: "Permanent, high-contrast codes on cartons, plastics, glass and coated materials — without ink, solvents or cartridges. Our coders connect to your line and ERP so codes, batches and dates are always correct.",
      points: ["No inks or solvents", "Permanent codes", "ERP integration", "Low maintenance", "High uptime", "Full traceability"],
    },
    unsure: "Clear, compliant codes depend on the right technology and ink. We help you choose a coding solution that fits your products and line speed.",
  },
  "binding-bundling": {
    eyebrow: "Helping businesses bundle products gently, efficiently and sustainably.",
    headline: "Banding & Binding Machines for Gentle, Secure Bundles",
    text: "Paper and film banding, twine binding and shrink bundling — Khumo Industrial helps you combine products into neat units with minimal material.",
    band: {
      badge: "Paper, film & twine",
      title: "Bundling that protects products and presentation",
      text: "Gentle banding holds products together without crushing them, and printed bands add branding and information.",
      primary: "Plan Your Complete Packaging Line",
      secondary: "Talk to a Bundling Specialist",
    },
    range: {
      title: "Choose the Right Bundling Equipment",
      text: "Product sensitivity, volume and material preference determine the best bundling method.",
      items: [
        {
          slug: "banding-machines",
          name: "Banding Machines",
          description: "Table-top and automatic banding with paper or film bands.",
          bestFor: ["Printed matter", "Food", "Textiles"],
          benefits: ["Gentle", "Low material use"],
        },
        {
          slug: "twine-binding",
          name: "Twine Binding",
          description: "Binding of stacks and bundles with elastic yarn.",
          bestFor: ["Newspapers", "Stacks", "Bundles"],
          benefits: ["Fast", "Secure"],
        },
        {
          slug: "shrink-bundlers",
          name: "Shrink Bundlers",
          description: "Sleeve wrapping and shrink tunnels for multipacks.",
          bestFor: ["Multipacks", "Beverages", "FMCG"],
          benefits: ["Tight bundles", "Retail-ready"],
        },
      ],
    },
    challenges: [
      {
        title: "Damaged Sensitive Products",
        problem: "Strap or string can crush or mark delicate products.",
        solution: "Banding applies controlled, gentle tension with wide bands that spread the pressure.",
        benefits: ["No product damage", "Better presentation"],
      },
      {
        title: "Too Much Plastic",
        problem: "Shrink film and plastic bags create unnecessary waste.",
        solution: "Paper bands are recyclable with cardboard and use a fraction of the material.",
        benefits: ["Recyclable", "Less material", "Lower costs"],
      },
    ],
    technology: {
      title: "The Khumo Difference: Gentle Banding",
      text: "Controlled tension and wide bands hold products together without crushing or marking, using paper or film.",
      points: ["Gentle tension control", "Paper or film bands", "Print-on-band options", "Compact footprint", "Fast cycle times", "Less material"],
    },
    unsure: "The best bundling method depends on your products and volumes. We help you find a solution that protects products and presentation.",
  },
  consumables: {
    eyebrow: "Helping businesses run their packaging lines with reliable materials.",
    headline: "Packaging Consumables Engineered for Your Machines",
    text: "PP and PET strap, steel strap and seals, stretch film, tape, inks and ribbons — matched to your equipment for maximum performance and minimum downtime.",
    band: {
      badge: "Strap, film, tape & inks",
      title: "The right material makes the machine perform",
      text: "Consumables matched to machine specifications reduce jams, waste and downtime — and we deliver on schedule.",
      primary: "Set Up Scheduled Deliveries",
      secondary: "Talk to a Consumables Specialist",
    },
    range: {
      title: "Choose the Right Consumables",
      text: "We stock materials for every application and can recommend the optimal grade for your machines.",
      items: [
        {
          slug: "strap",
          name: "Strap & Seals",
          description: "PP, PET and steel strap in a wide range of widths and break strengths.",
          bestFor: ["Tools & machines", "All load weights"],
          benefits: ["Consistent quality", "Recycled options"],
        },
        {
          slug: "stretch-film",
          name: "Stretch Film",
          description: "Machine and hand film, including high-performance pre-stretched film.",
          bestFor: ["Pallet wrapping", "Machine & hand use"],
          benefits: ["High yield", "Puncture resistant"],
        },
        {
          slug: "tape-inks",
          name: "Tape, Inks & Ribbons",
          description: "Packaging tape, coding inks, solvents and thermal transfer ribbons.",
          bestFor: ["Case sealing", "Coding & marking"],
          benefits: ["Reliable adhesion", "Crisp codes"],
        },
      ],
    },
    challenges: [
      {
        title: "Machine Jams & Downtime",
        problem: "Low-quality consumables cause misfeeds, breaks and stoppages.",
        solution: "Materials matched to your equipment run smoothly and consistently.",
        benefits: ["Fewer stoppages", "Less waste"],
      },
      {
        title: "Running Out of Stock",
        problem: "Unplanned shortages halt production.",
        solution: "Scheduled deliveries and safety stock keep materials on hand when you need them.",
        benefits: ["Reliable supply", "Predictable costs"],
      },
    ],
    technology: {
      title: "The Khumo Difference: Matched Materials",
      text: "We test our strap, film, tape and inks on the machines they run on, so you get consistent performance and less downtime.",
      points: ["Machine-matched grades", "Consistent quality", "Recycled options", "Scheduled deliveries", "Technical advice", "Predictable costs"],
    },
    unsure: "The right consumables make every machine perform better. Tell us what you run and we will recommend the optimal materials.",
  },
};

export const getRangeItem = (category: string, item: string) => allItems(category).find((i) => i.slug === item);

/** Short taglines for the "complete your packaging line" cards. */
export const lineTaglines: Record<string, string> = {
  strapping: "Secure loads for safe handling",
  "stretch-wrapping": "Additional load stability for transport",
  "case-sealing": "Close every carton securely",
  "coding-marking": "Add traceability before shipment",
  "binding-bundling": "Bundle products gently",
  consumables: "Materials matched to your machines",
};

/** Which two other categories to suggest on each category page. */
export const linePairs: Record<string, [string, string]> = {
  strapping: ["stretch-wrapping", "coding-marking"],
  "stretch-wrapping": ["strapping", "coding-marking"],
  "case-sealing": ["coding-marking", "strapping"],
  "coding-marking": ["case-sealing", "stretch-wrapping"],
  "binding-bundling": ["coding-marking", "consumables"],
  consumables: ["strapping", "stretch-wrapping"],
};

/* ---------- Extra product pages (menu entries without a range card) ---------- */

const sub = (slug: string, name: string, description: string, bestFor: string[], benefits: string[]): RangeItem => ({
  slug,
  name,
  description,
  bestFor,
  benefits,
});

export const subpages: Record<string, RangeItem[]> = {
  "stretch-wrapping": [
    sub("manual-wrapping", "Manual Wrapping", "Hand film dispensers and pre-stretched hand film for occasional pallet wrapping without a machine.", ["Low volumes", "Changing locations", "Small warehouses"], ["No investment in machinery", "Ergonomic dispensers", "Less film with pre-stretched rolls"]),
    sub("robot-wrapper", "Robot Wrapper", "Self-propelled wrapping robots that travel around the load — ideal for oversize pallets and flexible locations.", ["Oversize or heavy loads", "Multiple wrapping locations", "Construction, metals"], ["Mobile", "No fixed installation", "Wraps any load size"]),
    sub("horizontal-wrapper", "Horizontal Wrapper", "Orbital wrappers that spiral film around long products such as profiles, pipes, doors and timber.", ["Long products", "Profiles and pipes", "Timber and panels"], ["Full protection", "Consistent wrap", "Inline integration"]),
  ],
  strapping: [
    sub("strapping-machines", "Strapping Machines", "Semi-automatic and fully automatic strapping machines for cartons, bundles and pallets, from table machines to inline arch and pallet systems.", ["Medium to high volumes", "Repetitive packaging", "Inline production"], ["Consistent tension", "Higher throughput", "Less manual work"]),
    sub("accessories", "Accessories", "Strap dispensers, seals, buckles, edge protectors and cutters that complete your strapping workstation.", ["All strapping applications", "Manual and battery tools"], ["Safer handling", "Better load protection", "Organized workstations"]),
  ],
  "case-sealing": [
    sub("tape-hand-tool", "Tape Hand Tool", "Robust handheld tape guns for fast, consistent carton sealing at any packing bench.", ["Low volumes", "Packing benches", "E-commerce"], ["Economical", "Lightweight", "Quick tape changes"]),
    sub("carton-erecting-machines", "Carton Erecting Machines", "Automatic case erectors that form and bottom-seal cartons ready for filling.", ["High volumes", "Automated lines", "FMCG, e-commerce"], ["Square, stable cartons", "Less manual work", "High throughput"]),
  ],
  "binding-bundling": [
    sub("binders", "Binders", "Binding machines that bundle stacks of printed products, cards or flat goods quickly and securely.", ["Printed matter", "Stacks and bundles", "Post and logistics"], ["Fast", "Secure bundles", "Compact"]),
    sub("elastic-binders", "Elastic Binders", "Machines that bind products with elastic loops for gentle, re-usable bundling.", ["Vegetables and flowers", "Sensitive products", "Retail bundles"], ["Gentle on products", "Re-usable elastic", "Low material use"]),
  ],
  consumables: [
    sub("tape", "Tape", "Acrylic, hot-melt, paper and printed packaging tapes for manual and machine sealing.", ["Case sealing", "Printed branding", "Cold or humid storage"], ["Reliable adhesion", "Machine-tested", "Recyclable paper options"]),
    sub("elastic", "Elastic", "Elastic loops and yarn for elastic binding machines.", ["Elastic binders", "Food and horticulture"], ["Consistent quality", "Food-safe options"]),
    sub("ink", "Ink", "Inks, make-up fluids and cartridges for inkjet coders.", ["CIJ and TIJ printers", "All substrates"], ["Crisp codes", "Fast drying", "Matched to printers"]),
    sub("pp-strapping", "PP Strapping", "Polypropylene strap for light to medium-weight cartons and consumer goods — economical and flexible.", ["Warehousing, retail, food", "E-commerce, consumer goods"], ["Cost-effective", "Flexible", "Recyclable"]),
    sub("pet-strapping", "PET Strapping", "High-strength polyester strap with excellent tension retention — a safe alternative to steel for heavy loads.", ["Timber, bricks, beverages", "Logistics, industrial manufacturing"], ["High tension retention", "Replaces steel", "Weather resistant"]),
    sub("steel-strapping", "Steel Strapping", "High-tensile steel strap and seals for the heaviest, rigid and sharp-edged loads.", ["Steel and metals", "Heavy industry, construction"], ["Maximum holding force", "Minimal stretch", "Heat resistant"]),
  ],
};

/** Products mega-menu: label + page slug (range item or subpage). Order matches the menu. */
export const productMenu: { category: string; overview: boolean; links: { label: string; item: string }[] }[] = [
  { category: "stretch-wrapping", overview: true, links: [
    { label: "Manual Wrapping", item: "manual-wrapping" },
    { label: "Turntable Wrapper", item: "turntable-wrappers" },
    { label: "Arm Wrapper", item: "rotary-arm-wrappers" },
    { label: "Robot Wrapper", item: "robot-wrapper" },
    { label: "Horizontal Wrapper", item: "horizontal-wrapper" },
    { label: "Ring Wrapper", item: "ring-wrappers" },
  ] },
  { category: "strapping", overview: true, links: [
    { label: "Strapping Machines", item: "strapping-machines" },
    { label: "Strapping Tools", item: "manual-battery-tools" },
    { label: "Accessories", item: "accessories" },
  ] },
  { category: "coding-marking", overview: true, links: [
    { label: "Continuous Inkjet Printers", item: "continuous-inkjet" },
    { label: "Thermal Inkjet Printers", item: "thermal-inkjet" },
    { label: "Laser Marking Systems", item: "laser-marking-systems" },
  ] },
  { category: "case-sealing", overview: true, links: [
    { label: "Tape Hand Tool", item: "tape-hand-tool" },
    { label: "Tape Dispensers", item: "tape-dispensers" },
    { label: "Semi-Automatic Tape Machines", item: "semi-automatic-sealers" },
    { label: "Fully-Automatic Tape Machines", item: "automatic-sealers" },
    { label: "Carton Erecting Machines", item: "carton-erecting-machines" },
  ] },
  { category: "binding-bundling", overview: true, links: [
    { label: "Binders", item: "binders" },
    { label: "Elastic Binders", item: "elastic-binders" },
  ] },
  { category: "consumables", overview: false, links: [
    { label: "Stretch Film", item: "stretch-film" },
    { label: "Strapping Material", item: "strap" },
    { label: "Tape", item: "tape" },
    { label: "Elastic", item: "elastic" },
    { label: "Ink", item: "ink" },
  ] },
];

export const allItems = (category: string) => [...(categoryDetails[category]?.range.items ?? []), ...(subpages[category] ?? [])];

/* ---------- Buying guide ---------- */

export type Guide = {
  title: string;
  text: string;
  options: { title: string; bestFor: string; points: string[]; cta: string; href: string }[];
  unsureCta: string;
};

export const guides: Record<string, Guide> = {
  strapping: {
    title: "Still Not Sure Which Strapping Material Is Right?",
    text: "Our specialists recommend the right strap based on your products, production environment and load requirements.",
    options: [
      {
        title: "Choose PP if…",
        bestFor: "Warehousing, retail, food, e-commerce and consumer goods.",
        points: ["You secure light to medium-weight cartons or consumer goods.", "Cost-effectiveness is your priority.", "You need a flexible solution for everyday packaging.", "You want a recyclable material for general applications."],
        cta: "Explore PP Strapping",
        href: "/category/consumables/pp-strapping",
      },
      {
        title: "Choose PET if…",
        bestFor: "Timber, bricks, beverages, logistics and industrial manufacturing.",
        points: ["You need to secure heavy palletized loads.", "You want to replace steel strapping.", "High tension retention matters during transport.", "Products are stored outdoors or face changing temperatures."],
        cta: "Explore PET Strapping",
        href: "/category/consumables/pet-strapping",
      },
      {
        title: "Choose Steel if…",
        bestFor: "Steel, metals, heavy industry and construction.",
        points: ["You secure extremely heavy or rigid loads.", "Maximum holding force is critical.", "You work with steel coils, metals or construction materials.", "Your application demands the highest strength."],
        cta: "Explore Steel Strapping",
        href: "/category/consumables/steel-strapping",
      },
    ],
    unsureCta: "Talk to a Strapping Specialist",
  },
};
