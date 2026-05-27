import sofa from "@/assets/product-sofa.jpg";
import dining from "@/assets/product-dining.jpg";
import bed from "@/assets/product-bed.jpg";
import sculpture from "@/assets/product-sculpture.jpg";
import plant from "@/assets/product-plant.jpg";
import candle from "@/assets/product-candle.jpg";
import crockery from "@/assets/product-crockery.jpg";

export const categories = [
  "All",
  "Furniture",
  "Home Decor",
  "Artificial Plants",
  "Crockery",
  "Candles",
  "Sculptures",
  "Decorative Accessories",
  "Dining Decor",
  "Wall Decor",
];

export const products = [
  {
    id: "luna-curved-sofa",
    name: "Luna Curved Sofa",
    collection: "Luxeholic",
    category: "Furniture",
    price: 184000,
    currency: "₹",
    image: sofa,
    material: "Italian bouclé over kiln-dried oak frame",
    dimensions: "L 280 · D 110 · H 78 cm",
    story:
      "A sculptural curve cast in ivory bouclé — Luna is an invitation to slow conversations, late afternoons, and the soft choreography of light.",
  },
  {
    id: "monolith-dining-table",
    name: "Monolith Dining Table",
    collection: "Bespoke Atelier",
    category: "Furniture",
    price: 245000,
    currency: "₹",
    image: dining,
    material: "Solid American walnut, hand-rubbed oil finish",
    dimensions: "L 220 · D 110 · H 75 cm",
    story:
      "Carved from a single block of walnut, Monolith honours the architecture of stillness — a quiet centrepiece around which life gathers.",
  },
  {
    id: "meridian-platform-bed",
    name: "Meridian Platform Bed",
    collection: "Meena Edit",
    category: "Furniture",
    price: 198000,
    currency: "₹",
    image: bed,
    material: "Cognac leather, brass legs",
    dimensions: "L 220 · D 200 · H 110 cm",
    story:
      "Tailored in cognac leather and crowned with brushed brass, Meridian is the architecture of rest — restrained, considered, generous.",
  },
  {
    id: "atlas-bronze-figure",
    name: "Atlas Bronze Figure",
    collection: "Object Studies",
    category: "Sculptures",
    price: 62000,
    currency: "₹",
    image: sculpture,
    material: "Patinated cast bronze on marble base",
    dimensions: "H 84 cm · base 22 × 22 cm",
    story:
      "An hommage to the modernist nude — Atlas stretches between the architectural and the intimate, anchoring rooms with quiet weight.",
  },
  {
    id: "cypress-faux-palm",
    name: "Cypress Faux Palm",
    collection: "Verdure",
    category: "Artificial Plants",
    price: 18500,
    currency: "₹",
    image: plant,
    material: "Hand-finished silk fronds, brass planter",
    dimensions: "H 180 cm · planter Ø 32 cm",
    story:
      "An evergreen presence engineered for low-light residences — Cypress brings botanical poise without the upkeep.",
  },
  {
    id: "halo-ribbed-candle",
    name: "Halo Ribbed Candle",
    collection: "Hours",
    category: "Candles",
    price: 6800,
    currency: "₹",
    image: candle,
    material: "Soy-coconut wax · gilded brass pillar",
    dimensions: "H 22 cm · Ø 9 cm · burn 65 hrs",
    story:
      "A pillar of soft fire held in fluted brass — Halo measures evenings in scent, glow and the deepening of rooms.",
  },
  {
    id: "albâtre-dining-set",
    name: "Albâtre Dining Set · 12pc",
    collection: "Table",
    category: "Crockery",
    price: 38000,
    currency: "₹",
    image: crockery,
    material: "Hand-thrown porcelain, gilt rim",
    dimensions: "Service for four",
    story:
      "Hand-thrown porcelain rimmed in 24k gold — Albâtre is the slow ceremony of a table laid with intention.",
  },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function recommended(id, n = 3) {
  return products.filter((p) => p.id !== id).slice(0, n);
}
