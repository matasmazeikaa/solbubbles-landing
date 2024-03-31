import { generateClasses } from '@formkit/themes';
import { DefaultConfigOptions } from '@formkit/vue';

export default <DefaultConfigOptions>{
	config: {
		classes: generateClasses({
			text: {
				outer: 'w-full md:w-fit',
				label: 'button-style-1 text-primary-black',
				inner: 'flex mt-8 md:mt-16 items-center relative border border-secondary-french-gray overflow-hidden focus-within:border-primary',
				input: 'w-full text-primary-black leading-none outline-none h-[5.6rem] bg-transparent py-16 px-24 button-style-1 text-gray',
				help: 'text-xs text-gray-500',
				messages: 'list-none p-0 mt-1 mb-0',
				message: 'text-red-500 text-[1.2rem] mb-1',
				submit: 'btn-primary',
			},
			select: {
				outer: 'w-full md:w-fit',
				label: 'hidden',
				inner: 'flex items-center relative text-secondary-gray-french border border-secondary-french-gray rounded-full mb-1 overflow-hidden focus-within:border-blue-500',
				input: 'w-full outline-none leading-none h-[5.2rem] bg-transparent py-16 px-20 text-body-2 text-gray',
				help: 'text-xs text-gray-500',
				messages: 'list-none p-0 mt-1 mb-0',
				message: 'text-red-500 text-[1.2rem] mb-1',
				submit: 'btn-primary',
			},
			button: {
				outer: 'w-full md:w-fit',
			},
		}),
		icons: {
			search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clip-path="url(#clip0_170_1684)">
			<path d="M15.5006 14H14.7106L14.4306 13.73C15.6306 12.33 16.2506 10.42 15.9106 8.39002C15.4406 5.61002 13.1206 3.39002 10.3206 3.05002C6.09063 2.53002 2.53063 6.09001 3.05063 10.32C3.39063 13.12 5.61063 15.44 8.39063 15.91C10.4206 16.25 12.3306 15.63 13.7306 14.43L14.0006 14.71V15.5L18.2506 19.75C18.6606 20.16 19.3306 20.16 19.7406 19.75C20.1506 19.34 20.1506 18.67 19.7406 18.26L15.5006 14ZM9.50063 14C7.01063 14 5.00063 11.99 5.00063 9.50002C5.00063 7.01002 7.01063 5.00002 9.50063 5.00002C11.9906 5.00002 14.0006 7.01002 14.0006 9.50002C14.0006 11.99 11.9906 14 9.50063 14Z" fill="#5B5757"/>
			</g>
			<defs>
			<clipPath id="clip0_170_1684">
			<rect width="24" height="24" fill="white"/>
			</clipPath>
			</defs>
			</svg>`,
		},
	},
};
