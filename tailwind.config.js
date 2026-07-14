/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        'primary-dark': '#005f92',
        secondary: '#00B4D8',
        accent: '#F77F00',
        coral: '#E63946',
        teal: '#48CAE4',
        dark: '#03045E',
        charcoal: '#1a1a2e',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
