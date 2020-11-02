<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">

</style>

<script>
	export default {
		name: 'App',
		mounted() {
			if (!this.$store.state.tagList || this.$store.state.tagList.length === 0) {
				console.log('hi')
				this.$store.commit('createTag', '衣服')
				this.$store.commit('createTag', '住宿')
				this.$store.commit('createTag', '食物')
				this.$store.commit('createTag', '出行')
			}
		}
	}
</script>

<style lang="scss">
	@import 'assets/styles/reset.scss';
	@import 'assets/styles/helper.scss';
	
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
