import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'emre1n',
  description: 'Web Developer, Engineer, Designer',
  keywords: 'web development, engineering, design, software developer',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'emre1n',
    description: 'Web Developer, Engineer, Designer',
    url: 'https://your-domain.com',
    siteName: 'emre1n',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <div className="min-h-[100dvh] flex flex-col justify-between p-8 pt-0 md:pt-8 bg-white text-gray-900">
          <header>{/* Add your Header component here */}</header>
          <main className="w-full flex-grow space-y-6">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
