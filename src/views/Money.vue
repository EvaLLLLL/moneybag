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
		color: #333;
		height: 100%;
		display: grid;
		grid-template-rows: 30% 10% 10% 50%;
	}
</style>
