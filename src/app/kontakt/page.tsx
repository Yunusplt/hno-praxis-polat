import Contact from "@/features/contact";
import React from "react";

export const metadata = {
  title: "Kontakt und Sprechzeiten - HNO Praxis Polat",
  description:
    "Kontaktieren Sie die HNO Praxis Dr. Bahtiyar Polat in Esslingen am Neckar. Hier finden Sie unsere Kontaktdaten und Öffnungszeiten.",
  openGraph: {
    title: "Kontakt und Sprechzeiten - HNO Praxis Polat",
    description:
      "Kontaktieren Sie uns für eine Terminvereinbarung oder besuchen Sie uns direkt in Esslingen am Neckar. Hier finden Sie die Öffnungszeiten und unsere Kontaktdaten.",
    url: "https://hnopraxis.de/kontakt",
    siteName: "HNO Praxis Polat",
  },
  twitter: {
    card: "summary",
    title: "Kontakt und Sprechzeiten - HNO Praxis Polat",
    description:
      "Erreichen Sie die HNO Praxis Dr. Bahtiyar Polat in Esslingen am Neckar. Kontaktdaten und Sprechzeiten finden Sie hier.",
  },
};

const KontaktPage = () => {
  return <Contact metadata={metadata} />;
};

export default KontaktPage;
