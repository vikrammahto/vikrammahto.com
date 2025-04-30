'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col justify-between gap-20 px-10 pt-20 md:px-4 lg:flex-row lg:pt-40">
      <div>
        <span>Hey there, I am</span>
        <h1 className="text-2xl font-medium lg:text-4xl">Vikram Mahto</h1>
        <p className="font-light lg:text-xl">
          Frontend Engineer | Open-Source Contributor
        </p>
        <p className="mt-5">
          I craft visually stunning, accessible, and high-performing websites.{' '}
          <br className="hidden lg:block" />
          With expertise in{' '}
          <span className="font-normal">
            {' '}
            React.js, Next.js, and TailwindCSS,
          </span>{' '}
          I blend creativity with code to build seamless digital experiences.
        </p>
        <div className="mt-6 flex items-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-lime-500"></span>
          </span>
          <p>Actively looking for full-time opportunities.</p>
        </div>
        <div className="mt-6 space-x-3">
          <a
            href="https://www.linkedin.com/in/vikrammahto/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer rounded-lg border border-lime-400/50 bg-lime-400/10 px-8 py-2 font-semibold text-lime-400 transition duration-300 hover:bg-lime-400/20 hover:text-lime-400"
          >
            Hire me
          </a>
          <a
            href="https://www.linkedin.com/in/vikrammahto/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer rounded-lg border border-lime-400/50 px-8 py-2 font-semibold text-lime-400 transition duration-300 hover:bg-lime-400/20 hover:text-lime-400"
          >
            My resume
          </a>
        </div>
      </div>
      <div>
        <Image
          src={'/vikrammahto.jpeg'}
          width={400}
          height={400}
          alt="Vikram Mahto"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
