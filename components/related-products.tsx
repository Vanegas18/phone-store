import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Productos relacionados
      </h2>
      <p className="mt-2 text-muted-foreground">
        Otros equipos de la misma marca que podrian interesarte
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
