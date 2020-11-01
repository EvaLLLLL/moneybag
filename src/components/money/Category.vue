<template>
	<div class="category">
		<div class="expend"
		     @click="toggleCategory"
		     :class="{selected: type === '-'}">
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
		
		type = this.category;
		
		@Emit()
		toggleCategory() {
			if (this.type === '-') {
				this.type = '+';
			} else {
				this.type = '-';
			}
			this.$emit('update:value', this.type);
		}
	}
</script>

<style lang="scss" scoped>
	.category {
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
