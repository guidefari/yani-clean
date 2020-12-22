// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.jsx'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: { 
          primary: '#24408A',
          shadowOne: '#CBD2E6',
          shadowTwo: '#D7DFF4',
          secondary: '#3E6A95',
          tertiary: '#BAE8E5',
        },
        yellow: {
          primary: '#FAC32B',
          secondary: '#FBD365',
          shadowOne: '#FEF1CD',
        },
        black: {
          heading: '#2F2E2E',
          BoBody: '#3C3B3B',
        },
        white: {
          true: '#FFFFFF',
          primary: '#F2F2F2',
          secondary: '#F7F7F7',
        }
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      fontFamily: {
        heading: 'Cairo-Bold',
        headingSecondary: 'Cairo-Semi-Bold',
        rubik: 'Rubik',
        rubikItalic: 'Rubik-Italic'
      },
      maxHeight: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      },
      minWidth: {
        xxxs: "12rem",
        xxs: "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      },
      minHeight: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      ringWidth: ['hover'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
