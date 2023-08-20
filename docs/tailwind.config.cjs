/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      text: 'var(--color-text)',
      'text-secondary': 'var(--color-text-secondary)',
      bg: 'var(--color-bg)',
      'bg-secondary': 'var(--color-bg-secondary)',
      'bg-tertiary': 'var(--color-bg-tertiary)',
      border: 'var(--color-border)',
      'border-focus': 'var(--color-border-focus)',
    },
  },
  plugins: [],
};
