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
	},
	plugins: [],
   important: true
}
