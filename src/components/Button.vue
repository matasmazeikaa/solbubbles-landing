<template>
	<Component
		:is="tag"
		class="button"
		:class="{
			'button--primary': type === 'primary' && !isDisabled,
			'button--secondary': type === 'secondary',
			'button--header': type === 'header',
			'button--disabled': isDisabled && !isLobby,
			'button--disabled-lobby': isDisabled && isLobby,
		}"
		:to="to"
		:disabled="isDisabled"
	>
		<p>
			<slot />
		</p>
		{{ isLoading ? '' : title }}
		<Loader v-if="isLoading" />
	</Component>
</template>

<script lang="ts" setup>
interface Props {
	title?: string;
	type?: string;
	isLoading?: boolean;
	isDisabled?: boolean;
	isLobby?: boolean;
	to?:
		| {
				name: string;
		}
}

const props = defineProps<Props>();

const tag = computed(() => {
	if (typeof props.to === 'string') {
		return 'a';
	}

	if (props.to) {
		return 'router-link';
	}

	return 'button';
});
</script>

<style lang="scss" scoped>
.button {
	box-shadow: 0px 4px 0px 0px #6247ff, 0px 8px 24px 0px #9381ff3d;
	background-color: var(--primary);
	padding: 1.6rem 14.0rem;
	border-radius: 10rem;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.1s ease-in-out;
	text-decoration: none;
	font-size: 48px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.75;
	}

	* {
		font-weight: 600;
		font-size: 24px;
		font-family: 'Titan One';
	}

	&--disabled {
		cursor: not-allowed;

		&:active {
			transform: translateY(0);
			box-shadow: 0px 4px 0px 0px #6247ff, 0px 8px 24px 0px #9381ff3d;
		}

		&:hover {
			opacity: 1;
		}
	}

	&--primary {
		&:active {
			transform: translateY(4px);
			box-shadow: 0px 1px 0px 0px #2a09e6, 0px 8px 24px 0px #9381ff3d;
		}
	}

	&--secondary {
		background-color: transparent;
		border: 1px solid #fff;
		box-shadow: none;
	}

	&--header {
		background-color: #111019;
		font-weight: 700;
		box-shadow: none;
		border-radius: 0.4rem;
		padding: 0.8rem 1.2rem;
	}
}
</style>
