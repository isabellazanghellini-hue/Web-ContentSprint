"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CoreMessage() {
  return (
    <section className="relative bg-darkbg noise-bg py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-brand/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <span className="section-label mb-8 block">Die Wahrheit</span>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
            Canva macht dich nicht
            <br />
            <span className="text-gradient">unverwechselbar. KI auch nicht.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="mt-8 space-y-5 font-body text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              Wer KI einsetzt, ohne das Fundament gelegt zu haben, bekommt
              generischen Output. Jeden Tag. Ohne Ausnahme.
            </p>
            <p>
              Das liegt nicht an der KI. Das liegt daran, dass die KI noch nicht{" "}
              <span className="text-muted font-medium">weiß, wer du wirklich bist.</span>
            </p>
            <p className="text-white/80 font-semibold text-xl">
              Im AI Content Sprint vermittelst du ihr genau das.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[100px] bg-brand/30" />
            <span className="text-brand/40 text-xl">✦</span>
            <div className="h-px flex-1 max-w-[100px] bg-brand/30" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
