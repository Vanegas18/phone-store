import { MessageCircle, Shield, Package, Battery, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";

interface ProductInfoProps {
  product: Product;
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

export function ProductInfo({ product }: ProductInfoProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa comprar el ${product.name} (${product.storage}) - ${getConditionLabel(product.condition)} a $${product.price}. Esta disponible?`,
  );

  return (
    <div className="flex flex-col">
      {/* Brand */}
      <div className="mb-2">
        <Badge variant="secondary" className="text-xs">
          {product.brand}
        </Badge>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {product.name}
      </h1>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground sm:text-4xl">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-lg text-muted-foreground line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>

      {/* Quick Info */}
      <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-border bg-muted/50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card">
            <Package className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Almacenamiento</div>
            <div className="font-semibold text-foreground">
              {product.storage}
            </div>
          </div>
        </div>

        {product.batteryHealth && (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card">
              <Battery className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Bateria</div>
              <div className="font-semibold text-foreground">
                {product.batteryHealth}%
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card">
            <Shield className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Estado</div>
            <div className="font-semibold text-foreground">
              {getConditionLabel(product.condition)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card">
            <div
              className="h-4 w-4 rounded-full border-2 border-muted-foreground"
              style={{
                backgroundColor: product.color.toLowerCase().includes("black")
                  ? "#1a1a1a"
                  : product.color.toLowerCase().includes("white")
                    ? "#fff"
                    : undefined,
              }}
            />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Color</div>
            <div className="font-semibold text-foreground">{product.color}</div>
          </div>
        </div>
      </div>

      {/* Physical Condition */}
      {product.physicalCondition && (
        <div className="mt-6">
          <h3 className="font-semibold text-foreground">Condicion fisica</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {product.physicalCondition}
          </p>
        </div>
      )}

      {/* Warranty */}
      <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <h3 className="font-semibold text-foreground">Garantia</h3>
        </div>
        <p className="mt-2 text-muted-foreground">{product.warranty}</p>
      </div>

      {/* Accessories */}
      <div className="mt-6">
        <h3 className="font-semibold text-foreground">Accesorios incluidos</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {product.accessories.map((accessory, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-accent" />
              {accessory}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
          <a
            href={`https://wa.me/1234567890?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Comprar por WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="tel:+1234567890">Llamar para consultar</a>
        </Button>
      </div>

      {/* Trust indicators */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Check className="h-4 w-4 text-accent" />
          Equipo verificado
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-4 w-4 text-accent" />
          Envio seguro
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-4 w-4 text-accent" />
          Pagos flexibles
        </div>
      </div>
    </div>
  );
}
