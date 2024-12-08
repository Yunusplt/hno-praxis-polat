// import Header from "@/components/Header";
import type { Metadata } from "next";
import "./global.css";

// Amplify configuration
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

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
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
