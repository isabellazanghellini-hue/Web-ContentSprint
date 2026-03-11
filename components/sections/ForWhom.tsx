"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";

const forYou = [
  "Du bist selbstständig oder im Aufbau – als Coach, Beraterin, Expertin oder Kreative.",
  "Du nutzt bereits KI-Tools, aber die Ergebnisse klingen nicht nach dir.",
  "Du willst regelmäßig und ohne Burnout präsent sein – online und authentisch.",
  "Du suchst kein weiteres Tool, sondern ein System, das wirklich funktioniert.",
  "Du weißt, was du kannst – und willst, dass deine Wunschkundin das auch sieht.",
];

const notForYou = [
  "Du suchst Quick Fixes oder Copy-Paste-Inhalte ohne eigene Stimme.",
  "Du willst gar kein System – du postest lieber spontan und unregelmäßig.",
  "Du erwartest, dass KI alles alleine macht, ohne Briefing und Strategie.",
  "Du bist noch komplett am Anfang und hast noch keine Idee, was du anbietest.",
];

export default function ForWhom() {
  return (
    <section className="bg-lightbg py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-3 block">Passt das zu dir?</span>
          <h2 className="font-display text-4xl font-bold text-bodytext md:text-5xl">
            Ehrlich gesagt –{" "}
            <span className="text-brand">nicht für alle.</span>
          </h2>
          <p className="font-body text-bodytext/50 text-base mt-4 max-w-md mx-auto">
            Der AI Content Sprint ist intensiv und direkt. Das ist Absicht.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For you */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border border-brand/20 bg-brand/4 p-8 h-full">
              <h3 className="font-display font-bold text-bodytext text-xl mb-6 flex items-center gap-2">
                <span className="text-brand">✓</span> Das ist für dich
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-brand text-sm flex-shrink-0">✓</span>
                    <p className="font-body text-bodytext/70 text-[15px] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Not for you */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-2xl border border-bodytext/10 bg-bodytext/3 p-8 h-full">
              <h3 className="font-display font-bold text-bodytext text-xl mb-6 flex items-center gap-2">
                <span className="text-bodytext/30">✕</span> Eher nichts für dich
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-bodytext/25 text-sm flex-shrink-0">✕</span>
                    <p className="font-body text-bodytext/45 text-[15px] leading-relaxed">{item}</p>
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
