import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/menu";

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Testimoni</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold">
            Kata mereka yang sudah mencoba.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/40 transition-colors"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-gold" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gold">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
