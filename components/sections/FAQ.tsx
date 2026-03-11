"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const faqs = [
  {
    q: "Ich habe keine Erfahrung mit KI. Ist das trotzdem für mich?",
    a: "Ja – und eigentlich sogar besser so. Du baust von Anfang an das richtige Fundament, statt schlechte Gewohnheiten umzulernen. Wir starten bei null und du verlässt den Sprint mit einem System, das sofort funktioniert.",
  },
  {
    q: "Ich nutze KI schon – was bringt mir der Sprint dann noch?",
    a: "Sehr wahrscheinlich das Wichtigste: Das Brand Voice Master-Briefing. Die meisten KI-Nutzerinnen prompten ohne Fundament – und bekommen deshalb generischen Output. Im Sprint vermittelst du der KI, wer du wirklich bist. Das verändert alles.",
  },
  {
    q: "Wie viel Zeit muss ich investieren?",
    a: "Geplant sind 5 Tage à ca. 1 Stunde – also insgesamt rund 5 Stunden. Die meisten Inhalte lassen sich zügig durcharbeiten. Einzig der Canva-Aufbau kann je nach deinem Ausgangspunkt variieren: Hast du bereits Vorlagen oder ein bestehendes Design-Setup, geht es deutlich schneller. Startest du von null, plane etwas mehr Zeit ein. Das Tempo liegt bei dir – die Aufzeichnung bleibt dauerhaft, du kannst jederzeit pausieren und weitermachen.",
  },
  {
    q: "Ich bin nicht sicher, ob mein Business schon groß genug ist.",
    a: "Das ist kein Kriterium. Der AI Content Sprint ist für Frauen, die sichtbar werden wollen – egal ob du gerade startest oder schon läuft. Je früher du das Fundament legst, desto schneller wächst deine Reichweite.",
  },
  {
    q: "Was ist der Unterschied zu anderen KI-Kursen?",
    a: "Wir zeigen dir keine Tools – wir bauen dein System. Der Fokus liegt nicht auf Prompts kopieren, sondern auf deiner Marke, deiner Stimme und deinem spezifischen Content-System. Das ist grundlegend anders als '1000 ChatGPT-Prompts für dein Business'.",
  },
  {
    q: "Was passiert, wenn mir der Sprint nicht gefällt?",
    a: "Dann erstattest du deinen vollen Betrag – kein Kleingedrucktes, keine Begründung notwendig. Innerhalb von 7 Tagen nach dem Sprint. Ich stehe hinter dem Ergebnis, das du erzielen wirst.",
  },
  {
    q: "Wie lange habe ich Zugang zu den Inhalten?",
    a: "Dauerhaft. Du bekommst die vollständige Aufzeichnung und alle Materialien zum Download. Kein Ablaufdatum, keine Mitgliedschaft erforderlich.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-bodytext/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-body font-semibold text-bodytext text-[15px] leading-snug group-hover:text-brand transition-colors duration-200">
          {q}
        </span>
        <span
          className={`mt-0.5 flex-shrink-0 text-brand/60 text-xl transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body text-bodytext/60 text-[15px] leading-relaxed pb-5 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-lightbg-2 py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label mb-3 block">FAQ</span>
          <h2 className="font-display text-4xl font-bold text-bodytext md:text-5xl">
            Noch Fragen?
          </h2>
          <p className="font-body text-bodytext/50 text-base mt-3">
            Hier sind die häufigsten – ehrlich beantwortet.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-bodytext/8 bg-white/60 p-6 md:p-8">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
