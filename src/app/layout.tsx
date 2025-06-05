import type { Metadata, Viewport } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Spotter AI – The Smartest Way to Match Loads with Drivers',
  description:
    'Discover how Spotter AI uses AI-powered accuracy to match loads with drivers, optimize fleet performance, and deliver seamless cross-device synchronization.',
};
export const viewport: Viewport = {
  themeColor: '#008080',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
