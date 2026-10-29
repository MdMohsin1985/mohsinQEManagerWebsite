/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        ocean: "#0F766E",
        ember: "#F97316",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
