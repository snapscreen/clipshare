import React from "react";
import { EmptyProps } from "@/definitions";
import { Logo, Nav } from "@/components";
// import { ScrollTop } from "@/components";

import { Socials } from "./socials";
import "./Footer.styles.css";

const navigation = {
  support: [
    { name: "How it works", to: "/how-it-works" },
    {
      name: "Documentation",
      to: "https://docs.snapodds.com/",
      externalLink: true,
    },
    {
      name: "Developers",
      to: "/developers",
    },
  ],
  company: [
    { name: "FAQs", to: "/faq" },
    { name: "Newsroom", to: "/news" },
    { name: "Contact", to: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms of Use", to: "/terms-of-use" },
  ],
};

declare const window: any;

export const Footer: React.FC<EmptyProps> = () => {
  const { support, company, legal } = navigation;

  function showCookieBanner() {
    var _hsp = (window._hsp = window._hsp || []);
    _hsp.push(["showBanner"]);
  }

  return (
    <>
      <footer className="footer" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-2 xl:col-span-1">
              <Logo className="brand p-0" />
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
              <div>
                <h3 className="nav__title">Support</h3>
                <Nav links={support} />
              </div>
              <div>
                <h3 className="nav__title">Company</h3>
                <Nav links={company} />
              </div>
              <div>
                <h3 className="nav__title">Legal</h3>
                <Nav links={legal} />
                <div className="mt-4">
                  <a
                    className="navLink"
                    id="hs_show_banner_button"
                    onClick={showCookieBanner}
                  >
                    Cookie Consent
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="base">
            <Socials />
            <p className="baseCopy">
              &copy; {new Date().getFullYear()} Snapscreen, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
        {/*
        <ScrollTop />
        */}
      </footer>
    </>
  );
};
