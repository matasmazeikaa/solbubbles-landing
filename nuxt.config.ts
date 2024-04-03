const APP_META = {
	favicon: '/favicon.ico',
	url: 'https://solbubbles.io',
	language: 'en',
};

export default defineNuxtConfig({
	runtimeConfig: {
		STRAPI_URL: process.env.STRAPI_URL,
	},

	nitro: {
		compressPublicAssets: true,
	},

	// app config
	extends: ['nuxt-seo-kit'],

	// server side rendering
	ssr: true,

	// source directory
	srcDir: 'src',

	// alias
	alias: {
		modules: '~/modules',
	},

	css: ['~/assets/css/tailwind.css'],

	// runtime config
	runtimeConfig: {
		public: {
			siteUrl: APP_META.url || 'https://example.com',
			language: APP_META.language,
		},
	},

	// typescript
	typescript: {
		typeCheck: false,
		tsConfig: {
			compilerOptions: {
				forceConsistentCasingInFileNames: true,
			},
		},
	},

	// components
	components: {
		dirs: [
			{
				path: '~/components',
				pathPrefix: false,
			},
		],
	},

	// imports
	imports: {
		dirs: [
			'stores',
			'composables',
		],
	},

	// modules
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'@unlighthouse/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/eslint-module',
		'@nuxtjs/robots',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Montserrat: [
						400,
						600,
					],
					'Titan+One': [400],
				},
			},
		],
	],

	eslint: {
		eslintPath: 'eslint',
	},

	// unlighthouse
	unlighthouse: {},
});
