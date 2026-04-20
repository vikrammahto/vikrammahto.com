'use client';

import { motion } from 'motion/react';
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/vikrammahto',
    icon: GithubLogoIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vikrammahto',
    icon: LinkedinLogoIcon,
  },
  {
    name: 'X/Twitter',
    href: 'https://x.com/vikramstack',
    icon: XLogoIcon,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/vikrammahto',
    icon: InstagramLogoIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-4 px-4 py-10 text-zinc-500 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={'/vikram-sign.svg'}
          width={200}
          height={55}
          alt="Vikram Mahto Signature"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center"
      >
        Vikram Mahto
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block transition-colors hover:text-zinc-700"
          >
            <social.icon size={24} />
          </a>
        ))}
      </motion.div>
    </footer>
  );
};
