module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', './src/features/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '376px',
      sm: '480px',
      smd: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'q_dark_green': '#05bf00',
        'dark_green': '#05D200',
        'darkGray_green': '#9fdb9e',
        'mid_green': '#4cf048',
        'dark_green': '#05D200',
        'faded_dark_green': '#40b53e',
        'q_dark_green': '#05bf00',
        'dark_gray': '#5e5e5e',
      },
      fontSize: {
        'extreme-s': ['.5rem', null],
        'xxs': ['.625rem', null],
        'xs': ['.75rem', null],
        'sm': ['.875rem', null],
        'base': ['1rem', null]
      },
      animation: {
        'expand-border': 'expand-border 2s ease infinite'
      },
      keyframes: {
        'expand-border': {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100%', opacity: '1' }
        }
      },
      focus: {
        light: {
          'outline': 'none',
        }
      },
      dropShadow: {
        'green_2xl': '0 35px 35px rgba(221, 242, 221, 1)',
      },
      boxShadow: {
        'plane_2xl': '4px 8px 0px 0px #3a3b3b',
        'plane_2xl_dark_green': '4px 8px 0px 0px #05D200',
        'plane_2xl_card': '4px 4px 0px 0px #3a3b3b',
        'plane_2xl_card_prime': '4px 4px 0px 0px blue',
        'plane_2xl_card_second': '4px 4px 0px 0px red',
        'plane_2xl_card_third': '4px 4px 0px 0px green',
      },
      width: {
        'inherit': 'inherit'
      },
      textColor: (theme) => ({
        ...theme('colors'),
        light_green: '#D2FDD1',
        mint_green: '#aefcac',
        gray_green: '#83d182',
        q_dark_green: '#05bf00',
        dark_green: '#05D200',
        mid_green: '#4cf048',
        dark_green: '#05D200',
        faded_dark_green: '#40b53e',
        q_dark_green: '#05bf00',
        dark_gray: '#5e5e5e',
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        faded_light_green: '#dbf7db',
        light_green: '#D2FDD1',
        mint_green: '#aefcac',
        gray_green: '#83d182',
        faded_mid_green: '#5fe05c',
        mid_green: '#4cf048',
        dark_green: '#05D200',
        faded_dark_green: '#40b53e',
        q_dark_green: '#05bf00',
      }),
      border: (theme) => ({
        ...theme('colors'),
        light_green: '#D2FDD1',
        mid_green: '#4cf048',
        dark_green: '#05D200',
        q_dark_green: '#05bf00',
      }),

    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
}
