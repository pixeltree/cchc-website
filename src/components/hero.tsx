"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar } from "lucide-react";

export function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-cchc-blue via-cchc-blue to-[#001440] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Alert Banner */}
          <div className="inline-flex items-center gap-2 bg-cchc-red/20 border-2 border-cchc-red px-6 py-3 rounded-full text-cchc-gold font-bold uppercase tracking-wider animate-pulse">
            <AlertTriangle className="h-5 w-5" />
            <span>Urgent Action Required</span>
            <AlertTriangle className="h-5 w-5" />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Stop the <span className="text-cchc-gold">$1 Billion</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Taxpayer Penalty
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            City Council is voting to bring back the <span className="text-cchc-gold font-bold">&quot;Housing Ban.&quot;</span>
            {" "}Don&apos;t let them set fire to our federal funding and hike your property taxes.
          </p>

          {/* Countdown to Hearing */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-cchc-gold rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-cchc-gold" />
              <span className="text-cchc-gold font-bold uppercase tracking-wide">Public Hearing</span>
            </div>
            <div className="text-4xl font-bold text-cchc-gold mb-1">March 23, 2026</div>
            <div className="text-sm text-gray-300">39 days remaining</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="gold"
              size="xl"
              className="text-lg shadow-2xl hover:scale-105 transition-transform"
              onClick={scrollToCalculator}
            >
              Calculate Your Tax Penalty
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-cchc-blue"
            >
              Send Letter to Council
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-cchc-gold">$861M</div>
              <div className="text-sm text-gray-300 mt-1">Federal Funding at Risk</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cchc-gold">14</div>
              <div className="text-sm text-gray-300 mt-1">Councillors to Pressure</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cchc-gold">39</div>
              <div className="text-sm text-gray-300 mt-1">Days to Take Action</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

