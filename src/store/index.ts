import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		tagList: [],
		selectedTags: [],
		note: '',
		output: '0',
		recordList: [],
		currentTag: undefined
	} as RootState,
	mutations: {
		fetchTag(state) {
			state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
			if (!state.tagList || state.tagList.length === 0) {
				store.commit('createTag', '衣服');
				store.commit('createTag', '住宿');
				store.commit('createTag', '食物');
				store.commit('createTag', '出行');
			}
		},
		createTag(state, tagName: string) {
			const names = state.tagList.map(tag => tag.tagName);
			if (names.indexOf(tagName) >= 0) {
				return `已经创建过${tagName}标签了`;
			}
			const id = createId().toString();
			state.tagList.push({id, tagName});
			store.commit('saveTags');
			window.alert('创建成功');
		},
		saveTags(state) {
			window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
		},
		fetchSelectedTags(state) {
			state.selectedTags = JSON.parse(window.localStorage.getItem('selectedTags') || '[]');
			if (!state.selectedTags || state.selectedTags.length === 0) {
				window.localStorage.setItem('selectedTags', '[]');
			}
		},
		changeTagsSelected(state, tag) {
			if (state.selectedTags.indexOf(tag) >= 0) {
				const index = state.selectedTags.indexOf(tag);
				state.selectedTags.splice(index, 1);
			} else {
				state.selectedTags.push(tag);
			}
		},
		fetchRecordList(state) {
			state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
			if (!state.recordList || state.recordList.length === 0) {
				window.localStorage.setItem('recordList', '[]');
			}
		},
		createRecord(state, newRecord: RecordItem) {
			const id = createId().toString();
			const record = {...newRecord, createdAt: (new Date).toISOString(), id: id};
			state.recordList.push(record);
			store.commit('saveRecord');
		},
		saveRecord(state) {
			window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
		},
		setCurrentTag(state, id: string) {
			state.currentTag = state.tagList.filter(t => t.id === id)[0];
		},
		updateTag(state, payload: { id: string; tagName: string }) {
			const {id, tagName} = payload;
			const idList = state.tagList.map(item => item.id);
			if (idList.indexOf(id) >= 0) {
				const tagNames = state.tagList.map(item => item.tagName);
				if (tagNames.indexOf(tagName) >= 0) {
					window.alert(`已经创建过${tagName}标签了，请换个名称`);
				} else {
					const tag = state.tagList.filter(item => item.id === id)[0];
					tag.tagName = tagName;
					store.commit('saveTags');
				}
			}
		}
	},
	actions: {},
	modules: {}
});

export default store;
