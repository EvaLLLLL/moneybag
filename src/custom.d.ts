type RootState = {
	tagList: Tag[];
	selectedTags: Tag[];
	note: string;
}

type Tag = {
	id: string;
	tagName: string;
}
