import typography from '@tailwindcss/typography';
import {nextui} from "@nextui-org/react";

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,mjs,ts,jsx,tsx}'
  ],
  plugins: [
    typography,
    nextui()
  ],
};
export default config;
