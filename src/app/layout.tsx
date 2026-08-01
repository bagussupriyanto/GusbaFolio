import type { Metadata } from 'next';
import { Outfit, Space_Grotesk, JetBrains_Mono, Silkscreen, Press_Start_2P, Playfair_Display, Caveat } from 'next/font/google';
import '@/app/globals.css';
import { HeaderNav } from '@/components/layout/header-nav';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { DEVELOPER_DATA } from '@/lib/constants';

const fontSans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const fontPixel = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

const fontSilkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-silkscreen',
  display: 'swap',
});

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const fontSignature = Caveat({
  subsets: ['latin'],
  variable: '--font-signature',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bagus.dev'),
  title: `${DEVELOPER_DATA.name} — ${DEVELOPER_DATA.role}`,
  description: `Portfolio profesional ${DEVELOPER_DATA.name}, ${DEVELOPER_DATA.role} berbasis di ${DEVELOPER_DATA.location}. Berfokus membangun website modern, sistem kasir (POS), dan aplikasi web performa tinggi berskala produksi.`,
  keywords: [
    'Bagus Supriyanto',
    'Product-Focused Frontend Engineer',
    'Frontend Engineer Indonesia',
    'Next.js Developer',
    'Supabase',
    'Kepulauan Riau',
    'Web Developer'
  ],
  authors: [{ name: DEVELOPER_DATA.name }],
  creator: DEVELOPER_DATA.name,
  openGraph: {
    title: `${DEVELOPER_DATA.name} — ${DEVELOPER_DATA.role}`,
    description: `Portfolio profesional ${DEVELOPER_DATA.name}, ${DEVELOPER_DATA.role} yang berfokus membangun website modern & sistem aplikasi berskala produksi.`,
    url: 'https://bagus.dev',
    siteName: `${DEVELOPER_DATA.name} Portfolio`,
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${DEVELOPER_DATA.name} — ${DEVELOPER_DATA.role}`,
    description: `Portfolio profesional ${DEVELOPER_DATA.name}, ${DEVELOPER_DATA.role} yang berfokus membangun website modern & sistem aplikasi berskala produksi.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

import { ThemeProvider } from '@/components/providers/theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontPixel.variable} ${fontSilkscreen.variable} ${fontSerif.variable} ${fontSignature.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-[#F8FAFC] antialiased selection:bg-orange-500/30 selection:text-orange-200 transition-colors duration-300">
        <ThemeProvider>
          <LenisProvider>
            <CustomCursor />
            <HeaderNav />
            <main>{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
