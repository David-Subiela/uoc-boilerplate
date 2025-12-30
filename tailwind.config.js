/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'uoc-corporate': '#000078',
        'uoc-masterbrand': '#73edff',
        'uoc-accent': '#c04a00',
        'sky': {
          '500': '#bada55',
        },
      },
      keyframes: {
        popup: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        popup: 'popup 0.4s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-lg': {
          'text-shadow': '0 2px 8px rgba(0, 0, 0, 0.7)',
        },
      })
    },
  ],
}
