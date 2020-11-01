<template>
	<LayOut>
		<div class="edit-title">
			<Icon name="left" class="go-back"></Icon>
			<span>编辑标签</span>
			<Icon name="right" class="right"></Icon>
		</div>
		<div class="tag-edit">
			<span>标签名</span>
			<span class="tag-name">衣服</span>
		</div>
		<div class="remove-tag">
			<button>删除标签</button>
		</div>
	</LayOut>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	
	@Component
	export default class EditLabel extends Vue {
	
	}
</script>

<style lang="scss">
	.edit-title {
		background: white;
		height: 50px;
		padding: 15px 16px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
		> .right {
			color: transparent;
		}
	}
	.tag-edit {
		height: 44px;
		background: white;
		display: flex;
		align-items: center;
		padding: 15px 16px;
		> .tag-name {
			margin-left: 12px;
		}
	}
	.remove-tag {
		margin-top: 44px;
		text-align: center;
		> button {
			padding: 6px 12px;
			border-radius: 4px;
			background: #767676;
			color: white;
			font-size: 18px;
		}
	}
</style>