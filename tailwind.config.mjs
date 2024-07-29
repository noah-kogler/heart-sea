import typography from '@tailwindcss/typography';
import {nextui} from "@nextui-org/react";

const config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          }
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s linear infinite',
      }
    },
    fontFamily: {
      'serif': 'the-seasons, serif'
    }
  },
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,mjs,ts,jsx,tsx}'
  ],
  plugins: [
    typography,
    nextui(),
  ],
};
export default config;
