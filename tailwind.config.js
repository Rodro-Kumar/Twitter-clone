/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      worksans: "Work Sans , sans-serif",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        skyblue: "#1d9bf0",
        darkblue: "#0f4e78",
      },
    },
  },
  plugins: [],
};
