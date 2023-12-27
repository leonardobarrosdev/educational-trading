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
      display: ['Mulish', 'Helvetica'],
      body: ['Mulish', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['40px', '48px'],
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
