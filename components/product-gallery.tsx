"use client";

import { useState } from "react";
import { Smartphone, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";

interface ProductGalleryProps {
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

export function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images ?? [];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
        <div className="flex h-full items-center justify-center">
          {images.length > 0 ? (
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}
          <Smartphone
            className={`h-48 w-48 text-muted-foreground/30 ${images.length > 0 ? "hidden" : ""}`}
          />
        </div>

        <Badge
          className={`absolute left-4 top-4 ${getConditionBadgeStyles(product.condition)}`}>
          {getConditionLabel(product.condition)}
        </Badge>

        {product.originalPrice && (
          <Badge
            variant="secondary"
            className="absolute right-4 top-4 bg-destructive text-white">
            -
            {Math.round(
              (1 - Number(product.price) / Number(product.originalPrice)) * 100,
            )}
            % OFF
          </Badge>
        )}

        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-muted-foreground backdrop-blur-sm">
          <ZoomIn className="h-5 w-5" />
        </div>
      </div>

      {/* Thumbnails — solo si hay más de 1 imagen */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-muted transition-all ${
                selectedImage === index
                  ? "border-accent"
                  : "border-transparent hover:border-border"
              }`}
              aria-label={`Ver imagen ${index + 1}`}>
              <img
                src={src}
                alt={`${product.name} - imagen ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
