import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { foods, formatRupiah, WHATSAPP_LINK, WHATSAPP_CATALOG_LINK, SOCIAL_LINKS } from "@/data/menu";
import { heroSlides } from "@/data/hero-slides";
import { tenants } from "@/data/tenants";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";


const Hero = () => {
  const [active, setActive] = useState(0);
  const [activeTenant, setActiveTenant] = useState(0);
  const total = heroSlides.length;

  // Auto-rotate hero slides setiap 4 detik
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  // Auto-rotate banner tenant setiap 4 detik
  useEffect(() => {
    const id = setInterval(() => setActiveTenant((i) => (i + 1) % tenants.length), 4000);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) => setActive((i + total) % total);

  return (
    <section
      id="beranda"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-hero overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up min-w-0">
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mt-2">
              Melayani Dengan Hati,
              <br />
              Hadir Sebagai Solusi.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Layanan pesan antar kuliner 24 jam area UNS Solo dengan harga offline tanpa biaya tambahan.
            </p>


            <div className="mt-8 flex flex-col gap-3 max-w-md">
              {/* Pesan via WhatsApp - Utama */}
              <Button asChild size="lg" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current animate-pulse" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan via WhatsApp
                </a>
              </Button>

              {/* Instagram & Delivery Channels Grid */}
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button asChild variant="outline" className="border-primary/20 text-foreground hover:bg-primary/10 hover:text-gold text-xs h-9">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    <Instagram className="h-3.5 w-3.5" />
                    Instagram
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="border-orange-500/20 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/40 text-xs h-9">
                  <a href={SOCIAL_LINKS.shopeefood} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    <span className="font-serif-display text-[10px] font-bold bg-orange-500 text-white rounded px-0.5 scale-90">SF</span>
                    ShopeeFood
                  </a>
                </Button>

                <Button asChild variant="outline" className="border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 text-xs h-9">
                  <a href={SOCIAL_LINKS.gofood} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    <span className="font-serif-display text-[10px] font-bold bg-red-500 text-white rounded px-0.5 scale-90">GF</span>
                    GoFood
                  </a>
                </Button>

                <Button asChild variant="outline" className="border-green-500/20 text-green-400 hover:bg-green-500/10 hover:border-green-500/40 text-xs h-9">
                  <a href={SOCIAL_LINKS.grabfood} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    <span className="font-serif-display text-[10px] font-bold bg-green-500 text-white rounded px-0.5 scale-90">GR</span>
                    GrabFood
                  </a>
                </Button>
              </div>

              {/* Tagline */}
              <div className="mt-4 border-t border-border pt-4 text-center sm:text-left">
                <p className="font-serif-display text-lg italic text-gold font-semibold tracking-wide mb-3">
                  "Kuliner Solo Dalam Genggaman"
                </p>

                {/* Lihat Menu Button */}
                <Button asChild size="lg" className="w-full bg-secondary border border-primary/20 text-foreground hover:bg-primary/10 hover:text-gold">
                  <a href="#menu" className="flex items-center justify-center gap-2">
                    Lihat Menu Lengkap
                  </a>
                </Button>

                {/* Tenant / Tempat Makan Auto-Slider */}
                <div className="mt-4 relative w-full rounded-2xl overflow-hidden border border-primary/20 shadow-card bg-card">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeTenant * 100}%)` }}
                  >
                    {tenants.map((t) => (
                      <a
                        key={t.id}
                        href={WHATSAPP_CATALOG_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full shrink-0 aspect-[21/9] group block"
                      >
                        {/* Foto menu andalan (placeholder gradien jika belum ada) */}
                        {t.image ? (
                          <img
                            src={t.image}
                            alt={`${t.signature} - ${t.name}`}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary to-background" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

                        <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                          <div className="flex items-center gap-2">
                            {/* Logo tenant (placeholder inisial jika belum ada) */}
                            {t.logo ? (
                              <img src={t.logo} alt={`Logo ${t.name}`} className="h-8 w-8 rounded-full object-cover border border-white/30 bg-white" />
                            ) : (
                              <span className="h-8 w-8 rounded-full bg-gradient-gold text-primary-foreground text-[10px] font-bold flex items-center justify-center border border-white/30">
                                {t.initials}
                              </span>
                            )}
                            <span className="w-fit inline-flex items-center rounded-full bg-red-500/90 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                              Promo Terlaris
                            </span>
                          </div>
                          <div>
                            <h4 className="font-serif-display text-base font-bold text-white leading-tight line-clamp-1">
                              {t.name}
                            </h4>
                            <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                              {t.signature} · {t.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="flex items-baseline gap-1.5">
                              {t.originalPrice && (
                                <span className="text-[10px] text-gray-400 line-through">{formatRupiah(t.originalPrice)}</span>
                              )}
                              <span className="text-gold font-bold text-sm">{formatRupiah(t.price)}</span>
                            </span>
                            <span className="text-[9px] text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-full">
                              Pesan via WA
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  {/* Indikator slide */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                    {tenants.map((t, i) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setActiveTenant(i)}
                        aria-label={`Tenant ${i + 1}: ${t.name}`}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeTenant ? "w-4 bg-gold" : "w-1.5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
        <div className="relative animate-fade-in min-w-0">
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
      </div>

      {/* Menu Favorit */}
      <div id="menu" className="mt-12 md:mt-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold">
              Menu <span className="text-gold">Favorit</span>
            </h2>
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
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        {food.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {formatRupiah(food.originalPrice)}
                          </span>
                        )}
                        <span className="text-gold font-semibold">
                          {formatRupiah(food.price)}
                        </span>
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
