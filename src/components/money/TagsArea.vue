<template>
	<div class="tags-area">
		<div class="tags">
			<ul>
				<li>衣</li>
				<li>食</li>
				<li>住</li>
				<li>行</li>
				<li>酒店</li>
				<li>门票</li>
			</ul>
		</div>
		<span class="add-tag">新增标签</span>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'TagsArea'
	}
</script>

<style lang="scss">
	.tags-area {
		background: white;
		width: 100%;
		position: relative;
		padding: 20px;
		> .tags {
			position: absolute;
			bottom: 50px;
			top: 10px;
			left: 16px;
			right: 16px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			> ul {
				overflow: scroll;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				> li {
					background: #D9D9D9;
					padding: 0 18px;
					border-radius: 18px;
					font-size: 14px;
					margin: 5px 5px 0 5px;
				}
			}
		}
		> .add-tag {
			padding: 0 2px;
			position: absolute;
			left: 20px;
			bottom: 12px;
			font-size: 14px;
			font-weight: bold;
			color: #999;
			border-bottom: 1px solid #999;
		}
	}
</style>
