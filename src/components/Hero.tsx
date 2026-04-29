import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { foods, formatRupiah, WHATSAPP_LINK } from "@/data/menu";
import { Clock, Flame, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [active, setActive] = useState(0);
  const total = foods.length;

  // Auto-rotate setiap 4 detik
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % total), 3000);
    return () => clearInterval(id);
  }, [total]);

  const go = (i: number) => setActive((i + total) % total);
  const current = foods[active];

  return (
    <section
      id="beranda"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-hero overflow-hidden"
    >
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

        {/* Slideshow signature dish */}
        <div className="relative animate-fade-in">
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-primary/20 shadow-card bg-gradient-to-br from-primary/20 to-secondary">
            {/* Slides */}
            {foods.map((item, i) => (
              <div
                key={item.name}
                className={`absolute inset-0 flex flex-col items-center justify-center px-8 text-center transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={i !== active}
              >
                <div className="text-7xl mb-3" aria-hidden>🍗</div>
                {item.bestSeller && (
                  <span className="mb-2 inline-block rounded-full bg-gradient-gold text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-gold">
                    ★ Best Seller
                  </span>
                )}
                <p className="font-serif-display text-xl md:text-2xl text-foreground leading-snug">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {item.description}
                </p>
                <p className="mt-3 text-gold font-semibold">
                  {formatRupiah(item.price)}
                </p>
              </div>
            ))}

            {/* Prev / Next */}
            <button
              onClick={() => go(active - 1)}
              aria-label="Sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur border border-border text-foreground hover:text-gold hover:border-primary/50 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Berikutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur border border-border text-foreground hover:text-gold hover:border-primary/50 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-3 right-3 rounded-full bg-background/70 backdrop-blur border border-border px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
              {active + 1} / {total}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {foods.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-gradient-gold" : "w-2 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
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
