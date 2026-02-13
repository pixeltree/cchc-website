"use client";

import { Button } from "@/components/ui/button";
import { Mail, Share2, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const shareOnTwitter = () => {
    const text = encodeURIComponent(
      "I just checked my Tax Penalty on CCHC.ca. Calgary can't afford to lose $861M in federal funding! #StopTheBan #yyccc"
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  return (
    <footer className="bg-cchc-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold text-cchc-gold mb-4">CCHC</h3>
              <p className="text-gray-300 leading-relaxed">
                Calgary Conservative Housing Coalition fights for property rights,
                fiscal responsibility, and common sense housing policy.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Take Action</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#calculator" className="hover:text-cchc-gold transition-colors">
                    Tax Calculator
                  </a>
                </li>
                <li>
                  <a href="#gatekeepers" className="hover:text-cchc-gold transition-colors">
                    Contact Council
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calgary.ca/council/dyncrm-councillors-contact.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cchc-gold transition-colors"
                  >
                    Contact Your Councillor
                  </a>
                </li>
                <li>
                  <button
                    onClick={shareOnTwitter}
                    className="hover:text-cchc-gold transition-colors text-left"
                  >
                    Share This Page
                  </button>
                </li>
              </ul>
            </div>

            {/* Share */}
            <div>
              <h3 className="text-lg font-bold mb-4">Spread the Word</h3>
              <p className="text-gray-300 mb-4">
                Share this site with fellow Calgarians who care about their property taxes.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-white text-white hover:bg-cchc-gold hover:border-cchc-gold hover:text-cchc-blue"
                  onClick={shareOnTwitter}
                  aria-label="Share on X (Twitter)"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-white text-white hover:bg-cchc-gold hover:border-cchc-gold hover:text-cchc-blue"
                  onClick={shareOnFacebook}
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-white text-white hover:bg-cchc-gold hover:border-cchc-gold hover:text-cchc-blue"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'CCHC - Stop the $1 Billion Taxpayer Penalty',
                        url: window.location.href,
                      });
                    }
                  }}
                  aria-label="Share this page"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="bg-cchc-gold text-cchc-blue p-6 rounded-lg mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Time is Running Out</h3>
            <p className="mb-4">
              The Public Hearing is March 23, 2026. Make your voice heard before it&apos;s too late.
            </p>
            <Button
              variant="outline"
              className="border-2 border-cchc-blue bg-transparent hover:bg-cchc-blue hover:text-white"
              onClick={() => window.open('https://www.calgary.ca/council/dyncrm-councillors-contact.html', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Letter to Council Now
            </Button>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center text-gray-300 text-sm">
            <p>
              © {currentYear} Calgary Conservative Housing Coalition. A grassroots advocacy campaign.
            </p>
            <p className="mt-2">
              This site is operated by concerned Calgary taxpayers. Not affiliated with any political party or organization.
            </p>
            <p className="mt-4 text-xs">
              <strong>Disclaimer:</strong> Tax calculations are estimates based on proportional distribution
              of the $861M federal funding loss. Actual tax impacts may vary. This site is for informational
              and advocacy purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}




