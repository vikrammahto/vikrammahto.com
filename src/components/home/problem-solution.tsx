export function ProblemSolution() {
  return (
    <section className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto space-y-8 text-center text-xl">
        <p className="text-2xl text-zinc-700">
          I work with founders and organizations who want to <br /> turn ideas
          into real, usable products — not just prototypes.
        </p>

        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-dashed border-zinc-300 p-6">
          <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-left">
            <p className="text-2xl font-semibold text-zinc-900">
              Founders often face this:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
              <li>building takes too long</li>
              <li>design and development feel disconnected</li>
              <li>early versions look unfinished</li>
              <li>shipping gets delayed by unclear execution</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-zinc-200 p-6 text-left">
            <p className="text-2xl font-semibold text-zinc-900">
              What I bring instead:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
              <li>a smoother path from idea to launch</li>
              <li>one partner across product, design, and development</li>
              <li>clean interfaces ready for real users</li>
              <li>faster progress with less back-and-forth</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-2xl text-zinc-700">
          The result is simpler delivery, better momentum, <br /> and a product
          people can start using with confidence.
        </p>
      </div>
    </section>
  );
}
