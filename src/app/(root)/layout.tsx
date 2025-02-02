import type { Metadata } from 'next';
import '../css/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/src/components/ui/ThemeProvider';
import { Header } from '@/src/components/Header';
import { ScrollUp } from '@/src/components/ui/ScrollUp';
import { Footer } from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Hukuryo-no-Blog',
  description: 'Hukuryo-no-Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <ScrollUp />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
