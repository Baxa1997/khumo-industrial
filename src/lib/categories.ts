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

export const trustPoints = ["15+ years expertise", "Local service & support", "Built for demanding environments"];

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
    text: "Continuous and thermal inkjet, large-character printers, laser coders and print-and-apply labelers — Khumo Industrial supplies coding solutions and inks for every substrate and line speed.",
    band: {
      badge: "Inkjet, laser & labeling",
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
          slug: "inkjet-coders",
          name: "Inkjet Coders",
          description: "Continuous and thermal inkjet printers for dates, batches and barcodes on almost any surface.",
          bestFor: ["Primary packaging", "High line speeds", "Food, beverage, pharma"],
          benefits: ["Versatile", "High resolution"],
        },
        {
          slug: "laser-coders",
          name: "Laser Coders",
          description: "Permanent, high-quality marking without inks or solvents.",
          bestFor: ["Permanent codes", "Glass, PET, coated materials"],
          benefits: ["No consumables", "Low maintenance"],
        },
        {
          slug: "print-apply",
          name: "Print & Apply Labelers",
          description: "Automatic labeling of cartons and pallets for logistics compliance.",
          bestFor: ["Secondary packaging", "Pallet labels", "Logistics"],
          benefits: ["Scannable barcodes", "Fully automatic"],
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
      title: "The Khumo Difference: Connected Coders",
      text: "Our coders connect to your line and ERP, so codes, batches and dates are always correct — with inks matched to your substrates.",
      points: ["ERP integration", "Crisp, durable codes", "Inks for every surface", "Low maintenance", "High uptime", "Full traceability"],
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

export const getRangeItem = (category: string, item: string) =>
  categoryDetails[category]?.range.items.find((i) => i.slug === item);

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
