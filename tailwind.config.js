const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f8e6e3",
          200: "#f2cec7",
          300: "#ebb5aa",
          400: "#e59d8e",
          500: "#de8472",
          600: "#b26a5b",
          700: "#854f44",
          800: "#59352e",
          900: "#2c1a17"
        },
        secondary: {
          100: "#fffcf6",
          200: "#fff9ec",
          300: "#fff5e3",
          400: "#fff2d9",
          500: "#ffefd0",
          600: "#ccbfa6",
          700: "#998f7d",
          800: "#666053",
          900: "#33302a"
        }
      },
      fontFamily: {
        sans: ['Farsan', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      boxShadow: ['active'],
      textColor: ['group-hover'],
    },
  },
  plugins: [],
}
