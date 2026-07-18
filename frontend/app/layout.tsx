import type { Metadata } from 'next';
import './globals.css';
import NavigationBar from '@/src/core/ui/NavigationBar';

export const metadata: Metadata = {
  title: 'Artificial Learning',
  description: 'System Control and Vector Space Exploration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        We add pt-16 (padding-top: 4rem) to the body so the 
        fixed navigation bar doesn't cover up the top of your page content.
      */}
      <body className="bg-black text-white antialiased pt-16">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}