const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"],
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
      animation: {
        'expand-border': 'expand-border 2s ease infinite'
      },
      keyframes: {
        "expand-border": {
          '0%': {width:'0', opacity:'0'},
          '100%': {width:'100%', opacity:'1'}
        }
      },
      focus: {
        light:{
          'outline': "none",
        }
      }
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
    border: (theme) => ({
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
