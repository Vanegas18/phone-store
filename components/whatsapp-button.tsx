"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20sobre%20sus%20celulares"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl sm:h-16 sm:w-16"
      aria-label="Contactar por WhatsApp">
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
