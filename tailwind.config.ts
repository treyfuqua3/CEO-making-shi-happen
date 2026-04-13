import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#461D7C",
          light: "#5A2D9A",
          dark: "#331466",
        },
        accent: {
          DEFAULT: "#FDD023",
          light: "#FEE066",
          dark: "#E0B800",
        },
        muted: {
          DEFAULT: "#F5F3F9",
          foreground: "#6B7280",
        },
        // Luxury neutral palette for V2
        ivory: {
          DEFAULT: "#F8F5EF",
          light: "#FBF9F4",
          dark: "#EFEAE0",
        },
        stone: {
          50: "#FAFAF8",
          100: "#F4F2ED",
          200: "#E8E4DB",
          300: "#D4CEC0",
          400: "#A8A094",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
        champagne: {
          DEFAULT: "#D8C9A3",
          light: "#E8DCBC",
          dark: "#B8A67C",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: [
          '"Cormorant Garamond"',
          '"Playfair Display"',
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        serif: [
          '"Cormorant Garamond"',
          '"Playfair Display"',
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
      letterSpacing: {
        "luxury": "0.22em",
      },
      backgroundImage: {
        "marble-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0) 100%)",
        "luxury-radial":
          "radial-gradient(ellipse at top, rgba(70,29,124,0.06) 0%, transparent 60%)",
      },
      boxShadow: {
        "luxury": "0 30px 80px -20px rgba(28, 25, 23, 0.18), 0 8px 24px -8px rgba(28, 25, 23, 0.08)",
        "luxury-lg": "0 60px 120px -30px rgba(28, 25, 23, 0.25), 0 15px 40px -10px rgba(28, 25, 23, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
