import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './reset.scss';
import './global.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Singapore Jobs',
    template: '%s | Singapore Jobs',
  },
  description: 'Find cool job for you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
