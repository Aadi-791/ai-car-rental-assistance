/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EDFF',
          100: '#CCDAFF',
          200: '#99B5FF',
          300: '#668FFF',
          400: '#3366FF', // Primary color
          500: '#0040FF',
          600: '#0033CC',
          700: '#002699',
          800: '#001A66',
          900: '#000D33',
        },
        accent: {
          50: '#E0F7F6',
          100: '#B3ECE9',
          200: '#80E0DC',
          300: '#4DD5CF',
          400: '#26C9C3',
          500: '#00BFA5', // Accent color
          600: '#00A895',
          700: '#008F82',
          800: '#007770',
          900: '#005A52',
        },
        success: {
          400: '#66BB6A',
          500: '#4CAF50',
        },
        warning: {
          400: '#FFB74D',
          500: '#FF9800',
        },
        error: {
          400: '#FF5252',
          500: '#F44336',
        },
      },
      animation: {
        'bounce-delayed-1': 'bounce 1s infinite 0.2s',
        'bounce-delayed-2': 'bounce 1s infinite 0.4s',
      },
      boxShadow: {
        'message': '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};