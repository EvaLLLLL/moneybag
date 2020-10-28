<template>
	<div id="app">
		<router-view/>
		<hr>
		<Nav/>
	</div>
</template>

<style lang="scss">

</style>

<script>
	import Nav from '@/components/Nav'
	
	export default {
		components: {Nav}
	}
</script>

<style lang="scss">
	@import './assets/style/reset.scss';
	@import './assets/style/helper.scss';
	
	body {
		background: #f5f5f5;
		line-height: 1.5;
		font-family: $font-hei;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #333;
	}
	
	#app {
		max-width: 500px;
		margin: 0 auto;
	}
</style>
