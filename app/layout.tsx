import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vocal Master App',
  description: 'Plateforme de coaching vocal et chorale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
