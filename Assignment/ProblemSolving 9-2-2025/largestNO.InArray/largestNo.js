let largestNumberOfArray = ([...arr]) => {
        let largest = Math.max(...arr);
        return largest;
}
document.write( `The largest number in array IS ===> ${largestNumberOfArray([1, 2, 3, 4, 5, 6,7])}`);
console.log( `The largest number in array IS ===> ${largestNumberOfArray([1, 2, 3, 9, 4, 5, 6])}`);