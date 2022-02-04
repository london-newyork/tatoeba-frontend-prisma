const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Inter var','Graphik'],
      'sans-serif':['"Noto Sans Japanses"','メイリオ','ヒラギノ角ゴシック','Arial', 'sans-serif'],
      'top-headline': ['"Sawarabi Gothic"']
    },
    colors: {
      text: {
        body : [
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
      mid_green : '#4cf048',
      dark_gray :'#5e5e5e',
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      light_green : '#D2FDD1',
      mid_green : '#4cf048',
      dark_green :'#05D200',
    }),
    border: (theme) => ({
      ...theme("colors"),
      light_green : '#D2FDD1',
      mid_green : '#4cf048',
      dark_green :'#05D200',
    }),
  },
  plugins: [],
  variants: {
    extend: {},
  },
}
