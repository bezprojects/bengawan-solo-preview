import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { foods, formatRupiah, WHATSAPP_LINK, SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/data/menu";
import { heroSlides } from "@/data/hero-slides";
import { Clock, ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const bestSellers = [
  {
    name: "Ayam Tulang Lunak Putri Begawan",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop",
    desc: "Ayam presto super empuk bumbu meresap khas Solo."
  },
  {
    name: "Ayam Penyet Raja Pedas",
    image: "https://images.unsplash.com/photo-1562967914-608f82629a7a?w=500&auto=format&fit=crop",
    desc: "Ayam goreng garing dengan ulekan sambal bawang pedas nampol."
  },
  {
    name: "Geprek Dower Pedas Mampus",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop",
    desc: "Geprek renyah dengan cabai rawit melimpah yang menggugah selera."
  },
  {
    name: "Nasi Goreng & Seafood Jawara",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop",
    desc: "Nasi goreng bumbu rempah premium dengan topping seafood melimpah."
  },
  {
    name: "Martabak Manis Jawara",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop",
    desc: "Martabak manis tebal legendaris dengan aneka topping lezat."
  }
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [activeSeller, setActiveSeller] = useState(0);
  const total = heroSlides.length;

  // Auto-rotate hero slides setiap 4 detik
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  // Auto-rotate best sellers setiap 3 detik
  useEffect(() => {
    const id = setInterval(() => setActiveSeller((i) => (i + 1) % bestSellers.length), 3000);
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
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
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

                {/* Best Sellers Auto-Slider */}
                <div className="overflow-hidden w-full relative rounded-2xl border border-primary/20 bg-card p-3 shadow-card text-left">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${activeSeller * 100}%)` }}
                  >
                    {bestSellers.map((item) => (
                      <div key={item.name} className="w-full shrink-0 flex gap-4 items-center px-1">
                        <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden rounded-xl border border-border">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                            loading="lazy" 
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gold uppercase tracking-wider mb-0.5">
                            ★ Best Seller
                          </span>
                          <h4 className="font-serif-display text-sm font-bold text-foreground truncate">{item.name}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Slide Indicators */}
                  <div className="absolute right-3 top-3 flex gap-1">
                    {bestSellers.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeSeller ? "w-3 bg-gold" : "w-1 bg-muted-foreground/30"
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                {/* Lihat Menu Lengkap Button */}
                <Button asChild size="lg" className="w-full mt-3 bg-secondary border border-primary/20 text-foreground hover:bg-primary/10 hover:text-gold">
                  <a href="#menu" className="flex items-center justify-center gap-2">
                    Lihat Menu Lengkap
                  </a>
                </Button>

                {/* Pesan via WhatsApp - Sekunder */}
                <Button asChild size="lg" className="w-full mt-2 bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current animate-pulse" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Pesan via WhatsApp
                  </a>
                </Button>

                {/* Landscape Best Seller Promo Banner */}
                <a 
                  href={`https://wa.me/c/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-primary/20 shadow-card bg-black/40 group text-left hover:border-primary/50 transition-colors"
                >
                  {/* Background Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop" 
                    alt="Promo Best Seller" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
                  
                  {/* Banner Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <span className="w-fit inline-flex items-center rounded-full bg-red-500/90 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-md">
                      Promo Terlaris
                    </span>
                    <div>
                      <h4 className="font-serif-display text-base font-bold text-white leading-tight">
                        Ayam Tulang Lunak Putri Begawan
                      </h4>
                      <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                        Ayam presto empuk bumbu rempah khas Solo meresap sempurna.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-gold font-bold text-sm">Rp 30.000</span>
                      <span className="text-[9px] text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded">
                        Buka Katalog WA
                      </span>
                    </div>
                  </div>
                </a>
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
