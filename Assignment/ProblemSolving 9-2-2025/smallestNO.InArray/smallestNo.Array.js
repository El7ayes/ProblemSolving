let smallestNumberOfArray = ([...arr]) => {
    let smallest = Math.min(...arr);
    return smallest;
}
document.write( `The smallest number in array IS ===> ${smallestNumberOfArray([0, 1, 2, 3, 4, 5, 6,7])}`);
console.log( `The smallest number in array IS ===> ${smallestNumberOfArray([1, 2, 3, 9, 4, 5, 6])}`);