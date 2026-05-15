import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { foods, formatRupiah, WHATSAPP_LINK } from "@/data/menu";
import { heroSlides } from "@/data/hero-slides";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [active, setActive] = useState(0);
  const total = heroSlides.length;

  // Auto-rotate setiap 4 detik
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  const go = (i: number) => setActive((i + total) % total);

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
            Kuliner <span className="text-gold">Solo</span>
            <br />
            dalam Genggaman.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Ayam bakar, ayam penyet, dan minuman segar khas Solo.
            Disajikan hangat kapan saja kamu butuh. Siang, malam, atau dini hari.
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

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Hemat 40–50% vs GoFood/ShopeeFood
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Cita rasa autentik Solo
            </div>
          </div>
        </div>

        {/* Hero Image Carousel */}
        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/3] md:aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-primary/20 shadow-card bg-gradient-to-br from-primary/10 to-secondary/10">
            {/* Slides */}
            {heroSlides.map((slide, i) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={i !== active}
              >
                <div className="relative h-full w-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Slide content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif-display text-xl md:text-2xl font-bold leading-snug">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/90 line-clamp-2">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Prev / Next */}
            <button
              onClick={() => go(active - 1)}
              aria-label="Sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur border border-border text-foreground hover:text-gold hover:border-primary/50 transition z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Berikutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur border border-border text-foreground hover:text-gold hover:border-primary/50 transition z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-3 right-3 rounded-full bg-background/70 backdrop-blur border border-border px-2.5 py-1 text-[10px] font-medium text-muted-foreground z-10">
              {active + 1} / {total}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {heroSlides.map((_, i) => (
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

        {/* Food Carousel */}
        <div className="mt-12 md:mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold">
              Menu <span className="text-gold">Favorit</span>
            </h2>
            <a 
              href="#menu" 
              className="text-sm font-medium text-gold hover:text-primary flex items-center gap-1"
            >
              Lihat semua menu
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {foods.slice(0, 5).map((food) => (
                <div 
                  key={food.name}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-card transition-all"
                >
                  {food.bestSeller && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="inline-flex items-center rounded-full bg-gradient-gold text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 shadow-gold">
                        ★ Best
                      </span>
                    </div>
                  )}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                    {food.image ? (
                      <img
                        src={food.image}
                        alt={food.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-4xl">🍗</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif-display text-lg font-bold line-clamp-1">
                      {food.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {food.description}
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <span className="text-gold font-semibold">
                        {formatRupiah(food.price)}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-gold"
                        asChild
                      >
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                          Pesan
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
