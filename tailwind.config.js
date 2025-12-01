/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b8a085',
          500: '#9d8266',
          600: '#7d6852',
          700: '#5f4f40',
          800: '#4a3e33',
          900: '#3d332a',
        },
        accent: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6be96',
          400: '#f19a66',
          500: '#ed7a3d',
          600: '#de5f1a',
          700: '#b84a15',
          800: '#933c18',
          900: '#773316',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

