// Generates the dotted region map used by the "Here for you" section.
// Run `yarn generate:map` after changing `locations` in src/lib/data.ts.
import { writeFileSync } from "node:fs";
import DottedMap from "dotted-map";

const region = { lat: { min: -12, max: 72 }, lng: { min: -20, max: 150 } };
const pins = [
  { key: "Uzbekistan", lat: 41.3, lng: 69.24 },
];

const map = new DottedMap({ height: 56, grid: "diagonal", region });
const { width, height } = map.image;
writeFileSync(
  "public/images/region-dots.svg",
  map.getSVG({ radius: 0.26, color: "#ffffff66", shape: "circle", backgroundColor: "transparent" }),
);
const positions = Object.fromEntries(
  pins.map((p) => {
    const { x, y } = map.getPin(p);
    return [p.key, { x: +((x / width) * 100).toFixed(2), y: +((y / height) * 100).toFixed(2) }];
  }),
);
writeFileSync("src/lib/map-pins.json", JSON.stringify({ aspect: +(width / height).toFixed(4), pins: positions }, null, 2) + "\n");
console.log("map generated", width, height, positions);
