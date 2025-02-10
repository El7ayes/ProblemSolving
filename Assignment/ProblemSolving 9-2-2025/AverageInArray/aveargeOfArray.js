let averageNumberOfArray = ([...arr]) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
    // average = sum / arr.length;
    // return average;
}
document.write( `The average number in array IS ===> ${averageNumberOfArray([1, 2, 3, 4, 5, 6])}`);
console.log( `The average number in array IS ===> ${averageNumberOfArray([1, 2, 3, 4, 5, 6])}`);