import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Garcia",
    location: "Ciudad de Mexico",
    rating: 5,
    text: "Excelente experiencia! Compre un iPhone 14 reacondicionado y llego en perfectas condiciones. La comunicacion por WhatsApp fue rapida y muy profesional.",
    product: "iPhone 14 Pro",
  },
  {
    name: "Carlos Rodriguez",
    location: "Guadalajara",
    rating: 5,
    text: "Mi Samsung Galaxy llego antes de lo esperado y con todos los accesorios prometidos. El equipo funciona perfecto, muy recomendado.",
    product: "Samsung Galaxy S23",
  },
  {
    name: "Ana Martinez",
    location: "Monterrey",
    rating: 5,
    text: "La garantia me dio mucha confianza. Tuve una duda sobre el telefono y me respondieron al instante. Definitivamente volvere a comprar aqui.",
    product: "Xiaomi 13",
  },
  {
    name: "Roberto Sanchez",
    location: "Puebla",
    rating: 5,
    text: "Precios justos y equipos de calidad. El iPhone usado que compre tenia bateria al 92% como prometieron. Muy honesto el negocio.",
    product: "iPhone 13",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cientos de clientes satisfechos nos respaldan
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6">
              <Quote className="absolute right-4 top-4 h-8 w-8 text-muted/50" />

              {/* Rating */}
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
                <div className="mt-1 text-xs text-accent">
                  Compro: {testimonial.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
