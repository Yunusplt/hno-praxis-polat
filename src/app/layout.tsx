// import Header from "@/components/Header";
import type { Metadata } from "next";
import "./global.css";

// Amplify configuration
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import Footer from "@/components/Footer";

Amplify.configure(outputs);

export const metadata: Metadata = {
  title: "HNO Praxis Polat Esslingen | Dr. Tip. Bahtiyar Polat",
  description: "HNO Praxis Polat Esslingen | Dr. Tip. Bahtiyar Polat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
