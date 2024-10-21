import Header from "@/components/Header";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "HNO Praxis Esslingen | Dr. Bahtiyar Polat",
  description: "HNO Praxis Esslingen | Dr. Bahtiyar Polat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
