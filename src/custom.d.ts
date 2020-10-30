type RootState = {
	tagList: Tag[];
	selectedTags: Tag[];
	note: string;
	output: string;
	recordList: RecordItem[];
}

type Tag = {
	id: string;
	tagName: string;
}

type RecordItem = {
	selectedTags: Tag[];
	note: string;
	category: string;
	amount: number;
	createdAt?: string;
	id?: string;
}
