"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";

const benefits = [
  {
    number: "10",
    unit: "Plätze",
    title: "Kein Massenangebot",
    desc: "Du bist nicht Teilnehmerin Nummer 847. Du bekommst direkten Zugang zu Isabella und kannst Fragen stellen, die wirklich beantwortet werden.",
  },
  {
    number: "47",
    unit: "€",
    title: "Niedrigster Preis je",
    desc: "Der Early-Bird-Preis gilt nur bis Montag. Danach steigt er auf 97 €. Wer jetzt dabei ist, sichert sich den günstigsten Einstieg – dauerhaft.",
  },
  {
    number: "100",
    unit: "%",
    title: "Dein Feedback zählt",
    desc: "Du beeinflusst direkt, wie der AI Content Sprint wächst. Beta-Teilnehmerinnen gestalten das finale Produkt – deine Stimme hat Gewicht.",
  },
  {
    number: "1.",
    unit: "Runde",
    title: "Community + mehr",
    desc: "Du bist Teil der allerersten Runde. Es wird eine Community geben – und als Beta-Teilnehmerin bekommst du mehr persönliche Unterstützung, als später regulär möglich sein wird. Möglicherweise inkl. 1:1-Call mit Isabella.",
  },
];

export default function BetaLaunch() {
  return (
    <section className="relative bg-darkbg2 noise-bg py-28 px-6 overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand/15 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 py-2 font-mono text-xs tracking-[0.18em] text-brand uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Beta-Launch
          </span>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Warum Beta?
            <br />
            <span className="text-gradient">Weil du davon profitierst.</span>
          </h2>
          <p className="font-body text-white/50 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Der AI Content Sprint startet zum ersten Mal – und genau das ist deine Chance.
            Hier ist, was das für dich bedeutet:
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/8 bg-white/4 p-8 h-full hover:border-brand/30 hover:bg-brand/5 transition-colors duration-300"
              >
                {/* Big number */}
                <div className="mb-4">
                  <span className="font-mono text-5xl font-bold text-brand/70 tabular-nums">
                    {b.number}
                  </span>
                  <span className="font-mono text-xl text-brand/40 ml-1">{b.unit}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">
                  {b.title}
                </h3>
                <p className="font-body text-white/55 text-[15px] leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Price justification */}
        <AnimatedSection delay={0.5}>
          <div className="rounded-2xl border border-white/10 bg-white/4 p-8 mb-10 space-y-4">
            <h3 className="font-display font-bold text-white text-xl">
              Was du für 47 € bekommst – und warum es das wert ist.
            </h3>
            <p className="font-body text-white/65 text-[15px] leading-relaxed">
              Weil du nicht Teilnehmerin Nummer 847 in einem Videokurs bist.
            </p>
            <p className="font-body text-white/65 text-[15px] leading-relaxed">
              Du bekommst direkten Zugang zu mir. Fragen, die wirklich beantwortet werden.
              Ein System, das auf echtem Personal-Branding-Fundament steht — nicht nur auf Content-Produktion.
            </p>
            <p className="font-body text-white/65 text-[15px] leading-relaxed">
              Und du bekommst das KI Fotostudio dazu. Professionelle Markenbilder ohne Shooting.
              Das allein ist mehr wert als die Differenz.
            </p>
            <p className="font-body text-white/90 font-semibold text-base">
              10 Plätze. Wenn sie weg sind, sind sie weg.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6} className="text-center">
          <CTAButton size="large" />
        </AnimatedSection>
      </div>
    </section>
  );
}
