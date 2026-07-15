/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0a0a0d',
        'bg-card': '#14141c',
        'accent': '#2dd4bf',
        'accent-dim': '#1a9d8f',
        'text-primary': '#ffffff',
        'text-secondary': '#a3a3ab',
        'text-muted': '#8a8a92',
        'border-subtle': '#2b2b32',
        'border-dim': '#1c1c22',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'metallic': 'linear-gradient(135deg, #ffffff 0%, #d7d9de 45%, #9a9ea8 100%)',
        'btn-gradient': 'linear-gradient(135deg, #ffffff, #2dd4bf)',
        'radial-glow': 'radial-gradient(ellipse at center, #14141c 0%, #0a0a0d 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
