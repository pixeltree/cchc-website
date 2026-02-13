"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Mail, ExternalLink } from "lucide-react";
import councillorsData from "@/data/councillors.json";

interface Councillor {
  id: number;
  name: string;
  ward: string;
  riskLevel: string;
  email: string;
  twitter: string;
}

export function GatekeeperList() {
  const councillors = councillorsData as Councillor[];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-red-100 text-red-800 border-red-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Low":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const handlePressure = (councillor: Councillor) => {
    const subject = encodeURIComponent("URGENT: Vote NO on Repealing Rezoning");
    const body = encodeURIComponent(
      `Dear Councillor ${councillor.name},\n\n` +
      `I am writing to urge you to vote AGAINST repealing Calgary's rezoning bylaws at the March 23, 2026 Public Hearing.\n\n` +
      `Repealing this policy would:\n` +
      `• Cost Calgary $861 MILLION in federal housing funding\n` +
      `• Force property tax increases on homeowners like me\n` +
      `• Restrict property rights and housing choice\n` +
      `• Prevent market-based solutions to housing affordability\n\n` +
      `As a Calgary taxpayer, I demand you protect our federal funding and vote NO on the repeal.\n\n` +
      `Sincerely,\n[Your Name]\n[Your Address]`
    );

    const mailtoLink = `mailto:${councillor.email}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_self');
  };

  const handleTwitter = (twitter: string) => {
    const tweetText = encodeURIComponent(
      `${twitter} Don't burn $861M of our federal housing money! Vote NO on repealing rezoning. Calgary taxpayers are watching! #StopTheBan #yyccc`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
  };

  return (
    <section id="gatekeepers" className="py-20 bg-gradient-to-br from-cchc-blue to-[#001440]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cchc-gold text-cchc-blue px-4 py-2 rounded-full font-bold uppercase text-sm mb-4">
              <AlertTriangle className="h-4 w-4" />
              Gatekeeper Watch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Who&apos;s Voting on <span className="text-cchc-gold">Your Money?</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              These City Councillors will decide whether to waste $861 million of federal funding.
              Make sure they hear from YOU before March 23rd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councillors.map((councillor) => (
              <Card key={councillor.id} className="shadow-xl hover:shadow-2xl transition-shadow border-2 hover:border-cchc-gold">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-cchc-blue mb-1">
                        {councillor.name}
                      </CardTitle>
                      <CardDescription className="text-base font-semibold text-gray-600">
                        {councillor.ward}
                      </CardDescription>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getRiskColor(councillor.riskLevel)}`}>
                      {councillor.riskLevel} Risk
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cchc-blue" />
                      <span className="text-xs truncate">{councillor.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-cchc-blue" />
                      <span className="text-xs">{councillor.twitter}</span>
                    </div>
                  </div>

                  <div className="pt-3 space-y-2">
                    <Button
                      onClick={() => handlePressure(councillor)}
                      variant="gold"
                      size="sm"
                      className="w-full"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email This Office
                    </Button>
                    <Button
                      onClick={() => handleTwitter(councillor.twitter)}
                      variant="outline"
                      size="sm"
                      className="w-full border-cchc-blue text-cchc-blue hover:bg-cchc-blue hover:text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Post on X/Twitter
                    </Button>
                  </div>

                  {councillor.riskLevel === "High" && (
                    <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-800">
                      <strong>High Priority:</strong> This councillor needs to hear from constituents NOW!
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg border-4 border-cchc-gold text-center">
            <h3 className="text-2xl font-bold text-cchc-blue mb-3">
              Every Voice Counts
            </h3>
            <p className="text-gray-700 mb-4">
              City Council responds to constituent pressure. Send emails, make calls, and share on social media.
              Let them know that Calgary taxpayers are watching their vote on March 23rd.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="gold" size="lg">
                Download Email Template
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-cchc-blue text-cchc-blue">
                Share This Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

