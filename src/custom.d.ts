type RootState = {
	tagList: Tag[];
	note: string;
	output: string;
	recordList: RecordItem[];
	currentTag?: Tag;
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
