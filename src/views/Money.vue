<template>
	<LayOut>
		<div class="money-wrapper">
			<TagsArea/>
			<Notes/>
			<Category/>
			<OutPut/>
			<NumberPad/>
		</div>
	</LayOut>
</template>

<script lang="ts">
	import NumberPad from '@/components/money/NumberPad.vue';
	import TagsArea from '@/components/money/TagsArea.vue';
	import OutPut from '@/components/money/OutPut.vue';
	import Notes from '@/components/money/Notes.vue';
	import Category from '@/components/money/Category.vue';
	
	export default {
		name: 'Money',
		components: {Notes, OutPut, TagsArea, NumberPad, Category}
	};
</script>

<style lang="scss">
	@import "src/assets/styles/helper.scss";
	.money-wrapper {
		color: #333;
		height: 100%;
		display: grid;
		grid-template-rows: 30% 10% 10% 10% 40%;
	}
</style>
