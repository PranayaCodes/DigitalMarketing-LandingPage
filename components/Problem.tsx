const problems = [
  'Posting on Facebook and Instagram but getting very few inquiries',
  'Boosting posts but not seeing real sales',
  'Getting random leads who are not serious buyers',
  'Depending only on referrals or word of mouth',
  'Feeling confused about ads, content, landing pages, and follow-up',
  'Not knowing which marketing strategy to use next',
]

export default function Problem() {
  return (
    <section className="bg-ink px-6 py-20 text-cream md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Does this sound familiar?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
            You are doing marketing, but customers are still not coming consistently.
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-cream/70">
            Many business owners in Nepal are not lazy with marketing. They are active. They post.
            They boost. They try offers. But the full system is unclear.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-cream/70">
            When your message, ad, page, and follow-up do not work together, you get attention
            without enough customers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-sm"
            >
              <div className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <p className="font-body leading-relaxed text-cream/80">{problem}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-accent/30 bg-accent/10 p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-cream md:text-3xl">
            The solution is not always more ads.
          </h3>
          <p className="mt-4 font-body text-lg leading-relaxed text-cream/75">
            In the free consultation call, I will understand your business, identify what is not
            working, and give you a clear digital marketing plan you can start implementing
            immediately.
          </p>
        </div>
      </div>
    </section>
  )
}
