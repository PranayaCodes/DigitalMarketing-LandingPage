import Image from 'next/image'

const vimeoUrl = 'https://player.vimeo.com/video/76979871'
const whatsappUrl = 'https://wa.me/'

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-8">
      <header className="mx-auto flex max-w-5xl justify-center">
        <Image
          src="/logo.png"
          alt="Pranaya"
          width={240}
          height={180}
          priority
          className="h-auto w-32 object-contain md:w-40"
        />
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center py-12 text-center md:py-16">
        <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
          Wait... watch the video before you go
        </h1>
        <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-ink/65">
          Before your consultation, please watch this short video so you know what to do next.
        </p>

        <div className="mt-10 w-full overflow-hidden rounded-lg border border-warm bg-ink shadow-lg">
          <div className="aspect-video">
            <iframe
              src={vimeoUrl}
              title="Next steps before your consultation"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-md bg-accent px-8 py-4 font-body text-base font-bold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-light"
        >
          Chat with me on WhatsApp
        </a>
      </section>
    </main>
  )
}
