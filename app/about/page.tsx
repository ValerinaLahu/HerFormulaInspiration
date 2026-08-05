import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl text-fairytale-forest font-normal text-center mb-12">Our Story</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl text-fairytale-forest font-normal">Her Journey 👩‍🎨</h2>
            <p className="text-fairytale-muted leading-relaxed">
              My mother is the creative heart of HerFormulaInspiration. With years of experience in ceramics and artistic craftsmanship, she brings traditional pottery techniques to life with every piece she creates.
            </p>
            <p className="text-fairytale-muted leading-relaxed">
              Her passion for clay, color, and form has shaped not only our ceramic collection but also inspired me to see the beauty in handmade creation. She believes that every bowl, plate, and vase tells a story of patience, care, and love.
            </p>
            <p className="text-fairytale-muted leading-relaxed">
              Through the years, she has perfected her craft, developing her signature glazing techniques and organic design philosophy that makes each piece uniquely hers.
            </p>
          </div>
          <div className="h-72 bg-gradient-to-br from-fairytale-lavender to-fairytale-rose rounded-organic flex items-center justify-center shadow-xl">
            <span className="text-6xl">👩</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-72 bg-gradient-to-br from-fairytale-gold to-fairytale-lavender rounded-organic flex items-center justify-center shadow-xl order-2 md:order-1">
            <span className="text-6xl">👧</span>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-2xl text-fairytale-forest font-normal">My Journey 📸</h2>
            <p className="text-fairytale-muted leading-relaxed">
              I grew up surrounded by creativity—watching my mom work in her studio, learning that beauty is found in the details, and understanding that handmade objects carry meaning.
            </p>
            <p className="text-fairytale-muted leading-relaxed">
              My passion is photography and storytelling. I capture moments that inspire me—the play of light on clay, the texture of a perfect glaze, the connection between artist and creation. Through my lens, I celebrate the art of making.
            </p>
            <p className="text-fairytale-muted leading-relaxed">
              HerFormulaInspiration is where our two creative passions merge—her ceramics and my photography—telling the story of what it means to create with intention, love, and authenticity.
            </p>
          </div>
        </div>

        <div className="border-t border-fairytale-gold border-opacity-30 pt-12">
          <h3 className="text-2xl text-fairytale-forest font-normal text-center mb-6">Our Shared Vision</h3>
          <p className="text-fairytale-muted leading-relaxed text-center max-w-2xl mx-auto mb-8">
            HerFormulaInspiration was born from a shared passion between a daughter and her mother. What started as quiet moments in the studio evolved into a beautiful collection of handcrafted ceramics and captured photographs. Together, we believe in creating with intention, celebrating artistry, and sharing the joy of handmade beauty with the world.
          </p>
        </div>
      </section>

      <div className="section-divider my-16">⚜ ⚜ ⚜</div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="fairytale-card p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg text-fairytale-forest font-normal mb-2">Creativity</h3>
            <p className="text-sm text-fairytale-muted">
              Each creation is unique, born from inspiration and artistic vision. We celebrate individuality and innovation.
            </p>
          </div>
          <div className="fairytale-card p-6 text-center">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-lg text-fairytale-forest font-normal mb-2">Sustainability</h3>
            <p className="text-sm text-fairytale-muted">
              We care about our planet and use sustainable materials and practices in our creative process.
            </p>
          </div>
          <div className="fairytale-card p-6 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-lg text-fairytale-forest font-normal mb-2">Connection</h3>
            <p className="text-sm text-fairytale-muted">
              We create with love and hope our pieces bring joy and connection to your homes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
