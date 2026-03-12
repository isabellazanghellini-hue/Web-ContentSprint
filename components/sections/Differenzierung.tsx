"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Differenzierung() {
  return (
    <section className="bg-lightbg py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="space-y-6 font-body text-bodytext/70 text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-bodytext">
              Warte mal kurz.
            </p>

            <p>
              Ich war selbst mal Teilnehmerin in so einem KI-Content-Workshop.
            </p>

            <p>
              30 Tage Content-Ideen. An einem Nachmittag generiert. Ich war begeistert.
            </p>

            <p>
              Was ich danach bekommen habe: eine Excel-Liste. Ich hasse Excel.
            </p>

            <p>
              Ich habe nichts gepostet. Nicht einen einzigen Post. Weil ich nicht wusste, was
              ich mit dieser Masse an Ideen überhaupt anfangen soll. Kein System. Nur Ablage.
            </p>

            <p>
              Dann kamen Custom GPTs. Auch probiert. Für einzelne Aufgaben: toll. Für
              Content-Planung: 20 ungeordnete Chats, kein roter Faden, kein Überblick. Am
              Ende weißt du nicht mehr, wo dir der Kopf steht.
            </p>

            <div className="border-l-2 border-brand pl-6 py-2 space-y-3 my-8">
              <p className="font-semibold text-bodytext text-xl">
                Kein Excel-Chaos. Keine 20 ungeordneten GPT-Chats.
                <br />
                <span className="text-brand">Ein Workflow — einmal gelernt, jeden Monat wiederholt.</span>
              </p>
            </div>

            <p>
              Andere Kurse geben dir 30 Tage Content und winken tschüss.
              Im AI Content Sprint lernst du das System, das danach weiterläuft.
            </p>

            <p>
              Nicht weil du fleißiger sein sollst.
              <br />
              Sondern weil du es das erste Mal wirklich zu Ende machst.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
