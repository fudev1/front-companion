/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {

			fontFamily: {
				'gm-main': ['gm-main', 'sans-serif'],
				'circular-web': ['circular-web', 'sans-serif'],
				'general': ['general', 'sans-serif'],
				'robert-medium': ['robert-medium', 'sans-serif'],
				'robert-regular': ['robert-regular', 'sans-serif'],
			},
			colors: {
				skin: {
					'main': 'var(--main)',
					'primary': 'var(--primary)',
					'primary-light': 'var(--primary-light)',
					'primary-dark': 'var(--primary-dark)',
					'secondary': 'var(--secondary)',
					'secondary-light': 'var(--secondary-light)',
					'secondary-dark': 'var(--secondary-dark)',
					'accent': 'var(--accent)',
					'accent-light': 'var(--accent-light)',
					'accent-dark': 'var(--accent-dark)',
					'text-primary': 'var(--text-primary)',
					'text-secondary': 'var(--text-secondary)',
					'text-muted': 'var(--text-muted)',
					'bg-primary': 'var(--bg-primary)',
					'bg-secondary': 'var(--bg-secondary)',
					'bg-tertiary': 'var(--bg-tertiary)',
				},
				rarity: {
					'common': '(var(--rarity-common))',
					'uncommon': '(var(--rarity-uncommon))',
					'rare': '(var(--rarity-rare))',
					'epic': '(var(--rarity-epic))',
					'legendary': '(var(--rarity-legendary))',
					'artifact': '(var(--rarity-artifact))',
				},
				faction: {
					'marauders': 'var(--faction-marauders)',
					'syndicate': 'var(--faction-syndicate)',
					'covenant': 'var(--faction-covenant)',
					'outpost-rush': 'var(--faction-outpost-rush)',
					'corrupted': 'var(--faction-corrupted)',
					'ancient': 'var(--faction-ancient)',
					'lost': 'var(--faction-lost)',
					'angry-earth': 'var(--faction-angry-earth)',
				}
			},
			spacing: {
				'header': 'var(--header-height)',
				'section': 'var(--section-spacing)',
			},

		},
	},
	plugins: [],
}
