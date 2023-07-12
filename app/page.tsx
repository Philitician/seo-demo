import type { Metadata } from "next";
import { db } from "./db";

import { ProductCard } from "./product-card";

export const metadata: Metadata = {
  title: "Grønn Vekst",
  description: "Grønn Vekst gir deg den beste jorden for å dyrke dine planter.",
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <ProductGrid />
    </main>
  );
}

async function ProductGrid() {
  const products = await db.getProducts();
  return (
    <div className="flex flex-col gap-2 items-center">
      <h3 className="text-2xl font-bold">Produkter</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
