
const removeWordFromString = (string, word) => {
	let arr = string.split(" ");
	//console.log(arr)
	for(let i = 0; i <arr.length; i++){
		if (arr[i].toLowerCase().includes(word.toLowerCase())){
			arr[i] = "_";
		}
	}
	//console.log(arr)
	return arr.join(" ");
}

export { removeWordFromString };