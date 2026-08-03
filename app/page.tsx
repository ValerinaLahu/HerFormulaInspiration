import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CeramicCard from '@/components/CeramicCard'
import GalleryCard from '@/components/GalleryCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-fairytale-cream">
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center animate-fade-in-up">
          <div className="w-full max-w-md mx-auto h-64 md:h-80 bg-gradient-to-br from-fairytale-gold via-fairytale-rose to-fairytale-lavender rounded-organic shadow-xl flex items-center justify-center mb-8">
            <span className="text-7xl md:text-8xl">🍵</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-fairytale-forest mb-4 font-normal">Welcome to our creative space</h2>
          <p className="text-fairytale-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of carefully crafted ceramics and heartfelt moments shared between a daughter and her mom.
            Each piece tells a story of creativity, passion, and love.
          </p>
        </div>
      </section>

      <div className="section-divider">⚜ ⚜ ⚜</div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Ceramic Treasures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CeramicCard
            title="Handmade Plates"
            description="Each plate is crafted with care and uniqueness. From everyday dining to special occasions, our ceramic collection brings warmth to your table."
            emoji="🍽️"
          />
          <CeramicCard
            title="Kitchen Essentials"
            description="Beautifully designed mugs, bowls, and serving pieces that blend function with artistry. Perfect for creating cozy moments in your kitchen."
            emoji="🫖"
          />
        </div>
        <div className="text-center mt-8">
          <Link href="/ceramics">
            <button className="fairytale-button-gold text-white">
              View All Ceramics →
            </button>
          </Link>
        </div>
      </section>

      <div className="section-divider">⚜ ⚜ ⚜</div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Our Stories in Pictures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GalleryCard
            title="My Moments"
            description="A visual diary of inspiration, creativity, and the beauty I see in everyday life. Photography that captures emotion and connection."
            emoji="📸"
          />
          <GalleryCard
            title="Mom's Creations"
            description="The artistic vision of my mother—a journey through her lens and heart. Stories of love, nature, and timeless beauty."
            emoji="🌸"
          />
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery">
            <button className="fairytale-button-forest text-white">
              Explore Full Gallery →
            </button>
          </Link>
        </div>
      </section>

      <div className="section-divider">⚜ ⚜ ⚜</div>

      <section className="bg-gradient-to-r from-fairytale-lavender/15 via-fairytale-gold/10 to-fairytale-rose/15 py-16 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl text-fairytale-forest font-normal mb-4">Stay Connected</h3>
          <p className="text-fairytale-muted mb-6">Follow our journey for behind-the-scenes content and creative inspiration</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/heroutfitformula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-fairytale-rose text-white rounded-full font-serif hover:bg-opacity-90 transition-all shadow-lg"
            >
              Follow on Instagram ✨
            </a>
            <a
              href="https://www.tiktok.com/@heroutfitformula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-fairytale-forest text-white rounded-full font-serif hover:bg-opacity-90 transition-all shadow-lg"
            >
              Follow on TikTok ✨
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
