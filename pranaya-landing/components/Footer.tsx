export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="gold-divider mb-8" />
        <p className="font-display text-xl italic text-cream/80">
          Your growth starts with one conversation.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-body text-xs text-cream/25">
          <span>© {new Date().getFullYear()} Pranaya</span>
          <span className="hidden sm:inline">·</span>
          <span>Digital Marketing Consultation</span>
          <span className="hidden sm:inline">·</span>
          <span>Nepal</span>
        </div>
      </div>
    </footer>
  )
}
