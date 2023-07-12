export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: "torvfri" | "plen";
};

export type ProductInsert = Omit<Product, "id">;

const products: Product[] = [
  {
    id: "greenflow-torvfri-jord",
    title: "GreenGrow Torvfri Jord",
    price: 45.99,
    description:
      "Høykvalitets, torvfri jord perfekt for hagebruk og landskapsarbeid. Miljøvennlig og fremmer sunn plantevekst.",
    category: "torvfri",
  },
  {
    id: "lushlife-plenjord",
    title: "LushLife Plenjord",
    price: 39.99,
    description:
      "Optimalisert for plenvekst. Inneholder en balansert blanding av næringsstoffer for å støtte sunne, frodige plener.",
    category: "plen",
  },
  {
    id: "ecobloom-torvfri-jord",
    title: "EcoBloom Torvfri Jord",
    price: 49.99,
    description:
      "Økologisk, torvfri jord rik på næringsstoffer. Utmerket for å dyrke blomster, grønnsaker og mer.",
    category: "torvfri",
  },
  {
    id: "prolawn-plenjord",
    title: "ProLawn Plenjord",
    price: 42.99,
    description:
      "Profesjonell plenjord spesielt designet for plener. Forbedrer plenens tetthet og farge.",
    category: "plen",
  },
  {
    id: "natures-best-torvfri-jord",
    title: "Nature's Best Torvfri Jord",
    price: 47.99,
    description:
      "Torvfri jord som respekterer miljøet samtidig som den gir alle næringsstoffene plantene dine trenger for optimal vekst.",
    category: "torvfri",
  },
  {
    id: "ecogrow-plenjord",
    title: "EcoGrow Plenjord",
    price: 44.99,
    description: "Økologisk plenjord som gir en sunn og frodig plen.",
    category: "plen",
  },
];

export const db = {
  getProducts: async () => products,
  getProductById: async (id: string) =>
    products.find((product) => product.id === id),
};
