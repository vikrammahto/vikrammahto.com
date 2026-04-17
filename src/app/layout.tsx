import { Figtree } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata = {
  title: 'Vikram Mahto – UI/UX Designer & Frontend Developer',
  description:
    'I design and build clean, accessible web and mobile interfaces. UX audits, AI website redesigns, and full product builds. Book a free discovery call.',
  keywords: [
    'Frontend Developer',
    'Frontend Engineer',
    'Design Engineer',
    'UI/UX Designer',
    'React.js Developer',
    'Next.js Developer',
    'Freelance Frontend Developer for Hire',
  ],
  authors: [{ name: 'Vikram Mahto', url: 'https://vikrammahto.com' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://vikrammahto.com',
    title: 'Vikram Mahto – UI/UX Designer & Frontend Developer',
    description:
      'I design and build clean, accessible web and mobile interfaces. UX audits, AI website redesigns, and full product builds. Book a free discovery call.',
    images: [
      {
        url: '/vikram-mahto-frontend-developer.png',
        width: 1200,
        height: 630,
        alt: 'Vikram Mahto - UI/UX Designer & Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vikramstack',
    title: 'Vikram Mahto – UI/UX Designer & Frontend Developer',
    description:
      'I design and build clean, accessible web and mobile interfaces. UX audits, AI website redesigns, and full product builds. Book a free discovery call.',
    images: ['/vikram-mahto-frontend-developer.png'],
  },
  alternates: {
    canonical: 'https://vikrammahto.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-olive-50/50 antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
