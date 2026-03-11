"use client";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

const modules = [
  {
    num: "01",
    title: "Brand Voice Master-Briefing",
    desc: "Das Fundament. Einmal erstellt – ab sofort klingt jede KI nach dir, nicht nach ChatGPT.",
  },
  {
    num: "02",
    title: "Zielgruppen Deep Research",
    desc: "Tiefer als Googeln. Du verstehst, was deine Wunschkundin wirklich bewegt, fühlt und sucht.",
  },
  {
    num: "03",
    title: "Deine Content-Säulen",
    desc: "Deine Kernthemen – klar definiert. Kein leeres Blatt, keine Sinnlosigkeit mehr.",
  },
  {
    num: "04",
    title: "Content mit KI erstellen",
    desc: "Einen ganzen Monat Content geplant. In einer Session. In deiner Sprache.",
  },
  {
    num: "05",
    title: "Canva-Vorlagen vorbereiten",
    desc: "Einmal einrichten, immer nutzen. Dein Branding stimmt in jedem einzelnen Post.",
  },
  {
    num: "06",
    title: "Posts fertigstellen",
    desc: "Wochencontent in unter 15 Minuten. Ernst gemeint – ohne Qualitätsverlust.",
  },
];

export default function Modules() {
  return (
    <section className="bg-lightbg py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-3 block">Was dich erwartet</span>
          <h2 className="font-display text-4xl font-bold text-bodytext md:text-5xl">
            6 Module. Ein System.{" "}
            <span className="text-brand">Deine Stimme.</span>
          </h2>
          <p className="font-body text-bodytext/50 text-base mt-4 max-w-xl mx-auto">
            Kein fluffiges Theorie-Wissen. Alles ist direkt anwendbar – noch am gleichen Tag.
          </p>
        </AnimatedSection>

        {/* Module cards */}
        <div className="space-y-4 mb-10">
          {modules.map((mod, i) => (
            <AnimatedSection key={mod.num} delay={0.1 + i * 0.08}>
              <div className="flex items-start gap-5 card-bordered p-6 hover:shadow-md transition-all duration-300 hover:border-brand/35 group">
                <span className="font-mono text-2xl font-bold text-brand/30 group-hover:text-brand/50 transition-colors duration-300 min-w-[3rem] pt-0.5">
                  {mod.num}
                </span>
                <div className="w-0.5 self-stretch bg-brand/20 group-hover:bg-brand/40 rounded-full transition-colors duration-300" />
                <div>
                  <h3 className="font-display text-lg font-bold text-bodytext mb-1">
                    {mod.title}
                  </h3>
                  <p className="font-body text-bodytext/60 text-[15px] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bonus: KI Fotostudio – full width with image */}
        <AnimatedSection delay={0.6}>
          <div className="rounded-2xl border border-cta/25 bg-cta/5 overflow-hidden hover:border-cta/45 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/images/vogel-frei.png" alt="" width={36} height={36} className="flex-shrink-0" />
                <h3 className="font-display font-bold text-bodytext text-base">
                  BONUS: KI Fotostudio
                </h3>
              </div>
              <p className="font-body text-bodytext/60 text-sm leading-relaxed pl-[48px] mb-4">
                Professionelle Markenbilder aus einem einzigen Handyfoto. Verschiedene Hintergründe, Kleidung, Szenen – alles generiert mit KI. Dein professionelles Foto-Portfolio ohne Fotoshooting.
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src="/images/ki-bilder.png"
                alt="KI Fotostudio – Beispiele"
                width={900}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Bonus: Automation */}
        <AnimatedSection delay={0.72}>
          <div className="mt-4 rounded-2xl border border-cta/25 bg-cta/5 p-6 hover:border-cta/45 hover:bg-cta/8 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/images/vogel-frei.png" alt="" width={36} height={36} className="flex-shrink-0" />
              <h3 className="font-display font-bold text-bodytext text-base">
                BONUS: Automation mit Make
              </h3>
            </div>
            <p className="font-body text-bodytext/60 text-sm leading-relaxed pl-[48px]">
              Für alle, die einen Schritt weitergehen wollen: Wie du deinen Content-Workflow automatisierst, sodass Posts sich fast von selbst veröffentlichen.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
