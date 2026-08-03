import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b-2 border-fairytale-gold bg-gradient-to-b from-fairytale-cream to-fairytale-cream/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center">
          <div className="ornament mb-2">✦ ✦ ✦</div>
          <Link href="/">
            <h1 className="text-4xl md:text-5xl text-fairytale-forest tracking-wider cursor-pointer hover:text-fairytale-gold transition-colors">
              HerFormulaInspiration
            </h1>
          </Link>
          <p className="text-fairytale-lavender italic mt-2">Handmade ceramics, kitchen treasures & captured moments</p>
        </div>

        <nav className="flex justify-center gap-6 md:gap-12 py-4 text-sm md:text-base border-t border-fairytale-gold border-opacity-20">
          <Link href="/" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
            About
          </Link>
          <Link href="/ceramics" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
            Ceramics
          </Link>
          <Link href="/gallery" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
            Contact
          </Link>
          <a
            href="https://www.instagram.com/heroutfitformula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fairytale-forest hover:text-fairytale-gold transition-colors"
            title="Follow on Instagram"
          >
            📷
          </a>
          <a
            href="https://www.tiktok.com/@heroutfitformula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fairytale-forest hover:text-fairytale-gold transition-colors"
            title="Follow on TikTok"
          >
            🎬
          </a>
        </nav>
      </div>
    </header>
  )
}
