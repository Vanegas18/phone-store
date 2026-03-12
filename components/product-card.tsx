import Link from "next/link";
import { Smartphone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

function getConditionBadgeStyles(condition: Product["condition"]) {
  switch (condition) {
    case "nuevo":
      return "bg-accent text-accent-foreground";
    case "usado":
      return "bg-amber-500 text-white";
    case "reacondicionado":
      return "bg-sky-500 text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function getConditionLabel(condition: Product["condition"]) {
  switch (condition) {
    case "nuevo":
      return "Nuevo";
    case "usado":
      return "Usado";
    case "reacondicionado":
      return "Reacondicionado";
    default:
      return condition;
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa el ${product.name} (${product.storage}) - ${getConditionLabel(product.condition)} a $${product.price}. Pueden darme mas informacion?`,
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg">
      {/* Image */}
      <Link
        href={`/producto/${product.id}`}
        className="relative aspect-square overflow-hidden bg-muted">
        <div className="flex h-full items-center justify-center">
          <Smartphone className="h-24 w-24 text-muted-foreground/40 transition-transform group-hover:scale-110" />
        </div>
        <Badge
          className={`absolute left-3 top-3 ${getConditionBadgeStyles(product.condition)}`}>
          {getConditionLabel(product.condition)}
        </Badge>
        {product.originalPrice && (
          <Badge
            variant="secondary"
            className="absolute right-3 top-3 bg-destructive text-white">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </Badge>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/producto/${product.id}`}>
          <h3 className="font-semibold text-foreground transition-colors hover:text-accent">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {product.storage}
          </span>
          <span className="text-muted-foreground/40">|</span>
          <span className="text-sm text-muted-foreground">{product.color}</span>
        </div>

        {product.batteryHealth && (
          <div className="mt-2 text-sm text-muted-foreground">
            Bateria: {product.batteryHealth}%
          </div>
        )}

        <div className="mt-auto pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="mt-3 flex gap-2">
            <Button asChild variant="outline" className="flex-1" size="sm">
              <Link href={`/producto/${product.id}`}>Ver detalles</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a
                href={`https://wa.me/1234567890?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
