
// result in console
// function findIndex(arr, str) {
// 	console.log(`The index of ${str} is : ===> ${arr.indexOf(str)}`);
    
// }

// findIndex([1, 2, 3, "yousef", "string"], "string");


// result in html & console

function findIndex(arr, str) {
    console.log(`The index of ${str} is : ===> ${arr.indexOf(str)}`);
	return `The index of ${str} is : ===> ${arr.indexOf(str)}`;
}

document.write(findIndex([1, 2, 3, "yousef", "string"], "string"));
