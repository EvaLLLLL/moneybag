<template>
	<div class="output">
		<span>100</span>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'OutPut'
	};
</script>

<style lang="scss">
	.output {
		box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25);
		position: relative;
		> span {
			position: absolute;
			right: 16px;
			top: 50%;
			transform: translateY(-50%);
			font-family: monospace;
			font-size: 36px;
		}
	}
</style>
