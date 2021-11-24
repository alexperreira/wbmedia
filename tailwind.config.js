module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: '#aa380b',
			},
			backgroundImage: {
				'hero-image': "url('/dist/assets/hero-image/main.jpg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
