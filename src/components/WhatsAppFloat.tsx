import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/menu";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-4 py-3 shadow-gold hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Chat Kami</span>
    </a>
  );
};

export default WhatsAppFloat;
