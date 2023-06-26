/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans:['DM Sans', ...defaultTheme.fontFamily.sans],
        serif:['Syne', ...defaultTheme.fontFamily.serif],
      }
    }
  },
  plugins: []
};