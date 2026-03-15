"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";
import CountdownTimer from "@/components/shared/CountdownTimer";

const valueItems = [
  { label: "6 Module AI Content Sprint + Aufzeichnung", value: "397 €" },
  { label: "Brand Voice Master-Briefing (KI-Fundament)", value: "197 €" },
  { label: "Fertiger 30-Tage-Content-Plan", value: "97 €" },
  { label: "Canva-Vorlagen-Set Social Media", value: "49 €" },
  { label: "Community & persönlicher Support (Beta)", value: "147 €" },
  { label: "BONUS: KI Fotostudio", value: "97 €" },
];

const totalValue = "984 €";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-darkbg noise-bg py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] bg-cta/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <span className="section-label mb-4 block">Investition</span>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            47&nbsp;€ – einmalig.
            <br />
            <span className="text-gradient">Für ein System, das bleibt.</span>
          </h2>
          <p className="font-body text-white/50 text-base mt-4 max-w-md mx-auto">
            Einmalige Zahlung. Dauerhafter Zugang. Amortisiert sich nach dem ersten Monat.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm p-8 md:p-10">

            {/* Value breakdown */}
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/35 mb-4">
              Was du bekommst – und was es wert ist
            </p>
            <div className="space-y-2 mb-6">
              {valueItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <span className="font-body text-white/55 text-sm leading-snug">{item.label}</span>
                  <span className="font-mono text-sm text-white/35 tabular-nums flex-shrink-0">{item.value}</span>
                </div>
              ))}
              {/* Divider + total */}
              <div className="border-t border-white/10 pt-3 mt-3 flex items-center justify-between">
                <span className="font-body text-white/45 text-sm">Gesamtwert</span>
                <span className="font-mono text-base text-white/40 line-through tabular-nums">{totalValue}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-1 mt-6">
              <span className="font-mono text-6xl font-bold text-white tabular-nums">47&nbsp;€</span>
              <div className="pb-2">
                <p className="font-mono text-sm text-white/30 line-through">97&nbsp;€</p>
                <p className="font-mono text-xs text-brand uppercase tracking-wide">Beta-Preis</p>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm mb-2">
              Einmalige Zahlung · MwSt. inkl. · Sofortiger Zugang nach Zahlung
            </p>
            <p className="font-body text-white/25 text-xs mb-8 leading-relaxed">
              * Der Sprint selbst ist einmalig. Für die genutzten Tools (z.&nbsp;B. ChatGPT, Canva) können eigene Konten nötig sein – meist reicht die Gratis-Version.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <CTAButton size="large" fullWidth />

              {/* Countdown */}
              <div className="mt-4 w-full text-center">
                <CountdownTimer compact />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
