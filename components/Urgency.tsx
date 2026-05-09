export default function Urgency() {
  return (
    <section className="bg-brand-ivory px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-lg border border-brand-sage/20 bg-brand-mist px-6 py-8 shadow-soft sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
              Limited free consultations
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
              Book the Call
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-brand-brown">
              Free 1:1 Consultation. Customized Strategy for Your Business.
            </p>
          </div>
          <a
            href="#consultation-form"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-sage px-6 text-sm font-semibold text-white transition hover:bg-brand-ink focus:outline-none focus:ring-4 focus:ring-brand-sage/20"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
