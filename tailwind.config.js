const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'clr-sand': 'rgb(var(--clr-sand) / <alpha-value>)',
    },
    extend: {
      backgroundImage: {
        'img-1': "url('https://images.pexels.com/photos/21914422/pexels-photo-21914422.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1')",
        'img-2': "url('https://images.pexels.com/photos/15721511/pexels-photo-15721511.jpeg?auto=compress&cs=tinysrgb&w=200&h=301&dpr=1')",
        'img-3': "url('https://images.pexels.com/photos/20669432/pexels-photo-20669432.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1')",
        'img-4': "url('https://images.pexels.com/photos/21525439/pexels-photo-21525439.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1')",
      },
      lineHeight: {
        '28': '7rem',
      },
      fontSize: {
        '9.75xl': ['9.5rem', {
          lineHeight: '1',
        }],
      },
    },
    fontFamily: {
      'fnt-made-bon-voyage': ['MADEBonVoyage', 'ui-serif', 'serif'],
    },
  },
  plugins: [],
}
