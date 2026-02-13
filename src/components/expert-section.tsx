"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export function ExpertSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-cchc-blue to-[#001440] border-y-4 border-cchc-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Badge/Icon */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="inline-flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <FileText className="h-10 w-10 text-cchc-blue" />
                </div>
                <div className="text-sm font-bold text-cchc-gold uppercase tracking-wider">
                  Expert Backing
                </div>
              </div>
            </div>

            {/* Center - Quote */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The Economic Truth: <span className="text-cchc-gold">Zoning is a Tax on Families</span>
              </h3>
              <blockquote className="border-l-4 border-cchc-gold pl-4 mb-4">
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  &ldquo;If policymakers want falling prices to lead to lasting affordability—not a deeper construction slump—they should reduce development charges and reform zoning rules.&rdquo;
                </p>
              </blockquote>
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">Steven Globerman</span>, Senior Fellow, Fraser Institute
                <span className="text-gray-400 ml-2">• Feb 11, 2026</span>
              </div>
              <p className="text-sm text-gray-300 mt-3 italic">
                Leading economists agree: Exclusionary zoning is just government red tape that restricts supply and drives up costs for everyone.
              </p>
            </div>

            {/* Right Side - CTA */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <Button
                variant="gold"
                size="lg"
                className="bg-cchc-gold text-cchc-blue hover:bg-yellow-500 cursor-pointer"
                onClick={() => window.open('https://www.fraserinstitute.org/article/homebuilding-slowdown-threatens-negate-any-affordability-gains', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Full Article
              </Button>
              <p className="text-xs text-gray-400 mt-2">
                Feb 11, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


