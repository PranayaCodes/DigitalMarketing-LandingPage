'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is the consultation really free?',
    answer:
      'Yes. The 1:1 consultation is free. The goal is to understand your business, find the gaps in your current marketing, and give you a simple plan you can start using.',
  },
  {
    question: 'Who is this consultation for?',
    answer:
      'It is for Nepal-based business owners who want more serious inquiries, customers, and sales from digital marketing. Cafes, clinics, gyms, consultancies, training institutes, ecommerce brands, local stores, and service businesses can all apply.',
  },
  {
    question: 'What will I get inside the consultation call?',
    answer:
      'We will look at your business, your current marketing, your offer, your ads or content, and your follow-up process. Then I will show you what is not working and what to improve first.',
  },
  {
    question: 'How long will the consultation call be?',
    answer:
      'The call is planned for around 1 hour. That gives enough time to understand your business and create a clear direction without rushing.',
  },
  {
    question: 'Do I need to have a website before booking the call?',
    answer:
      'No. If you only have a Facebook page, Instagram page, WhatsApp, or a local store, you can still book the call. I will suggest what makes sense for your current stage.',
  },
  {
    question: 'What happens after I fill up the form?',
    answer:
      'After you submit the form, you will be taken to the thank you page. Then you will receive the next steps for booking your appointment and preparing for the call.',
  },
  {
    question: 'Will you help me create a marketing plan for my business?',
    answer:
      'Yes. The main purpose of the call is to give you a practical digital marketing plan based on your business, not a random template.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-cream px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Quick Answers
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-warm rounded-lg border border-warm bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-base font-semibold text-ink md:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-warm text-xl leading-none text-accent">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 font-body leading-relaxed text-ink/65 md:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
