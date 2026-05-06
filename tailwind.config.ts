import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        display: ["Satoshi", "General Sans", "Inter", "sans-serif"],
        sans: ["General Sans", "Inter", "sans-serif"]
      },
      colors: {
        bg: "#f8fafc",
        panel: "#ffffff",
        panelSoft: "#eef2ff",
        cyan: "#38BDF8",
        teal: "#14B8A6",
        glow: "#0f172a"
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        pulseGlow: { "0%, 100%": { opacity: "0.5" }, "50%": { opacity: "1" } },
        sheen: { "0%": { transform: "translateX(-120%)" }, "100%": { transform: "translateX(120%)" } }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        sheen: "sheen 2s linear infinite"
      },
      boxShadow: {
        luxury: "0 0 0 1px rgba(148, 163, 184, 0.22), 0 10px 40px rgba(8, 47, 73, 0.45)",
        glow: "0 0 45px rgba(56, 189, 248, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
