import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/app/Header';
import { METADATA } from '@/data/metadata';
import type { Metadata } from 'next';
import { Footer } from '@/components/app/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: METADATA.name,
    template: `%s - ${METADATA.name}`,
  },
  metadataBase: new URL(METADATA.url),
  description: METADATA.description,
  keywords: [
    "Next.js v15 ui snippets",
    "Next.js 15 snippets",
    "Tailwind CSS v4 snippets",
    "Tailwind v4 snippets",
  ],
  authors: [
    {
      name: METADATA.name,
      url: METADATA.url,
    },
  ],
  creator: METADATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: METADATA.url,
    title: METADATA.name,
    description: METADATA.description,
    siteName: METADATA.name,
    images: [
      {
        url: METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: METADATA.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.name,
    description: METADATA.description,
    images: [METADATA.ogImage],
    creator: METADATA.handles.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
  }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden bg-black font-sans text-sm text-neutral-50 min-h-screen antialiased`}
      >
        <div
          className="relative mx-auto flex min-h-[100dvh] flex-col justify-between max-w-5xl border border-x-neutral-900 border-y-0"
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;