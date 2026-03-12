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

  // Simulate multiple images for gallery effect
  const images = [
    { id: 0, label: "Frontal" },
    { id: 1, label: "Trasera" },
    { id: 2, label: "Lateral" },
    { id: 3, label: "Detalle" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
        <div className="flex h-full items-center justify-center">
          <Smartphone className="h-48 w-48 text-muted-foreground/30" />
        </div>

        {/* Badges */}
        <Badge
          className={`absolute left-4 top-4 ${getConditionBadgeStyles(product.condition)}`}>
          {getConditionLabel(product.condition)}
        </Badge>

        {product.originalPrice && (
          <Badge
            variant="secondary"
            className="absolute right-4 top-4 bg-destructive text-white">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            OFF
          </Badge>
        )}

        {/* Zoom hint */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-muted-foreground backdrop-blur-sm">
          <ZoomIn className="h-5 w-5" />
        </div>

        {/* Image label */}
        <div className="absolute bottom-4 left-4 rounded-full bg-card/80 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
          Vista {images[selectedImage].label}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image.id)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-muted transition-all ${
              selectedImage === image.id
                ? "border-accent"
                : "border-transparent hover:border-border"
            }`}
            aria-label={`Ver imagen ${image.label}`}>
            <div className="flex h-full items-center justify-center">
              <Smartphone className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-2 py-1">
              <span className="text-xs font-medium text-white">
                {image.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
