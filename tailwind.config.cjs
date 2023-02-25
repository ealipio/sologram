/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],  
  theme: {
    extend: {},
    fontFamily: {
      noto:['"Noto Sans JP"'],
      oleo:['"Oleo Script"'],
    }
  },
  plugins: [],
}