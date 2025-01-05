/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: {
					100: '#E5E5E5',
					200: '#C8C8C8',
					300: '#A9A9A9',
					400: '#414449',
					500: '#161719',
					600: '#0D0D0D',
					700: '#090909',
					800: '#050505'
				},
				border: '#4B4C4E'
			},
			transitionDuration: {
				DEFAULT: '444ms'
			}
		}
	},
	plugins: []
}
