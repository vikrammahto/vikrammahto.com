'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { GrainGradient } from '@paper-design/shaders-react';

export function Hero() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-linear-to-b from-cyan-950 to-neutral-950 text-white">
      <GrainGradient
        colors={['#113388']}
        colorBack="#000000"
        softness={0.44}
        intensity={1}
        noise={1}
        shape="corners"
        speed={0.5}
        scale={1.24}
        rotation={64}
        className="absolute h-full w-full"
      />
      <Image
        src="/hero-background.png"
        alt="The Creation of Adam, but with a computer and a human hand reaching towards each other."
        fill
        className="object-cover opacity-10"
        priority
      />

      <section className="relative z-10 mx-auto flex min-h-dvh max-w-5xl items-center px-6 pt-8 pb-16 sm:px-10 lg:px-16 lg:pt-10 lg:pb-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-3 text-5xl font-semibold tracking-[-6%] sm:text-8xl"
          >
            AI made it fast. <br />I make it actually good.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 text-2xl sm:text-3xl"
          >
            I fix, design, and build interfaces{' '}
            <br className="hidden sm:block" /> that actually convert – clean,
            accessible, and built to last.
          </motion.p>
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
              className="group flex items-center justify-center rounded-2xl border border-orange-600 bg-linear-to-b from-orange-400 via-orange-500 to-orange-600 px-5 py-2 text-lg font-medium text-white shadow-[inset_0_1px_0px_0px_#fdba74] transition-all hover:scale-110 hover:from-orange-600 hover:to-orange-400 active:[box-shadow:none]"
            >
              <span className="group-active:transform:[translate3d(0,1px,0)] block">
                Book a FREE Discovery Call
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
