"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Home, DollarSign, Scale, Users } from "lucide-react";

export function PropertyRightsManifesto() {
  const principles = [
    {
      icon: Home,
      title: "Your Land, Your Right",
      description: "Stop the government from telling you what you can build on your own property. Property rights are fundamental freedoms that must be protected.",
      color: "text-cchc-gold",
    },
    {
      icon: DollarSign,
      title: "Market Solutions Work",
      description: "Let the market build homes, not bureaucrats. When government removes restrictions, builders respond to demand and prices stabilize naturally.",
      color: "text-cchc-gold",
    },
    {
      icon: Scale,
      title: "Common Sense Fiscal Policy",
      description: "We can't afford to lose $861 MILLION in federal funding. That's your money being wasted because of ideology over economics.",
      color: "text-cchc-gold",
    },
    {
      icon: Users,
      title: "Housing Choice for All",
      description: "Families should have the freedom to choose the housing that works for them—single family, duplex, townhouse, or apartment. Ban the Housing Ban.",
      color: "text-cchc-gold",
    },
  ];

  return (
    <section id="the-issue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cchc-blue mb-4">
              Our <span className="text-cchc-gold">Common Sense</span> Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This isn&apos;t about urban planning theory. It&apos;s about property rights,
              fiscal responsibility, and letting Calgary families make their own choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-cchc-blue hover:border-cchc-gold transition-all hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-cchc-blue p-3 rounded-lg flex-shrink-0">
                        <Icon className={`h-8 w-8 ${principle.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cchc-blue mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Key Facts Section */}
          <div className="bg-gradient-to-r from-cchc-blue to-[#001440] text-white rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">
              The <span className="text-cchc-gold">Facts</span> They Don&apos;t Want You to Know
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-cchc-gold mb-2">$861M</div>
                <p className="text-gray-200">
                  Federal housing funding Calgary will LOSE if Council repeals the rezoning policy.
                  That money could build thousands of homes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-cchc-gold mb-2">0</div>
                <p className="text-gray-200">
                  The number of single-family homes that will be forcibly converted if rezoning stays.
                  It simply gives property owners MORE choices, not fewer.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-cchc-gold mb-2">100%</div>
                <p className="text-gray-200">
                  Of Calgary homeowners who will see property tax increases if we have to make up
                  the $861M funding shortfall. This affects EVERYONE.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-cchc-gold mb-2">March 23</div>
                <p className="text-gray-200">
                  The PUBLIC HEARING where Council votes. Show up, speak up, or send written submissions.
                  Democracy works when you participate.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-cchc-blue italic">
              &ldquo;Don&apos;t let gatekeepers burn <span className="text-cchc-gold">$1 billion</span> of taxpayer money
              to score political points.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600 font-semibold">
              Common sense for Calgary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

