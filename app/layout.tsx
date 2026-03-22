import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Thilina Dinelka | Video Editor & Motion Graphics',
  description: 'Portfolio of Thilina Dinelka, Short-Form Video Editor and Motion Graphics Artist.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="bg-black text-white font-sans antialiased selection:bg-red-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
