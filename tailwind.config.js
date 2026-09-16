/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF8D28',
          amber: '#AC5504',
          brown: '#9D5C26',
          dark: '#111827',
        },
        trust: {
          green: '#0A3520',
          emerald: '#00985B',
          light: '#E3F4E8',
          border: '#A2D8B4',
        },
        surface: {
          sand: '#F5ECE1',
          cream: '#F7EAD3',
          light: '#F6F6F6',
          input: '#F2F2F7',
          card: '#F1F1F1',
        }
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        acme: ['"Acme"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        kugile: ['"Kugile"', '"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        urbanist: ['"Urbanist"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0px 4px 16px rgba(157, 92, 38, 0.28)',
        'banner': '0px 8px 30px rgba(0, 0, 0, 0.03)',
        'card': '0px 20px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
