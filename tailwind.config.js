/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5F0FF",
          100: "#EDE4FE",
          200: "#DCC9FD",
          300: "#C2A2FB",
          400: "#A578F7",
          500: "#8B4FF0",
          600: "#6D28D9",
          700: "#5B1FB8",
          800: "#491A93",
          900: "#3A1675",
          950: "#220A4D",
        },
        accent: {
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient":
          "linear-gradient(135deg, #6D28D9 0%, #8B4FF0 50%, #22D3EE 100%)",
        "brand-soft":
          "linear-gradient(135deg, rgba(109,40,217,0.08) 0%, rgba(34,211,238,0.08) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 14s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        gradientX: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(109,40,217,0.35)",
        card: "0 10px 30px -10px rgba(17, 24, 39, 0.10)",
        "card-hover": "0 25px 60px -15px rgba(109,40,217,0.25)",
      },
      typography: ({ theme }) => ({
        // Brand-tuned prose styles used by the blog article body.
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.700"),
            "--tw-prose-headings": theme("colors.slate.900"),
            "--tw-prose-lead": theme("colors.slate.600"),
            "--tw-prose-links": theme("colors.brand.700"),
            "--tw-prose-bold": theme("colors.slate.900"),
            "--tw-prose-quotes": theme("colors.slate.700"),
            "--tw-prose-quote-borders": theme("colors.brand.500"),
            "--tw-prose-bullets": theme("colors.brand.500"),
            maxWidth: "none",
            h2: {
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "800",
              letterSpacing: "-0.01em",
              marginTop: "2.4em",
              marginBottom: "0.8em",
            },
            h3: {
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "700",
            },
            a: { fontWeight: "600", textDecoration: "none" },
            "a:hover": { textDecoration: "underline" },
            blockquote: {
              borderLeftWidth: "4px",
              fontStyle: "normal",
              fontWeight: "500",
              paddingLeft: "1.25em",
            },
            img: { borderRadius: theme("borderRadius.2xl") },
            "ul > li::marker": { color: theme("colors.brand.500") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
