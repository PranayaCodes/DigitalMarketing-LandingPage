import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You | Pranaya",
  description: "Your free 1:1 digital marketing consultation request was received.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-5 py-10 text-brand-ink sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col items-center justify-center text-center">
        <div className="mb-8 flex items-center gap-4 rounded-lg border border-brand-line bg-brand-ivory px-5 py-4 shadow-soft">
          <Image
            src="/logo.png"
            alt="Pranaya"
            width={74}
            height={74}
            className="h-14 w-14 rounded-full border border-brand-line bg-white object-cover"
            priority
          />
          <span className="text-xl font-semibold tracking-[0.12em] text-brand-ink">
            PRANAYA
          </span>
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-sage">
          Request received
        </p>
        <h1 className="max-w-2xl font-display text-5xl leading-tight text-brand-ink sm:text-6xl">
          Thank you for booking your free consultation.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-brand-brown">
          Your details have been received. The next step is to check your email
          or WhatsApp for confirmation and call details.
        </p>

        <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3">
          {["We review your business details", "You get call confirmation", "You receive clear next steps"].map(
            (step, index) => (
              <div
                key={step}
                className="rounded-lg border border-brand-line bg-brand-ivory p-5 shadow-soft"
              >
                <span className="text-sm font-bold text-brand-sage">
                  Step {index + 1}
                </span>
                <p className="mt-3 text-sm font-semibold leading-6 text-brand-ink">
                  {step}
                </p>
              </div>
            ),
          )}
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-sage px-7 text-sm font-bold text-white transition hover:bg-brand-ink focus:outline-none focus:ring-4 focus:ring-brand-sage/20"
        >
          Back to Landing Page
        </Link>
      </section>
    </main>
  );
}
