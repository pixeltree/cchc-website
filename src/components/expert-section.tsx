"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export function ExpertSection() {
  return (
    <section className="py-16 bg-white border-y-4 border-cchc-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Badge/Icon */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="inline-flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-cchc-blue rounded-full flex items-center justify-center">
                  <FileText className="h-10 w-10 text-cchc-gold" />
                </div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Expert Backing
                </div>
              </div>
            </div>

            {/* Center - Quote */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Economic Truth: <span className="text-cchc-blue">Zoning is a Tax on Families</span>
              </h3>
              <blockquote className="border-l-4 border-cchc-gold pl-4 mb-4">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;If policymakers want falling prices to lead to lasting affordability—not a deeper construction slump—they should reduce development charges and reform zoning rules.&rdquo;
                </p>
              </blockquote>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Steven Globerman</span>, Senior Fellow, Fraser Institute
                <span className="text-gray-400 ml-2">• Feb 11, 2026</span>
              </div>
              <p className="text-sm text-gray-600 mt-3 italic">
                Leading economists agree: Exclusionary zoning is just government red tape that restricts supply and drives up costs for everyone.
              </p>
            </div>

            {/* Right Side - CTA */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cchc-blue text-cchc-blue hover:bg-cchc-blue hover:text-white"
                onClick={() => window.open('https://www.fraserinstitute.org/research/housing', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Full Report
              </Button>
              <p className="text-xs text-gray-500 mt-2">
                Fraser Institute
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


