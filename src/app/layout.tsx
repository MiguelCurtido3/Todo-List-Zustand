import './globals.css';

export const metadata = {
  title: 'To‑Do App',
  description: 'Next.js 14 + Zustand + DnD',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen font-sans">{children}</body>
    </html>
  );
}