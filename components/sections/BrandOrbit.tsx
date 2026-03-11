"use client";
import { motion } from "framer-motion";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";

const items = [
  { text: "KLARHEIT" },
  { text: "STIMME" },
  { text: "SYSTEM" },
  { text: "SICHTBARKEIT" },
];

export default function BrandOrbit() {
  return (
    <section className="bg-darkbg py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-4">Das Fundament</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Vier Bausteine.
            <br />
            <span className="text-gradient">Ein unverwechselbarer</span>
            <br />
            Auftritt.
          </h2>
          <p className="font-body text-white/55 text-lg leading-relaxed mb-8">
            Im AI Content Sprint baust du die vier Grundpfeiler, die deinen Content
            von generischem KI-Output unterscheiden. Deine Marke, in der KI verankert.
          </p>
          <ul className="space-y-3 font-body text-white/65">
            {[
              ["Klarheit", "Wer du bist und wen du ansprichst – kristallklar"],
              ["Stimme", "Wie du klingst – und nur du allein"],
              ["System", "Workflows, die ohne ständigen Aufwand laufen"],
              ["Sichtbarkeit", "Content, der gefunden wird und bleibt"],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <span className="text-white font-semibold">{title}:</span>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Orbit side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <CircularRevealHeading
            items={items}
            size="lg"
            centerText={
              <div className="flex flex-col items-center gap-1 text-center">
                <span
                  className="font-display font-bold text-xl leading-tight"
                  style={{ color: "#E8D8FF" }}
                >
                  AI Content
                </span>
                <span
                  className="font-display font-bold text-xl leading-tight"
                  style={{ color: "#E8D8FF" }}
                >
                  Sprint
                </span>
                <div className="mt-2 h-px w-12 bg-brand/40" />
                <span
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mt-1"
                  style={{ color: "#A46BE4" }}
                >
                  FemBrand Studio
                </span>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
