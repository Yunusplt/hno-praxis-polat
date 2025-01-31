"use client";
import React from "react";
import LandingPage from "@/features/homepage/components/LandingPage";
import OpenningTimeAndImages from "@/features/homepage/components/OpenningTimeAndImages";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <OpenningTimeAndImages />
    </main>
  );
}
