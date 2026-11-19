/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#F8F6F0',
          200: '#F2EFE8',
          300: '#E8E3D8',
          400: '#D5CEC0',
        },
        warmGold: {
          50: '#FFFDF5',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
        },
        editorial: {
          dark: '#0F0E0D',
          charcoal: '#1C1A18',
          muted: '#57534E',
          border: '#E7E5E4',
          card: '#FFFFFF',
        }
      },
      boxShadow: {
        'warm-glow': '0 0 80px -20px rgba(245, 158, 11, 0.35)',
        'soft-float': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'warm-radial': 'radial-gradient(circle at 50% 38%, rgba(254, 215, 170, 0.75) 0%, rgba(254, 243, 199, 0.5) 35%, rgba(251, 251, 250, 0) 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
