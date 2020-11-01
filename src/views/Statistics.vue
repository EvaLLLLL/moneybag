<template>
	<LayOut>
		<div class="statistics-wrapper">
			<Category :category="recordType"
			          @update:value="recordType = $event"/>
			<div class="items-wrapper">
				<div class="items-date"
				     v-for="(group, index) in result"
				     :key="index">
					<div class="date-and-amount">
						<span class="date">{{beautify(group[0])}}</span>
						<span class="amount">￥{{group.total}}</span>
					</div>
					<div class="item"
					     v-for="record in group[1]"
					     :key="record.createdAt">
						<span class="tag-name">{{tagString(record.selectedTags)}}</span>
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
	import clone from '@/lib/clone';
	import dayjs from 'dayjs';
	
	@Component({
		components: {Category}
	})
	export default class Statistics extends Vue {
		recordType = '-';
		
		mounted() {
			this.$store.commit('fetchRecordList');
		}
		
		get recordList() {
			return this.$store.state.recordList;
		}
		
		get result() {
			const {recordList} = this;
			if (recordList.length === 0) {
				return [];
			}
			const newList: RecordItem[] = clone(recordList)
				.filter((newItem: RecordItem) => newItem.category === this.recordType)
				.sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
			if (newList.length === 0) {
				return [];
			}
			
			type resultType = { [K: string]: RecordItem[] }
			const result: resultType = {};
			newList.forEach(item => {
				if (item.createdAt) {
					const key = dayjs(item.createdAt).format('YYYY-MM-DD');
					if (!(key in result)) {
						result[key] = [];
					}
					result[key].push(item);
				}
			});
			
			const newResult: any = Object.entries(result);
			newResult.forEach((group: any) => {
				group.total = group[1].reduce((sum: any, item: any) => sum + item.amount, 0);
			});
			
			return newResult;
		}
		
		
		beautify(string: string) {
			const day = dayjs(string);
			const now = dayjs();
			if (day.isSame(now, 'day')) {
				return '今天';
			} else if (day.isSame(now.subtract(1, 'day'), 'day')) {
				return '昨天';
			} else if (day.isSame(now.subtract(2, 'day'), 'day')) {
				return '前天';
			} else if (day.isSame(now, 'year')) {
				return day.format('M月D日');
			} else {
				return day.format('YYYY年M月D日');
			}
		}
		
		tagString(selectedTags: Tag[]) {
			if (selectedTags.length === 0) {
				return '无标签';
			} else {
				return selectedTags.map(t => t.tagName).join(',');
			}
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
					> .tag-name {
						white-space: nowrap;
					}
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
