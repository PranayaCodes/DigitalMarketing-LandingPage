export default function FinalPitch() {
  return (
    <section className="bg-brand-ivory px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl rounded-lg border border-brand-line bg-white p-6 shadow-premium sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
              Book with clarity
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-brand-ink sm:text-5xl">
              Get a practical marketing plan before spending more.
            </h2>
          </div>
          <div className="border-l-2 border-brand-clay pl-6">
            <p className="text-lg leading-8 text-brand-brown">
              If your business is struggling to get consistent leads, sales, or
              growth online, this consultation is for you.
            </p>
            <a
              href="#consultation-form"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-sage px-6 text-sm font-semibold text-white transition hover:bg-brand-ink"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
