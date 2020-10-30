<template>
	<LayOut>
		<div class="tags">
			<div class="tag-item">
				<div class="tag">
					<span>衣服</span>
					<Icon name="right"/>
				</div>
			</div>
		</div>
			<div class="add-tag">
				<button>新建标签</button>
			</div>
	</LayOut>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	
	@Component
	export default class Labels extends Vue {
	}
</script>

<style lang="scss">
	.tags {
		max-height: 80%;
		overflow: scroll;
	}
	.tag-item {
		background: white;
		> .tag {
			padding: 12px 16px 16px 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 16px;
			border-bottom: 1px solid #e5e5e8;
		}
	}
	.add-tag {
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
