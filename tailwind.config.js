const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      text: {
        body : [
          '#05D200',
        ],
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  },
  theme: {
    color: (theme) => ({
      ...theme("colors"),
      dark_green :'#05D200',
      dark_gray :'#5e5e5e',
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      light_green : '#D2FDD1',
      dark_green :'#05D200',
    }),
    fontFamily: {
      sans: ['Inter var','Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
}
