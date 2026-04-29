import { Clock } from "lucide-react";

const days = [
  "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu",
];

const Hours = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-secondary/40 p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-gold mb-4">
                <Clock className="h-3.5 w-3.5" /> Jam Operasional
              </div>
              <h2 className="font-serif-display text-3xl md:text-4xl font-bold mb-3">
                Buka <span className="text-gold">24 Jam</span>, setiap hari.
              </h2>
              <p className="text-muted-foreground">
                Tidak ada hari libur. Kapan pun kamu lapar — siang, malam,
                atau dini hari — dapur kami selalu menyala untukmu.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {days.map((d) => (
                <li
                  key={d}
                  className="flex items-center justify-between rounded-xl bg-background/60 border border-border px-4 py-3"
                >
                  <span className="font-medium">{d}</span>
                  <span className="text-gold text-sm font-semibold">24 Jam</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
