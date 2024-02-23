import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-characoal': '#312E2C',
        'dark-raspberry': '#7A284E',
        'brandy-red': '#854632',
        'wenge-brown': '#5F564D',
        eggshell: '#F3E5D7',
        'white-coffee': '#E3DDD7',
        snow: '#FFF7FB',
      },
    },
  },
  plugins: [],
};
export default config;
