<template>
	<LayOut>
		<div class="money-wrapper">
			<TagsArea :selected-tags="record.selectedTags"
			          @update:value="record.selectedTags = $event"/>
			<Notes :note="record.note"
			       @update:value="record.note = $event"/>
			<Category :category="record.category"
			          @update:value="record.category = $event"/>
			<NumberPad :amount="record.amount"
			           @update:value="record.amount = $event"
			           @submit="createRecord"/>
		</div>
	</LayOut>
</template>

<script lang="ts">
	import NumberPad from '@/components/money/NumberPad.vue';
	import TagsArea from '@/components/money/TagsArea.vue';
	import Notes from '@/components/money/Notes.vue';
	import Category from '@/components/money/Category.vue';
	import {Vue, Component, Emit} from 'vue-property-decorator';
	
	@Component({
		components: {Notes, TagsArea, NumberPad, Category}
	})
	export default class Money extends Vue {
		record: RecordItem = {
			selectedTags: [],
			note: '',
			category: '-',
			amount: 0
		};
		
		@Emit()
		createRecord() {
			if (this.record.amount !== 0) {
				this.$store.commit('createRecord', this.record);
				
				this.record.selectedTags.splice(0, this.record.selectedTags.length);
				this.record.note = '';
				this.record.category = '-';
				this.record.amount = 0;
			} else {
				window.alert('金额不能为0');
			}
		}
	}
</script>

<style lang="scss">
	@import "src/assets/styles/helper.scss";
	.money-wrapper {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		color: #333;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		> .tags-area{
			height: 30%;
		}
		> .notes {
			height: 10%;
		}
		> .category {
			height: 10%;
		}
		> .number-pad {
			height: 50%;
		}
	}
</style>
