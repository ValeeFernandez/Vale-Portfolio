/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        accent: "var(--accent)",
        muted: "var(--text-muted)",
      },
    },
  },
  plugins: [],
};
