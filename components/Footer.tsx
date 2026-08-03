import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-fairytale-gold border-opacity-20 bg-gradient-to-b from-transparent to-fairytale-light py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-fairytale-forest font-normal">HerFormulaInspiration</h3>
            <p className="text-fairytale-muted text-sm mt-2">Where art meets life</p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/about" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-fairytale-forest hover:text-fairytale-gold transition-colors">
              Contact
            </Link>
            <a
              href="https://www.instagram.com/heroutfitformula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fairytale-forest hover:text-fairytale-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@heroutfitformula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fairytale-forest hover:text-fairytale-gold transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="text-center border-t border-fairytale-gold border-opacity-20 pt-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/heroutfitformula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-fairytale-rose text-white rounded-full text-sm hover:bg-opacity-90 transition-all"
            >
              Follow on Instagram ✨
            </a>
            <a
              href="https://www.tiktok.com/@heroutfitformula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-fairytale-forest text-white rounded-full text-sm hover:bg-opacity-90 transition-all"
            >
              Follow on TikTok ✨
            </a>
          </div>
        </div>

        <div className="text-center text-fairytale-muted text-xs mt-8 pt-8 border-t border-fairytale-gold border-opacity-20">
          <div className="ornament mb-2">✦ ✦ ✦</div>
          <p>&copy; {new Date().getFullYear()} HerFormulaInspiration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
