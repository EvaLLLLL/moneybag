<template>
	<LayOut>
		<div class="tags">
			<div class="tag-item">
				<RouterLink class="tag"
				            v-for="item in tagList"
				            :to="`labels/edit/${item.id}`"
				            :key="item.id">
					<span>{{item.tagName}}</span>
					<Icon name="right"/>
				</RouterLink>
			</div>
		</div>
		<div class="add-tag" @click="addTag">
			<button>新建标签</button>
		</div>
	</LayOut>
</template>

<script lang="ts">
	import {Vue, Component, Emit} from 'vue-property-decorator';
	
	@Component
	export default class Labels extends Vue {
		mounted() {
			this.$store.commit('fetchTag');
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
	}
</script>

<style lang="scss">
	.tags {
		max-height: 85%;
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
		margin-top: 30px;
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
