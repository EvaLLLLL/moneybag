import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		tagList: [],
		note: '',
		output: '0',
		recordList: [],
		currentTag: undefined
	} as RootState,
	mutations: {
		fetchTag(state) {
			state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
		},
		createTag(state, tagName: string) {
			const names = state.tagList.map(tag => tag.tagName);
			if (names.indexOf(tagName) >= 0) {
				window.alert(`已经创建过${tagName}标签了`);
				return;
			}
			const id = createId().toString();
			state.tagList.push({id, tagName});
			store.commit('saveTags');
		},
		removeTag(state, id: string) {
			const tag = state.tagList.filter(t => t.id === id)[0];
			const index = state.tagList.indexOf(tag);
			state.tagList.splice(index, 1);
			store.commit('saveTags');
		},
		saveTags(state) {
			window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
		},
		fetchRecordList(state) {
			state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
			if (!state.recordList || state.recordList.length === 0) {
				window.localStorage.setItem('recordList', '[]');
			}
		},
		createRecord(state, newRecord: RecordItem) {
			const id = createId().toString();
			const date = (new Date()).toISOString();
			const record = clone(newRecord);
			const record2 = {...record, id: id, createdAt: date};
			state.recordList.push(record2);
			store.commit('saveRecord');
			window.alert('保存成功');
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
	}
});

export default store;
