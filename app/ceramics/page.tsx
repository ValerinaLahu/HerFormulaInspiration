import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CeramicCard from '@/components/CeramicCard'

const ceramics = [
  { id: 1, title: 'Organic Serving Platters', description: 'Hand-sculpted serving platters with organic, wavy edges. Perfect for charcuterie boards, appetizers, and entertaining. Each piece is food-safe and one-of-a-kind.', emoji: '🍽️' },
  { id: 2, title: 'Artisan Snack Bowls', description: 'Beautiful shallow bowls with natural curves, ideal for nuts, olives, dips, and small bites. Elevate your table settings with these sculptural pieces.', emoji: '🥜' },
  { id: 3, title: 'Charger Plates', description: 'Decorative yet functional charger plates with artisan glazing. Layer them under dinner plates for a sophisticated, layered look at special occasions.', emoji: '✨' },
  { id: 4, title: 'Autumn Collection', description: 'Seasonal pieces with warm terracotta, ochre, and deep gold glazes. Perfect for fall gatherings, harvest tables, and cozy autumn entertaining.', emoji: '🍂' },
  { id: 5, title: 'Holiday & Christmas Line', description: 'Festive ceramic pieces with elegant designs perfect for holiday entertaining. Hand-glazed in whites, golds, and seasonal colors for magical gatherings.', emoji: '🎄' },
  { id: 6, title: 'Custom Commissions', description: 'Have a vision? We create custom ceramic pieces tailored to your specific needs, colors, and preferences. Perfect for weddings, events, or personal collections.', emoji: '💝' },
]

export default function Ceramics() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl text-fairytale-forest font-normal text-center mb-4">Our Ceramic Collection</h1>
        <p className="text-center text-fairytale-muted max-w-2xl mx-auto mb-12">
          Handcrafted with love and care, each ceramic piece is made to bring warmth and beauty to your life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ceramics.map((ceramic) => (
            <CeramicCard
              key={ceramic.id}
              title={ceramic.title}
              description={ceramic.description}
              emoji={ceramic.emoji}
            />
          ))}
        </div>
      </section>

      <div className="section-divider my-16">⚜ ⚜ ⚜</div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Handcrafted Process</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-fairytale-gold flex items-center justify-center text-white font-serif font-normal">
                1
              </div>
            </div>
            <div>
              <h3 className="text-lg text-fairytale-forest font-normal mb-2">Concept & Design</h3>
              <p className="text-fairytale-muted">
                Each piece begins with inspiration from nature's organic forms. We sketch designs for serving platters, bowls, and functional art, considering both beauty and practical use for entertaining.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-fairytale-gold flex items-center justify-center text-white font-serif font-normal">
                2
              </div>
            </div>
            <div>
              <h3 className="text-lg text-fairytale-forest font-normal mb-2">Hand-Sculpting & Shaping</h3>
              <p className="text-fairytale-muted">
                Using hand-building and wheel-throwing techniques, we create organic, flowing forms. Wavy edges and sculptural details are carefully crafted to make each piece unique and functional.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-fairytale-gold flex items-center justify-center text-white font-serif font-normal">
                3
              </div>
            </div>
            <div>
              <h3 className="text-lg text-fairytale-forest font-normal mb-2">Drying & Detailing</h3>
              <p className="text-fairytale-muted">
                We slowly dry each piece to prevent cracking, then refine edges and add fine details. Special attention is paid to food-safe surfaces and smooth finishes for serving pieces.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-fairytale-gold flex items-center justify-center text-white font-serif font-normal">
                4
              </div>
            </div>
            <div>
              <h3 className="text-lg text-fairytale-forest font-normal mb-2">Glazing & Kiln Firing</h3>
              <p className="text-fairytale-muted">
                Carefully selected glazes bring color and personality to each piece. We fire at high temperatures to create durable, food-safe surfaces perfect for your table and entertaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
