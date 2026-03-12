"use client";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

const modules = [
  {
    num: "01",
    title: "Brand Voice Master-Briefing",
    intro: "Das Wichtigste zuerst.",
    body: "Bevor du auch nur einen einzigen Post schreibst, klären wir: Wer bist du - in Worten, die deine KI versteht? In diesem Modul erstellst du dein persönliches Brand Voice Briefing. Das ist kein Fragebogen, den du einmal ausfüllst und dann vergisst. Das ist das Dokument, das ab sofort bei jedem Prompt sitzt - und dafür sorgt, dass dein Output nicht nach ChatGPT klingt. Sondern nach dir.",
    output: "Dein fertiges Brand Voice Briefing - ein Dokument, das du ab sofort jedem KI-Prompt voranstellst.",
  },
  {
    num: "02",
    title: "Zielgruppen Deep Research",
    intro: "Nicht googeln. Wirklich verstehen.",
    body: "Die meisten kennen ihre Zielgruppe - oberflächlich. Frauen, 35+, selbstständig. Toll. Das bringt dir keinen einzigen Post, der wirklich trifft. In diesem Modul gehst du tiefer. Du findest heraus, was deine Wunschkundin nachts nicht schlafen lässt. Was sie googelt, wenn niemand zuschaut. Was sie wirklich kauft - und warum. Und plötzlich schreibst du keine Posts mehr ins Leere. Woanders kostet das extra. Hier ist es Modul 02.",
    output: "Ein tiefes Zielgruppenprofil, das deine KI ab sofort bei jedem Content-Auftrag mitdenkt.",
  },
  {
    num: "03",
    title: "Deine Content-Säulen",
    intro: "Kein leeres Blatt. Nie wieder.",
    body: "Du sitzt vor Instagram und denkst: Worüber soll ich heute eigentlich schreiben? Das endet hier. In diesem Modul definierst du deine 3 bis 5 Kernthemen - klar, strategisch, zu dir passend. Ab sofort weißt du immer, worüber du sprichst. Und noch wichtiger: warum.",
    output: "Deine definierten Content-Säulen und ein Themenrahmen, der dir für jeden Monat als Kompass dient.",
  },
  {
    num: "04",
    title: "Content mit KI erstellen",
    intro: "Einen Monat Content. Eine Session.",
    body: "Hier passiert das, weswegen du dabei bist. Mit deinem Brand Voice Briefing, deiner Zielgruppenkenntnis und deinen Säulen planst du 30 Tage Content - in einer einzigen Arbeitseinheit. In deiner Sprache. Nicht in ChatGPT-Deutsch. Kein Raten. Kein Neuanfangen. Kein: das klingt doch wieder wie alle anderen. 30 Tage. Eine Session. Jeden Monat wiederholbar.",
    output: "Dein fertiger 30-Tage-Contentplan - in deiner Sprache, bereit zum Weiterverarbeiten.",
  },
  {
    num: "05",
    title: "Canva-Vorlagen vorbereiten",
    intro: "Einmal einrichten. Immer nutzen.",
    body: "Guter Content, der visuell nicht zu dir passt - ist halb so wirksam. In diesem Modul richtest du deine Canva-Vorlagen so ein, dass jeder Post sofort nach dir aussieht. Farben, Schriften, Layouts - alles einmal festgelegt. Dann per Batch-Erstellung in Minuten befüllt. Design ohne Designstress. Branding, das in jedem Post stimmt.",
    output: "Ein fertiges Canva-Vorlagen-Set, das du per Batch-Erstellung für jeden Monat befüllst.",
  },
  {
    num: "06",
    title: "Posts fertigstellen",
    intro: "Wochencontent in unter 15 Minuten. Ja, wirklich.",
    body: "Das klingt nach Versprechen. Ist aber System. In diesem Modul zeige ich dir, wie du deinen fertigen 30-Tage-Plan in echte Posts verwandelst - schnell, konsistent, ohne Qualitätsverlust. Mit Canva Batch-Erstellung erstellst du mehrere Posts auf einmal, statt jeden einzeln zu bauen. Ab jetzt postest du regelmäßig. Nicht weil du musst. Weil du ein System hast, das weiterläuft.",
    output: "Dein erster fertiger Wochencontent - bereit zum Posten. Und der Workflow, den du jeden Monat wiederholst.",
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
            Kein fluffiges Theorie-Wissen. Alles ist direkt anwendbar - noch am gleichen Tag.
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
                <div className="flex-1">
                  <p className="font-body text-brand/70 text-xs font-semibold tracking-wide uppercase mb-1">
                    {mod.intro}
                  </p>
                  <h3 className="font-display text-lg font-bold text-bodytext mb-2">
                    {mod.title}
                  </h3>
                  <p className="font-body text-bodytext/60 text-[15px] leading-relaxed mb-3">
                    {mod.body}
                  </p>
                  <p className="font-body text-brand/80 text-[14px] font-medium border-l-2 border-brand/30 pl-3">
                    Du gehst raus mit: {mod.output}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bonus: KI Fotostudio */}
        <AnimatedSection delay={0.6}>
          <div className="rounded-2xl border border-cta/25 bg-cta/5 overflow-hidden hover:border-cta/45 transition-all duration-300">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-3 mb-3">
                <Image src="/images/vogel-frei.png" alt="" width={36} height={36} className="flex-shrink-0" />
                <h3 className="font-display font-bold text-bodytext text-base">
                  BONUS: KI Fotostudio
                </h3>
              </div>
              <div className="pl-[48px] space-y-3 mb-4">
                <p className="font-body text-bodytext/70 text-sm leading-relaxed font-semibold">
                  Weil ein Fotoshooting auch 2026 noch 300-800 Euro kostet. Und trotzdem stressig ist.
                </p>
                <p className="font-body text-bodytext/60 text-sm leading-relaxed">
                  Du kennst das: Du willst endlich ein aktuelles Profilbild. Also terminierst du, suchst ein Outfit, bist den halben Tag weg - und am Ende hast du 3 Fotos, die du halbwegs magst.
                </p>
                <p className="font-body text-bodytext/60 text-sm leading-relaxed">
                  Im AI Content Sprint zeige ich dir, wie du aus einem einzigen Handyfoto ein ganzes Bildportfolio erstellst. Verschiedene Looks. Verschiedene Hintergründe. Verschiedene Szenen. Professionell. Authentisch. Ohne Fotografin.
                </p>
                <p className="font-body text-bodytext/60 text-sm leading-relaxed">
                  Und das Beste: Du kannst es jederzeit wiederholen - wenn du ein neues Angebot launcht, neue Farben trägst, oder einfach mal Lust auf etwas Neues hast.
                </p>
                <p className="font-body text-brand/80 text-sm font-semibold">
                  Das gibt es woanders nicht. Das ist hier inklusive.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <Image
                src="/images/ki-bilder.png"
                alt="KI Fotostudio - Beispiele"
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
