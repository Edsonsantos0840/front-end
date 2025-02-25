
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#b91c1c",
        principal2: "#990707",
        textos: "#4e4d4d",
        textos2: "#f2f2f2",
        textos3: "#360c0c",
        fundo: "#efe8e885",
        fundo2:" #c9e1e52b",
        fundo3: "#d5c3c385",
        fundoProdduto2: "#ffc6c7",
      },
      backdropBlur: {
        xs: '2px',
        xl: '40px',
      },
      fontFamily: {
        ysabeau: ["Ysabeau Office", "sans-serif"],
        PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
        Lilita_One: ["Lilita_One", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
