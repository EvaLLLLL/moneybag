<template>
	<div class="tags-area">
		<div class="tags">
			<ul ref="ulRef">
				<li v-for="tag in tagList" :key="tag.id"
				    :class="{selected: secTags.indexOf(tag)>=0}"
				    @click="changeSelected(tag)">
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
	import {Vue, Component, Emit, Prop} from 'vue-property-decorator';
	
	@Component
	export default class TagsArea extends Vue {
		@Prop(Array) selectedTags !: Tag[];
		
		secTags = this.selectedTags;
		
		mounted() {
			this.$store.commit('fetchTag');
		}
		
		updated(){
			const ul: any = this.$refs.ulRef;
			ul.scrollTop = 9999;
		}
		
		get tagList() {
			return this.$store.state.tagList;
		}
		
		@Emit()
		addTag() {
			const newTagName = window.prompt('请输入要添加的标签名');
			if (newTagName === null) {
				return;
			} else if (!newTagName) {
				window.alert('标签名不能为空！');
			} else {
				this.$store.commit('createTag', newTagName);
			}
		}
		
		@Emit()
		changeSelected(tag: { id: string; tagName: string }) {
			const index = this.secTags.indexOf(tag);
			if (index >= 0) {
				this.secTags.splice(index, 1);
			} else {
				this.secTags.push(tag);
			}
		}
	}
</script>

<style lang="scss">
	.tags-area {
		background: white;
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
				display: flex;
				overflow: scroll;
				flex-direction: row;
				flex-wrap: wrap;
				> li {
					cursor: pointer;
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
			cursor: pointer;
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
