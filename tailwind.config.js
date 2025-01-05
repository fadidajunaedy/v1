/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ["primary"]: '#0077C0',
        ["secondary"]: '#C7EEFF',
        ["base-100"]: '#FAFAFA',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}