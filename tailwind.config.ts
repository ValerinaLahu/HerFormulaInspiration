import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fairytale: {
          forest: '#2F5F3F',
          lavender: '#A89FB5',
          cream: '#FAF8F3',
          gold: '#D4AF70',
          rose: '#E8B4B8',
          muted: '#9B9186',
          light: '#F0EDE5',
          blush: '#F4E4E1',
          sage: '#A8B8A8',
          pearl: '#F5F3F0',
          dustrose: '#D9C5C1',
          celestial: '#E8DFF5',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        'organic': '20px 60px 50px 40px',
        'card': '15px 45px 20px 35px',
        'smooth': '10px 30px 15px 25px',
      },
    },
  },
  plugins: [],
}
export default config
