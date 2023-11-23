
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "var(--primary)",
        low: 'var(--low)',
        mid: 'var(--mid)',
        high: 'var(--high)',
        background: 'var(--background)',
      }
    },
  },
  plugins: [],
}
