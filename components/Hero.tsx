import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-brand-cream px-5 pb-16 pt-5 text-brand-ink sm:px-8 lg:pb-24"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <a
          href="#top"
          className="flex items-center gap-4 rounded-lg border border-brand-line bg-brand-ivory px-4 py-3 shadow-soft"
          aria-label="Pranaya home"
        >
          <Image
            src="/logo.png"
            alt="Pranaya"
            width={80}
            height={80}
            className="h-14 w-14 rounded-full border border-brand-line bg-white object-cover"
            priority
          />
          <div>
            <span className="block text-base font-bold tracking-[0.08em] text-brand-ink">
              PRANAYA
            </span>
            <span className="hidden text-xs font-medium text-brand-brown sm:block">
              Digital Marketing Consultation
            </span>
          </div>
        </a>
        <a
          href="#consultation-form"
          className="hidden min-h-11 items-center justify-center rounded-md bg-brand-sage px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-ink sm:inline-flex"
        >
          Book Free Consultation
        </a>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 pt-16 lg:grid-cols-[1fr_0.74fr] lg:pt-24">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-brand-line bg-brand-ivory px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
            Free 1:1 Digital Marketing Consultation
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-brand-ink sm:text-6xl lg:text-7xl">
            Stop Wasting Money on Random Marketing
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-brown sm:text-xl sm:leading-9">
            Get a Free 1:1 Digital Marketing Consultation and receive a
            customized marketing strategy built specifically for your business.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#consultation-form"
              className="inline-flex min-h-14 items-center justify-center rounded-md bg-brand-sage px-8 text-base font-bold text-white shadow-soft transition hover:bg-brand-ink focus:outline-none focus:ring-4 focus:ring-brand-sage/20"
            >
              Book Free Consultation
            </a>
            <p className="text-sm font-medium text-brand-brown">
              Customized strategy. Clear next steps. No spam.
            </p>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["01", "Current marketing review"],
              ["02", "Lead growth opportunities"],
              ["03", "Clear action plan"],
            ].map(([number, text]) => (
              <div
                key={number}
                className="rounded-lg border border-brand-line bg-brand-ivory p-5 shadow-sm"
              >
                <span className="text-xs font-semibold text-brand-clay">
                  {number}
                </span>
                <p className="mt-2 text-sm font-medium leading-6 text-brand-brown">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-brand-line bg-brand-ivory p-6 text-brand-ink shadow-premium sm:p-8 lg:translate-y-6">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
                What you receive
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-brand-ink">
                A customized marketing strategy for your business.
              </h2>
            </div>
            <span className="hidden h-12 w-12 shrink-0 rounded-full border border-brand-sage/25 bg-brand-mist sm:block" />
          </div>
          <div className="mt-8 divide-y divide-brand-line border-y border-brand-line">
            {[
              "Review what is not working",
              "Identify lead growth opportunities",
              "Get clear next steps instead of guessing",
            ].map((item) => (
              <p
                key={item}
                className="flex items-center gap-3 py-4 text-sm font-medium text-brand-brown"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-clay" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-7 border-l-2 border-brand-sage pl-5">
            <p className="text-sm leading-6 text-brand-brown">
              We will look at your current marketing, identify what is not
              working, and create a simple strategy you can actually use.
            </p>
          </div>
          <a
            href="#consultation-form"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-sage px-5 text-sm font-semibold text-white transition hover:bg-brand-ink"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
