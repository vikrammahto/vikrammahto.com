import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-8 pb-16 text-center sm:px-10 lg:px-16 lg:pt-10 lg:pb-24">
      <div>
        <Image
          src={'/vikram-mahto-design-engineer.jpg'}
          alt="Vikram Mahto"
          width={800}
          height={800}
          className="mx-auto mb-2 w-20 rotate-10 rounded-lg transition-all hover:w-32 hover:rotate-0"
        />

        <p className="text-2xl text-zinc-600">Hi, I’m Vikram Mahto</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Your product deserves better than AI-generated slop.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-2xl text-zinc-700">
          I fix, design, and build interfaces that{' '}
          <br className="hidden sm:block" /> actually convert – clean,
          accessible, and built to last.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://cal.com/vikramstack/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-2xl border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-5 py-2 text-lg font-medium text-white shadow-[inset_0_1px_0px_0px_#fdba74] transition-all hover:scale-110 hover:from-orange-600 hover:to-orange-400 active:[box-shadow:none]"
          >
            <span className="block group-active:[transform:translate3d(0,1px,0)]">
              Book a Call
            </span>
          </Link>
          <Link
            href="#projects"
            className="group flex items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-200 px-5 py-2 text-lg font-medium text-gray-950 transition-all hover:scale-110 hover:bg-gradient-to-b hover:from-gray-100 hover:via-gray-100 hover:to-gray-100 active:shadow-inner"
          >
            <span className="block group-active:[transform:translate3d(0,1px,0)]">
              See Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
