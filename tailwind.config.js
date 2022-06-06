module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark-gray': 'hsl(0, 0%, 63%)',
        'primary-black': 'hsl(0, 0%, 0%)',
        'primary-white': 'hsl(0, 0%, 100%)',
        'primary-dark-gray': 'hsl(0, 0%, 27%)',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
