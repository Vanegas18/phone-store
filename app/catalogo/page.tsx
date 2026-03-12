"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ProductCard } from "@/components/product-card";
import { CatalogFilters, type Filters } from "@/components/catalog-filters";
import { products } from "@/lib/products";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const initialFilters: Filters = {
  brand: "all",
  condition: "all",
  storage: "all",
  priceRange: "all",
};

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setSearchQuery("");
  };

  const activeFiltersCount =
    Object.values(filters).filter((value) => value !== "all").length +
    (searchQuery ? 1 : 0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.model.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Brand filter
      if (filters.brand !== "all" && product.brand !== filters.brand) {
        return false;
      }

      // Condition filter
      if (
        filters.condition !== "all" &&
        product.condition !== filters.condition
      ) {
        return false;
      }

      // Storage filter
      if (filters.storage !== "all" && product.storage !== filters.storage) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== "all") {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (product.price < min || (max !== Infinity && product.price > max)) {
          return false;
        }
      }

      return true;
    });
  }, [filters, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-16 pt-8 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Catalogo de Celulares
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Explora nuestra seleccion de smartphones nuevos, usados y
              reacondicionados
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por marca, modelo o nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-10 text-base"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <CatalogFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              activeFiltersCount={activeFiltersCount}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Mostrando{" "}
              <span className="font-medium text-foreground">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "producto" : "productos"}
            </p>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card py-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                No se encontraron productos
              </h3>
              <p className="mt-2 text-center text-muted-foreground">
                Intenta ajustar los filtros o buscar con otros terminos
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 text-sm font-medium text-accent hover:underline">
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
