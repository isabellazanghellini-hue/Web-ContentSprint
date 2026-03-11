"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";

const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    headline: "Generisch trotz KI",
    text: "Du öffnest ChatGPT, gibst dein Thema ein – und 20 Minuten später hast du Text, der sich anfühlt wie von jemandem anderen geschrieben.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    headline: "Feed ohne Gesicht",
    text: "Du schaust auf deinen Instagram-Feed und denkst: Das könnte von irgendjemand sein. Kein roter Faden, keine unverwechselbare Energie, keine Persönlichkeit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    headline: "Expertise unsichtbar",
    text: "Du weißt genau, was du kannst. Aber wenn deine Wunschkundin dein Profil besucht, sieht sie es nicht. Die Expertise steckt in dir – nicht in deinem Content.",
  },
];

export default function Problem() {
  return (
    <section className="bg-lightbg py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl font-bold text-bodytext md:text-5xl mb-3">
            Erkennst du dich?
          </h2>
          <p className="font-body text-bodytext/45 text-base mb-16">
            Du bist nicht allein. Das höre ich von fast jeder selbstständigen Frau.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {painPoints.map((point, i) => (
            <AnimatedSection key={i} delay={0.15 + i * 0.12}>
              <div className="card-bordered p-8 h-full text-left hover:shadow-md transition-all duration-300 group hover:border-brand/30">
                <div className="text-brand mb-4 group-hover:text-brand-light transition-colors duration-300">
                  {point.icon}
                </div>
                <h3 className="font-display font-bold text-bodytext text-base mb-2">
                  {point.headline}
                </h3>
                <p className="font-body text-bodytext/65 leading-relaxed text-[15px]">
                  {point.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="font-body text-xl font-semibold text-bodytext max-w-lg mx-auto leading-snug">
            Das ist kein Talent-Problem.{" "}
            <span className="text-brand">Das ist ein Fundament-Problem.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
