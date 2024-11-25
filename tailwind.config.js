/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'markazi': ['Markazi Text']
    },
    extend: {
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
