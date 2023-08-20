/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      text: 'var(--color-text)',
      bg: 'var(--color-bg)',
      border: 'var(--color-border)',
      'border-focus': 'var(--color-border-focus)',
    },
  },
  plugins: [],
};
