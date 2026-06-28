/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#07100d",
        carbon: "#0b1511",
        moss: "#123326",
        emeraldSoft: "#34d399",
        limeSoft: "#bef264",
        ivory: "#f7f8f3"
      },
      boxShadow: {
        premium: "0 28px 90px rgba(0, 0, 0, 0.45)",
        glow: "0 18px 48px rgba(52, 211, 153, 0.18)"
      }
    }
  },
  plugins: []
};
