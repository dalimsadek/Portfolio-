module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      fontFamily: {
        // Primary display serif for elegant large headlines
        serif: ['Italiana', '"Playfair Display"', 'serif'],
        // Philosopher for editorial headings and subheads (sans-serif but slightly classical)
        philosopher: ['Philosopher', 'sans-serif'],
        // DM Sans for the main UI / body text
        dm: ['"DM Sans"', 'sans-serif'],
        // Default sans stack falls back to DM Sans then Inter
        sans: ['"DM Sans"', 'Inter', 'Lato', 'sans-serif']
      },
      colors: {
        clay: '#C89F88',
        sage: '#9AAE95',
        ivory: '#F6F2EA',
        softgold: '#D4B37A',
        warmblack: '#22201D'
      }
    }
  },
  plugins: []
}
