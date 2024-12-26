import React from "react";
import AboutMe from "@/features/about-me";

export const metadata = {
  title: "Über mich - Dr. Bahtiyar Polat",
  description:
    "Lernen Sie Dr. Bahtiyar Polat kennen, Facharzt für Hals-Nasen-Ohren-Heilkunde (HNO) mit 18 Jahren Erfahrung. Besuchen Sie unsere HNO-Praxis in Esslingen am Neckar.",
  openGraph: {
    title: "Über mich - Dr. Bahtiyar Polat",
    description:
      "Erfahren Sie mehr über Dr. Bahtiyar Polat und unsere HNO-Praxis in Esslingen am Neckar.",
    url: "https://hnopraxis.de/ueber-mich",
    siteName: "HNO Praxis Polat",
  },
  twitter: {
    card: "summary",
    title: "Über mich - Dr. Bahtiyar Polat",
    description:
      "Lernen Sie Dr. Bahtiyar Polat, Facharzt für Hals-Nasen-Ohren-Heilkunde in Esslingen am Neckar, kennen.",
  },
};

const UberMich = () => {
  return <AboutMe metadata={metadata} />;
};

export default UberMich;
