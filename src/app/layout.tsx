import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '../components/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
