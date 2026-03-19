export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'eternal': {
          50: '#faf9f7',
          100: '#f5f1ed',
          200: '#ede5dd',
          300: '#dcc9b3',
          400: '#c9a878',
          500: '#b8905f',
          600: '#8b6f47',
          700: '#6b553b',
          800: '#4a3a2a',
          900: '#2a1f15',
        }
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      }
    }
  },
  plugins: [],
}