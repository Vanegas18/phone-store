import {
  CheckCircle,
  Shield,
  Truck,
  CreditCard,
  RefreshCw,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Equipos Verificados",
    description:
      "Cada dispositivo pasa por un riguroso proceso de revision tecnica antes de ser puesto a la venta.",
  },
  {
    icon: Shield,
    title: "Garantia Incluida",
    description:
      "Todos nuestros equipos cuentan con garantia. Nuevos 12 meses, usados y reacondicionados de 3 a 6 meses.",
  },
  {
    icon: Truck,
    title: "Entrega Segura",
    description:
      "Enviamos a todo el pais con empaque especial y seguro de envio para proteger tu compra.",
  },
  {
    icon: CreditCard,
    title: "Multiples Metodos de Pago",
    description:
      "Acepta efectivo, transferencias, tarjetas de credito/debito y pagos en cuotas.",
  },
  {
    icon: RefreshCw,
    title: "Cambios y Devoluciones",
    description:
      "Si el equipo no cumple tus expectativas, tienes hasta 7 dias para cambiarlo o devolverlo.",
  },
  {
    icon: Headphones,
    title: "Soporte Personalizado",
    description:
      "Atencion directa por WhatsApp para resolver todas tus dudas antes y despues de tu compra.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que elegirnos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Nos comprometemos a ofrecerte la mejor experiencia de compra con
            equipos de calidad y servicio excepcional.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
