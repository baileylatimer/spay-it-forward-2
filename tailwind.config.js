/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Neue Montreal', 'system-ui', 'sans-serif'],
        'serif': ['PP Pangaia', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
