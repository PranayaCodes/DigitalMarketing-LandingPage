'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const vimeoUrl = 'https://player.vimeo.com/video/1195906204?autoplay=1&title=0&byline=0&portrait=0'
const whatsappUrl = 'https://wa.me/9779762410108'

export default function ThanksPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 px-6 py-8">
        {/* Header / Logo */}
        <header
          className={`mx-auto flex max-w-5xl justify-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <Image
            src="/logo.png"
            alt="Pranaya"
            width={240}
            height={180}
            priority
            className="h-auto w-32 object-contain md:w-40"
          />
        </header>

        {/* Gold divider */}
        <div
          className={`gold-divider mx-auto mt-6 max-w-xs transition-all delay-200 duration-700 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        />

        {/* Main content */}
        <section className="mx-auto flex max-w-3xl flex-col items-center py-10 text-center md:py-14">
          {/* Success badge */}
          <div
            className={`transition-all delay-300 duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 font-body text-sm font-semibold text-green-700 shadow-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              You're all set!
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`mt-7 font-display text-4xl font-bold leading-tight text-ink transition-all delay-[400ms] duration-700 md:text-5xl lg:text-6xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Thank You{' '}
            <span className="relative inline-block">
              <span className="relative z-10">for Signing Up</span>
              <span className="absolute -bottom-1 left-0 h-3 w-full bg-accent/20 md:-bottom-1.5 md:h-4" />
            </span>
          </h1>

          <p
            className={`mt-5 max-w-xl font-body text-lg leading-relaxed text-ink/60 transition-all delay-500 duration-700 md:text-xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Before your consultation, please watch this short video so you know exactly what to
            expect and how to prepare.
          </p>

          {/* Video card */}
          <div
            className={`mt-10 w-full transition-all delay-[600ms] duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="group relative rounded-2xl border border-warm/80 bg-white p-2 shadow-xl shadow-ink/[0.06] transition-shadow duration-500 hover:shadow-2xl hover:shadow-ink/[0.1] md:p-3">
              {/* Decorative corner accents */}
              <div className="absolute -left-px -top-px h-6 w-6 rounded-tl-2xl border-l-2 border-t-2 border-accent/40" />
              <div className="absolute -right-px -top-px h-6 w-6 rounded-tr-2xl border-r-2 border-t-2 border-accent/40" />
              <div className="absolute -bottom-px -left-px h-6 w-6 rounded-bl-2xl border-b-2 border-l-2 border-accent/40" />
              <div className="absolute -bottom-px -right-px h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-accent/40" />

              {/* Video container */}
              <div className="relative overflow-hidden rounded-xl bg-ink">
                <div className="aspect-video">
                  {/* Loading skeleton */}
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent/20 border-t-accent" />
                        <span className="font-body text-sm text-white/40">Loading video…</span>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={vimeoUrl}
                    title="Next steps before your consultation"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setVideoLoaded(true)}
                    className={`h-full w-full transition-opacity duration-500 ${
                      videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Video label */}
            <p className="mt-3 font-body text-xs font-medium tracking-wide text-ink/35">
              ▶ WATCH BEFORE YOUR CALL
            </p>
          </div>

          {/* Next steps */}
          <div
            className={`mt-12 w-full transition-all delay-[800ms] duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="gold-divider mx-auto max-w-xs" />

            <h2 className="mt-8 font-display text-2xl font-semibold text-ink md:text-3xl">
              What happens next?
            </h2>

            <div className="mx-auto mt-8 grid max-w-lg gap-4 text-left md:max-w-2xl md:grid-cols-3 md:gap-6">
              {[
                {
                  step: '01',
                  title: 'Watch the Video',
                  desc: 'Learn what to prepare before our call.',
                },
                {
                  step: '02',
                  title: 'Check Your Inbox',
                  desc: "You'll receive a confirmation email shortly.",
                },
                {
                  step: '03',
                  title: 'Join the Call',
                  desc: "Show up on time and let's build your plan!",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="group/card relative rounded-xl border border-warm/60 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.06]"
                >
                  <span className="font-display text-3xl font-bold text-accent/20 transition-colors duration-300 group-hover/card:text-accent/40">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-body text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ink/55">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`mt-12 transition-all delay-[1000ms] duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 rounded-lg bg-accent px-8 py-4 font-body text-base font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with me on WhatsApp
            </a>
            <p className="mt-4 font-body text-sm text-ink/40">
              Have questions? I'm just a message away.
            </p>
          </div>
        </section>

        {/* Footer divider */}
        <div
          className={`gold-divider mx-auto max-w-xs transition-all delay-[1100ms] duration-700 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        />

        <footer className="py-6 text-center">
          <p className="font-body text-xs text-ink/30">
            © {new Date().getFullYear()} Pranaya · Digital Marketing Consultation
          </p>
        </footer>
      </div>
    </main>
  )
}
