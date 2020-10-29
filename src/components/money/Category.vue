<template>
	<div class="category">
		<div class="expend">
			<span>支出</span>
		</div>
		<div class="income">
			<span class="income">收入</span>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'Category'
	};
</script>

<style lang="scss">
	.category {
		background: #c4c4c4;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24px;
		> div {
			width: 50%;
			height: 100%;
			position: relative;
			> span {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
			&.expend {
				position: relative;
				&::after {
					content: '';
					width: 100%;
					height: 4px;
					display: block;
					background: #333;
					position: absolute;
					bottom: 0;
				}
			}
		}
	}
</style>
