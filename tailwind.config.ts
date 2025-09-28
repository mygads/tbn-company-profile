import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
        'sans': ['DM Sans', 'sans-serif'], // Set DM Sans as default sans-serif
      },
      colors: {
        tbn: {
          primary: '#706c61',
          secondary: '#b96244', 
          accent: '#d4a017',
          light: '#fcfcf7',
          dark: '#2e2e2e',
          neutral: '#af9f74',
          black: '#222222',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;