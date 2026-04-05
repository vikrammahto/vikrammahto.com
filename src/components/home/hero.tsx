import Link from 'next/link';

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-8 pb-16 text-center sm:px-10 lg:px-16 lg:pt-10 lg:pb-24">
      <div>
        <p className="text-2xl text-zinc-600">Hi, I’m Vikram Mahto</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          I turn startup ideas into real, working products.
        </h1>
        {/* <p className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          I build scalable digital products for founders & startups — from idea
          to launch.
        </p> */}
        <p className="mx-auto mt-6 max-w-3xl text-xl text-zinc-700">
          Design Engineer helping early-stage founders{' '}
          <br className="hidden sm:block" /> go from idea → design → development
          → deployment — fast, clean, and scalable.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#"
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
