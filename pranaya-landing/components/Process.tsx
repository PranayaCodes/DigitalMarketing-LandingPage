const steps = [
  {
    title: 'Fill up the form',
    desc: 'Share your contact details, business name, and where people can see your business online.',
  },
  {
    title: 'Receive an email with the appointment link',
    desc: 'You will get the next step in your inbox so you can choose a suitable time.',
  },
  {
    title: 'Fill the appointment form',
    desc: 'Answer a few simple questions so I can understand your business before the call.',
  },
  {
    title: 'Join the 1:1 consultation call',
    desc: 'We will talk about what is working, what is stuck, and what needs to change.',
  },
  {
    title: 'Get your customized plan for FREE',
    desc: 'You will leave with clear next steps for leads, customers, content, ads, and follow-up.',
  },
]

export default function Process() {
  return (
    <section className="bg-mist px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Simple Process
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            How The Free Consultation Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink/65">
            You do not need to prepare a big document. Just fill the form, book the time, and come
            ready to talk about your business.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-lg border border-warm bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-body text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 font-body text-lg font-bold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
