<template>
	<div class="tags-area">
		<div class="tags">
			<ul>
				<li v-for="tag in tagList" :key="tag.id"
				    :class="{selected: selectedTags.indexOf(tag.tagName)>=0}"
				    @click="changeSelected(tag.tagName)">
					{{tag.tagName}}
				</li>
			</ul>
		</div>
		<button class="add-tag"
		        @click="addTag">新增标签
		</button>
	</div>
</template>

<script lang="ts">
	import {Vue, Component, Emit} from 'vue-property-decorator';
	
	@Component
	export default class TagsArea extends Vue {
		mounted() {
			this.$store.commit('fetchTag');
			this.$store.commit('fetchSelectedTags');
		}
		
		get tagList() {
			return this.$store.state.tagList;
		}
		
		get selectedTags() {
			return this.$store.state.selectedTags;
		}
		
		@Emit()
		changeSelected(tag: string) {
			this.$store.commit('changeTagsSelected', tag);
		}
		
		@Emit()
		addTag() {
			const newTagName = window.prompt('请输入要添加的标签名');
			if (!newTagName) {
				window.alert('标签名不能为空！');
			} else {
				this.$store.commit('createTag', newTagName);
			}
		}
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
					&.selected {
						background: green;
						color: white;
						font-weight: bold;
					}
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
			background: transparent;
		}
	}
</style>
