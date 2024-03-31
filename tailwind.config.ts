import formkit from '@formkit/themes/tailwindcss';
import headlessui from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';

const rootDir = process.cwd();

export default <Partial<Config>>{
	content: [
		`${rootDir}/nuxt.config.ts`,
		`${rootDir}/formkit.config.ts`,
		`${rootDir}/src/components/**/*.{vue,js,ts}`,
		`${rootDir}/src/layouts/**/*.vue`,
		`${rootDir}/src/pages/**/*.vue`,
		`${rootDir}/src/composables/**/*.{js,ts}`,
		`${rootDir}/src/plugins/**/*.{js,ts}`,
		`${rootDir}/src/utils/**/*.{js,ts}`,
		`${rootDir}/src/App.{js,ts,vue}`,
		`${rootDir}/src/app.{js,ts,vue}`,
		`${rootDir}/src/Error.{js,ts,vue}`,
		`${rootDir}/src/error.{js,ts,vue}`,
	],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#9381FF',
				},
				secondary: {
					DEFAULT: '#FFD600',
				},
				dark: {
					DEFAULT: '#10151A',
				},
				gray: {
					DEFAULT: '#C4C4C4',
				},
			},
			fontSize: {
				h1: [
					'6.4rem',
					{
						fontWeight: '600',
						lineHeight: '7.2rem',
					},
				],
				'h1-mobile': [
					'2.6rem',
					{
						fontWeight: '600',
					},
				],
				h2: [
					'5.6rem',
					{
						fontWeight: '600',
						lineHeight: '6.4rem',
					},
				],
				'h2-mobile': [
					'5.6rem',
					{
						fontWeight: '600',
					},
				],
				h3: [
					'2.4rem',
					{
						fontWeight: '600',
						lineHeight: '5.6rem',
					},
				],
				'h3-mobile': [
					'4.8rem',
					{
						fontWeight: '600',
						lineHeight: '3.2rem',
					},
				],
				'h4-mobile': [
					'2.4rem',
					{
						fontWeight: '500',
						lineHeight: '3.2rem',
					},
				],
				h4: [
					'2.4rem',
					{
						fontWeight: '500',
						lineHeight: '3.2rem',
					},
				],
				h5: [
					'2rem',
					{
						fontWeight: '500',
						lineHeight: '2.8rem',
					},
				],
				label: [
					'1.4rem',
					{
						fontWeight: '600',
						lineHeight: '2rem',
					},
				],
				small: [
					'1.2rem',
					{
						fontWeight: '500',
						lineHeight: '1.6rem',
					},
				],
				'body-1': [
					'1.8rem',
					{
						fontWeight: '400',
						lineHeight: '3rem',
					},
				],
				'body-2': [
					'1.6rem',
					{
						fontWeight: '400',
						lineHeight: '2.4rem',
					},
				],
				button: [
					'1.6rem',
					{
						fontWeight: '600',
						lineHeight: '2.4rem',
					},
				],
			},
			spacing: {
				4: '0.4rem',
				8: '0.8rem',
				12: '1.2rem',
				16: '1.6rem',
				20: '2rem',
				24: '2.4rem',
				28: '2.8rem',
				32: '3.2rem',
				36: '3.6rem',
				40: '4rem',
				44: '4.4rem',
				48: '4.8rem',
				52: '5.2rem',
				56: '5.6rem',
				60: '6rem',
				64: '6.4rem',
				68: '6.8rem',
				72: '7.2rem',
				76: '7.6rem',
				80: '8rem',
				84: '8.4rem',
				88: '8.8rem',
				92: '9.2rem',
				96: '9.6rem',
				100: '10rem',
				104: '10.4rem',
				108: '10.8rem',
				112: '11.2rem',
				116: '11.6rem',
				120: '12rem',
				124: '12.4rem',
				128: '12.8rem',
				132: '13.2rem',
				136: '13.6rem',
				140: '14rem',
				144: '14.4rem',
				148: '14.8rem',
				152: '15.2rem',
				156: '15.6rem',
				160: '16rem',
				164: '16.4rem',
				168: '16.8rem',
				172: '17.2rem',
				176: '17.6rem',
				180: '18rem',
				184: '18.4rem',
				188: '18.8rem',
				192: '19.2rem',
				196: '19.6rem',
				200: '20rem',
			},
		},
	},
	plugins: [
		headlessui({}),
		formkit,
	],
};
