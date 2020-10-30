<template>
	<div class="notes">
		<label>
			<span>备注</span>
			<input type="text"
			       placeholder="点击添加备注"
			       :value="note"
			       @input="onChange($event.target.value)"/>
		</label>
	</div>
</template>

<script lang="ts">
	import {Vue, Component, Prop, Emit} from 'vue-property-decorator';
	
	@Component
	export default class Notes extends Vue {
		@Prop(String)
		note: string;
	
		@Emit()
		onChange(value: string){
			this.$emit('update:value', value)
		}
	}
</script>

<style lang="scss">
	.notes {
		width: 100%;
		background: #f5f5f5;
		padding: 20px;
		position: relative;
		> label {
			background: #f5f5f5;
			font-size: 14px;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			> span {
				margin: 0 16px;
			}
			> input {
				border: none;
				background: inherit;
				flex-grow: 1;
				height: 100%;
			}
		}
	}
</style>
