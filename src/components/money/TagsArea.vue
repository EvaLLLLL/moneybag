<template>
	<div class="tags-area">
		{{selectedTags}}
		<div class="tags">
			<ul>
				<li v-for="tag in tagList" :key="tag"
				    :class="{selected: selectedTags.indexOf(tag)>=0}"
				    @click="changeSelected(tag)">
					{{tag}}
				</li>
			</ul>
		</div>
		<button class="add-tag">新增标签</button>
	</div>
</template>

<script lang="ts">
	import {Vue, Component, Emit} from 'vue-property-decorator';
	
	@Component
	export default class TagsArea extends Vue {
		mounted() {
			this.$store.commit('fetchTag');
		}
		
		get tagList() {
			return this.$store.state.tagList;
		}
		
		get selectedTags() {
			return this.$store.state.selectedTags;
		}
		
		@Emit()
		changeSelected(tag: string) {
			if (this.selectedTags.indexOf(tag) >= 0) {
				const index = this.selectedTags.indexOf(tag);
				this.selectedTags.splice(index, 1);
			} else {
				this.selectedTags.push(tag);
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
