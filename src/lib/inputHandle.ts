const inputHandle = (input: string, output: string) => {
	switch (input) {
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			if (output === '0') {
				return input;
			} else if (output.length >= 16) {
				return output;
			} else {
				return output + input;
			}
		case '.':
			if (output.indexOf('.') >= 0) {
				return output;
			} else {
				return output + input
			}
		case '删除':
			if (output.length === 1) {
				return '0';
			} else {
				return output.slice(0, -1);
			}
		case '清空':
			return '0';
	}
};

export {inputHandle};
