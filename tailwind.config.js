import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: 'var(--color-gray-50, #FFF4F0)', // Light MEA tint
					100: 'var(--color-gray-100, #FFE6DB)', // Very light orange
					200: 'var(--color-gray-200, #FFCDB8)', // Light orange
					300: 'var(--color-gray-300, #E5E5E5)', // Neutral
					400: 'var(--color-gray-400, #B4B4B4)', // Keep existing
					500: 'var(--color-gray-500, #9B9B9B)', // Keep existing
					600: 'var(--color-gray-600, #676767)', // Keep existing
					700: 'var(--color-gray-700, #4E4E4E)', // Keep existing
					800: 'var(--color-gray-800, #2C1810)', // Dark MEA brown
					850: 'var(--color-gray-850, #1A0F0A)', // Darker MEA brown
					900: 'var(--color-gray-900, #0F0807)', // Very dark MEA
					950: 'var(--color-gray-950, #0A0504)' // Darkest MEA
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			},
			transitionProperty: {
				width: 'width'
			}
		}
	},
	plugins: [typography, containerQueries]
};
