"use client";

import { Scale } from "lucide-react";

export function AlbertaBillOfRights() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-y-4 border-cchc-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cchc-gold rounded-full mb-4">
              <Scale className="h-8 w-8 text-gray-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Alberta Bill of Rights: <span className="text-cchc-gold">Our Last Line of Defense</span>
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-cchc-gold rounded-lg p-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              <span className="font-bold text-cchc-gold">Section 1(a) of the Alberta Bill of Rights</span> guarantees your right to the enjoyment of property. By banning your freedom to use your land as you see fit, City Hall is violating the spirit of Alberta law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
