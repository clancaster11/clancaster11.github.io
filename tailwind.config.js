module.exports = {
  purge: [
    '*.html',
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
      rotate: ['group-focus']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
