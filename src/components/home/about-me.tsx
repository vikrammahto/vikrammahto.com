'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function AboutMe() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-6 px-6 py-16 sm:flex-row sm:px-10 lg:gap-18 lg:px-16 lg:py-24">
        <Image
          src="/vikram-mahto-design-engineer.jpg"
          width={500}
          height={500}
          alt="Vikram Mahto - Design Engineer"
          className="w-30 rounded-4xl object-cover sm:w-72"
        />
        <div>
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">
            Hi, I'm Vikram Mahto
          </h2>
          <p className="mb-3 text-2xl sm:text-3xl">
            A UI/UX Designer & Frontend Developer based in Hyderabad, IN.
          </p>
          <p className="text-2xl sm:text-3xl">
            I design and build web & mobile interfaces – clean, accessible, and
            made to convert.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex"
          >
            <Link
              href="https://cal.com/vikramstack/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="group from-neutral-10 flex items-center justify-center gap-2 rounded-2xl border border-neutral-600 bg-linear-to-b via-neutral-50 to-neutral-100 px-5 py-2 text-lg font-medium transition-all hover:scale-110 active:[box-shadow:none]"
            >
              Connect on
              <Image
                src="/LinkedIn_Logo.svg"
                alt="LinkedIn Logo"
                width={100}
                height={22}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
