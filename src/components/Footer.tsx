import { Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/data/menu";

const OrderIcon = ({ label }: { label: string }) => (
  <span className="font-serif-display text-sm font-bold">{label}</span>
);

const channels = [
  {
    href: WHATSAPP_LINK,
    label: "WhatsApp",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    href: SOCIAL_LINKS.shopeefood,
    label: "ShopeeFood",
    icon: <OrderIcon label="SF" />,
  },
  {
    href: SOCIAL_LINKS.gofood,
    label: "GoFood",
    icon: <OrderIcon label="GF" />,
  },
  {
    href: SOCIAL_LINKS.grabfood,
    label: "GrabFood",
    icon: <OrderIcon label="GR" />,
  },
];

const Footer = () => {
  return (
    <footer id="kontak" className="border-t border-border bg-background">
      {/* CTA */}
      <div className="container py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-primary/15 via-card to-secondary border border-primary/20 p-8 md:p-12 text-center shadow-card">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Pesan Sekarang Lewat</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold mb-3">
            Lapar? Tinggal chat, kami antar.
          </h2>
          <p className="text-muted-foreground mb-6">
            Hubungi langsung WhatsApp atau pesan lewat aplikasi favoritmu.
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" /> WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </Button>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/40 hover:text-gold transition-colors"
              >
                {c.icon}
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p className="font-serif-display">
            <span className="text-gold font-semibold">Bengawan Solo</span> Food Hub
          </p>
          <p>© {new Date().getFullYear()} Bengawan Solo Food Hub. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
