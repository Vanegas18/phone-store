import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contacto" className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Buscas un modelo especifico?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Si no encuentras el celular que buscas en nuestro catalogo,
            contactanos. Podemos ayudarte a conseguir el modelo exacto que
            necesitas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
              <a
                href="https://wa.me/1234567890?text=Hola,%20busco%20un%20modelo%20especifico%20de%20celular"
                target="_blank"
                rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Escribenos por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </a>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 border-t border-primary-foreground/10 pt-10 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                +500
              </div>
              <div className="mt-1 text-primary-foreground/70">
                Clientes satisfechos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                24h
              </div>
              <div className="mt-1 text-primary-foreground/70">
                Tiempo de respuesta
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                98%
              </div>
              <div className="mt-1 text-primary-foreground/70">
                Resenas positivas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
