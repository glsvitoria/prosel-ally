/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', './index.html'],
	theme: {
		extend: {
         fontFamily: {
            font: ['Poppins', 'sans-serif']
         },
         colors: {
            text: '#333333',
            header: '#003580',
            yellow: '#FEBB02',
            button: '#0071C2'
         }
      },
      screens: {
         'phone': '320px',
         'phone-2': '500px',
         'tablet': '640px',
         'laptop': '1024px',
         'desktop': '1280px',
      },
	},
	plugins: [],
   important: true
}
