"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, TrendingUp, Printer } from "lucide-react";

export function TaxCalculator() {
  const [homeValue, setHomeValue] = useState<string>("");
  const [penalty, setPenalty] = useState<number | null>(null);

  const calculatePenalty = () => {
    const value = parseFloat(homeValue.replace(/,/g, ""));
    if (isNaN(value) || value <= 0) {
      setPenalty(null);
      return;
    }

    // New formula: (Home Value * 0.0125) / 5
    // This represents the estimated property tax surcharge needed to recover
    // the $861M federal loss over a 5-year period
    const annualPenalty = (value * 0.0125) / 5;

    setPenalty(Math.round(annualPenalty));
  };

  const formatCurrency = (value: string) => {
    const num = value.replace(/,/g, "");
    if (isNaN(Number(num))) return value;
    return Number(num).toLocaleString();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cchc-blue text-cchc-gold px-4 py-2 rounded-full font-bold uppercase text-sm mb-4">
              <Calculator className="h-4 w-4" />
              Interactive Calculator
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cchc-blue mb-4">
              The $861M <span className="text-cchc-red">Incompetence Surcharge</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If Council votes to strip your property rights, Calgary loses $861 million in federal funding.
              See how much YOUR property taxes could increase to cover their incompetence.
            </p>
          </div>

          <Card className="shadow-2xl border-4 border-cchc-blue">
            <CardHeader className="bg-cchc-blue text-white">
              <CardTitle className="text-2xl">Calculate Your Annual Tax Increase</CardTitle>
              <CardDescription className="text-gray-200">
                Enter your estimated home value to see the impact
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Home Value
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="e.g., 550,000"
                      value={homeValue}
                      onChange={(e) => setHomeValue(formatCurrency(e.target.value))}
                      className="pl-10 text-lg h-14"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') calculatePenalty();
                      }}
                    />
                  </div>
                </div>

                <Button
                  onClick={calculatePenalty}
                  variant="gold"
                  size="xl"
                  className="w-full text-lg"
                  disabled={!homeValue}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Penalty
                </Button>

                {penalty !== null && (
                  <div className="mt-8 p-8 bg-gradient-to-br from-red-50 to-red-100 border-4 border-cchc-red rounded-lg animate-in fade-in duration-500">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-2 text-cchc-red">
                        <TrendingUp className="h-6 w-6" />
                        <span className="font-bold uppercase tracking-wide">Your Annual Incompetence Surcharge</span>
                      </div>

                      <div className="text-6xl md:text-7xl font-bold text-cchc-red">
                        ${penalty.toLocaleString()}
                      </div>

                      <div className="text-lg text-gray-700">
                        <p className="font-semibold">Over 5 years: <span className="text-cchc-red">${(penalty * 5).toLocaleString()}</span></p>
                        <p className="text-sm mt-2 text-gray-600">
                          The cost of City Hall&apos;s incompetence, spread across Calgary households
                        </p>
                      </div>

                      <div className="pt-4 border-t border-red-300">
                        <Button
                          variant="outline"
                          onClick={handlePrint}
                          className="border-cchc-red text-cchc-red hover:bg-cchc-red hover:text-white"
                        >
                          <Printer className="mr-2 h-4 w-4" />
                          Print for Your Records
                        </Button>
                      </div>

                      <div className="mt-6 p-4 bg-white rounded-lg border-2 border-cchc-gold">
                        <p className="text-sm font-bold text-cchc-blue mb-2">
                          DON&apos;T LET THIS HAPPEN!
                        </p>
                        <p className="text-sm text-gray-700">
                          Contact your City Councillor today and demand they vote AGAINST repealing the rezoning.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>How we calculate:</strong> Based on the estimated property tax surcharge needed to
                    recover the $861 million federal funding loss over 5 years when Council bans homes on your land.
                    Your annual surcharge is calculated as (Home Value × 1.25%) ÷ 5 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

