# Showcasing Next.js 13 SEO

### Static metadata

Static metadata including 'title' and 'description' are set in the head of the home page at `app/page.tsx`.

```tsx
# app/page.tsx
export const metadata: Metadata = {
  title: "Grønn Vekst",
  description: "Grønn Vekst gir deg den beste jorden for å dyrke dine planter.",
};
```

### Dynamic metadata

Dynamic metadata including 'title' and 'description' are set in the head of the product page at `app/product/[id].tsx`.

```tsx
interface ProductPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  // imagine this is a call to a database, CMS or API to get the product
  const product = await db.getProductById(params.id);
  return {
    title: `Product ${product?.title}`,
  };
};
```

Static pages for each product is generated at build time. This is important because it allows us to set the metadata for each product page at build time, optimizing for SEO.

```tsx
export const generateStaticParams = async () => {
  // imagine this is a call to a database, CMS or API to get all products
  const products = await db.getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
};
```
