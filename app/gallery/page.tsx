import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GalleryCard from '@/components/GalleryCard'

const galleryCategories = [
  { id: 1, title: 'Ceramics & Craft', description: 'Close-up moments of our ceramic creations—the textures, colors, and details that make each piece special.', emoji: '🎨' },
  { id: 2, title: 'Natural Light', description: 'Photography celebrating the magic of natural light, from golden hour to soft morning glow.', emoji: '☀️' },
  { id: 3, title: 'Still Life', description: 'Artistic arrangements of everyday objects that tell stories and inspire creativity.', emoji: '📸' },
  { id: 4, title: 'Moments & Memories', description: 'Candid shots and cherished moments between a daughter and her mother, full of love and laughter.', emoji: '💕' },
  { id: 5, title: 'Nature & Color', description: 'Explorations of natural beauty, textures, and the vibrant colors found in our world.', emoji: '🌿' },
  { id: 6, title: 'Collaborations', description: 'Projects where ceramics and photography come together in beautiful harmony.', emoji: '✨' },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-fairytale-cream">
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl text-fairytale-forest font-normal text-center mb-4">Our Gallery</h1>
        <p className="text-center text-fairytale-muted max-w-2xl mx-auto mb-12">
          A visual journey through our creative world. Photography and ceramics capturing moments of beauty,
          inspiration, and the connection between a daughter and her mom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryCategories.map((category) => (
            <GalleryCard
              key={category.id}
              title={category.title}
              description={category.description}
              emoji={category.emoji}
            />
          ))}
        </div>
      </section>

      <div className="section-divider my-16">⚜ ⚜ ⚜</div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Photography Philosophy</h2>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl text-fairytale-forest font-normal mb-4">Storytelling Through Images</h3>
              <p className="text-fairytale-muted mb-4">
                Every photograph we take is a story waiting to be told. We believe in capturing not just what we see,
                but what we feel. Our photography is intimate, intentional, and deeply personal.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-fairytale-gold to-fairytale-rose rounded-smooth flex items-center justify-center shadow-lg">
              <span className="text-5xl">📖</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-64 bg-gradient-to-br from-fairytale-lavender to-fairytale-gold rounded-smooth flex items-center justify-center shadow-lg order-2 md:order-1">
              <span className="text-5xl">🎭</span>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl text-fairytale-forest font-normal mb-4">Authentic Moments</h3>
              <p className="text-fairytale-muted">
                We cherish authenticity over perfection. Our favorite images are those that capture real moments—
                laughter, concentration, the quiet joy of creating something beautiful together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
