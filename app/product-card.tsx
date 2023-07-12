import Link from "next/link";
import { Product } from "./db";

export async function ProductCard(product: Product) {
  return (
    <div className="relative">
      <Link
        href={`/product/${product.id}`}
        className="items-center justify-center gap-1 max-w-sm border-2 rounded-2xl border-pink-100 p-4 flex flex-col transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      >
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </Link>
    </div>
  );
}
