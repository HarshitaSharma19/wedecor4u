/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory:      "oklch(0.957 0.012 80)",
        beige:      "oklch(0.895 0.022 75)",
        pearl:      "oklch(0.970 0.008 80)",
        taupe:      "oklch(0.665 0.028 65)",
        bronze:     "oklch(0.508 0.046 55)",
        champagne:  "oklch(0.745 0.062 70)",
        ink:        "oklch(0.205 0.005 60)",
        // semantic aliases matching original
        background: "oklch(0.957 0.012 80)",
        foreground: "oklch(0.205 0.005 60)",
        card:       "oklch(0.970 0.008 80)",
        "card-foreground": "oklch(0.205 0.005 60)",
        primary:    "oklch(0.205 0.005 60)",
        "primary-foreground": "oklch(0.957 0.012 80)",
        secondary:  "oklch(0.895 0.022 75)",
        "secondary-foreground": "oklch(0.205 0.005 60)",
        muted:      "oklch(0.895 0.022 75)",
        "muted-foreground": "oklch(0.508 0.046 55)",
        accent:     "oklch(0.745 0.062 70)",
        "accent-foreground": "oklch(0.205 0.005 60)",
        border:     "oklch(0.84 0.018 75)",
        input:      "oklch(0.84 0.018 75)",
        ring:       "oklch(0.745 0.062 70)",
        destructive:"oklch(0.55 0.18 25)",
        "destructive-foreground": "oklch(0.957 0.012 80)",
      },
      fontFamily: {
        serif:   ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        display: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "calc(0.25rem - 4px)",
        md: "calc(0.25rem - 2px)",
        lg: "0.25rem",
        xl: "calc(0.25rem + 4px)",
      },
      animation: {
        "fade-in":  "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(16px)" }, to: { opacity: 1, transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};
