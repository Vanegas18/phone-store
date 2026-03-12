import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <SearchX className="h-10 w-10 text-muted-foreground" />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
          Producto no encontrado
        </h1>

        <p className="mt-3 text-center text-muted-foreground">
          El producto que buscas no existe o ya no esta disponible.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/catalogo">Ver catalogo</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
