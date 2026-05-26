import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FitForm | Premium Performance Nutrition',
  description: '22 premium NPB supplements. Order via WhatsApp in 60 seconds.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-brand-black text-brand-white min-h-screen">{children}</body>
    </html>
  );
}
