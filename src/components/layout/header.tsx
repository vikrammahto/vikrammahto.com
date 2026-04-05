'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBorder(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <header
      className={`sticky top-4 z-40 mx-auto mt-4 transition-all ${hasBorder ? 'w-[70%] rounded-full bg-orange-50' : 'w-full'}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-10 py-3 md:px-4">
        <Link
          href="/"
          className="flex text-xl leading-none font-medium whitespace-nowrap"
          aria-label="Vikram Mahto - Frontend Developer personal portfolio website"
        >
          Vikram Mahto
        </Link>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="p-2 text-lg hover:underline sm:inline-flex"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex">
          <Link
            href="#contact"
            className="group hidden rounded-full border px-5 py-2 text-lg font-medium sm:inline-flex"
          >
            <span className="block group-active:[transform:translate3d(0,1px,0)]">
              Let's talk
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
