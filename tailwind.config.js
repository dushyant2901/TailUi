/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#f8dce6",
        textPrimary: "#36486b",
        textSecondary: "#ad6da6",
      },
    },
  },
  plugins: [],
};
