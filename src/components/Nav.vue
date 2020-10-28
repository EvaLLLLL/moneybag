<template>
	<nav>
		<router-link to="/money" class="item">
			<Icon name="money"/>
			记账
		</router-link>
		<router-link to="/labels" class="item">
			<Icon name="labels"/>
			标签
		</router-link>
		<router-link to="/statistics" class="item">
			<Icon name="statistics"/>
			数据
		</router-link>
	</nav>
</template>

<script lang="ts">
	import Icon from '@/components/Icon.vue';
	
	export default {
		name: 'Nav',
		components: {Icon}
	};
</script>

<style lang="scss">
	@import "../assets/styles/helper";
	nav {
		@extend %outerShadow;
		display: flex;
		justify-content: space-between;
		> .item {
			width: 33.3333%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 2px;
			&.router-link-exact-active {
				color: green;
				font-weight: bold;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					background: green;
					width: 100%;
					height: 3px;
					bottom: 0;
				}
			}
			> .icon {
				width: 1.6em;
				height: 1.6em;
			}
		}
	}
</style>
