import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { ScrollUp } from '@/components/ui/ScrollUp';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ui/theme-provider';

export const metadata: Metadata = {
  title: 'Hukuryo-no-Blog',
  description: 'Hukuryo-no-Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
