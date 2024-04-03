<script lang="ts" setup></script>

<template>
	<section
		id="hero-section"
		class="mt-180 section-padding"
	>
		<div class="gradient-circles-right" />
		<div class="gradient-circles-left" />

		<Bubble
			width="160px"
			height="160px"
			filter="10px"
			color="#F56969"
			class="top-1/4 left-[19%] absolute delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0"
			data-aos="zoom-in"
			data-aos-delay="100"
		/>
		<Bubble
			class="top-[24%] right-[14%] absolute"
			width="190px"
			height="190px"
			filter="4px"
			color="#27787d"
			data-aos="zoom-in"
			data-aos-delay="200"
		/>
		<Bubble
			class="top-[56%] right-[75%] absolute"
			width="100px"
			height="100px"
			filter="7px"
			color="#E6FF4F"
			data-aos="zoom-in"
			data-aos-delay="300"
		/>
		<Bubble
			class="top-[56%] right-[75%] absolute"
			width="100px"
			height="100px"
			filter="7px"
			color="#E6FF4F"
			data-aos="zoom-in"
			data-aos-delay="400"
		/>
		<Bubble
			class="top-[56%] right-[11%] absolute"
			width="300px"
			height="300px"
			filter="12px"
			color="#8AAC95"
			data-aos="zoom-in"
			data-aos-delay="500"
		/>

		<div class="container mx-auto relative z-10">
			<div class="content container mx-auto text-center">
				<div class="mb-24">
					<h1
						data-aos="fade-up"
						data-aos-delay="600"
						class="text-h2 md:text-h1 text-center text-primary"
					>
						Solbubbles
					</h1>
					<h1
						class="text-h2 md:text-h1 text-center text-white "
						data-aos="fade-up"
						data-aos-delay="650"
					>
						PvP game on Solana
					</h1>
				</div>
				<p
					data-aos="fade-up"
					data-aos-delay="700"
					class="text-body-1 mb-48"
				>
					Compete in fast paced action gameplay against other players and steal their BUBBL tokens
				</p>
				<div
					data-aos="fade-up"
					data-aos-delay="750"
					class="justify-center flex a flex-wrap gap-16"
				>
					<Button
						class="min-w-[14.4rem]"
						to="https://app.solbubbles.com"
					>
						Launch App
					</Button>
				</div>
			</div>
		</div>
	</section>

	<section
		class="section-padding my-180"
		data-aos="fade-up"
		data-aos-delay="600"
	>
		<div class="container mx-auto flex items-center justify-center relative z-10">
			<video
				autoplay
				loop
				muted
				class="w-[80%] rounded-[4rem]"
			>
				<source
					type="video/mp4"
					src="@/assets/video/introduction.mp4"
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	</section>

	<section
		id="how-to-play"
		class="section-padding my-180"
	>
		<div class="container mx-auto relative z-10">
			<h2
				class="mb-64 text-center text-h2"
				data-aos="fade-up"
			>
				How to play?
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-64">
				<div
					data-aos="fade-up"
					class=""
				>
					<div class="flex gap-16 mb-8">
						<div class="w-24 h-24 rounded-full linear-bubble" />
						<div class="w-24 h-24 rounded-full bg-gray" />
						<div class="w-24 h-24 rounded-full bg-gray" />
					</div>
					<h3 class="text-h3 text-secondary mb-16">Deposit & Play</h3>
					<p class="text-body-1">
						Deposit your BUBBL tokens into the system to begin playing
						and choose from multiple room entries: 25, 100, or 500 $BUBBL
						tokens.
					</p>
				</div>
				<div
					data-aos="fade-up"
					class=""
					data-aos-delay="50"
				>
					<div class="flex gap-16 mb-8">
						<div class="w-24 h-24 rounded-full linear-bubble" />
						<div class="w-24 h-24 rounded-full linear-bubble" />
						<div class="w-24 h-24 rounded-full bg-gray" />
					</div>

					<h3 class="text-h3 text-secondary mb-16">Bubble Gameplay</h3>
					<p class="text-body-1">
						Start as a small bubble and grow by consuming food and other players and taking away their BUBBL tokens.
					</p>
				</div>
				<div
					data-aos="fade-up"
					class=""
					data-aos-delay="100"
				>
					<div class="flex gap-16 mb-8">
						<div class="w-24 h-24 rounded-full linear-bubble" />
						<div class="w-24 h-24 rounded-full linear-bubble" />
						<div class="w-24 h-24 rounded-full linear-bubble" />
					</div>

					<h3 class="text-h3 text-secondary mb-16">Cashout Strategically</h3>
					<p class="text-body-1">
						Take advantage of strategic opportunities by cashing out during the game, but be aware of the 30-second cooldown period after splitting or consuming other players.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section
		id="features"
		class="section-padding my-180"
	>
		<div class="container mx-auto relative z-10">
			<h2
				class="mb-64 text-center text-h2"
				data-aos="fade-up"
			>
				Features
			</h2>

			<div class="justify-between grid grid-cols-1 md:grid-cols-3 gap-24">
				<div
					data-aos="fade-up"
					data-aos-delay="50"
					class="bg-primary rounded-[4rem] p-24 "
				>
					<h3 class="text-h3 mb-16 ">Dynamic Gameplay</h3>
					<p class="text-body-1">
						Strategize wisely to outshine opponents by using in game mechanics.
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					class="bg-primary rounded-[4rem] p-24 "
				>
					<h3 class="text-h3 mb-16 ">PvP Multiplayer</h3>
					<p class="text-body-1">
						Compete against players and earn their tokens
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="150"
					class="bg-primary rounded-[4rem] p-24 "
				>
					<h3 class="text-h3 mb-16 ">Token Economics</h3>
					<p class="text-body-1">
						Explore a robust token economy powered by $BUBBL tokens
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="200"
					class="bg-primary rounded-[4rem] p-24 "
				>
					<h3 class="text-h3 mb-16 ">Avatars as NFT's</h3>
					<p class="text-body-1">
						Stand out from the crowd with unique avatars that as NFT's
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="250"
					class="bg-primary rounded-[4rem] p-24 "
				>
					<h3 class="text-h3 mb-16 ">Power-Ups and Abilities</h3>
					<p class="text-body-1">
						Discover power-up items scattered across the game arena to gain temporary advantages
					</p>
				</div>
			</div>
		</div>
	</section>

	<section
		id="roadmap"
		class="section-padding my-180"
	>
		<div class="container mx-auto relative z-10">
			<h2
				class="mb-64 text-center text-h2"
				data-aos="fade-up"
			>
				Roadmap
			</h2>

			<div class="relative justify-between grid grid-cols-1 md:grid-cols-2 gap-y-48 gap-x-160">
				<div class="absolute left-0 right-0 items-center mt-80 justify-center roadmap-wrapper hidden md:flex flex-col gap-64">
					<div class="w-48 h-48 rounded-full linear-bubble" />
					<IconLine />
					<div class="w-48 h-48 rounded-full linear-bubble" />
					<IconLine />
					<div class="w-48 h-48 rounded-full linear-bubble" />
				</div>

				<div
					data-aos="fade-right"
					class="border-2 border-primary rounded-[4rem] p-24 "
				>
					<h3 class="text-h3 mb-16 text-seconday">Phase 1</h3>
					<div class="flex flex-col gap-16">
						<ListItem>Website development</ListItem>
						<ListItem>Gameplay development</ListItem>
						<ListItem>Social media setup</ListItem>
						<ListItem>Prelaunch marketing</ListItem>
						<ListItem>Community building efforts</ListItem>
					</div>
				</div>
				<div
					data-aos="fade-left"
					class="border-2 border-primary rounded-[4rem] p-24 md:col-start-2 md:row-start-2"
				>
					<h3 class="text-h3 mb-16 text-seconday">Phase 2</h3>
					<div class="flex flex-col gap-16">
						<ListItem>Presale</ListItem>
						<ListItem>Official launch on Raydium</ListItem>
						<ListItem>Marketing campaings</ListItem>
						<ListItem>Listings on CoinMarketCap and CoinGecko</ListItem>
					</div>
				</div>
				<div
					data-aos="fade-right"
					class="border-2 border-primary rounded-[4rem] p-24 md:col-start-1 md:row-start-3"
				>
					<h3 class="text-h3 mb-16 text-secondary">Phase 3</h3>
					<div class="flex flex-col gap-16">
						<ListItem>Adding avatars as NFTs</ListItem>
						<ListItem>Different gamemodes</ListItem>
						<ListItem>Getting partnerships</ListItem>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section-padding py-40 border-b-2 border-primary" />

	<section class="section-padding my-180 text-center">
		<div class="container mx-auto relative z-10 linear-get-bubbling p-80 rounded-[4rem] flex flex-wrap gap-64 justify-center md:justify-between items-center">
			<h2 class="text-h2">Get Bubbling!</h2>

			<div>
				<Button
					class="min-w-[14.4rem]"
					to="https://app.solbubbles.com"
				>
					Launch App
				</Button>
			</div>
		</div>
	</section>

	<section class="section-padding border-t-2 border-primary" />
</template>

<style>
.linear-bubble {
	background: linear-gradient(156.37deg, #68C0FF 7.93%, #207ACC 90.81%);
}

.gradient-circles-right {
    background: linear-gradient(341.85deg, #000 12.68%, #ad44ff 84.03%);
    filter: blur(90px);
    right: -50%;
    width: 1400px;
    height: 2610px;
    position: absolute;
    top: 50%;
}
.gradient-circles-left {
    background: linear-gradient(341.85deg, #000 12.68%, #207ACC 84.03%);
    filter: blur(90px);
    left: -50%;
    width: 1400px;
    height: 2610px;
    position: absolute;
    top: 50%;
}

.hero-section {
	display: flex;
	align-items: center;
	justify-self: center;
	position: relative;
	min-height: 800px;
	height: 100dvh;
}

.linear-get-bubbling {
	background: linear-gradient(123.3deg, #A96BF7 2.02%, #753EDB 24.44%, #3103B5 101.68%);
}

</style>
