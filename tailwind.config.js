/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-dark': 'var(--bg-dark)',
        'bg-card': 'var(--bg-card)',
        'bg-card-hover': 'var(--bg-card-hover)',
        'bg-surface': 'var(--bg-surface)',
        'accent-amber': 'var(--accent-amber)',
        'accent-amber-glow': 'var(--accent-amber-glow)',
        'accent-amber-light': 'var(--accent-amber-light)',
        'accent-blue': 'var(--accent-blue)',
        'accent-cyan': 'var(--accent-cyan)',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Barlow Condensed', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
