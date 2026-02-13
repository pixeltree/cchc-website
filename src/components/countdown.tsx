"use client";

import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-23T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-cchc-red to-red-700">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center text-white">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-8 w-8 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                Time is Running Out
              </h2>
              <AlertTriangle className="h-8 w-8 animate-pulse" />
            </div>

            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              Days until Council votes on the <span className="font-bold text-cchc-gold">$861M Taxpayer Penalty</span>
            </p>

            <div className="grid grid-cols-4 gap-4 md:gap-8 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-white/20">
                <div className="text-4xl md:text-6xl font-bold text-cchc-gold mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider font-semibold">
                  Days
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-white/20">
                <div className="text-4xl md:text-6xl font-bold text-cchc-gold mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider font-semibold">
                  Hours
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-white/20">
                <div className="text-4xl md:text-6xl font-bold text-cchc-gold mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider font-semibold">
                  Minutes
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-white/20">
                <div className="text-4xl md:text-6xl font-bold text-cchc-gold mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider font-semibold">
                  Seconds
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <p className="text-sm md:text-base font-semibold">
                Public Hearing: March 23, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

