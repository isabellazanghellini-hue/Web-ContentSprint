"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";

const before = [
  "Du öffnest Instagram – und weißt wieder nicht, was du posten sollst.",
  "Du verbringst 2 Stunden an einem Post, der sich trotzdem nicht richtig anfühlt.",
  "Dein Content klingt wie tausend andere – weil die KI nicht weiß, wer du bist.",
  "Du postest unregelmäßig, weil der Aufwand einfach zu groß ist.",
  "Du siehst andere wachsen und fragst dich, was die anders machen.",
  "Du hast 30 Tage Content erstellt. Und nach Tag 30 weißt du nicht, wie es weitergeht.",
];

const after = [
  "Du öffnest Notion – und siehst deinen fertigen 30-Tage-Plan.",
  "Du erstellst Wochencontent in unter 15 Minuten. Konsistent. Authentisch.",
  "Jeder Post klingt nach dir – weil die KI jetzt dein Briefing kennt.",
  "Du postest regelmäßig, weil du ein System hast, kein Chaos.",
  "Du wächst sichtbar – weil deine Stimme endlich unverwechselbar ist.",
  "Du weißt genau, was nach dem ersten Monat kommt. Der Workflow läuft — mit oder ohne Workshop.",
];

export default function Transformation() {
  return (
    <section className="relative bg-darkbg noise-bg py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-darkbg2/50 to-darkbg pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-3 block">Der Unterschied</span>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Vorher. Nachher.
          </h2>
          <p className="font-body text-white/45 mt-3 text-base">
            Was sich für unsere Teilnehmerinnen verändert – ab dem ersten Sprint.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border border-white/8 bg-white/3 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/40 text-sm">✕</span>
                </div>
                <h3 className="font-display font-bold text-white/50 text-lg">Vorher</h3>
              </div>
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-white/20 text-base flex-shrink-0">—</span>
                    <p className="font-body text-white/40 text-[15px] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-2xl border border-brand/25 bg-brand/8 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-brand/20 flex items-center justify-center">
                  <span className="text-brand text-sm">✓</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg">Nach dem Sprint</h3>
              </div>
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-brand text-base flex-shrink-0">✓</span>
                    <p className="font-body text-white/80 text-[15px] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
