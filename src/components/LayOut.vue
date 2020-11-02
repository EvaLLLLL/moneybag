<template>
	<div class="layout-wrapper">
		<div class="content">
			<slot/>
		</div>
		<Nav/>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'LayOut'
	};
</script>

<style lang="scss">
	@import "../assets/styles/helper";
	.layout-wrapper {
		@extend %fullscreen;
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		
		> .content {
			position: relative;
			flex-grow: 1;
			overflow: scroll;
		}
	}
</style>
