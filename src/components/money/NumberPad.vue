<template>
	<div class="number-pad">
		<div class="output">
			<span>{{output}}</span>
		</div>
		<div class="numbers" @click="inputContent">
			<button>1</button>
			<button>2</button>
			<button>3</button>
			<button>删除</button>
			<button>4</button>
			<button>5</button>
			<button>6</button>
			<button>清空</button>
			<button>7</button>
			<button>8</button>
			<button>9</button>
			<button class="ok">保存</button>
			<button class="zero">0</button>
			<button class="dot">.</button>
		</div>
	</div>
</template>

<script lang="ts">
	import {Vue, Component, Emit, Prop} from 'vue-property-decorator';
	import {inputHandle} from '@/lib/inputHandle';
	
	@Component
	export default class NumberPad extends Vue {
		@Prop(Number) amount!: number;
		
		output = this.amount.toString()
		
		@Emit()
		inputContent(event: MouseEvent) {
			const button = event.target as HTMLButtonElement;
			const input = button.textContent as string;
			this.output = inputHandle(input, this.output) || '0';
			this.$emit('update:value', parseFloat(this.output))
		}
	}
</script>

<style lang="scss">
	@import "src/assets/styles/helper";
	
	.number-pad {
		display: grid;
		grid-template-rows: 20% 80%;
		> .output {
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
		> .numbers {
			@extend %clearFix;
			height: 100%;
			> button {
				font-size: 18px;
				border: none;
				width: 25%;
				height: 25%;
				&.ok {
					float: right;
					height: 50%;
				}
				&.zero {
					width: 50%;
				}
				$bg: #f5f5f5;
				&:nth-child(1) {
					background: $bg;
				}
				&:nth-child(2), &:nth-child(5) {
					background: darken($bg, 4%);
				}
				&:nth-child(3), &:nth-child(6), &:nth-child(9) {
					background: darken($bg, 4%*2);
				}
				&:nth-child(4), &:nth-child(7), &:nth-child(10) {
					background: darken($bg, 4%*3);
				}
				&:nth-child(8), &:nth-child(11), &:nth-child(13) {
					background: darken($bg, 4%*4);
				}
				&:nth-child(14) {
					background: darken($bg, 4%*5);
				}
				&:nth-child(12) {
					background: darken($bg, 4%*6);
				}
			}
		}
	}
</style>
