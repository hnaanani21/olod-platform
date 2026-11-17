import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OLOD Brand Colors
        dream: {
          50:  "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5b9fd",
          400: "#8291fb",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        gold: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        cosmic: {
          900: "#0f0a1e",
          800: "#1a1035",
          700: "#251648",
          600: "#2d1b69",
          500: "#3730a3",
        }
      },
      backgroundImage: {
        "dream-gradient": "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4f46e5 60%, #6366f1 100%)",
        "hero-gradient": "linear-gradient(135deg, #0f0a1e 0%, #1a1035 40%, #251648 70%, #2d1b69 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 100%)",
        "gold-gradient": "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #fcd34d 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
