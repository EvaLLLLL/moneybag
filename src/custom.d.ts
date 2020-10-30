type RootState = {
	tagList: Tag[];
	selectedTags: Tag[];
}

type Tag = {
	id: string;
	tagName: string;
}