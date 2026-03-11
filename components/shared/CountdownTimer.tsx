"use client";
import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-23T23:59:59");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = TARGET.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

export default function CountdownTimer({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <p className="font-mono text-sm text-accent/80">
        Early Bird abgelaufen – Normalpreis 147 €
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Tage" },
    { value: timeLeft.hours, label: "Std" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sek" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70">
        ⏳ Early Bird endet am 23. März 2026
      </p>
      <div className="flex items-center gap-1.5 sm:gap-2">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-1.5 sm:gap-2">
            <div
              className={`flex flex-col items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${
                compact ? "min-w-[44px] px-2 py-1.5" : "min-w-[52px] px-3 py-2"
              }`}
            >
              <span
                className={`font-mono font-bold tabular-nums text-white ${
                  compact ? "text-xl" : "text-2xl"
                }`}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-0.5 text-[9px] uppercase tracking-widest text-white/40">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="-mt-3 font-mono text-lg text-white/20">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
