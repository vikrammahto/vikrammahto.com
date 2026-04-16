import Link from 'next/link';

export function BeforeFooterCta() {
  return (
    <section id="contact" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="flex flex-col items-center gap-8 rounded-3xl bg-zinc-950 px-6 py-8 text-center text-white sm:px-8">
        <div className="mt-2">
          <h2 className="mb-3 inline-flex rounded-full border border-zinc-700 px-4 py-1 text-xl">
            AI interfaces not converting?
          </h2>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Your product deserves better <br className="hidden sm:block" /> than
            AI generated slop.
          </h1>
        </div>
        <Link
          href="https://cal.com/vikramstack/discovery"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center rounded-2xl border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-5 py-2 text-lg font-medium text-white shadow-[inset_0_1px_0px_0px_#fdba74] transition-all hover:scale-110 hover:from-orange-600 hover:to-orange-400 active:[box-shadow:none]"
        >
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Book a FREE Discovery Call
          </span>
        </Link>
      </div>
    </section>
  );
}
