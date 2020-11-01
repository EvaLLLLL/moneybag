<template>
	<LayOut>
		<div class="edit-title">
			<Icon name="left"
			      class="go-back"
			      @click="goBack"></Icon>
			<span>编辑标签</span>
			<Icon name="right" class="right"></Icon>
		</div>
		<div class="tag-edit">
			<label>
				<span>标签名</span>
				<input class="tag-name"
				       :value="currentTag.tagName"
				       @change="update($event.target.value)"/>
			</label>
		</div>
		<div class="remove-tag">
			<button @click="removeTag">删除标签</button>
		</div>
	</LayOut>
</template>

<script lang="ts">
	import {Vue, Component, Emit} from 'vue-property-decorator';
	
	@Component
	export default class EditLabel extends Vue {
		get currentTag() {
			return this.$store.state.currentTag;
		}
		
		created() {
			const id = this.$router.currentRoute.params.id;
			this.$store.commit('setCurrentTag', id);
			if (!this.currentTag) {
				this.$router.replace('/404');
			}
		}
		
		@Emit()
		goBack() {
			this.$router.back();
		}
		
		@Emit()
		update(newTagName: string) {
			this.$store.commit('updateTag', {id: this.currentTag.id, tagName: newTagName});
		}
		
		@Emit()
		removeTag() {
			const id = this.$router.currentRoute.params.id;
			this.$store.commit('removeTag', id);
			this.$router.back();
		}
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
		> .go-back {
			cursor: pointer;
		}
		> .right {
			color: transparent;
		}
	}
	.tag-edit {
		height: 44px;
		background: white;
		display: flex;
		align-items: center;
		padding: 15px 0 15px 16px;
		position: relative;
		> label > .tag-name {
			color: #333;
			margin-left: 12px;
			height: 44px;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 80px;
			width: 100%;
			right: 0;
		}
	}
	.remove-tag {
		margin-top: 44px;
		text-align: center;
		> button {
			cursor: pointer;
			padding: 6px 12px;
			border-radius: 4px;
			background: #767676;
			color: white;
			font-size: 18px;
		}
	}
</style>
