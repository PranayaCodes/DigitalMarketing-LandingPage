'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-cream px-6 pb-20 pt-8 md:pb-24">
      <header className="mx-auto flex max-w-5xl justify-center">
        <Image
          src="/logo.png"
          alt="Pranaya"
          width={280}
          height={210}
          priority
          className="h-auto w-36 object-contain md:w-48"
        />
      </header>

      <div className="mx-auto mt-8 max-w-4xl text-center md:mt-10">
        <p className="mx-auto inline-flex rounded-full border border-accent/25 bg-white px-4 py-2 font-body text-sm font-semibold text-accent shadow-sm">
          Free strategy call for Nepal-based business owners
        </p>

        <h1 className="mt-8 font-display text-4xl font-bold leading-[1.08] text-ink md:text-6xl lg:text-7xl">
          Struggling to get more customers?
        </h1>

        <p className="mt-5 font-body text-xl font-semibold text-accent md:text-2xl">
          Book a FREE 1:1 marketing consultation call
        </p>

        <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-ink/70 md:text-xl">
          In this 1-hour call, I will understand your business and give you a simple digital
          marketing plan to get more leads, customers, and sales.
        </p>

        <div className="mt-9">
          <button
            onClick={scrollToForm}
            className="btn-primary rounded-md bg-accent px-8 py-4 font-body text-base font-bold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-light md:px-10 md:text-lg"
          >
            Book your FREE call now
          </button>
          <p className="mt-4 font-body text-sm text-ink/55">
            No pressure. Just clear advice for your business.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 border-y border-warm py-6 text-left md:grid-cols-3">
          {['For serious inquiries', 'For better ad results', 'For a clear action plan'].map(
            (item) => (
              <div key={item} className="flex items-center justify-center gap-3 md:justify-start">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="font-body text-sm font-semibold text-ink/70">{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
