/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: {
          100: "#0078ff",
          200: "#0077ff",
        },
        lightskyblue: "#79b2f2",
        darkslateblue: "#00489a",
        lavender: "#e9efff",
        dimgray: "#666",
        darkslategray: "#333",
        gray: {
          100: "#222",
          200: "rgba(255, 255, 255, 0.05)",
        },
        gainsboro: "#ddd",
        black: "#000",
        whitesmoke: "#f8f8f8",
      },
      spacing: {},
      fontFamily: {
        "work-sans": "'Work Sans'",
        "zen-kaku-gothic-antique": "'Zen Kaku Gothic Antique'",
      },
      borderRadius: {
        "31xl": "50px",
        "10xs": "3px",
        "8xs": "5px",
        mini: "15px",
        "3xs": "10px",
        "281xl": "300px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      base: "1rem",
      "6xl": "1.56rem",
      xl: "1.25rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      "31xl": "3.13rem",
      "41xl": "3.75rem",
      "51xl": "4.38rem",
      inherit: "inherit",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  corePlugins: {
    preflight: false,
  },
};
