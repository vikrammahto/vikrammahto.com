'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBorder(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: 'https://x.com/here_vikram' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 mx-auto w-full ${
        hasBorder
          ? 'border-b border-neutral-800 bg-neutral-950 shadow-xl shadow-lime-400/5'
          : ''
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
        <Link
          href="/"
          className="flex text-xl leading-none font-medium whitespace-nowrap text-lime-400"
          aria-label="Vikram Mahto - Frontend Developer personal portfolio website"
        >
          Vikram Mahto
        </Link>
        <button
          className="block text-neutral-400 hover:text-lime-400 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <ul className="hidden md:flex">
          {links.map((link) => (
            <li key={link.name} className="inline-block px-4">
              <Link
                href={link.href}
                className="text-lg font-medium transition duration-300 hover:text-lime-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-neutral-950 shadow-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-6">
          {links.map((link) => (
            <li key={link.name} className="py-2">
              <Link
                href={link.href}
                className="block text-lg font-medium text-neutral-400 transition duration-300 hover:text-lime-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
