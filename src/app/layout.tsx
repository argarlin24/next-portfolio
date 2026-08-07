import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import Footer from '../components/Footer/Footer';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adam Garling',
  description: 'Software Engineer based in San Diego, California',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={manrope.className}>{children}</body>
      <Footer />
    </html>
  );
}
