import { Figtree } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata = {
  title: 'Vikram Mahto | Frontend Developer',
  description:
    'Frontend Developer specializing in responsive, accessible, and high-performance websites using React.js, Next.js, and TailwindCSS.',
  keywords: [
    'Frontend Developer',
    'Frontend Engineer',
    'UI/UX Designer',
    'React.js',
    'Next.js',
    'Web Development',
    'TailwindCSS',
    'Freelance Web Developer',
    'Accessibility',
    'Responsive Design',
  ],
  authors: [{ name: 'Vikram Mahto', url: 'https://vikrammahto.com' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://vikrammahto.com',
    title: 'Vikram Mahto | Frontend Developer',
    description:
      "I build visually appealing, high-performance, and accessible websites. Let's create something amazing together!",
    images: [
      {
        url: '/vikram-mahto-frontend-developer.png',
        width: 1200,
        height: 630,
        alt: 'Vikram Mahto - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@here_vikram',
    title: 'Vikram Mahto | Frontend Developer',
    description:
      "I craft modern, user-friendly web experiences using React, Next.js, and TailwindCSS. Let's collaborate!",
    images: ['/vikram-mahto-frontend-developer.png'],
  },
  alternates: {
    canonical: 'https://vikrammahto.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-neutral-950 antialiased text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
