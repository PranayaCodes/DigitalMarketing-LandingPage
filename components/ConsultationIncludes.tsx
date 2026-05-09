const items = [
  {
    title: "Marketing Audit",
    text: "We review your current marketing and identify what is not bringing results.",
  },
  {
    title: "Growth Direction",
    text: "You get a customized growth strategy built around your business.",
  },
  {
    title: "Competitor Insight",
    text: "You understand what your competitors are doing better online.",
  },
  {
    title: "Action Plan",
    text: "You leave with clear next steps instead of guessing.",
  },
];

export default function ConsultationIncludes() {
  return (
    <section className="bg-brand-mist px-5 py-16 text-brand-ink sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sage">
              Inside the consultation
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-brand-ink sm:text-5xl">
              A focused call built to uncover the smartest next move.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-brand-line bg-brand-ivory p-6 shadow-soft sm:p-7"
              >
                <h3 className="font-display text-2xl text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-brand-brown">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
