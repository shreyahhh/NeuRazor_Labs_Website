import type { Config } from "tailwindcss";

// Match admin login page (Login.jsx): #050712, #070a18, indigo–purple CTA
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050712",
        surface: "#070a18",
        "surface-alt": "#0b1024",
        "surface-hover": "#1a1a1a",
        "slate-white": "#ededed",
        "text-dim": "#a1a1a1",
        accent: "#6366f1",
        "accent-end": "#a855f7",
        "accent-soft": "rgba(99, 102, 241, 0.15)",
        border: "#333",
        "border-hover": "#444",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(180deg, #050712 0%, #070a18 50%, #050712 100%)",
        "cta-gradient": "linear-gradient(to right, #6366f1, #a855f7)",
      },
      animation: {
        "pulse-glow": "pulse-glow 10s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.9", filter: "brightness(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
