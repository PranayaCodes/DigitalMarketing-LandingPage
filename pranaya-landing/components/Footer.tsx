export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="gold-divider mb-8" />
        <p className="font-display text-xl italic text-cream/80">
          Your growth starts with one conversation.
        </p>
        <p className="mt-6 font-body text-sm text-cream/30">
          Copyright {new Date().getFullYear()} Pranaya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
