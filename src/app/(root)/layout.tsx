import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loomify - design & development',
  description:
    "Your Startup's Design & Development Ally. Upgrade Your Process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
