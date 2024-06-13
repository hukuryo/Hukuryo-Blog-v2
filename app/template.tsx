"use client";

import { Footer } from "./components/Footer";
import { ScrollUp } from "./components/ScrollUp";


export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <div>
      {children}
      <ScrollUp />
      <Footer />
    </div>
  );
}


