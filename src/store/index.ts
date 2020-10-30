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
		},
		fetchSelectedTags(state){
			state.selectedTags = JSON.parse(window.localStorage.getItem('selectedTags') || '[]');
			if(!state.selectedTags || state.selectedTags.length === 0) {
				window.localStorage.setItem('selectedTags', '[]')
			}
		},
		changeTagsSelected(state, tag){
			if (state.selectedTags.indexOf(tag) >= 0) {
				const index = state.selectedTags.indexOf(tag);
				state.selectedTags.splice(index, 1);
			} else {
				state.selectedTags.push(tag);
			}
		}
	},
	actions: {},
	modules: {}
});
