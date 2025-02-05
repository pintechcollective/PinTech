import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        primary: '#06276d',
        secondary: '#0e83fe',
        accent: '#9cd633',
      },
    },
    fontFamily: {
      Headings: ['FusionFont'],
      Body: ['ClashDisplay'],
    },
  },
  plugins: [daisyui],
} satisfies Config;
