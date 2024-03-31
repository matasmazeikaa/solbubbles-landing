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

			<div class="w-1/3">
				Discord
			</div>
		</div>
		<div class="container mx-auto text-center">
			<div class="h-[0.5px] bg-[#494B5A]" />

			<p class="text-body-2 py-32 text-white">solbubbles.io {{ new Date().getFullYear() }}</p>
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
