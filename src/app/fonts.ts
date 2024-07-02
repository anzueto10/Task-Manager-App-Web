import { Inter, Manrope } from "next/font/google";

export const fontDarkBody = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin",
    "vietnamese",
  ],
  display: "swap",
  variable: "--font-body",
});

export const fontDarkHeading = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin",
    "vietnamese",
  ],
  display: "swap",
  variable: "--font-heading",
});

export const fontBody = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const fontHeading = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
