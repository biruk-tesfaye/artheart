/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans:['DM Sans', ...defaultTheme.fontFamily.sans],
        serif:['Syne', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'surfaces': {
          default:'##1B1B1F',
          1:'#C9BFFF0D',
          5: '#C9BFFF24'
        },
        sys:{
          dark:'#1B1B1F',
          'on-background':'#E3E2E6',
          'on-primary':'#E5DEFF',
          'on-primary-container':'#E5DEFF',
          'on-surface':'#C7C6CA',
          'on-surface-variant':'#C4C6D0',
          outline:'#8E9099',
          'outline-variant':'#44474F',
          'surface-variant':'#23262F'
        },
        primary:'#5D3FE0',
        'primary-container':'#441CC8'
      }
    }
  },
  plugins: []
};