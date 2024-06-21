import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { ScrollUp } from "./components/ScrollUp";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Hukuryo-no-Blog",
  description: "Hukuryo-no-Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <ScrollUp />
        <Footer />
      </body>
    </html>
  );
}
