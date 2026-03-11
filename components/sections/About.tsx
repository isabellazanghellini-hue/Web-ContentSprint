"use client";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function About() {
  return (
    <section className="bg-lightbg py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <AnimatedSection direction="left">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-brand/15 blur-2xl rounded-3xl" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-brand/20 shadow-xl">
                <Image
                  src="/images/isabella-portrait-2.png"
                  alt="Isabella Zanghellini – Personal Brand Consultant"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover"
                />

                {/* Personal Brand Logo + 18+ Strip – beide inside, am unteren Rand */}
                <div className="absolute bottom-0 left-0 right-0 bg-brand/85 backdrop-blur-sm">
                  {/* Logo zentriert über dem Strip */}
                  <div className="flex justify-center pt-3 pb-1">
                    <Image
                      src="/images/personal-brand-logo.png"
                      alt="Zertifizierte Personal Brand Consultant"
                      width={160}
                      height={80}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  {/* 18+ Jahre Text darunter */}
                  <div className="flex items-center justify-center gap-2 pb-3">
                    <span className="font-mono text-white font-bold text-sm tracking-wide">18+</span>
                    <span className="text-white/80 text-xs font-body">Jahre Design-Erfahrung</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-5">
              <span className="section-label">Über mich</span>
              <h2 className="font-display text-3xl font-bold text-bodytext md:text-4xl leading-tight">
                Hi, ich bin Isabella.
              </h2>
              <div className="space-y-4 font-body text-bodytext/70 leading-relaxed">
                <p>
                  Ich bin{" "}
                  <strong className="text-bodytext">zertifizierte Personal Brand Consultant</strong>{" "}
                  mit 18+ Jahren Design-Erfahrung und SPIEGEL-Bestseller-Autorin.
                </p>
                <p>
                  Ich helfe selbstständigen Frauen, ihr Branding von innen nach außen aufzubauen –
                  mit Klarheit, System und einer Stimme, die wirklich zu ihnen gehört.
                </p>
                <p>
                  Ich nutze KI täglich in meiner Arbeit. Und ich weiß genau, wo sie stark ist –
                  und wo sie ohne das richtige Fundament einfach generisch bleibt.
                </p>
                <p className="text-bodytext/80 font-medium">
                  Genau deshalb habe ich den AI Content Sprint entwickelt:{" "}
                  <span className="text-brand">
                    damit deine KI ab sofort nach dir klingt.
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full bg-brand/8 border border-brand/20 px-4 py-1.5 font-body text-xs text-brand font-medium">
                  SPIEGEL-Bestseller-Autorin
                </span>
                <span className="rounded-full bg-brand/8 border border-brand/20 px-4 py-1.5 font-body text-xs text-brand font-medium">
                  FemBrand Studio
                </span>
                <span className="rounded-full bg-brand/8 border border-brand/20 px-4 py-1.5 font-body text-xs text-brand font-medium">
                  Personal Branding seit 2008
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
