import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tagList: [],
		selectedTags: []
	} as RootState,
	mutations: {
		fetchTag(state) {
			state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
			if (!state.tagList || state.tagList.length === 0) {
				const defaultTagList = [
					'衣服',
					'食物',
					'住宿',
					'出行'
				];
				window.localStorage.setItem('tagList', JSON.stringify(defaultTagList));
			}
		}
	},
	actions: {},
	modules: {}
});
