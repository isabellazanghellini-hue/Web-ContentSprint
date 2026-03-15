"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
import CTAButton from "@/components/shared/CTAButton";

export default function Hero() {
  return (
    <section className="relative bg-darkbg noise-bg overflow-hidden">
      <LampContainer>
        {/* Beta badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-darkbg/80 backdrop-blur-sm px-5 py-2 font-mono text-xs tracking-[0.18em] text-white uppercase shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Beta-Launch &nbsp;·&nbsp; Startet 23. März 2026
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-center text-4xl font-bold leading-[1.12] text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          Du nutzt KI täglich.
          <br />
          <span className="text-gradient">
            Warum klingt dein Content
          </span>
          <br />
          trotzdem nicht nach dir?
        </motion.h1>

        {/* Sub-Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 text-center font-body text-lg text-white/55 max-w-xl leading-relaxed"
        >
          Die KI ist gut. Sie kennt nur noch nicht dich.{" "}
          <span className="text-white/80 font-medium">
            Genau das ändern wir
          </span>{" "}
          — in 6 Modulen, die du sofort anwenden kannst.
        </motion.p>

        {/* Value proposition line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-4 text-center font-mono text-sm text-muted/70 tracking-wide"
        >
          6 Module &nbsp;·&nbsp; Beta: 10 Plätze &nbsp;·&nbsp; Ein System, das sich wiederholt
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10"
        >
          <CTAButton size="large" />
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-5 text-center font-body text-xs text-white/30 tracking-wide"
        >
          ★★★★★ &nbsp;Limitierte Beta-Plätze &nbsp;·&nbsp; 47&nbsp;€ statt 97&nbsp;€ &nbsp;·&nbsp; 100% Geld-zurück-Garantie
        </motion.p>
      </LampContainer>

      {/* Product image – transparent bg, no box-shadow box */}
      <div className="relative -mt-48 z-10 flex justify-center pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl w-full"
        >
          <div className="absolute -inset-8 bg-brand/10 blur-[60px] rounded-full" />
          <Image
            src="/images/product-overview-transparent.png"
            alt="AI Content Sprint – Kursübersicht"
            width={800}
            height={520}
            className="relative w-full h-auto drop-shadow-[0_20px_60px_rgba(128,68,216,0.3)]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
