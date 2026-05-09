const benefits = [
  "Find out why your marketing is not bringing results",
  "Get a customized growth strategy for your business",
  "Learn how to attract more quality leads online",
  "Understand what your competitors are doing better",
  "Get clear next steps instead of guessing",
];

const process = [
  "Fill out the short form",
  "Book your free 1:1 consultation call",
  "Receive a customized marketing strategy for your business",
];

export default function Benefits() {
  return (
    <section className="border-y border-brand-line bg-brand-cream px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
              How you benefit
            </p>
            <h2 className="font-display text-4xl leading-tight text-brand-ink sm:text-5xl">
              How You Benefit From This Consultation
            </h2>
          </div>
          <p className="text-base leading-7 text-brand-brown lg:max-w-xl">
            Each point is focused on helping you understand what is happening
            now and what to do next.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="rounded-lg border border-brand-line bg-brand-ivory p-6 shadow-soft sm:p-7"
            >
              <span className="text-sm font-semibold text-brand-clay">
                0{index + 1}
              </span>
              <p className="mt-5 text-lg font-semibold leading-7 text-brand-ink">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-brand-line bg-brand-sage p-6 text-white shadow-premium sm:p-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-softgold">
                Process of this consultation
              </p>
              <h2 className="mt-3 font-display text-3xl text-white">
                Simple 3-step process
              </h2>
            </div>
            <a
              href="#consultation-form"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-brand-ink transition hover:bg-brand-softgold"
            >
              Book Free Consultation
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map((step, index) => (
              <div key={step} className="border-t border-white/20 pt-5">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-softgold">
                  Step {index + 1}
                </span>
                <p className="mt-3 text-lg font-semibold leading-7 text-white">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
