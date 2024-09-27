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
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: '#ffffff',
      black: '#000000',
      secondary: {
        50: '#fcf5ff',
        100: '#f7e7ff',
        200: '#f0d3ff',
        300: '#e5b0ff',
        400: '#d57eff',
        500: '#bd36ff',
        600: '#b32af3',
        700: '#9d1ad6',
        800: '#841aaf',
        900: '#6c178c',
        950: '#4c0269',
      },
      primary: {
        50: '#ecf1ff',
        100: '#dde4ff',
        200: '#c2ceff',
        300: '#9cacff',
        400: '#757fff',
        500: '#5f5fff',
        600: '#4536f5',
        700: '#3b2ad8',
        800: '#3025ae',
        900: '#2b2689',
        950: '#1b1650',
      },
      gray: {
        50: '#F2F2F3',
        100: '#E2E2E4',
        200: '#C5C5C9',
        300: '#AAAAB1',
        400: '#8D8D96',
        500: '#71717A',
        600: '#5B5B62',
        700: '#45454A',
        800: '#2F2F32',
        900: '#19191A',
        950: '#0F0F10'
      },
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      teal: colors.teal,
    }) },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars
            = typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
}
