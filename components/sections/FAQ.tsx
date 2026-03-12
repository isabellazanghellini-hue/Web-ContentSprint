"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const faqs = [
  {
    q: "Ich habe keine Erfahrung mit KI. Ist das trotzdem fur mich?",
    a: "Ja. Und ich sag es direkt: Der Sprint ist sogar besonders fur dich gemacht. Wer noch keine KI-Gewohnheiten hat, baut keine schlechten Gewohnheiten um. Du faengst sauber an - mit einem System, das von Anfang an zu dir passt. Ich erklaere alles Schritt fur Schritt. Keine Vorkenntnisse noetig.",
  },
  {
    q: "Ich nutze KI schon - was bringt mir der Sprint dann noch?",
    a: "Dann weisst du genau, wovon ich rede: Du hast Prompts eingegeben, Text bekommen - und trotzdem das Gefuehl, das klingt nicht nach mir. Das liegt nicht an deinen Prompts. Das liegt daran, dass deine KI dich noch nicht kennt. Genau das aendern wir. Du bekommst ein Briefing-System, das deiner KI beibringt, wie du wirklich klingst. Und dann macht es ploetzlich Klick.",
  },
  {
    q: "Wie viel Zeit muss ich investieren?",
    a: "Der Sprint ist auf 5 intensive Tage ausgelegt - mit je ca. 60 bis 90 Minuten taeglich. Nach diesen 5 Tagen hast du alles: Brand Voice Briefing, 30-Tage-Contentplan, Canva-Vorlagen, KI Fotostudio, Make-Automation. Was du danach an Zeit sparst, macht das mehr als wett. Jeden Monat.",
  },
  {
    q: "Ich bin nicht sicher, ob mein Business schon gross genug ist.",
    a: "Genau jetzt ist der richtige Zeitpunkt. Ein Fundament baust du am Anfang - nicht wenn alles schon laeuft und du alles nochmal uminvestieren musst. Wenn du weisst, was du anbietest und wen du ansprechen willst: Du bist bereit.",
  },
  {
    q: "Was ist der Unterschied zu anderen KI-Kursen?",
    a: "Andere Kurse versprechen dir: 30 Tage Content in 90 Minuten. Das klingt gut - und funktioniert auch, wenn du einfach nur Posts willst. Aber wenn du eine erkennbare Marke aufbauen willst - eine, bei der deine Wunschkundin sofort denkt: Das ist sie - dann brauchst du mehr als einen schnellen Workflow. Du brauchst das Fundament. Wer du bist. Wie du klingst. Wen du wirklich ansprichst - tiefer als Frauen 35 Plus, selbstaendig. Das ist kein Upsell bei mir. Das ist der Ausgangspunkt. Und: Die Zielgruppen-Research, die woanders extra kostet - die ist hier Modul 02.",
  },
  {
    q: "Was passiert, wenn mir der Sprint nicht gefaellt?",
    a: "Dann bekommst du dein Geld zurueck. 100%. Ohne Diskussion. Ich glaube an das, was ich hier anbiete. Und ich will keine Teilnehmerin, die sich gezwungen fuehlt. Wenn es nach dem Sprint nicht das ist, was du erwartet hast - meld dich. Einfach so.",
  },
  {
    q: "Wie lange habe ich Zugang zu den Inhalten?",
    a: "Dauerhaft. Einmal drin, immer drin. Du kannst die Module in deinem Tempo durchgehen, nochmal ansehen, wenn du ein neues Angebot launcht - oder einfach deinen Workflow fuer naechsten Monat wiederholen. Das ist der Punkt: Das System laeuft weiter. Auch ohne mich.",
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
            Hier sind die haeufigsten - ehrlich beantwortet.
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
