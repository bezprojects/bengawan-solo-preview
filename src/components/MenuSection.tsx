import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { drinks, foods, formatRupiah, MenuItem, WHATSAPP_LINK } from "@/data/menu";

const MenuCard = ({ item }: { item: MenuItem }) => (
  <article className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
    <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden">
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <span className="text-6xl" aria-hidden>🍽️</span>
      )}
    </div>
    {item.bestSeller && (
      <Badge className="absolute top-3 left-3 bg-gradient-gold text-primary-foreground border-0 shadow-gold">
        ★ Best Seller
      </Badge>
    )}
    <div className="p-5">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-serif-display text-lg font-semibold leading-tight">
          {item.name}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-gold font-semibold">{formatRupiah(item.price)}</span>
      </div>
    </div>
  </article>
);

const FullMenuList = ({ title, items }: { title: string; items: MenuItem[] }) => (
  <div>
    <h4 className="font-serif-display text-xl font-semibold text-gold mb-3">{title}</h4>
    <ul className="divide-y divide-border">
      {items.map((it) => (
        <li key={it.name} className="py-3 flex items-start justify-between gap-4">
          <div>
            <p className="font-medium">
              {it.name}
              {it.bestSeller && <span className="ml-2 text-xs text-gold">★</span>}
            </p>
            <p className="text-sm text-muted-foreground">{it.description}</p>
          </div>
          <span className="shrink-0 text-gold font-semibold">{formatRupiah(it.price)}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Menu Pilihan</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold">
            Sajian favorit, siap setiap saat.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Menu makanan dan minuman pilihan kami. Lihat menu lengkap untuk semua pilihan.
          </p>
        </div>

        <Tabs defaultValue="makanan" className="w-full">
          <TabsList className="mx-auto flex w-fit bg-card border border-border">
            <TabsTrigger value="makanan" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground px-6">
              Makanan
            </TabsTrigger>
            <TabsTrigger value="minuman" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground px-6">
              Minuman
            </TabsTrigger>
          </TabsList>

          <TabsContent value="makanan" className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {foods.map((it) => <MenuCard key={it.name} item={it} />)}
            </div>
          </TabsContent>
          <TabsContent value="minuman" className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {drinks.map((it) => <MenuCard key={it.name} item={it} />)}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="border-primary/40 hover:bg-primary/10 hover:text-gold">
                Lihat Menu Lengkap
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card">
              <DialogHeader>
                <DialogTitle className="font-serif-display text-2xl">Menu Lengkap</DialogTitle>
              </DialogHeader>
              <div className="space-y-8 mt-2">
                <FullMenuList title="Makanan" items={foods} />
                <FullMenuList title="Minuman" items={drinks} />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Daftar ini akan dilengkapi dengan menu lain (total 10 makanan & 20 minuman) — tinggal edit di <code>src/data/menu.ts</code>.
              </p>
            </DialogContent>
          </Dialog>

          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Pesan via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
