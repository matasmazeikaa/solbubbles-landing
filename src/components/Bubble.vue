<script lang="ts" setup>
interface Props {
	width: string;
	height: string;
	filter: string;
	color: string;
}

defineProps<Props>();
</script>

<template>
	<div class="bubble" />
</template>

<style scoped>
.bubble {
	filter: blur(v-bind(filter));
	width: v-bind(width);
	height: v-bind(height);
	background-color: v-bind(color);
	border-radius: 9999px;
}
</style>
