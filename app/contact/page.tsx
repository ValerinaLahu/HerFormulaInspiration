'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl text-fairytale-forest font-normal text-center mb-4">Get In Touch</h1>
        <p className="text-center text-fairytale-muted max-w-xl mx-auto mb-12">
          Have questions about our ceramics? Want to collaborate? Or just want to say hello?
          We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl text-fairytale-forest font-normal mb-6">Connect With Us</h2>

            <div className="flex gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="text-fairytale-forest font-normal">Email</h3>
                <p className="text-fairytale-muted text-sm">contact@herformulaInspiration.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">📱</div>
              <div>
                <h3 className="text-fairytale-forest font-normal">Instagram</h3>
                <a
                  href="https://www.instagram.com/heroutfitformula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fairytale-gold hover:underline text-sm"
                >
                  @heroutfitformula
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">🎬</div>
              <div>
                <h3 className="text-fairytale-forest font-normal">TikTok</h3>
                <a
                  href="https://www.tiktok.com/@heroutfitformula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fairytale-gold hover:underline text-sm"
                >
                  @heroutfitformula
                </a>
              </div>
            </div>

            <div className="fairytale-card p-6 mt-8 bg-gradient-to-br from-fairytale-gold from-20% to-fairytale-rose to-80% text-white">
              <p className="font-normal mb-3">📦 Collections & Custom Orders</p>
              <p className="text-sm text-white text-opacity-90 mb-4">
                Browse our Organic Serving Platters, Autumn Collection, and Holiday Line. Custom pieces available for weddings and events.
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <a href="https://www.instagram.com/heroutfitformula" target="_blank" rel="noopener noreferrer" className="hover:underline">📷 See pieces on Instagram</a>
                <a href="https://www.tiktok.com/@heroutfitformula" target="_blank" rel="noopener noreferrer" className="hover:underline">🎬 Behind-the-scenes on TikTok</a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-fairytale-forest font-normal mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-fairytale-gold border-opacity-50 rounded-lg bg-white text-fairytale-forest focus:outline-none focus:ring-2 focus:ring-fairytale-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-fairytale-forest font-normal mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-fairytale-gold border-opacity-50 rounded-lg bg-white text-fairytale-forest focus:outline-none focus:ring-2 focus:ring-fairytale-gold"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-fairytale-forest font-normal mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-fairytale-gold border-opacity-50 rounded-lg bg-white text-fairytale-forest focus:outline-none focus:ring-2 focus:ring-fairytale-gold"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-fairytale-forest font-normal mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-fairytale-gold border-opacity-50 rounded-lg bg-white text-fairytale-forest focus:outline-none focus:ring-2 focus:ring-fairytale-gold resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-fairytale-gold text-white px-6 py-2 rounded-full font-serif text-sm transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-fairytale-forest text-white rounded-lg text-center text-sm">
                  Thank you! We'll get back to you soon. ✨
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
