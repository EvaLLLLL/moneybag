<template>
	<LayOut>
		<div class="statistics-wrapper">
			<Category category="-"/>
			<div class="items-wrapper">
				<div class="items-date">
					<div class="date-and-amount">
						<span class="date">今天</span>
						<span class="amount">￥124</span>
					</div>
					<div class="item"
					     v-for="record in recordList"
					     :key="record.tagName">
						<span class="tag-name"
						      v-for="tag in record.selectedTags"
						      :key="tag.id">{{tag.tagName}},</span>
						<span class="note">{{record.note}}</span>
						<span class="amount">￥{{record.amount}}</span>
					</div>
				</div>
			</div>
		</div>
	</LayOut>
</template>

<script lang="ts">
	import Category from '@/components/money/Category.vue';
	import {Vue, Component} from 'vue-property-decorator';
	
	@Component({
		components: {Category}
	})
	export default class Statistics extends Vue {
		mounted() {
			this.$store.commit('fetchRecordList');
			console.log(this.recordList);
		}
		
		get recordList() {
			return this.$store.state.recordList;
		}
	}
</script>

<style lang="scss">
	@import "src/assets/styles/helper";
	
	.statistics-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		> .category {
			height: 66px;
			background: white;
		}
		> .items-wrapper {
			height: 100%;
			> .items-date {
				> .date-and-amount {
					padding: 9px 16px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				> .item {
					height: 40px;
					padding: 9px 16px;
					background: white;
					display: flex;
					justify-content: space-between;
					align-items: center;
					> .note {
						@extend %oneLine;
						margin: 0 13px;
						width: 100%;
						color: #999;
					}
				}
			}
		}
	}

</style>
