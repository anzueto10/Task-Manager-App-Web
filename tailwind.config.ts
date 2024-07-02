import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        /*primary: {
          "50": "#eef2ff",
          "100": "#e0e7ff",
          "200": "#c7d2fe",
          "300": "#a5b4fc",
          "400": "#818cf8",
          "500": "#6366f1",
          "600": "#4f46e5",
          "700": "#4338ca",
          "800": "#3730a3",
          "900": "#312e81",
          "950": "#1e1b4b",
        },
 */

        background: {
          light: "hsl(0, 0%, 100%)",
          dark: "hsl(240, 5%, 6%)",
        },
        foreground: {
          light: "hsl(240, 10% ,3.9%)",
          dark: "hsl(60, 5%, 90%)",
        },
        primary: {
          light: "hsl(240 ,5.9%, 10%)",
          dark: "hsl(240, 0%, 90%)",
        },
        primaryForeground: {
          light: "hsl(0 ,0% ,98%)",
          dark: "hsl(60, 0%, 0%)",
        },
        secondary: {
          light: "hsl(240, 4.8%, 95.9%)",
          dark: "hsl(240, 4%, 15%)",
        },
        secondaryForeground: {
          light: "hsl(240 ,5.9% ,10%)",
          dark: "hsl(60, 5%, 85%)",
        },
        accent: {
          light: "hsl(240, 4.8%, 95.9%)",
          dark: "hsl(240, 0%, 13%)",
        },
        accentForeground: {
          light: "hsl(240, 5.9% ,10%)",
          dark: "hsl(60, 0%, 100%)",
        },
        muted: {
          light: "hsl(240, 4.8%, 95.9%)",
          dark: "hsl(240, 5%, 25%)",
        },
        mutedForeground: {
          light: "hsl(240, 3.8%, 45%)",
          dark: "hsl(60, 5%, 85%)",
        },
        card: {
          light: "hsl(0, 0%, 100%)",
          dark: "hsl(240, 4%, 10%)",
        },
        cardForeground: {
          light: "hsl(240, 10%, 3.9%)",
          dark: "hsl(60, 5%, 90%)",
        },
        destructive: {
          light: "hsl(0, 72%, 51%)",
          dark: "hsl(0, 60%, 50%)",
        },
        destructiveForeground: {
          light: "hsl(0, 0%, 98%)",
          dark: "hsl(0, 0%, 98%)",
        },
        popover: {
          light: "hsl(0, 0%, 100%)",
          dark: "hsl(240, 5%, 15%)",
        },
        popoverForeground: {
          light: "hsl(240, 10%, 3.9%)",
          dark: "hsl(60, 5%, 85%)",
        },
        border: {
          light: "hsl(240, 5.9%, 90%)",
          dark: "hsl(240, 6%, 20%)",
        },
        input: {
          light: "hsl(240, 5.9%, 90%)",
          dark: "hsl(240, 6%, 20%)",
        },
        ring: {
          light: "hls(240 ,5.9%, 10%)",
          dark: "hsl(240, 5%, 90%)",
        },

        taskCard: {
          dark: "hsl(240 4% 10%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      backgroundColor: {
        darkTheme: "#191b1f",
        darkThemeTasksLayout: "#292d32",
        tag: "#c4dbfa",
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
      colors: {
            "border": "hsl(var(--border))",
            "input": "hsl(var(--input))",
            "ring": "hsl(var(--ring))",
            "background": "hsl(var(--background))",
            "foreground": "hsl(var(--foreground))",
            "primary": {
              "DEFAULT": "hsl(var(--primary))",
              "foreground": "hsl(var(--primary-foreground))"
            },
            "secondary": {
              "DEFAULT": "hsl(var(--secondary))",
              "foreground": "hsl(var(--secondary-foreground))"
            },
            "destructive": {
              "DEFAULT": "hsl(var(--destructive))",
              "foreground": "hsl(var(--destructive-foreground))"
            },
            "muted": {
              "DEFAULT": "hsl(var(--muted))",
              "foreground": "hsl(var(--muted-foreground))"
            },
            "accent": {
              "DEFAULT": "hsl(var(--accent))",
              "foreground": "hsl(var(--accent-foreground))"
            },
            "popover": {
              "DEFAULT": "hsl(var(--popover))",
              "foreground": "hsl(var(--popover-foreground))"
            },
            "card": {
              "DEFAULT": "hsl(var(--card))",
              "foreground": "hsl(var(--card-foreground))"
            }
          },
      borderRadius: {
            "lg": "var(--radius)",
            "md": "calc(var(--radius) - 2px)",
            "sm": "calc(var(--radius) - 4px)"
          },
      keyframes: {
            "accordion-down": {
              "from": {
                "height": "0"
              },
              "to": {
                "height": "var(--radix-accordion-content-height)"
              }
            },
            "accordion-up": {
              "from": {
                "height": "var(--radix-accordion-content-height)"
              },
              "to": {
                "height": "0"
              }
            }
          }
},
  plugins: [require("tailwindcss-animate")],
};
export default config;
