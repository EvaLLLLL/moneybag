<template>
	<div class="category">
		<div class="expend"
		     @click="toggleCategory"
		     :class="{selected: category === '-'}">
			<span>支出</span>
		</div>
		<div class="income"
		     @click="toggleCategory"
		     :class="{selected: this.category === '+'}">
			<span>收入</span>
		</div>
	</div>
</template>

<script lang="ts">
	import {Vue, Component, Emit, Prop} from 'vue-property-decorator';
	
	@Component
	export default class Category extends Vue {
		@Prop(String) category!: string;
		
		@Emit()
		toggleCategory() {
			if (this.category === '-') {
				this.$emit('update:value', '+');
			} else {
				this.$emit('update:value', '-');
			}
		}
	}
</script>

<style lang="scss">
	.category {
		height: 10%;
		width: 100%;
		cursor: pointer;
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
			&.selected {
				position: relative;
				color: green;
				font-weight: bold;
				&::after {
					content: '';
					width: 100%;
					height: 4px;
					display: block;
					background: green;
					position: absolute;
					bottom: 0;
				}
			}
		}
	}
</style>
