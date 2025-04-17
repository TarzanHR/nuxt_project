// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		'@nuxt/eslint',
	],
	devtools: { enabled: true },
	css: ['@picocss/pico'],
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: 'single',
				commaDangle: 'always-multiline',
				indent: 'tab',
			},
		},
	},
});
