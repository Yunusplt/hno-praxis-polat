import Services from "@/features/services";
import React from "react";

export const metadata = {
  title: "Leistungen - HNO Praxis Dr. Bahtiyar Polat",
  description:
    "Entdecken Sie die umfassenden Leistungen der HNO Praxis Dr. Bahtiyar Polat in Esslingen am Neckar. Von Allergologie bis Schwindeldiagnostik – wir sind für Sie da.",
  openGraph: {
    title: "Leistungen - HNO Praxis Dr. Bahtiyar Polat",
    description:
      "Erfahren Sie mehr über die umfassenden Leistungen unserer HNO Praxis in Esslingen am Neckar.",
    url: "https://hnopraxis.de/leistungen",
    siteName: "HNO Praxis Polat",
  },
  twitter: {
    card: "summary",
    title: "Leistungen - HNO Praxis Dr. Bahtiyar Polat",
    description:
      "Umfassende HNO-Leistungen von Allergologie bis Hörtestungen – Besuchen Sie unsere Praxis in Esslingen am Neckar.",
  },
};

const Leistungen = () => {
  return <Services metadata={metadata} />;
};

export default Leistungen;
