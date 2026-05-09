export default function Problem() {
  return (
    <section className="bg-brand-ivory px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.62fr_1fr] lg:items-start">
        <div className="rounded-lg border border-brand-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
            For growing businesses
          </p>
          <p className="mt-6 max-w-sm text-base leading-7 text-brand-brown">
            This is for business owners who want leads, sales, and growth
            online without guessing what to do next.
          </p>
        </div>
        <div>
          <h2 className="font-display text-4xl leading-tight text-brand-ink sm:text-5xl">
            If your business is struggling to get consistent leads, sales, or
            growth online, this consultation is for you.
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-brown">
            We will look at your current marketing, identify what is not
            working, and create a simple strategy you can actually use.
          </p>
        </div>
      </div>
    </section>
  );
}
