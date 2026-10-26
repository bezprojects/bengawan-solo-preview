import { CalendarDays, CalendarRange, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/menu";

const CATERING_WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Bengawan Solo Food Hub, saya ingin tanya paket catering"
)}`;

const packages = [
  {
    icon: CalendarRange,
    title: "Bulanan",
    desc: "Langganan catering sebulan penuh, menu bervariasi setiap hari.",
  },
  {
    icon: CalendarDays,
    title: "Mingguan",
    desc: "Paket 7 hari, cocok untuk kebutuhan kantor, kos, atau keluarga.",
  },
  {
    icon: Sparkles,
    title: "Uji Coba 3 Hari",
    desc: "Coba dulu selama 3 hari sebelum berlangganan lebih lama.",
    highlight: true,
  },
];

const Catering = () => {
  return (
    <section id="catering" className="py-20 md:py-28 bg-secondary/30 scroll-mt-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Available Catering</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold">
            Catering Bengawan Solo Food Hub
          </h2>
          <p className="mt-3 text-sm font-medium text-gold">
            Bulanan, Mingguan dan paket uji coba 3 hari
          </p>
          <p className="mt-5 text-muted-foreground">
            Solusi catering untuk setiap kebutuhan! Bengawan Solo Food Hub menghadirkan
            pilihan menu lezat, pelayanan profesional, dan sajian yang siap menyempurnakan
            setiap acara.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {packages.map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className={`group rounded-2xl border bg-card p-6 shadow-card transition-colors ${
                highlight ? "border-primary/50" : "border-border hover:border-primary/40"
              }`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-gold mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold mb-2">Paket {title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-muted-foreground">
            Dari dapur kami, hadir kelezatan untuk setiap cerita. Bengawan Solo Food Hub,
            pilihan tepat untuk sajian yang berkesan.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <p className="font-serif-display text-lg italic text-gold font-semibold">
              “Kualitas Rasa, Layanan Terpercaya.”
            </p>
            <p className="font-serif-display text-lg italic text-gold font-semibold">
              “One Hub, Endless Flavors.”
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-8 w-full sm:w-auto bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold"
          >
            <a href={CATERING_WA_LINK} target="_blank" rel="noopener noreferrer">
              Tanya Paket Catering via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catering;
