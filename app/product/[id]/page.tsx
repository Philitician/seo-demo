import { db } from "@/app/db";
import { ProductCard } from "@/app/product-card";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = async () => {
  const products = await db.getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
};

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const product = await db.getProductById(params.id);
  return {
    title: `Product ${product?.title}`,
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await db.getProductById(params.id);
  if (!product) return <div>Product not found</div>;
  return (
    <div className="flex justify-center">
      <ProductCard {...product} />
    </div>
  );
}
