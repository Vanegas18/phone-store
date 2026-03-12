import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { RelatedProducts } from "@/components/related-products";
import { getProductById, products } from "@/lib/products";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Producto no encontrado - CelularesPlus",
    };
  }

  return {
    title: `${product.name} - CelularesPlus`,
    description: `Compra ${product.name} ${product.storage} en condicion ${product.condition}. ${product.warranty}. Contactanos por WhatsApp.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.brand === product.brand)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-16 pt-8 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button
              asChild
              variant="ghost"
              className="gap-1 pl-0 text-muted-foreground hover:text-foreground">
              <Link href="/catalogo">
                <ChevronLeft className="h-4 w-4" />
                Volver al catalogo
              </Link>
            </Button>
          </div>

          {/* Product Details */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
