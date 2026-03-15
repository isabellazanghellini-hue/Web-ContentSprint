"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ABLEFY_URL =
  "https://myablefy.com/s/isabella-zanghellini/contentsprint/payment";
const TARGET = new Date("2026-03-23T23:59:59");

interface CTAButtonProps {
  size?: "default" | "large";
  className?: string;
  label?: string;
}

export default function CTAButton({
  size = "default",
  className = "",
  label,
}: CTAButtonProps) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const check = () => setExpired(new Date() >= TARGET);
    check();
    const timer = setInterval(check, 30000);
    return () => clearInterval(timer);
  }, []);

  const defaultLabel = expired
    ? "→ Jetzt kaufen – Normalpreis 97 €"
    : "→ Jetzt dabei sein – 47 € Early Bird";

  const buttonLabel = label ?? defaultLabel;

  return (
    <Link
      href={ABLEFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        rounded-full bg-cta font-body font-semibold text-white
        transition-all duration-300
        hover:bg-cta-hover hover:shadow-[0_0_40px_rgba(63,140,255,0.6)]
        active:scale-[0.97]
        ${size === "large" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base"}
        ${className}
      `}
    >
      {buttonLabel}
    </Link>
  );
}
