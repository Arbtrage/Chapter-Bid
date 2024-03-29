/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login-trans': "rgba(255,255,255, 0.29)",
        'shad-trans': "0px 4px 16px rgba(0,0,0,0.5)"
      },
      height: {
        'img-h': '60vh',
        'banner': '80vh',
        '90': "90vh",
        '95': "95vh",
        '90%': "90%",
        '70': "70%",
        '70vh':"70vh",
        '40vh': "40vh",
        "30vh": "30vh",
        "20vh": "20vh"
      },
      width:{
        '23%': '23%', 
        "45%": "45%",
        "90%": "90%",
      }
    },
    fontSize:{
      "sxl": "1.09rem",
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      "5rem": "5rem",
      '1.15': '1.15rem'
    }
  },
  plugins: [],
}