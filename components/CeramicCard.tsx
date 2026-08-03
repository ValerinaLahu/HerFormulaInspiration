interface CeramicCardProps {
  title: string
  description: string
  emoji: string
}

export default function CeramicCard({ title, description, emoji }: CeramicCardProps) {
  return (
    <div className="fairytale-card p-6">
      <div className="w-full h-48 bg-gradient-to-br from-fairytale-gold from-20% to-fairytale-rose to-80% rounded-smooth flex items-center justify-center mb-4 shadow-md">
        <span className="text-5xl">{emoji}</span>
      </div>
      <h3 className="text-xl text-fairytale-forest font-normal mb-2">{title}</h3>
      <p className="text-fairytale-muted text-sm leading-relaxed mb-4">{description}</p>
      <button className="fairytale-button-gold text-white w-full hover:shadow-md">
        Explore
      </button>
    </div>
  )
}
