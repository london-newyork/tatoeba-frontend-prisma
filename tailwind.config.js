module.exports = {
  mode: 'jit',
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
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
      'dark-green' :'#05D200',
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      'light-green': '#D2FDD1',
      'dark-green' :'#05D200',
    }),
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
}
