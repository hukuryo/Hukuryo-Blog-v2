"use client";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollUp } from "./components/ScrollUp";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <ScrollUp />
      <Footer />
    </div>
  );
}


