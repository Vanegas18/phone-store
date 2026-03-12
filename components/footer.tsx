import Link from "next/link";
import { Smartphone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                CelularesPlus
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tu tienda de confianza para celulares nuevos, usados y
              reacondicionados. Calidad garantizada y atencion personalizada.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground">Enlaces</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Catalogo
                </Link>
              </li>
              <li>
                <Link
                  href="/#beneficios"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Centro Comercial Plaza Norte
                  <br />
                  Local 25, Planta Baja
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Lun - Sab: 10:00 - 20:00
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground">Siguenos</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              WhatsApp: +1 234 567 890
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CelularesPlus. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
