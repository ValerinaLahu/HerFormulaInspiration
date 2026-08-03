interface GalleryCardProps {
  title: string
  description: string
  emoji: string
}

export default function GalleryCard({ title, description, emoji }: GalleryCardProps) {
  return (
    <div className="fairytale-card p-6">
      <div className="w-full h-52 bg-gradient-to-br from-fairytale-lavender from-20% to-fairytale-gold to-80% rounded-smooth flex items-center justify-center mb-4 shadow-md">
        <span className="text-5xl">{emoji}</span>
      </div>
      <h3 className="text-xl text-fairytale-forest font-normal mb-2">{title}</h3>
      <p className="text-fairytale-muted text-sm leading-relaxed mb-4">{description}</p>
      <button className="fairytale-button-forest text-white w-full hover:shadow-md">
        View Gallery
      </button>
    </div>
  )
}
