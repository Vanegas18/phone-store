import Link from "next/link";
import { ArrowRight, Shield, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5">
              <span className="text-sm font-medium text-primary-foreground">
                Nuevos modelos disponibles
              </span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Tu proximo celular esta aqui
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Encuentra los mejores smartphones nuevos, usados y
              reacondicionados. Equipos verificados, garantia incluida y entrega
              segura a todo el pais.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                <Link href="/catalogo">
                  Ver Catalogo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                <a
                  href="https://wa.me/1234567890?text=Hola,%20busco%20un%20celular%20especifico"
                  target="_blank"
                  rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/10 pt-8">
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-center text-xs font-medium text-primary-foreground/70 lg:text-left sm:text-sm">
                  Garantia incluida
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Truck className="h-6 w-6 text-accent" />
                <span className="text-center text-xs font-medium text-primary-foreground/70 lg:text-left sm:text-sm">
                  Envio seguro
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <CreditCard className="h-6 w-6 text-accent" />
                <span className="text-center text-xs font-medium text-primary-foreground/70 lg:text-left sm:text-sm">
                  Multiples pagos
                </span>
              </div>
            </div>
          </div>

          {/* Phone Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[400px] w-[280px] sm:h-[500px] sm:w-[350px]">
              {/* Main Phone */}
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border-4 border-primary-foreground/20 bg-gradient-to-b from-card/10 to-card/5 shadow-2xl sm:h-[480px] sm:w-[230px]">
                <div className="absolute left-1/2 top-4 h-6 w-20 -translate-x-1/2 rounded-full bg-primary-foreground/10" />
                <div className="absolute inset-4 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent/10">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary-foreground sm:text-6xl">
                      +500
                    </div>
                    <div className="mt-2 text-sm font-medium text-primary-foreground/70 sm:text-base">
                      Equipos vendidos
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -left-4 top-20 h-20 w-20 rounded-2xl bg-accent/20 backdrop-blur-sm sm:-left-8 sm:h-24 sm:w-24" />
              <div className="absolute -right-4 bottom-20 h-16 w-16 rounded-2xl bg-accent/30 backdrop-blur-sm sm:-right-8 sm:h-20 sm:w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
