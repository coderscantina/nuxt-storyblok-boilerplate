function rfsToClamp(fs: number, {
  rfsBase = 16,
  rfsBreakpoint = 1840,
  rfsFactor = 3,
} = {}) {
  const min = rfsBase + (Math.abs(fs) - rfsBase) / rfsFactor
  const diff = fs - min
  const varWidth = diff * 100 / rfsBreakpoint
  return `clamp(${min / 16}rem, calc(${min / 16}rem + ${varWidth}vw), ${fs / 16}rem)`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './storyblok/**/*.{js,vue,ts}',
    './assets/**/*.svg',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
