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
  return (
    <header
      className={`sticky top-0 z-40 mx-auto w-full ${
        hasBorder
          ? 'border-b border-neutral-800 bg-neutral-950 shadow-xl shadow-lime-400/5'
          : ''
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-10 py-3 md:px-4">
        <Link
          href="/"
          className="flex text-xl leading-none font-medium whitespace-nowrap"
          aria-label="Vikram Mahto - Frontend Developer personal portfolio website"
        >
          Vikram Mahto
        </Link>
        <div className="flex">
          <a
            href="https://github.com/vikrammahto"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center text-lime-400/50 transition-all duration-300 ease-in-out hover:bg-lime-400 hover:text-black"
            aria-label="View my projects on Github"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>{' '}
        </div>
      </div>
    </header>
  );
};
