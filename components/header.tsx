"use client";

import Link from "next/link";
import { Smartphone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Smartphone className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            CelularesPlus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Inicio
          </Link>
          <Link
            href="/catalogo"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Catalogo
          </Link>
          <Link
            href="/#beneficios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Beneficios
          </Link>
          <Link
            href="/#contacto"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a
              href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20mas%20sobre%20sus%20celulares"
              target="_blank"
              rel="noopener noreferrer">
              Contactar por WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-border bg-card px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}>
              Catalogo
            </Link>
            <Link
              href="/#beneficios"
              className="text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}>
              Beneficios
            </Link>
            <Link
              href="/#contacto"
              className="text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
            <Button
              asChild
              className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <a
                href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20mas%20sobre%20sus%20celulares"
                target="_blank"
                rel="noopener noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
