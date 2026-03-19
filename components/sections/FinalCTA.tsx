"use client";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";
import CountdownTimer from "@/components/shared/CountdownTimer";

export default function FinalCTA() {
  return (
    <section className="relative bg-darkbg noise-bg py-32 px-6 overflow-hidden">
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-brand/12 blur-[130px] rounded-full" />
      </div>

      {/* Floating bird – top right */}
      <div className="absolute top-10 right-8 md:right-20 opacity-60 pointer-events-none rotate-6">
        <Image src="/images/vogel-frei.png" alt="" width={90} height={90}
          className="drop-shadow-[0_8px_24px_rgba(128,68,216,0.4)]" />
      </div>

      {/* Floating bird – bottom left */}
      <div className="absolute bottom-16 left-8 md:left-20 opacity-30 pointer-events-none -rotate-12 scale-75">
        <Image src="/images/vogel-frei.png" alt="" width={70} height={70} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">

        {/* Opening */}
        <AnimatedSection>
          <p className="font-body text-white/45 text-sm tracking-[0.2em] uppercase font-mono mb-4">
            Der Unterschied zwischen
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            generischem Content
            <br />
            <span className="text-white/35 text-2xl md:text-3xl font-medium">und einer</span>
            <br />
            <span className="text-gradient">unverwechselbaren Marke</span>
          </h2>
        </AnimatedSection>

        {/* The reveal */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-1">
            <p className="font-display text-2xl md:text-3xl font-bold text-white/40">
              ist kein Talent.
            </p>
            <p className="font-display text-3xl md:text-4xl font-bold text-white">
              Es ist ein System.
            </p>
          </div>
        </AnimatedSection>

        {/* Bridge */}
        <AnimatedSection delay={0.3}>
          <p className="font-display text-2xl md:text-3xl font-bold text-brand">
            Dieses Fundament baust du im AI Content Sprint.
          </p>
        </AnimatedSection>

        {/* Empathy + pivot */}
        <AnimatedSection delay={0.4}>
          <div className="space-y-4 text-left max-w-lg mx-auto">
            {[
              "Du hast genug gelernt.",
              "Du hast genug Tools installiert.",
              "Du hast genug Content erstellt, der sich nicht richtig angefühlt hat.",
            ].map((line, i) => (
              <p key={i} className="font-body text-white/50 text-base leading-relaxed">
                {line}
              </p>
            ))}
            <div className="h-px w-16 bg-brand/30 my-6" />
            <div className="space-y-2">
              <p className="font-body text-white/80 text-base font-semibold">Kein Excel-Chaos mehr. Keine 20 ungeordneten GPT-Chats.</p>
              <p className="font-body text-white/80 text-base font-semibold">Kein Workshop, nach dem du nicht weißt, wie es weitergeht.</p>
            </div>
            <div className="space-y-1 pt-2">
              <p className="font-body text-white/70 text-base">Einmal das Fundament legen.</p>
              <p className="font-body text-white/70 text-base">Einmal den Workflow aufbauen.</p>
              <p className="font-body text-white font-bold text-lg">
                Und dann läuft es — jeden Monat. In deiner Stimme.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Outcome vision */}
        <AnimatedSection delay={0.5}>
          <div className="space-y-4">
            {[
              "Du öffnest dein Content-Tool und weißt sofort, was du posten kannst.",
              "Du erstellst Wochencontent in Minuten – ohne dass er sich generisch anfühlt.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3 text-left">
                <span className="mt-1 text-brand flex-shrink-0">✓</span>
                <p className="font-body text-white/70 text-base leading-relaxed">{line}</p>
              </div>
            ))}
            <p className="font-body text-white/80 font-semibold text-base pt-2 text-center">
              Und deine Wunschkundin erkennt endlich:
              <br />
              <span className="text-gradient text-xl font-bold">Das ist deine Stimme.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Closing statement */}
        <AnimatedSection delay={0.6}>
          <p className="font-mono text-white/35 text-xs tracking-[0.25em] uppercase">
            6 Module &nbsp;·&nbsp; Ein System &nbsp;·&nbsp; Dein Content – endlich nach dir
          </p>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.7}>
          <CTAButton size="large" />
          <p className="mt-5 font-body text-xs text-white/25 tracking-wide">
            ★★★★★ &nbsp;Limitierte Beta-Plätze &nbsp;·&nbsp; 97&nbsp;€ statt 299&nbsp;€ &nbsp;·&nbsp; 100% Garantie
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.85} className="pt-4">
          <CountdownTimer />
        </AnimatedSection>

      </div>
    </section>
  );
}
