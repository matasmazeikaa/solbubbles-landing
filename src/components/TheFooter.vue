<template>
	<footer class="section-padding footer-gradient bg-primary-black ">
		<div class="container mx-auto py-40 md:py-120 flex items-center gap-64">
			<div class="w-2/3">
				<Logo />
				<h3 class="text-h3">Join the SolBubbles Community:</h3>
				<p class="text-body-1">
					Embark on an unforgettable journey of blockchain PvP gaming with SolBubbles. Join our community today and be part of a revolution in gaming!
				</p>
			</div>

			<div class="w-1/3 flex items-center gap-16 justify-end">
				<a
					class="p-16 rounded-full w-80 h-80 bg-dark flex justify-center items-center hover:opacity-75 transition-opacity"
					href="#"
				>
					<IconDiscord />
				</a>

				<a
					class="p-16 rounded-full w-80 h-80 bg-dark justify-center items-center hover:opacity-75 transition-opacity"
					href="#"
				>
					<IconX />
				</a>
			</div>
		</div>
		<div class="container mx-auto text-center">
			<div class="h-[0.5px] bg-[#494B5A]" />

			<div class="flex items-center justify-around gap-16 py-32">
				<p class="text-body-2  text-white">© 2024 Solbubbles. All rights reserved. {{ new Date().getFullYear() }}</p>

				<div class="flex gap-16">
					<a
						href="#"
						class="underline hover:opacity-75 transition-opacity text-body-2 text-white"
					>
						Privacy Policy
					</a>
					<a
						href="#"
						class="underline hover:opacity-75 transition-opacity text-body-2 text-white"
					>
						Terms of service
					</a>
					<a
						href="#"
						class="underline hover:opacity-75 transition-opacity text-body-2 text-white"
					>
						Cookies Settings
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer-gradient {
	background: linear-gradient(180deg, rgba(169, 107, 247, 0.32) 30.5%, rgba(99, 63, 145, 0.51) 82%, #633F91 100%);
}

.footer-top-part {
	display: flex;
	flex-direction: column-reverse;
	grid-gap: 4rem;
}

@screen md {
	.footer-top-part {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}
</style>
