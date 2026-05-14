import { ChefHat, Leaf, Heart } from "lucide-react";

const items = [
  {
    icon: ChefHat,
    title: "Resep Autentik",
    desc: "Bumbu khas Solo diracik turun-temurun dengan teknik tradisional.",
  },
  {
    icon: Leaf,
    title: "Bahan Segar",
    desc: "Ayam dan sayur dipilih harian, sambal diulek setiap hari.",
  },
  {
    icon: Heart,
    title: "Pelayanan Ramah",
    desc: "Tim kami siap melayani 24 jam dengan senyum dan kehangatan.",
  },
];

const About = () => {
  return (
    <section id="tentang" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Tentang Kami</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold">
            Melayani Dengan Hati, Hadir Sebagai Solusi.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bengawan Solo Food Hub adalah kumpulan resto-resto pilihan area UNS yang menyediakan
            layanan pesan antar online mandiri 24 jam nonstop dengan harga offline karena tanpa
            biaya pemesanan, sharing profit & sharing promo.
          </p>

          {/* Price advantage callout */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3 text-sm">
            <span className="text-2xl">💰</span>
            <span className="text-muted-foreground">
              Harga selisih{" "}
              <span className="font-bold text-green-400">40%–50%</span>{" "}
              lebih murah dibanding platform online lainnya
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors shadow-card"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-gold mb-4 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
