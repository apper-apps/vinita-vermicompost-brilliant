/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5016",
        secondary: "#8B4513", 
        accent: "#4CAF50",
        surface: "#F5F5DC",
        background: "#FAFAF8"
      },
      fontFamily: {
        display: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(45, 80, 22, 0.9), rgba(139, 69, 19, 0.8))',
        'earth-texture': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill=\'%23000\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M20 20c0 10-10 10-10 0s10-10 10 0z\'/%3E%3C/g%3E%3C/svg%3E")'
      }
    },
  },
  plugins: [],
}