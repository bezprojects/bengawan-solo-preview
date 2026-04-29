import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/data/menu";
import { Clock, Flame } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-hero overflow-hidden"
    >
      {/* dekorasi */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-gold mb-5">
            <Clock className="h-3.5 w-3.5" />
            Buka 24 Jam · Setiap Hari
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            Hub Kuliner <span className="text-gold">Solo</span>
            <br />
            dalam Genggaman.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Ayam bakar, ayam penyet, dan minuman segar khas Solo.
            Disajikan hangat kapan saja kamu butuh — siang, malam, atau dini hari.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
              <a href="#menu">Lihat Menu</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 hover:text-gold">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Pesan via WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-gold" />
              Sambal racik harian
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Cita rasa autentik Solo
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-secondary border border-primary/20 shadow-card flex items-center justify-center overflow-hidden">
            {/* Placeholder gambar signature dish */}
            <div className="text-center px-8">
              <div className="text-7xl mb-4">🍗</div>
              <p className="font-serif-display text-2xl text-gold">Signature Dish</p>
              <p className="text-sm text-muted-foreground mt-2">
                Ganti area ini dengan foto menu andalanmu
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
            <div className="text-2xl">⭐</div>
            <div>
              <div className="text-sm font-semibold">4.8 / 5.0</div>
              <div className="text-xs text-muted-foreground">Rating pelanggan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
