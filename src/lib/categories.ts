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

export type CategoryDetail = {
  eyebrow: string;
  headline: string;
  text: string;
  heroImage?: string;
  band: { badge: string; title: string; text: string; image?: string; primary: string; secondary: string };
  range: { title: string; text: string; items: RangeItem[] };
  challenges: Challenge[];
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
  },
};

export const getRangeItem = (category: string, item: string) =>
  categoryDetails[category]?.range.items.find((i) => i.slug === item);
