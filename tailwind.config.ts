import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true
    },
    fontFamily: {
      display: ['Muli', 'sans-serif'],
      body: ['Muli', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      primary: '#0C457C',
      warning: '#F5D45C',
      gray: '#747C87',
      black: '#01080E',
      white: '#F7FBFE',
      green: '#0C7D69',
      danger: '#7D1D0C',
      info: '#4299ED',
      grayBackground: '#FCFDFD',
      grayText: '#364452',
      grayLight: '#E6EAEF',
      yellowLight: '#FCF1C9',
      blackBlue: '#191E2B',
      gradientBlack: '#00000033',
    }
  },
  plugins: [],
}
export default config
