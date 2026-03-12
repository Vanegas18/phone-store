"use client";

import { X, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  brands,
  conditions,
  storageOptions,
  priceRanges,
} from "@/lib/products";

export interface Filters {
  brand: string;
  condition: string;
  storage: string;
  priceRange: string;
}

interface CatalogFiltersProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

function getConditionLabel(condition: string) {
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

export function CatalogFilters({
  filters,
  onFilterChange,
  onClearFilters,
  activeFiltersCount,
}: CatalogFiltersProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <h2 className="font-semibold text-foreground">Filtros</h2>
          {activeFiltersCount > 0 && (
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground">
            <X className="mr-1 h-4 w-4" />
            Limpiar
          </Button>
        )}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            Marca
          </label>
          <Select
            value={filters.brand}
            onValueChange={(value) => onFilterChange("brand", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todas las marcas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las marcas</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Condition Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            Estado
          </label>
          <Select
            value={filters.condition}
            onValueChange={(value) => onFilterChange("condition", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todos los estados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              {conditions.map((condition) => (
                <SelectItem key={condition} value={condition}>
                  {getConditionLabel(condition)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Storage Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            Almacenamiento
          </label>
          <Select
            value={filters.storage}
            onValueChange={(value) => onFilterChange("storage", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {storageOptions.map((storage) => (
                <SelectItem key={storage} value={storage}>
                  {storage}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            Rango de Precio
          </label>
          <Select
            value={filters.priceRange}
            onValueChange={(value) => onFilterChange("priceRange", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todos los precios" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los precios</SelectItem>
              {priceRanges.map((range, index) => (
                <SelectItem key={index} value={`${range.min}-${range.max}`}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
