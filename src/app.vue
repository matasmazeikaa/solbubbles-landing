<template>
	<Html
		lang="lt"
	>
		<Body>
			<NuxtLayout class="h-full">
				<SeoKit />
				<NuxtPage class="h-full"/>
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
	AOS.init({
		duration: 1000,
		once: true,
	});
});

useHead({
	titleTemplate: 'Solbubbles',
	link: [
		{
			rel: 'apple-touch-icon',
			type: 'image/png',
			href: '/favicon-16x16.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-16x16.png',
			sizes: '16x16x',

		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-32x32.png',
			sizes: '32x32',
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest',
		},
		{
			rel: 'mask-icon',
			href: '/safari-pinned-tab.svg',
			color: '#000000',
		},
	],
	meta: [
		{
			name: 'msapplication-TileColor',
			content: '#da532c',
		},
		{
			name: 'theme-color',
			content: '#FFFFFF',
		},
	],
});
</script>
