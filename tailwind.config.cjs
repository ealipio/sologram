/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Noto Sans JP"'], // replace default font family
      noto: ['"Noto Sans JP"'],
    },
  },
  plugins: [],
};
