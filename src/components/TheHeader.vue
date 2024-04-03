<script lang="ts" setup>
import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';

interface Props {
	white?: boolean;
}

const headerRef = ref<HTMLElement | null>(null);
const isWhiteLocal = ref(false);
const hoveredNavItem = ref<null|number>(null);
const currentScrollPosition = ref(0);
const isScrollingDown = ref(false);

const props = defineProps<Props>();

const items = computed(() => [
	{
		to: '/#how-to-play',
		title: 'How to play?',
	},
	{
		to: '#features',
		title: 'Features',
	},
	{
		to: '#roadmap',
		title: 'Roadmap',
	},
	{
		to: '/whitepaper',
		title: 'Whitepaper',
	},
].filter(Boolean));

const isMobileMenuOpen = ref(false);

const isWhite = computed(() => isWhiteLocal.value || props.white);

watch(isMobileMenuOpen, (value) => {
	if (value) {
		disableBodyScroll(document.body);
	} else {
		enableBodyScroll(document.body);
	}
});

const checkIfScrolledBelowHeroSection = () => {
	const heroSection = document.getElementsByClassName('hero-section')[0];

	if (!heroSection) {
		return;
	}

	const scrollPosition = window.scrollY;

	if (scrollPosition + (headerRef.value?.offsetHeight || 0) > heroSection.offsetHeight) {
		isWhiteLocal.value = true;
	} else {
		isWhiteLocal.value = false;
	}
};

const checkIfScrollingUpOrDown = () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition < (headerRef.value?.offsetHeight || 0)) {
		isScrollingDown.value = false;

		return;
	}

	if (scrollPosition > currentScrollPosition.value) {
		isScrollingDown.value = true;
		// transition header top with transform
	} else {
		isScrollingDown.value = false;
	}

	currentScrollPosition.value = scrollPosition;
};

onMounted(() => {
	window.addEventListener('scroll', () => {
		checkIfScrolledBelowHeroSection();
		checkIfScrollingUpOrDown();
	});
});
</script>

<template>
	<header
		ref="headerRef"
		class="header bg-dark h-[7.8rem]"
		:class="{
			'bg-transparent': !isWhite,
			'is-scrolling-down': isScrollingDown,
		}"
	>
		<nav class="py-20 md:py-16 container mx-auto section-padding">
			<div class="flex justify-between items-center mx-auto">
				<div class="flex justify-between items-center w-full ">
					<NuxtLink
						to="/"
						class="mr-24 z-10"
						aria-label="Home"
					>
						<Logo class="w-full h-full" />
					</NuxtLink>

					<div class="flex items-center gap-32">
						<ul
							class="gap-32 hidden items-center lg:flex"
						>
							<li
								v-for="(item, index) in items"
								:key="item.title"
								class="cursor-pointer dropdown"
							>
								<NuxtLink
									:to="item.to"
									class="text-body-2 cursor-pointer hover:opacity-75 transition-opacity"
									:class="{
										'text-white': !isWhite,
										'text-primary-black': isWhite,
										'is-blur-hovered': hoveredNavItem !== index && hoveredNavItem !== null,
									}"
								>
									{{ item.title }}
								</NuxtLink>

								<div
									v-if="item.subpages"
									class="dropdown-content"
								>
									<NuxtLink
										v-for="key, value in item.subpages"
										:key="key"
										:to="key"
										class="text-body-2 cursor-pointer hover:opacity-75 transition-opacity"
										:class="{
											'text-white': !isWhite,
											'text-primary-black': isWhite,
											'is-blur-hovered': hoveredNavItem !== index && hoveredNavItem !== null,
										}"
									>
										{{ value }}
									</NuxtLink>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div
					id="hamburger-1"
					class="hamburger block lg:hidden ml-32 relative z-10"
					:class="{ 'is-active': isMobileMenuOpen }"
					@click="isMobileMenuOpen = !isMobileMenuOpen"
				>
					<span
						class="line"
						:class="{ 'line--dark': isWhite, }"
					></span>
					<span
						class="line"
						:class="{ 'line--dark': isWhite, }"
					></span>
					<span
						class="line"
						:class="{ 'line--dark': isWhite }"
					></span>
				</div>
			</div>
		</nav>

		<div
			class="popup"
			:class="{ 'popup--active': isMobileMenuOpen }"
		>
			<div class="h-full flex flex-col items-center justify-center p-96">
				<ul class="flex flex-col text-center">
					<li
						v-for="item in items"
						:key="item.title"
					>
						<NuxtLink
							:to="item.to"
							class="text-body-1 hover:opacity-75 transition-opacity block text-black p-20"
							@click="isMobileMenuOpen = false"
						>
							{{ item.title }}
						</NuxtLink>
					</li>
				</ul>

				<div class="flex flex-col text-center mt-24 max-w-[32.8rem] w-full">
					<div class="mb-16">
						<a
							class="phone-number text-primary-blue"
							href="tel:+37061809966"
						>
							+37061809966
						</a>
					</div>
					<Button
						to="https://app.solbubbles.com"
						@click="isMobileMenuOpen = false"
					>
						Launch App
					</Button>
				</div>
			</div>
		</div>
	</header>
</template>

<style>

/* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.is-blur-hovered {
	transition: all 0.1s ease-in-out;
	filter: blur(2px);
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

.is-scrolling-down {
	transform: translateY(-100%);
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	transition: all 0.2s ease-in-out;
}

.working-time {
	font-family: Montserrat;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;
}

.phone-number {
	font-family: Montserrat;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 16px;
}

.col {
  display: block;
  float:left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

/* CLEARFIX */

.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}

/* ALL */

.row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line{
  width: 18px;
  height: 2px;
  background-color: var(--primary-white);
  display: block;
  margin: 4px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger .line--dark {
	background-color: var(--primary-black);
}

#hamburger-1.is-active .line {
	background-color: var(--primary-black);
}

#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(1px) rotate(45deg);
  -ms-transform: translateY(1px) rotate(45deg);
  -o-transform: translateY(1px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}

#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-1px) rotate(-45deg);
  -ms-transform: translateY(-1px) rotate(-45deg);
  -o-transform: translateY(-1px) rotate(-45deg);
  transform: translateY(-7px) rotate(-45deg);
}

.popup {
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  transform: translateX(100%);
}

.popup.popup--active {
  transform: translateX(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.popup .menu_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 5.33vw 12.8vw;
  text-transform: uppercase;
}

.popup .menu_box_column {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17.2vw;
}

.popup .menu_box_left {
  position: relative;
  margin-right: 4.53vw;
}

.popup .menu_box_right {
  position: relative;
}

.popup .menu_box_text {
  font-size: 10rem;
  color: #fff;
}

.popup .menu_box_text_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 50%, rgba(0, 0, 0, 0.9));
  background: -webkit-linear-gradient(0deg, transparent 50%, rgba(0, 0, 0, 0.9));
}

.popup .menu_box_number {
  font-size: 3.2vw;
  color: #b1b1b1;
}

</style>
