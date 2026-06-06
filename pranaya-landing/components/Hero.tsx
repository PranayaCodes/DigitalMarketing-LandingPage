'use client'

import Image from 'next/image'
import CTAForm from './CTAForm'

const benefits = [
  { icon: '🎯', text: 'Personalized strategy for your business' },
  { icon: '📞', text: '1-hour deep-dive consultation call' },
  { icon: '📋', text: 'Walk away with a clear action plan' },
]

const trustBadges = [
  '100% Free',
  'No Obligations',
  'For Nepal-Based Businesses',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-bg px-4 py-8 md:px-8 md:py-12 lg:py-16">
      {/* Floating decorative orbs */}
      <div className="orb w-72 h-72 bg-accent/20 -top-20 -left-20 animate-float-slow" />
      <div className="orb w-96 h-96 bg-blue-500/10 -bottom-32 -right-32 animate-float-slower" />
      <div className="orb w-48 h-48 bg-accent/10 top-1/3 right-1/4 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="orb w-32 h-32 bg-purple-500/10 bottom-1/4 left-1/4 animate-float-slower" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Logo */}
        <header className="animate-enter flex justify-center md:justify-start">
          <div className="inline-flex items-center justify-center rounded-2xl bg-white p-2 shadow-xl shadow-black/10 border border-white/20 md:p-2.5">
            <Image
              src="/logo.png"
              alt="Pranaya"
              width={160}
              height={160}
              priority
              className="h-14 w-14 object-contain md:h-20 md:w-20"
            />
          </div>
        </header>

        {/* Main content grid */}
        <div className="mt-8 grid items-center gap-8 md:mt-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side — messaging */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-enter animate-enter-delay-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-body text-sm font-semibold text-accent-light backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
                </span>
                Free strategy call — Limited spots
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-enter animate-enter-delay-2 mt-6 font-display text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">
              Struggling to get{' '}
              <span className="shimmer-text">more customers?</span>
            </h1>

            {/* Subtext */}
            <p className="animate-enter animate-enter-delay-3 mt-5 font-body text-lg leading-relaxed text-white/60 md:text-xl">
              Book a <span className="font-bold text-accent-light">FREE 1:1 consultation</span> and
              get a simple digital marketing plan to bring more leads, customers, and sales to your business.
            </p>

            {/* Benefits */}
            <div className="animate-enter animate-enter-delay-4 mt-8 space-y-3">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3 lg:justify-start justify-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base backdrop-blur-sm">
                    {b.icon}
                  </span>
                  <span className="font-body text-sm font-medium text-white/80 md:text-base">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="animate-enter animate-enter-delay-5 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-body text-xs font-semibold tracking-wide text-white/50 backdrop-blur-sm"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — Form */}
          <div className="animate-enter animate-enter-delay-3">
            <CTAForm />
          </div>
        </div>
      </div>
    </section>
  )
}
