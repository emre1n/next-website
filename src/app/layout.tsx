import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'emre1n',
  description: 'Web Developer, Engineer, Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-screen flex flex-col justify-between p-8 pt-0 md:pt-8 bg-white text-gray-900">
          <main className="w-full space-y-6">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
